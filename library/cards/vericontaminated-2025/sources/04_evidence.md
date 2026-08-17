**Claim.** RTL benchmark results have material contamination risk, but its estimated level depends on detector and threshold.

**Setup.** Table I runs CDD (α=0.05) and Min-K% Prob (T=0.55) on RTLLM and VerilogEval across 12 models and reports pass rate; therefore the experiment compares detector signals, not verified training-corpus overlap.

**Result.** GPT-4o is 100.00% CDD-contaminated on both benchmarks and 98.00/99.36% under Min-K%, with RTLLM/VerilogEval pass rates 44.00/60.26%. GPT-3.5 is likewise near 100%, while estimates diverge substantially for other models.

**Boundary.** This supports an audit warning, not proof that every detected item was trained on; detector sensitivity and benchmark prompting are acknowledged confounders.
