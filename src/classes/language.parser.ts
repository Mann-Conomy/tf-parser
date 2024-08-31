import Parser from "./parser";
import ParserError from "./parser.error";
import { isFileEmpty } from "../lib/utils";
import type { LanguageFile } from "../types/language.interface";

/**
 * A parser for converting Team Fortress 2 language files to JSON objects.
 */
export default class LanguageParser {
    /**
     * Parses a Team Fortress 2 language file to JSON.
     * @param file The content of a Team Fortress 2 language file.
     * @returns The language file as a JSON object.
     * @throws A ParserError if the language file is an empty JSON object.
     */
    static parse(file: string): LanguageFile {
        const languageFile = Parser.stringify(file);

        if (isFileEmpty(languageFile)) {
            throw new ParserError("The language file contains no JSON keys and or value pairs.");
        }

        return JSON.parse(languageFile);
    }
}
