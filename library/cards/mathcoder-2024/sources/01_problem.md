# Problem

Open math models trained on chain-of-thought or program-only solutions could either explain a derivation or compute precisely, but they did not learn the Code Interpreter pattern of reasoning, executing code, observing results, and continuing from feedback. MathCoder asks how to turn that interaction into open post-training records rather than leaving it inside a proprietary system.

The decision boundary is the LCE trajectory and its SFT/inference contract, not code generation alone: GPT-4 and a self-distilled MathCoder-Initial author problem-solving traces, answer checks select them, Python execution supplies observations, and Llama-2 or CodeLlama models consume the records.

**L4 facts:** official OpenReview z8TW0ttBPp; accepted at ICLR 2024; Track 01 object is an interleaved text/code/execution trajectory; public dataset and actual records verified; collection state `L4_carded` with one controlled category.
