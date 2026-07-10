One-sentence contribution: ReST-EM is the data-reuse card for scaling self-training with verifier-filtered generated solutions.

Core mechanism: generates samples, filters them with binary feedback, fine-tunes on accepted samples, and repeats.

Data object / evaluation surface: Prompt, generated sample, binary feedback result, filtered training example, and iteration number.

Feedback contract: Binary correctness feedback from answer checks or execution-style evaluators.

Direction label: tmlr-2024, rest-em, self-training, data-reuse.

Closest comparisons: deepseekmath-2024, self-consistency-chain-of-thought-2023
