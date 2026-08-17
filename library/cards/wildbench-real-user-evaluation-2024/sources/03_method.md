1. **Log filtering:** More than one million anonymized real chat records are filtered to remove low-quality, sensitive, or unevaluable tasks while retaining difficult and diverse candidates.

2. **Task finalization:** Clustering, quality checks, and human review select 1,024 representative user requests spanning multiple open-ended capabilities.

3. **Criterion construction:** A task-specific checklist defines factual, reasoning, formatting, or stylistic requirements for each item.

4. **Baseline generation:** Responses from several fixed models provide stable anchors for relative comparison.

5. **Dual-metric scoring:** WB-Reward performs candidate–baseline pairwise judgment, whereas WB-Score checks individual criteria and aggregates them while mitigating response-length bias.

**Reproducibility information:** The official data, code, and leaderboard are public, although the complete sampling distribution of private user logs cannot be reproduced for privacy reasons.
