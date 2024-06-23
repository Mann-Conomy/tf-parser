/**
 * A wrapper for handling errors specific to the Stack class.
 * @extends Error
 */
export default class StackError extends Error {
    /**
     * Creates a new instance of StackError.
     * @param { string } message The error message.
     */
    constructor(message: string) {
        super(message);

        this.name = "StackError";
    }
}
