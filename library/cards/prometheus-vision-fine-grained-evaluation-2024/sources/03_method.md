1. **Collect visual tasks:** Images and open instructions are assembled across captioning, question answering, and long-form grounded response settings.
2. **Define rubrics:** Instance- or task-specific 1–5 criteria specify visual facts, completeness, and presentation requirements.
3. **Produce candidates:** Different VLMs generate responses of varied quality, paired with references or key visual information.
4. **Generate feedback:** A strong visual teacher reads the image, response, reference, and rubric and outputs a natural-language critique and score, forming Perception Collection.
5. **Train the evaluator:** An open VLM is fine-tuned to generate feedback and scores and evaluated by correlation with human and GPT-4V judgments; inference scripts are released.
