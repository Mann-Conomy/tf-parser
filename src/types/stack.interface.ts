/**
 * An array of Stack values.
 */
export type StackArray = StackValue[];

/**
 * Represents a value that can be either null or undefined.
 */
export type UnknownValue = null | undefined;

/**
 * A value that can be a string, number, boolean, object, array, or unknown value.
 */
export type StackValue = string | number | boolean | StackObject | StackArray | UnknownValue;

/**
 * An object with string keys and values of type StackValue.
 */
export interface StackObject {
    [key: string]: StackValue;
}

/**
 * Optional configuration object for the Stack.
 */
export interface StackOptions {
    /**
     * Whether to populate the Stack with an empty Stack object.
     */
    populate: boolean
}
