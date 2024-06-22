import { readFile } from "fs/promises";
import LanguageParser from "../src/classes/language.parser";

(async () => {
    try {
        // Read the contents of the tf_english.txt file
        const file = await readFile("tf_english.txt", { encoding: "utf16le" });

        // Parse the english language translations
        const { lang } = LanguageParser.parse(file);

        console.log(lang.Language); // English
        console.log(lang.Tokens.rarity4); // Unusual
    } catch (error) {
        console.error("Error parsing tf_english.txt", error.message);
    }
})();
