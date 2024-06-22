import { describe, expect, test } from "@jest/globals";
import ItemsParser from "../src/classes/items.parser";
import ParserError from "../src/classes/parser.error";
import LanguageParser from "../src/classes/language.parser";

describe("LanguageParser", () => {
    test("new parser should be an instance of LanguageParser", () => {
        // Arrange
        const parser = new LanguageParser();

        // Act and assert
        expect(parser).toBeInstanceOf(LanguageParser);
    });

    test("should return language tokens given a valid file string", () => {
        // Arrange
        const file = createLanguageFile();

        // Act
        const { lang } = LanguageParser.parse(file);

        // Assert
        expect(lang.Language).toBe("english");
        expect(lang.Tokens.rarity1).toBe("Genuine");
        expect(lang.Tokens["rarity4"]).toBe("Unusual");
        expect(lang.Tokens["TF_Tool_PaintCan_11"]).toBeUndefined();
        expect(lang.Tokens.TF_Weapon_GoldFryingPan).toBeUndefined();
    });

    test("should throw a ParserError given a invalid file string", () => {
        // Arrange
        const file = "Teams have been switched.";

        // Act and assert
        expect(() => LanguageParser.parse(file)).toThrow(ParserError);
    });
});

describe("ItemsParser", () => {
    test("new parser should be an instance of ItemsParser", () => {
        // Arrange
        const parser = new ItemsParser();

        // Act and assert
        expect(parser).toBeInstanceOf(ItemsParser);
    });

    test("should return item tokens given a valid file string", () => {
        // Arrange
        const file = createItemsFile();

        // Act
        const { items_game } = ItemsParser.parse(file);

        // Assert
        expect(items_game.qualities.vintage?.value).toBe("3");
        expect(items_game.qualities["strange"]?.value).toBe("11");
        expect(items_game.rarities?.common?.next_rarity).toBeUndefined();
        expect(items_game.rarities?.["rare"]?.next_rarity).toBeUndefined();
    });

    test("should return item tokens given a valid url", async() => {
        // Arrange
        const response = await fetch("https://media.steampowered.com/apps/440/scripts/items/items_game.bdc614ad776fb2d43c1f247fce870485d2299152.txt");

        const file = await response.text();

        // Act
        const { items_game } = ItemsParser.parse(file);

        // Assert
        expect(items_game.qualities.vintage?.value).toBe("3");
        expect(items_game.qualities["strange"]?.value).toBe("11");
        expect(items_game.rarities?.common?.next_rarity).toBe("uncommon");
        expect(items_game.rarities?.["rare"]?.next_rarity).toBe("mythical");
    });

    test("should throw a ParserError given a invalid file string", () => {
        // Arrange
        const file = "Circling Heart Team Captain";

        // Act and assert
        expect(() => ItemsParser.parse(file)).toThrow(ParserError);
    });
});

/**
 * Creates a mock string of a Team Fortress 2 language file.
 * @returns { string } A mock string of a Team Fortress 2 language file.
 */
function createLanguageFile(): string {
    return "\"lang\"\n\{\n\"Language\"\t\"english\"\n\"Tokens\"\n{\n\"rarity1\"\t\"Genuine\"\n\"rarity4\"\t\"Unusual\"\n}\n}";
}

/**
 * Creates a mock string of a Team Fortress 2 items file.
 * @returns { string } A mock string of a Team Fortress 2 items file.
 */
function createItemsFile(): string {
    return "\"items_game\"\n\{\n\"qualities\"\n{\n\"vintage\"\n{\n\"value\"\t\"3\"\n}\n\"strange\"\n{\n\"value\"\t\"11\"\n}\n}";
}
