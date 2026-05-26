import { describe, it, expect } from "vitest";
import { Retriever } from "../src/retriever";
import { MiMoClient } from "../src/client";

describe("Retriever", () => {
    it("constructs without throwing", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        const engine = new Retriever(client);
        expect(engine).toBeDefined();
    });

    it("client has correct model", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        expect(client.model).toBe("mimo-7b");
    });
});
