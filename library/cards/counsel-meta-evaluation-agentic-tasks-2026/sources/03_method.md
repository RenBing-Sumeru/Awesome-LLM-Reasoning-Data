1. **Prepare traces and ground truth:** Collect successful and failed agent logs and have humans identify the critical error and cause.
2. **Generate candidate critiques:** Ask different critics to read the same trace and output localization, explanation, and repair advice.
3. **Perform human meta-evaluation:** Judge whether each critique identifies the correct issue, covers the main cause, cites specific evidence, and supports action.
4. **Package the calibration set:** Produce 225 trajectories and about 1.13K critique labels for comparing or training agent judges.
