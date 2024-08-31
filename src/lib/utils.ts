import ParserError from "../classes/parser.error";
import { ObjectNotation } from "../resources/enums";
import type { StackObject } from "../types/stack.interface";

/**
 * Removes inline comments from the given array of lines.
 * @param lines The array of lines to process.
 * @returns The array of lines with inline comments removed.
 */
export function removeInlineComments(lines: string[]): string[] {
    const quote = String.fromCharCode(34);

    // Filter out the lines that start with an inline comment or contain a single quote
    return lines.filter(line => line.length > 0 && line !== quote && !line.startsWith("//"));
}

/**
 * Checks if the first element of the given array is an empty string.
 * @param lines The array of strings to check.
 * @returns Returns true if the first element is empty or undefined, otherwise false.
 */
function isFirstElementEmpty(lines: string[]): boolean {
    const [ first ] = lines;

    return first === undefined || first.length === 0;
}

/**
 * Splits the input file content into lines, trims each line, and returns only valid lines.
 * @param file The content of the file to process.
 * @returns An array of filtered lines.
 */
function getFilteredLines(file: string) {
    const lines = file.split("\n");
    const trimmed = lines.map(line => line.trim());

    return removeInlineComments(trimmed);
}

/**
 * Splits the given file into lines, trims each line, and removes inline comments.
 * @param file The content of the file to process.
 * @returns The array of lines from the file, with inline comments removed.
 * @throws A ParserError if the file contains no lines.
 */
export function getLinesOrThrow(file: string): string[] {
    const lines = getFilteredLines(file);

    if (!(lines.length > 1) && isFirstElementEmpty(lines)) {
        throw new ParserError("The file contains no JSON keys and or value pairs.");
    }

    return lines;
}

/**
 * Retrieves the last key from the StackObject.
 * @param object The StackObject to process.
 * @returns The last key in the StackObject.
 * @throws A ParserError if the StackObject contains no keys.
 */
export function getLastKeyOrThrow(object: StackObject): string {
    const lastKey = Object.keys(object).pop();

    if (lastKey === undefined) {
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
    const [ key , value ] = line.split(/"\s*"/).map(element => element.replace(/"/g, ""));

    if (key === undefined || key.length === 0) {
        throw new ParserError("The line contains no JSON key and or value.");
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
