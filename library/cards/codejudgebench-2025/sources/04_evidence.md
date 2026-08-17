Claim — even strong LLM judges remain unreliable on difficult functional coding comparisons, and pairwise prompting is more effective than scalar pointwise scoring in this benchmark.

Setup — 26 open and closed judges were tested on the 5,352 verified pairs from code generation, repair, and test generation. The authors additionally swapped candidate order and compared full responses, code-plus-comments, and code-only inputs.

Result — Gemini-2.5-Pro achieved 81% accuracy on CodeJudgeBench code generation, while it scored 98% on JudgeBench's code split; the paper reports that pairwise prompting outperformed pointwise prompting. It also finds substantially different predictions after order swaps.

Boundary — accuracy depends on the benchmark's verified candidates and its execution-free judge setup; it does not establish reliability for security, style, repository-scale tasks, or every future generator distribution.
