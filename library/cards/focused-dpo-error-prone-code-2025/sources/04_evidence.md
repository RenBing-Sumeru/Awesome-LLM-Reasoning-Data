On the constructed analysis set, common prefix plus chosen middle has a 0.5651 correlation with final correctness, while prefix plus rejected middle has −0.6085; prefix and suffix alone are near zero. Continuing from the chosen middle gives 90.02% pass@1, versus 3.17% from the rejected middle.

Focused-DPO improves average relative accuracy by 4.79% on HumanEval(+) and MBPP(+) over the reported baselines. On LiveCodeBench Hard, Qwen2.5-Coder-Instruct rises from 0.034 to 0.048, a 42.86% relative improvement, while its overall LiveCodeBench average rises from 0.312 to 0.339.
