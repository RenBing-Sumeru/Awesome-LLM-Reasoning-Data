The one-sentence contribution is a compact math benchmark plus evidence that verifier-guided sampling can improve solution selection.

The core mechanism is human-written word problems, step-by-step solutions, final-answer extraction, model sampling, verifier scoring, and selected-answer evaluation. The object being scored is 8,792 word problems with natural-language solutions and final numeric answers, split into 7,473 train and 1,319 test examples, and the feedback contract is final-answer exact match after answer extraction; verifier models are trained and evaluated as selection signals.

The closest comparisons are MATH, arithmetic QA, and later GSM8K variants that change contamination or answer normalization. Its direction label is evaluation-surface and feedback-contract curation rather than generic dataset summarization.
