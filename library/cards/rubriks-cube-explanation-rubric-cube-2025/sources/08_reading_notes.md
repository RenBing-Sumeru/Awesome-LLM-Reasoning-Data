1. **One-sentence position:** Rubrik’s CUBE introduces an education-inspired explanation rubric and has humans plus six open- and closed-source LLMs annotate 26K explanations along its dimensions, enabling analysis of how task, difficulty, and generator affect quality.

2. **Method takeaway:** Define Rubrik from educational assessment principles, decomposing explanation quality into actionable dimensions rather than one overall score. Train human annotators and prompt six open/closed LLMs to apply the same rubric, retaining rater source and dimension labels.

3. **Data takeaway:** CUBE contains about 26,000 explanations covering two reasoning and two language tasks.

4. **Evidence anchor:** The 26K scale supports comparisons across four task families.

5. **Reuse decision:** Train a rubric-conditioned judge that outputs quality dimensions rather than one scalar. The main risk is that the rubric targets educational explanation quality, not formal proof correctness or factual faithfulness; users must match it to their evaluation contract.
