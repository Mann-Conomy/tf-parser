import { readFile } from "fs/promises";
import Parser from "../src/classes/parser";

/**
 * Represents a Team Fortress 2 game file parsed into a JSON object.
 */
export interface GameFile {
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
        const file = await readFile("tf_game.txt", { encoding: "utf8" });

        // Stringify the file cotents to a JSON object
        const result = Parser.stringify(file);

        // Parse the game file 
        const game: GameFile = JSON.parse(result);

        console.log(game.property); // Regular property
        console.log(game.custom_object.property); // Nested property
    } catch (error) {
        console.error("Error parsing items_game.txt", error.message);
    }
})();
