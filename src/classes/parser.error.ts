/**
 * A wrapper for handling errors specific to the Parser class.
 * @extends Error
 */
export default class ParserError extends Error {
    /**
     * Creates a new instance of ParserError.
     * @param { string } message The error message.
     */
    constructor(message: string) {
        super(message);

        this.name = "ParserError";
    }
}
