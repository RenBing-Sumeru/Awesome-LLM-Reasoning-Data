The strongest evidence is the official NAACL demo publication and the public NEC Research implementation. The paper frames the system as a benchmark framework rather than a single score table, and the repository exposes the code surface needed to inspect supported benchmarks, drivers, and metrics.

The relevant evidence is row-level in the sense of agent episodes: an evaluator can inspect whether a run advanced through meaningful environment states, repeated actions, or reached a terminal success condition. Aggregate comparisons are useful only when the same benchmark module, version, prompt/scaffold, and run budget are pinned.

The evidence boundary is important. Public code confirms the framework is inspectable, but it does not automatically establish artifact license compatibility for every benchmark module, hidden split policy, API stability, or whether leaderboard-style numbers remain comparable after dependency drift.
