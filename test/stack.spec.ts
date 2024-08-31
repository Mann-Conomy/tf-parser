import { describe, expect, test } from "@jest/globals";
import StackError from "../src/classes/stack.error";
import Stack from "../src/classes/stack";
import { StackObject } from "../src/types/stack.interface";

describe("Stack", () => {
    test("should be an instance of the Stack class", () => {
        // Arrange
        const stack = new Stack();

        // Act and assert
        expect(stack).toBeInstanceOf(Stack);
    });

    test("should throw a StackError when calling pop on an empty Stack", () => {
        // Arrange
        const stack = new Stack();

        // Act and assert
        expect(() => stack.pop()).toThrow(StackError);
    });

    test("should throw a StackError when calling peek on an empty Stack", () => {
        // Arrange
        const stack = new Stack();

        // Act and assert
        expect(() => stack.peek()).toThrow(StackError);
    });

    test("should throw when the last Stack element is undefined", () => {
        // Arrange
        const stack = new Stack();
        const element = undefined as unknown as StackObject;

        // Act
        stack.push(element);

        // Assert
        expect(() => stack.peek()).toThrow(StackError);
    });
});
