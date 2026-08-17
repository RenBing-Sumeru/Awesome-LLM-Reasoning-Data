The paper defines nine tasks and reports about 951k train and 424k test examples by its table, plus a 1,100-example diagnostic NLI set. Evidence is metric-based leaderboard scoring, not row-level semantic verification.

The important audit point is the level at which evidence attaches. A benchmark score, judge score, or leaderboard metric is not automatically a row-level verifier certificate unless the source exposes such a verifier.

Score reuse should keep the evaluated split, scorer, model/scaffold settings, and artifact version together with the reported number.
