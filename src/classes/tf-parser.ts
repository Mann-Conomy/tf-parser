import { jsonrepair } from "jsonrepair";
import { TFParserError } from "./tf-parser-error";
import { sanitizeFile, isKeyAndValuePair, appendColon, isCurlyBrace, isKeyOrKeyValuePair } from "../lib/utils";

import type { TFLanguageFile } from "../types/tf-parser";

/**
 * A parser for converting Team Fortress 2 language files to JSON format.
 */
export default class TFParser {
    /**
     * Parses a Team Fortress 2 language file to JSON.
     * @param { string } file The content of a Team Fortress 2 language file.
     * @returns The language file as a JSON object.
     */
    static parse(file: string): TFLanguageFile {
        try {
            const lines = sanitizeFile(file).split("\n");

            const processedLines: string[] = [];

            for (const line of lines) {
                let currentLine = line.trim();

                if (isCurlyBrace(currentLine)) {
                    processedLines.push(currentLine);

                    continue;
                }

                if (isKeyOrKeyValuePair(currentLine)) {
                    currentLine = appendColon(currentLine);

                    if (isKeyAndValuePair(currentLine)) {
                        currentLine = currentLine.concat(",");
                    }

                    processedLines.push(currentLine);
                }
            }

            if (processedLines.length === 0) {
                throw new SyntaxError("Error processing file. The file contains no JSON keys and or value pairs.");
            }

            const languageFile = jsonrepair(`{${processedLines.join("\n")}}`);

            return JSON.parse(languageFile);
        } catch (error: any) {
            throw new TFParserError(error.message);
        }
    }
}
