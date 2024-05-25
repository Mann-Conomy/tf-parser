/**
 * A wrapper for handling errors specific to the TFParser class.
 * @extends Error
 */
export class TFParserError extends Error {
    /**
     * Creates a new instance of TFParserError.
     * @param { string } message The error message.
     */
    constructor(message: string) {
        super(message);

        this.name = "TFParserError";
    }
}
