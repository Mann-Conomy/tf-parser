import { describe, expect, test } from "@jest/globals";
import { sanitizeFile, isCurlyBrace, isKeyOrKeyValuePair, isKeyAndValuePair } from "../src/lib/utils";

describe("sanitizeFile", () => {
    test("should remove the control characters from the string", () => {
        // Arrange
        const file = "\"TF_Chat_Team_Loc\" \"(TEAM) %s1 @ %s3 :  %s2\"";
        
        // Act
        const sanitizedFile = sanitizeFile(file);

        // Assert
        expect(sanitizedFile).toBe("\"TF_Chat_Team_Loc\" \"(TEAM) %s1 @ %s3 :  %s2\"");
    });

    test("should return the original file if no control characters was found", () => {
        // Arrange
        const file = "\"TF_voice_menu_A\" \"Voice Menu 1\"";

        // Act
        const sanitizedFile = sanitizeFile(file);

        // Assert
        expect(sanitizedFile).toBe(file);
    });
});

describe("isCurlyBrace", () => {
    test("should return true if the line is a opening brace", () => {
        // Arrange
        const openingBrace = "{";
        
        // Act
        const result = isCurlyBrace(openingBrace);

        // Assert
        expect(result).toBe(true);
    });

    test("should return true if the line is a closing brace", () => {
        // Arrange
        const closingBrace = "}";

        // Act
        const result = isCurlyBrace(closingBrace);

        // Assert
        expect(result).toBe(true);
    });

    test("should return false if the line is not a curly brace", () => {
        // Arrange
        const line = "Honcho's Headgear";

        // Act
        const result = isCurlyBrace(line);

        // Assert
        expect(result).toBe(false);
    });
});

describe("isKeyOrKeyValuePair", () => {
    test("should return true if the line is a JSON key", () => {
        // Arrange
        const key = "\"Tokens\"";

        // Act
        const result = isKeyOrKeyValuePair(key);

        // Assert
        expect(result).toBe(true);
    });

    test("should return true if the line is a JSON key and value pair", () => {
        // Arrange
        const keyAndValuePair = "\"Language\" \"English\"";

        // Act
        const result = isKeyOrKeyValuePair(keyAndValuePair);

        // Assert
        expect(result).toBe(true);
    });

    test("should return false if the line is not a JSON key and value pair", () => {
        // Arrange
        const comment = "// Classes";

        // Act
        const result = isKeyOrKeyValuePair(comment);

        // Assert
        expect(result).toBe(false);
    });
});

describe("isKeyAndValuePair", () => {
    test("should return true if the line is a key and value pair", () => {
        // Arrange
        const keyAndValuePair = "\"Language\" \"English\"";

        // Act
        const result = isKeyAndValuePair(keyAndValuePair);

        // Assert
        expect(result).toBe(true);
    });

    test("should return false if the line is not a key and value pair", () => {
        // Arrange
        const key = "\"Tokens\"";

        // Act
        const result = isKeyAndValuePair(key);

        // Assert
        expect(result).toBe(false);
    });
});
