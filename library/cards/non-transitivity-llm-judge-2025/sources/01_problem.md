Baseline pairwise LLM judging assumes preferences are transitive. When that assumption fails, a model ranking can change merely because a different baseline was chosen.

The paper audits this assumption in AlpacaEval, then replaces baseline-centred comparisons with tournament results fitted by a Bradley--Terry model; it also proposes the lower-cost Swim matching schedule.

The concern is ranking validity, not whether one answer is useful. A judge can prefer A to B, B to C, and C to A; then baseline win rate is not a global ordering. A leaderboard built from one reference system can therefore overstate or reverse differences that a broader comparison graph reveals. The output is a diagnostic and ranking protocol, not new response data or a new judge.
