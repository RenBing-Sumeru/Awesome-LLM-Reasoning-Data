The paper reports 466 questions, human respondents at 92%, and GPT-4 with plugins at 15% in the original setting. Row-level evidence is final-answer matching, not a verified action path.

The important audit point is the level at which evidence attaches. A benchmark score, judge score, or leaderboard metric is not automatically a row-level verifier certificate unless the source exposes such a verifier.

Score reuse should keep the evaluated split, scorer, model/scaffold settings, and artifact version together with the reported number.
