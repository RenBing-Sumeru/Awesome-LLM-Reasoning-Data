Inputs usually include task instructions, repository/terminal/desktop/office-document state, and available tools or actions. The pipeline initializes the environment, lets an agent execute commands, patches, clicks, document edits, or tool calls, records intermediate states, and scores outcomes with SWE-bench harness plus human verification rubric.

Outputs include trajectories, execution logs, patches or file edits, state transitions, score records, and artifacts needed for reproduction. Artifact entry points: project: https://openai.com/index/introducing-swe-bench-verified/; code: https://github.com/SWE-bench/SWE-bench; data: https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified; huggingface: https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified.

Reproduction requires pinning release, commit, Docker/VM image, data split, dependencies, scorer, and evaluation date.
