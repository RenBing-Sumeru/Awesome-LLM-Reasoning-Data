On contaminated leakage subsets, Anchor reset is more damaging than Adapter reset: MATH-500 falls 98%→86% and MinervaMath 88%→72%, versus 92% and 78% after Adapter reset (Fig. 8). LiveMathBench remains about 70% across the ablations, supporting dataset-specific shortcut dependence rather than a general reasoning circuit.

The selective audit is the decisive intervention: its Layer-19 gate fires on 79/128 MATH-500 wrong-to-right cases and reduces accuracy 100.0%→85.16% (exact McNemar p=3.81×10^-6), but fires on 0/30 AIME-2025 and 0/100 LiveMathBench cases, leaving their accuracy unchanged (Table 1).

These results support a Qwen contamination mechanism in these settings; they do not establish that every RLVR gain or every correct Qwen answer is memorized.
