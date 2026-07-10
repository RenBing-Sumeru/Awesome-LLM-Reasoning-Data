One-sentence contribution: Self-consistency is the clean baseline for repeated-sampling test-time compute in CoT reasoning.

Core mechanism: samples diverse chain-of-thought paths and selects the most consistent final answer.

Data object / evaluation surface: Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.

Feedback contract: Answer agreement and final-answer checking act as an implicit verifier.

Direction label: iclr-2023, self-consistency, sampling-budget, pass-at-k-adjacent.

Closest comparisons: tree-of-thoughts-2023, scaling-llm-test-time-compute-optimally-2024
