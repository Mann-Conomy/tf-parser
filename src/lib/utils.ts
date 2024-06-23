import ParserError from "../classes/parser.error";
import { ObjectNotation } from "../resources/enums";
import type { StackObject } from "../types/stack.interface";

/**
 * Removes inline comments from the given array of lines.
 * @param lines The array of lines to process.
 * @returns The array of lines with inline comments removed.
 */
export function removeInlineComments(lines: string[]): string[] {
    // Filter out the lines that start with an inline comment
    return lines.filter(line => line && !line.startsWith("//"));
}

/**
 * Splits the given file into lines, trims each line, and removes inline comments.
 * @param file The content of the file to process.
 * @returns The array of lines from the file, with inline comments removed.
 * @throws A ParserError if the file contains no lines.
 */
export function getLinesOrThrow(file: string): string[] {
    const lines = file.split("\n").map(line => line.trim());

    if (!Array.isArray(lines) || lines.length === 0) {
        throw new ParserError("Error processing language file. The file contains no JSON keys and or value pairs.");
    }

    return removeInlineComments(lines);
}

/**
 * Retrieves the last key from the StackObject.
 * @param element The StackObject to process.
 * @returns The last key in the StackObject.
 * @throws A ParserError if the StackObject contains no keys.
 */
export function getLastKeyOrThrow(element: StackObject): string {
    const lastKey = Object.keys(element).pop() || null;

    if (lastKey === null) {
        throw new ParserError("The StackObject contains no JSON keys.");
    }

    return lastKey;
}

/**
 * Splits a line into a key and value pair.
 * @param line The line to process.
 * @returns The key and value pair parsed from the line.
 * @throws A ParserError if the line cannot be split into a key and value pair.
 */
export function getKeyAndValuePairOrThrow(line: string) {
    const [ key = null, value ] = line.split(/"\s*"/).map(element => element.replace(/"/g, ""));

    if (key === null) {
        throw new ParserError("Error spliting line.");
    }

    return { key, value };
}

/**
 * Checks if the parsed file is empty.
 * @param file The content of the parsed file.
 * @returns  True if the file is empty, otherwise false.
 */
export function isFileEmpty(file: string) {
    return file === ObjectNotation.EmptyObject;
}
