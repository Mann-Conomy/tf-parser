import { VDF } from "@mann-conomy/vdf-utils";
import type { LocalizationFile } from "../../types/localization";

/**
 * A parser for converting Team Fortress 2 localization files to JSON objects.
 */
export default class LocalizationParser {
    /**
     * Parses a Team Fortress 2 localization file to JSON.
     * @param file The content of a Team Fortress 2 localization file.
     * @returns The localization file as a JSON object.
     * @throws A RangeError if the localization file results in an empty JSON object.
     */
    public static parse(file: string): LocalizationFile {
        return VDF.parse<LocalizationFile>(file);
    }
}
