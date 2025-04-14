import { readFile } from "fs/promises";
import { LocalizationParser } from "../src/index";

(async () => {
    try {
        // Read the contents of the tf_english.txt file
        const file = await readFile("tf_english.txt", { encoding: "utf16le" });

        // Parse the english language translations
        const { lang } = LocalizationParser.parse(file);

        console.log(lang.Language); // English
        console.log(lang.Tokens.rarity4); // Unusual
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error parsing tf_english.txt", error.message);
        }
    }
})();
