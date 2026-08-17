1. Input a contract, question, answer, and optionally a reference; Claude 3.5 Sonnet v2 segments the answer into self-contained assertions.

2. Label claims incorrect if factually wrong; otherwise label irrelevant or correct, and add material absent claims as missing.

3. Compute correctness = correct/(correct+incorrect), precision = correct/(correct+irrelevant), recall = correct/(correct+missing), and relevance as precision-recall F1.

4. Compare automated scores with lawyer 1–5 ratings (mapped to 0–1), including Pearson correlation and quarter-bucket accuracy; a different Claude version generated the answers.

5. For human review, fix the same LDP segmentation in an interface and let lawyers label each point. The proprietary set has 959 QAs across nine contract types; LegalBench uses 150 selected QAs plus 20 manually wrong or partly wrong answers.
