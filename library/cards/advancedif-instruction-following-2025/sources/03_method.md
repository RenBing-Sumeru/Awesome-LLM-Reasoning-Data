1. **Design instructions:** Experts write tasks with multiple semantic constraints, dialogue history, and system priorities.

2. **Annotate rubrics:** Required behaviours and prohibitions are decomposed into atomic criteria and reviewed.

3. **Train verifier:** A model is fine-tuned on response–rubric–compliance labels for criterion-level feedback.

4. **Run RIFL:** Verifier scores shape RL rewards; base model, rubric generator, weights, and budget must be fixed.
