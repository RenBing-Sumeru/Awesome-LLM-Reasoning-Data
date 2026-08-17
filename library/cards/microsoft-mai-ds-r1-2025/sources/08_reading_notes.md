- Preserve the two disclosed components: about 350K internally developed multilingual blocked-topic examples and 110K named Tulu3 safety/non-compliance examples.
- Preserve the construction order for the 350K component: keyword collection/filtering, question expansion, multilingual translation, then DeepSeek R1/internal-model answer and CoT bootstrapping.
- Treat internal teachers, prompts, filters, records, language allocation, and transformations as unknown rather than inferred from the model card.
- Do not infer RL, a reward model, a verifier, preference pairs, or a rollout protocol from safety/responsiveness evaluation metrics.
- Keep model MIT licensing separate from undisclosed source-level rights for the internal multilingual material and selected public records.

