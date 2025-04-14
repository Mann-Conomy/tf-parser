/**
 * Represents the Steam language codes used in the Team Fortress 2 localization files.
 */
export type LanguageCode =
    | "ukrainian"
    | "turkish"
    | "thai"
    | "tchinese"
    | "swedish"
    | "spanish"
    | "schinese"
    | "russian"
    | "romanian"
    | "portuguese"
    | "polish"
    | "pirate"
    | "norwegian"
    | "korean"
    | "japanese"
    | "italian"
    | "hungarian"
    | "greek"
    | "german"
    | "french"
    | "finnish"
    | "English"
    | "dutch"
    | "danish"
    | "czech"
    | "bulgarian"
    | "brazilian";

/**
 * Represents a Team Fortress 2 localization file parsed into a JSON object.
 */
export interface LocalizationFile {
    lang: {
        /**
         * The language of the file.
         */
        Language: LanguageCode,
        /**
         * An object containing key-value pairs where keys are tokens and values are the corresponding translations.
         */
        Tokens: Record<string, string>;
    }
}
