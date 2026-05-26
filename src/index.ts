/**
 * contextual-retriever-framework-v2 - Retrieval-augmented generation pipeline with vector search and context synthesis using Xiaomi MiMo for grounded answers.
 */
import { MiMoClient } from "./client";
import { Retriever } from "./retriever";
import { loadConfig } from "./config";

async function main(): Promise<void> {
    const config = loadConfig("config.yaml");
    const client = new MiMoClient({
        model: config.model,
        apiKey: config.apiKey,
    });

    const engine = new Retriever(client);
    const result = await engine.run({ topic: "MiMo capabilities" });

    console.log("Completed:", JSON.stringify(result, null, 2));
}

main().catch((err) => {
    console.error("fatal:", err);
    process.exit(1);
});
