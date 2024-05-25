/**
 * Sanitizes a Team Fortress 2 language file.
 * @param { string } file A Team Fortress 2 language file.
 * @returns { string } The sanitized language file.
 */
export function sanitizeFile(file: string): string {
    // Remove the ASCII control characters from 1 to 7 from the string
    return file.replace(/[\x01-\x07]/g, "");
}

/**
 * Checks if the line equals an opening or closing brace. 
 * @param { string } line The line string to be checked.
 * @returns { boolean } True if the line string equals an opening or closing curly brace, otherwise false.
 */
export function isCurlyBrace(line: string): boolean {
    return line === "{" || line === "}";
}

/**
 * Checks if the line is a JSON object key or key-value pair.
 * @param { string } line The line string to be checked.
 * @returns { boolean } True if the line is a JSON object key or key-value pair, otherwise false.
 */
export function isKeyOrKeyValuePair(line: string): boolean {
    return line.startsWith("\"") && line.endsWith("\"");
}

/**
 * Appends a colon at the end of a JSON key. 
 * @param line A line of text from a Team Fortress 2 language file.
 * @returns { string } The modified line with a colon appended after the JSON key or the original line if no JSON key is found.
 */
export function appendColon(line: string): string {
    const firstQuoteIndex = line.indexOf("\"");
    const secondQuoteIndex = line.indexOf("\"", firstQuoteIndex + 1);

    if (secondQuoteIndex !== -1) {
        const beforeSecondQuote = line.slice(0, secondQuoteIndex + 1);
        const afterSecondQuote = line.slice(secondQuoteIndex + 1);

        return beforeSecondQuote + ":" + afterSecondQuote;
    }

    return line;
}

/**
 * Checks if the line is a JSON key and value pair.
 * @param { string } line The line string to be checked.
 * @returns { boolean } True if the line contains a JSON key and value pair.
 */
export function isKeyAndValuePair(line: string): boolean {
    return line.split("\"").length > 4;
}
