import { VDF } from "@mann-conomy/vdf-utils";
import type { ClientSchema } from "../../types/schema";

/**
 * A parser for converting Team Fortress 2 client schemas to JSON objects.
 */
export default class SchemaParser {
    /**
     * Parses a Team Fortress 2 client schema to JSON.
     * @param schema The content of a Team Fortress 2 client schema.
     * @returns The client schema as a JSON object.
     * @throws A RangeError if the client schema results in an empty JSON object.
     */
    public static parse(schema: string): ClientSchema {
        return VDF.parse<ClientSchema>(schema);
    }
}
