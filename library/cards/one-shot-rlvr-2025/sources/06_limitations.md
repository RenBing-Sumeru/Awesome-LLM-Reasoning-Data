The historical-variance heuristic is explicitly not claimed to be optimal. Reported effectiveness varies by selected example, model family, training length, and exploration settings; the long-CoT-distilled model has a larger few-shot/full-pool gap, and the paper reports degradation after roughly 100 one-shot steps for that model.

The binary reward is described as final-answer matching, but prose-level disclosure does not settle parser behavior, symbolic equivalence, formatting edge cases, or false-positive/false-negative rates. The paper describes upstream duplicate removal but does not provide a one-shot-specific semantic train-test overlap audit. It therefore cannot establish benchmark leakage control.

The code repository and released dataset are Apache-2.0, but the checked material does not establish the rights or full provenance of every upstream problem. Installation instructions may be outdated, and a complete pinned environment, evaluator configuration, and per-record lineage are not supplied by this Card.

