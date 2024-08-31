import Parser from "./parser";
import ParserError from "./parser.error";
import { isFileEmpty } from "../lib/utils";
import type { ItemsFile } from "../types/items.interface";

/**
 * A parser for converting Team Fortress 2 item files to JSON objects.
 */
export default class ItemsParser {
    /**
     * Parses a Team Fortress 2 items file to JSON.
     * @param file The content of a Team Fortress 2 items file.
     * @returns The items file as a JSON object.
     * @throws A ParserError if the items file is an empty JSON object.
     */
    static parse(file: string): ItemsFile {
        const itemsFile = Parser.stringify(file);

        if (isFileEmpty(itemsFile)) {
            throw new ParserError("The items file contains no JSON keys and or value pairs.");
        }

        return JSON.parse(itemsFile);
    }
}
