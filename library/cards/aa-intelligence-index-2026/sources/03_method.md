Inputs are model API responses on the component evaluations. The published v4.1 suite includes GDPval-AA v2, tau3-Banking, Terminal-Bench v2.1, SciCode, AA-LCR, AA-Omniscience, Humanity's Last Exam, GPQA Diamond, and CritPt.

Pipeline: run each component under the published testing settings, score with that component's verifier, normalize or aggregate repeats, then compute the weighted index. Outputs are component scores, category scores, and the final Intelligence Index.

Reproducibility requires pinning methodology version, benchmark snapshots, repeats, prompts, model API date, temperature, token limits, tool access, judge/equality-checker versions, and leaderboard date.
