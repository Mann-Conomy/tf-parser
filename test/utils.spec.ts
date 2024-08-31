import { describe, expect, test } from "@jest/globals";
import ParserError from "../src/classes/parser.error";
import { getLinesOrThrow, getLastKeyOrThrow, getKeyAndValuePairOrThrow } from "../src/lib/utils"

describe("getLinesOrThrow", () => {
    test("should throw when the file is empty", () => {
        // Arrange
        const empty = String();

        // Act and assert
        expect(() => getLinesOrThrow(empty)).toThrow(ParserError);
    });
});

describe("getLastKeyOrThrow", () => {
    test("should throw when the Stack object is empty", () => {
        // Arrange
        const empty = {};

        // Act and assert
        expect(() => getLastKeyOrThrow(empty)).toThrow(ParserError);
    });
});

describe("getKeyAndValuePairOrThrow", () => {
    test("should throw when the line is empty", () => {
        // Arrange
        const line = String();

        // Act and assert
        expect(() => getKeyAndValuePairOrThrow(line)).toThrow(ParserError);
    });
});
