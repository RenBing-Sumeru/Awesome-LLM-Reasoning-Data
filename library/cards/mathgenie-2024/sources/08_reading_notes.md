1. The release combines 81K code-integrated seed solutions, 30K verification rationales, and 170K augmented pairs.
2. Solution-first augmentation preserves explicit constraints before a 70B model back-translates each derivation into a new question.
3. Actual JSONL records use nested messages and typed text, code, and execution items in assistant order.
4. Full AugData raises the Mistral-7B five-set average from 65.9 to 72.0; verification filtering adds 1.2 points on the GSM8K/MATH mean.
5. Reuse requires independent correctness checks, execution sandboxing, decontamination, and reconstructed per-record provenance.
