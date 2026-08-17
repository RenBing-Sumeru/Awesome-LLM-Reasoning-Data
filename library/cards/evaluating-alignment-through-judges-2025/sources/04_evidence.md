Claim — evaluation ability can rank alignment quality when labels come from a strong, order-consistent oracle.

Controlled setup — 15 LLMs are ranked by GPT-4o-judged generation win rate and by Cohen’s kappa on the same filtered pairs. Filtering removes 58.3% of AlpacaEval and 50.7% of Arena-Hard pairs whose swapped orders receive inconsistent oracle labels.

Result — generation-evaluation Spearman correlation is 0.839 on AlpacaEval and 0.971 on Arena-Hard; without filtering it is 0.743 and 0.793 (Table 1, Figure 2). On 23 models, AlignEval-CLAUDE has 0.885 correlation with style-controlled ChatBot Arena, and both variants reach 0.946 after rank averaging with IFEval (Table 4).

Boundary — this proxy is relative to strong LLM-oracle labels and selected benchmarks, not direct human preference for every alignment dimension.
