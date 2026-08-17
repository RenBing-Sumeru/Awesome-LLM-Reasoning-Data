The canonical publication is the eight-author **NeurIPS 2025 Main Conference Track** paper. SeRL addresses a specific post-training bottleneck: reinforcement learning in a specialized domain usually needs both many instructions and a correctness signal, yet expert-authored questions and verifiable labels may be scarce. The paper asks whether a current policy can expand a small seed set, estimate response rewards from its own samples, and iteratively train without ground-truth labels for the generated questions.

The main mathematics experiments start from **500 MATH training questions**, sampled uniformly across difficulty levels. At each training step the current policy generates question-only instructions from an eight-example few-shot context, filters candidate questions, samples **16** chain-of-thought responses for every retained question, groups final answers using Math-Verify equivalence, and assigns a binary majority-agreement reward to each response. The medical extension replaces the math seed with 500 randomly selected MedQA training instructions, but does not release a medical trajectory dataset.

One complete online training object is therefore not just a prompt:

| Component | Internal role |
|---|---|
| Generated question | Current-policy instruction proposal |
| 16 responses | Chain-of-thought plus final answers |
| Answer equivalence structure | Pairwise Math-Verify grouping |
| Majority selection | Chosen answer cluster |
| 16 scalar labels | Reward 1 for majority-equivalent responses, otherwise 0 |
| Mean reward | Difficulty statistic, admitted only in inclusive range `[0.2, 0.8]` |
| Iteration state | Policy checkpoint, step, accepted-question pool, and filter context |

This feedback contract is **programmatic agreement**, not programmatic correctness. Math-Verify determines whether extracted mathematical answers are equivalent; the current policy’s most common equivalence group defines reward. If most responses share the same wrong answer, they can all be rewarded. The paper itself documents a collapse pattern in which plausible reasoning repeatedly ends with answer 0 and obtains unanimous reward. The difficulty filter removes all-agree and all-disagree extremes, but cannot prove that a moderate consensus is correct.

This Card belongs to **Data Construction & Open Release Recipes** because SeRL’s core object is an evolving online curriculum and reward-construction pipeline. The repository exposes implementation and several static question snapshots, not the complete paper-run data object. Responses, extracted answers, pairwise equivalence matrices, binary rewards, verifier failures, rejected generations, logs, checkpoints, and run manifests remain unavailable.
