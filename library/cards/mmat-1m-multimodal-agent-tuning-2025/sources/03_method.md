1. **Curate public multimodal QA.** Image-question-answer data are cleaned by removing missing images, duplicates, and samples whose answers cannot be verified.
2. **Generate detailed rationales.** A teacher model expands each QA item into multi-step explanations and dynamically inserts API calls or RAG information when needed.
3. **Construct multi-turn reflection.** Initial responses are expanded into Rationale and Reflection turns containing tool results, reasoning updates, and self-checks.
4. **Correct through reflection.** Later reflection repairs logical conflicts, missing evidence, or wrong conclusions while preserving both the pre- and post-correction content.
5. **Produce two formats.** Complete multi-turn RR data are retained and also compressed into One-turn Rationale and Reflection records to reduce training length.
