The benchmark scale is 8.5K examples; the release split is 7,473 train and 1,319 test, often rounded in repo language as 7.5K train / 1K test. Row-level evidence is numeric answer agreement; verifier evidence is selection performance over sampled solutions, not proof of every reasoning step.

The important audit point is the level at which evidence attaches. A benchmark score, judge score, or leaderboard metric is not automatically a row-level verifier certificate unless the source exposes such a verifier.

Score reuse should keep the evaluated split, scorer, model/scaffold settings, and artifact version together with the reported number.
