import { readFile } from "fs/promises";
import Parser from "../src/classes/parser";

/**
 * Represents a Team Fortress 2 game file parsed into a JSON object.
 */
export interface CustomGameFile {
    /**
     * Regular property with a string value.
     */
    property: string
    /**
     * A nested property that contains a string property value.
     */
    custom_object: {
        property: string // Nested property
    }
}

(async() => {
    try {
        // Read the contents of your chosen Team Fortress 2 game file
        const file = await readFile("tf_custom_game.txt", { encoding: "utf8" });

        // Stringify the file cotents to a JSON object
        const result = Parser.stringify(file);

        // Parse the game file to a JSON object
        const customFile: CustomGameFile = JSON.parse(result);

        console.log(customFile.property); // Access regular properties
        console.log(customFile.custom_object.property); // Access nested properties
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error parsing tf_custom_game.txt", error.message);
        }
    }
})();
