import { describe, expect, test } from "@jest/globals";
import { SchemaParser } from "../src/index";

describe("SchemaParser", () => {
    test("new parser should be an instance of SchemaParser", () => {
        // Arrange
        const parser = new SchemaParser();

        // Act and assert
        expect(parser).toBeInstanceOf(SchemaParser);
    });

    test("should return item schema tokens given a valid file string", () => {
        // Arrange
        const file = createItemSchema();

        // Act
        const { items_game } = SchemaParser.parse(file);

        // Assert
        expect(items_game.qualities.vintage?.value).toBe(3);
        expect(items_game.qualities["strange"]?.value).toBe(11);
        expect(items_game.rarities?.common?.next_rarity).toBeUndefined();
        expect(items_game.rarities?.["rare"]?.next_rarity).toBeUndefined();
    });

    test("should return item tokens given a valid url", async() => {
        // Arrange
        const response = await fetch("https://media.steampowered.com/apps/440/scripts/items/items_game.bdc614ad776fb2d43c1f247fce870485d2299152.txt");
        const file = await response.text();

        // Act
        const { items_game } = SchemaParser.parse(file);

        // Assert
        expect(items_game.qualities.vintage?.value).toBe(3);
        expect(items_game.qualities["strange"]?.value).toBe(11);
        expect(items_game.rarities?.common?.next_rarity).toBe("uncommon");
        expect(items_game.rarities?.["rare"]?.next_rarity).toBe("mythical");
    }, 10000);

    test("should throw a RangeError given a invalid schema string", () => {
        // Arrange
        const file = "Circling Heart Team Captain";

        // Act and assert
        expect(() => SchemaParser.parse(file)).toThrow(RangeError);
    });
});

/**
 * Creates a mock string of a Team Fortress 2 item schema.
 * @returns { string } A mock string of a Team Fortress 2 item schema.
 */
function createItemSchema(): string {
    return "\"items_game\"\n\{\n\"qualities\"\n{\n\"vintage\"\n{\n\"value\"\t\"3\"\n}\n\"strange\"\n{\n\"value\"\t\"11\"\n}\n}";
}
