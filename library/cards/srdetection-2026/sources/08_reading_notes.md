1. Target: item-level code leakage, not generic code quality.
2. Lever: compare an original program with semantics-preserving variants; the relative extremum is the detector.
3. Artifact: the official repository releases code and data; a separate dataset specification is not reported.
4. Evidence: gray-box F1 reaches 74.76/69.99 at one epoch; black-box F1 reaches 81.85/78.51 at five epochs.
5. Reuse: validate variants first; black-box sensitivity on very large instruction-tuned models remains a risk. Preserve prompts and score traces, then manually audit both flagged and unflagged examples.
