import { describe, expect, test } from "@jest/globals";
import { LocalizationParser } from "../src/index";

describe("LocalizationParser", () => {
    test("new parser should be an instance of LocalizationParser", () => {
        // Arrange
        const parser = new LocalizationParser();

        // Act and assert
        expect(parser).toBeInstanceOf(LocalizationParser);
    });

    test("should return localization tokens given a valid file string", () => {
        // Arrange
        const file = createLocalizationFile();

        // Act
        const { lang } = LocalizationParser.parse(file);

        // Assert
        expect(lang.Language).toBe("English");
        expect(lang.Tokens.rarity1).toBe("Genuine");
        expect(lang.Tokens["rarity4"]).toBe("Unusual");
        expect(lang.Tokens["TF_Tool_PaintCan_11"]).toBeUndefined();
        expect(lang.Tokens.TF_Weapon_GoldFryingPan).toBeUndefined();
    });

    test("should throw a RangeError given a invalid file string", () => {
        // Arrange
        const file = "Teams have been switched.";

        // Act and assert
        expect(() => LocalizationParser.parse(file)).toThrow(RangeError);
    });
});

/**
 * Creates a mock string of a Team Fortress 2 localization file.
 * @returns { string } A mock string of a Team Fortress 2 localization file.
 */
function createLocalizationFile(): string {
    return "\"lang\"\n\{\n\"Language\"\t\"English\"\n\"Tokens\"\n{\n\"rarity1\"\t\"Genuine\"\n\"rarity4\"\t\"Unusual\"\n}\n}";
}
