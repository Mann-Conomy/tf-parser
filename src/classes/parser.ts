import Stack from "./stack";
import { ObjectNotation } from "../resources/enums";
import { getKeyAndValuePairOrThrow, getLastKeyOrThrow, getLinesOrThrow } from "../lib/utils";

/**
 * A parser for converting Team Fortress 2 game files to JSON strings.
 */
export default class Parser {
    /**
     * Parses a Team Fortress 2 game file to a JSON string.
     * @param file The content of a Team Fortress 2 game file.
     * @returns The game file as a JSON string.
     */
    static stringify(file: string): string {
        const stack = new Stack({ populate: true });

        const object = stack.peek();
    
        for(const line of getLinesOrThrow(file)) {
            if (line === ObjectNotation.OpeningBrace) {
                const currentObject = stack.peek();
    
                const lastKey = getLastKeyOrThrow(currentObject);
    
                const newObject = stack.create();
    
                stack.update(lastKey, newObject);
    
                stack.push(newObject);
    
                continue;
            }
    
            if (line === ObjectNotation.ClosingBrace) {
                stack.pop();

                continue;
            }
    
            const { key, value } = getKeyAndValuePairOrThrow(line);
    
            stack.update(key, value);
        }
    
        return JSON.stringify(object);
    }
}
