1. **Build four tasks:** Source instances and retrieval contexts are prepared for two summarisation tasks, QA, and data-to-text.

2. **Sample model responses:** Six LLMs generate multiple responses per source at different temperatures, creating a natural error distribution.

3. **Annotate at two levels:** Annotators first judge response-level hallucination, then mark word spans, types, and severity with quality review.

4. **Train and mitigate:** Small detectors are trained and used to filter or mitigate generation; sources, model versions, temperatures, and guidelines must be fixed.
