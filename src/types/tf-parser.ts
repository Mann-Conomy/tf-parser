/**
 * Represents a Team Fortress 2 language file parsed into a JSON object.
 */
export interface TFLanguageFile {
    lang: {
        /**
         * The language of the file.
         */
        Language: string,
        /**
         * An object containing key-value pairs where keys are tokens and values are the corresponding translations.
         */
        Tokens: {
            [token: string]: string
        }
    }
}
