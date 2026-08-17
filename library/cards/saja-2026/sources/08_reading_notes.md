1. **Position.** SAJA converts one rubric response into a human-aligned judge through a small calibrated head.
2. **Method.** Extract once, calibrate with 100-500 labels, and send low-confidence cases to people; the head, not prompt search, carries dataset adaptation.
3. **Artifact.** Official code is public; no downloadable paper dataset or checkpoint is claimed, so users must supply their own labeled calibration set.
4. **Evidence.** SummEval rho is 0.74 versus 0.60 without multi-dimensional calibration; top-2 labels retain 0.36 versus 0.37 with logits.
5. **Decision.** Suitable for stable API evaluation pipelines; first check that a fixed rubric does not miss the task's specialized error modes.
