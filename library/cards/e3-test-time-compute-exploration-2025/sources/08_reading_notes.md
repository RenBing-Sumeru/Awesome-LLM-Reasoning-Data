

- Treat e3-math-easy and e3-math-medhard as static prompt-level releases, not grouped on-policy rollout corpora.
- Audit the exact 8k configuration because rollout count, entropy coefficient, and mini-batch size differ across paper and script.
- Reproduce the closing think tag and boxed-answer MathD/SymPy scorer before relying on binary rewards.
- Log failed traces and their normalized advantages; they are central to the claimed exploration mechanism.
- Separate curriculum, rollout count, off-policy reuse, and inference budget from dataset-quality claims.
