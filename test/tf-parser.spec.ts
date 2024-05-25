import { describe, expect, test } from "@jest/globals";
import TFParser from "../src/classes/tf-parser";
import { TFParserError } from "../src/classes/tf-parser-error";

describe("TFParser", () => {
    test("new parser should be an instance of TFParser", () => {
        // Arrange
        const parser = new TFParser();

        // Act and assert
        expect(parser).toBeInstanceOf(TFParser);
    });

    test("should return language tokens given a valid file string", () => {
        // Arrange
        const contents = createFileContents();

        // Act
        const result = TFParser.parse(contents);

        // Assert
        expect(result.lang.Language).toBe("english");
        expect(result.lang.Tokens.rarity1).toBe("Genuine");
        expect(result.lang.Tokens["rarity4"]).toBe("Unusual");
        expect(result.lang.Tokens["TF_Tool_PaintCan_11"]).toBeUndefined();
        expect(result.lang.Tokens.TF_Weapon_GoldFryingPan).toBeUndefined();
    });

    test("should throw a TFParserError given a invalid file string", () => {
        // Arrange
        const contents = "Team Fortress 2";

        // Act and assert
        expect(() => TFParser.parse(contents)).toThrow(TFParserError);
    });
});

/**
 * Creates a mock string of a Team Fortress 2 language file
 * @returns { string } A mock string of a Team Fortress 2 language file.
 */
function createFileContents(): string {
    return "\"lang\"\n\{\n\"Language\"\t\"english\"\n\"Tokens\"\n{\n\"rarity1\"\t\"Genuine\"\n\"rarity4\"\t\"Unusual\"\n}\n}";
}
