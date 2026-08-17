1. **Curate tasks:** Queries are selected from established image, audio, video, and text benchmarks and normalized into 15 input-output modality categories.
2. **Generate candidates:** Multiple advanced MLLMs answer the 1,500 TaskAnything queries, preserving the original media, instruction, and model output.
3. **Build the judge set:** Detailed rubrics and human pairwise preferences and scores are collected for representative outputs to create JudgeAnything.
4. **Unified evaluation:** Judges receive both the task input and candidate outputs, perform pairwise comparison and absolute scoring, and are compared with human labels.
5. **Release the platform:** OmniArena packages model invocation, media presentation, and automated evaluation; the project page provides data, code, and leaderboard access.
