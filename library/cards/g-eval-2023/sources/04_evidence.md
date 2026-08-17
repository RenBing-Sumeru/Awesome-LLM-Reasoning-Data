The paper meta-evaluates on SummEval, Topical-Chat, and QAGS, and reports GPT-4 G-Eval Spearman 0.514 on SummEval. Row-level evidence is a judge response under a fixed prompt, so aggregate correlation is not a per-example correctness certificate.

The important audit point is the level at which evidence attaches. A benchmark score, judge score, or leaderboard metric is not automatically a row-level verifier certificate unless the source exposes such a verifier.

Score reuse should keep the evaluated split, scorer, model/scaffold settings, and artifact version together with the reported number.
