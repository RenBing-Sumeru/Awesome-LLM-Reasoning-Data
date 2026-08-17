Reference-conditioned LLM judges are used as RLVR rewards because comparing an answer to a reference appears safer than judging it in isolation. Yet a false positive is especially damaging in RL: a policy can learn to optimize the judge without solving the task.

This paper audits whether semantically empty punctuation and reasoning openers can receive a positive verdict across generative judges. It then trains a more robust reference-based reward model with explicit negative examples of truncated, content-free response lead-ins.
