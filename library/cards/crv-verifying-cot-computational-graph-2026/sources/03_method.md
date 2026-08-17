1. **Construct problems:** Generate arithmetic and Boolean expressions at different complexities and include GSM8K questions.
2. **Generate and segment traces:** Use Llama-3.1-8B-Instruct to produce chains of thought and store full text plus before-and-after context for each step.
3. **Apply dual annotation:** Programmatic checks and an LLM judge label steps independently, retaining only agreements.
4. **Extract computational graphs:** Build attribution graphs with Circuit Tracer and transcoders, extract structural features, train an error classifier, and test interventions.
