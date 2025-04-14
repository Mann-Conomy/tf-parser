import { VDF } from "@mann-conomy/vdf-utils";
import type { ItemSchema } from "../../types/schema";

/**
 * A parser for converting Team Fortress 2 item schemas to JSON objects.
 */
export default class SchemaParser {
    /**
     * Parses a Team Fortress 2 item schema to JSON.
     * @param schema The content of a Team Fortress 2 item schema.
     * @returns The item schema as a JSON object.
     * @throws A RangeError if the item schema results in an empty JSON object.
     */
    public static parse(schema: string): ItemSchema {
        return VDF.parse<ItemSchema>(schema);
    }
}
