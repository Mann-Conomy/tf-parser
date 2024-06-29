import StackError from "./stack.error";
import type { StackObject, StackOptions, StackValue } from "../types/stack.interface";

/**
 * A class representing a custom Stack data structure.
 */
export default class Stack {
    private readonly elements: StackObject[];

    /**
     * Creates a new instance with the specified options.
     * @param { Partial<StackOptions>} options Optional configuration object for the Stack.
     */
    constructor(options: Partial<StackOptions> = {}) {
        this.elements = [];
        
        if (options.populate) {
            const object = this.create();
            
            this.elements.push(object);
        }
    }

    /**
     * Pushes an element onto the top of the Stack.
     * @param element The element to be pushed onto the Stack.
     */
    push(element: StackObject) {
        this.elements.push(element);
    }

    /**
     * Removes and returns the top element of the Stack.
     * @returns The element at the top of the Stack.
     * @throws Throws a StackError if the Stack is empty.
     */
    pop(): StackObject | undefined {
        if (this.isEmpty()) {
            throw new StackError("Error updating Stack. Cannot pop from an empty Stack.");
        }

        return this.elements.pop();
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns The element at the top of the stack.
     * @throws Throws a StackError if the Stack is empty.
     */
    peek(): StackObject {
        if (this.isEmpty()) {
            throw new StackError("Error reading Stack. Cannot peek into an empty Stack.");
        }

        const element = this.elements[this.elements.length - 1] || null;

        if (element === null) {
            throw new StackError("Error reading Stack. The last Stack element is null.");
        }

        return element;
    }
    
    /**
     * Updates the specified key-value pair in the top element of the Stack.
     * @param key The key to be updated.
     * @param value The value to be assigned to the key.
     */
    update(key: string, value: StackValue) {
        const element = this.peek();

        element[key] = value;
    }

    /**
     * Creates a new empty object to be used as an element in the Stack.
     * @returns A new empty Stack object.
     */
    create(): StackObject {
        return Object.create(Object.prototype);
    }

    /**
     * Check if the Stack is empty.
     * @returns True if the stack is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Returns the number of elements in the Stack.
     * @returns The size of the Stack.
     */
    size(): number {
        return this.elements.length;
    }
}
