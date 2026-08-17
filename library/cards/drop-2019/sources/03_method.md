1. Inputs: passages, crowd-authored questions, validated gold answers, answer-type metadata, and model predictions.
2. Pipeline: source passages, ask workers to create questions requiring discrete operations, validate or aggregate answers, normalize predicted and gold answers, and score exact match plus token-level F1 over permissible answer forms.
3. Outputs: train/dev/test-style QA records, model predictions, aggregate EM/F1, and per-question correctness or partial-credit scores.
4. Verifier: the official/generalized DROP scorer over normalized answer strings, numbers, and dates; it cannot inspect the reasoning path.
5. Reproducibility notes: pin whether the cited object is the NAACL/ACL 55k-question paper version or the arXiv/release 96k-question version, plus split, answer-normalization code, hidden test policy, and any leaderboard snapshot.
