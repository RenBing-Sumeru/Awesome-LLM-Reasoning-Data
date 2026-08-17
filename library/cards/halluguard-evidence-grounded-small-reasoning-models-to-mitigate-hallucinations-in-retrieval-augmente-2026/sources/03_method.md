1. **Construct document–claim tasks.** The authors sample domain-diverse passages from FineWeb and create both document-grounded claims and deliberately unsupported claims.
2. **Reform and filter the data.** Multi-stage curation removes trivial, inconsistent, or poorly structured examples and standardizes the classification task.
3. **Generate competing reasoning responses.** Qwen3-235B-A22B produces detailed chosen responses, while Qwen3-0.6B generates weaker or incorrect rejected responses.
4. **Verify preference quality.** Pairs are removed if the chosen classification disagrees with the ground-truth label. GPT-OSS-120B and DeepSeek-V3.1 must also both prefer the chosen response.
5. **Train HalluGuard.** Qwen3-4B is optimized with ORPO to generate reasoning, a groundedness label, and an evidence-based justification.
