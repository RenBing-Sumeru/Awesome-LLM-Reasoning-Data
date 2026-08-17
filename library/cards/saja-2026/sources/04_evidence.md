**Claim.** A single rubric call plus multi-dimensional calibration can match more expensive judge-alignment systems. **Setup.** The authors compare raw judging, one-dimensional calibration, SAJA, LLM-RUBRIC, FELIX, and prompt optimization across public scoring, preference, and classification tasks.

**Result.** On SummEval, Spearman rho rises from 0.60 for raw/one-dimensional calibration to 0.74 for SAJA and RMSE falls from 1.46 to 0.42 (Table 3). On LLM-RUBRIC, top-2 rubric labels yield rho 0.36 versus 0.37 for full logit distributions (Table 4). MT-Bench F1 rises from 0.78 to 0.86; confidence triage automates 44% of cases at 99.6% accuracy.

The evidence supports the tested rubrics and label budgets, not automatic transfer to specialized domains: Paper Reviews trails FELIX, and the +5.71% proprietary result cannot be independently reproduced from disclosed data.
