1. **Positioning:** VRPRM uses a small CoT set to teach analysis and ordinary labels to calibrate scoring.
2. **Method handle:** It visualizes steps, generates reviews, applies SFT, and runs RL on 50K examples.
3. **Data handle:** VRPRM3.6K contains 4,294 rationale and step-score records.
4. **Evidence anchor:** It uses far less data than a 400K baseline and reaches up to 118% relative Best-of-N gain.
5. **Reuse decision:** It suits interpretable PRMs; audit teacher bias and absolute gains first. Evaluation should also record CoT quality, scoring accuracy, and inference cost per candidate.
