GURU is a released six-domain RLVR corpus filtered from about 684.9K raw candidates. At the pinned Hugging Face revision, Dataset Viewer exposes one 91,909-row train split with 17 columns. The paper reports rounded final counts of 54.4K mathematics, 18.1K code, 3.6K science, 6.3K logic, 3.7K simulation, and 6.1K tabular examples.

Its organizing object is a prompt plus a routed binary feedback contract:

- mathematics, logic, simulation, and tabular tasks use structured extraction followed by exact, normalized, or symbolic matching;
- code tasks execute Python against retained tests and reward only an all-tests-pass outcome;
- open-ended science tasks use the 1.5B TIGER-Lab/general-verifier model to judge whether a response entails the reference answer.

The Parquet schema includes prompts, references or upstream answers, task-specific tests or inputs, source and ability labels, reward payloads, uniqueness flags, and pass rates from both difficulty-screening models. `completion` and `response` fields do exist, but they are not an archive of the on-policy responses sampled during the reported GRPO training. Rejected candidates, failed verification traces, and rollout reward histories are also absent.

The broader release includes preprocessing and filtering paths, reward implementations, veRL-based GRPO infrastructure, an evaluation suite, GURU-7B and GURU-32B checkpoints, and linked training logs. This makes it a more inspectable construction package than a paper-only claim, while still leaving paper-run version identity and several audit ledgers unresolved.
