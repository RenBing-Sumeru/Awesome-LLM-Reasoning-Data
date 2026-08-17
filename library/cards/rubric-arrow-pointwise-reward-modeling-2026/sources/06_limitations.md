1. **Self-generated rubric bias:** The generator may omit real user requirements or create criteria tailored to training preferences. Critical domains need human audits of atomicity and coverage.


2. **Preference inheritance:** Using only pairwise labels does not remove label bias; erroneous preferences train both criteria and judge.


3. **Training complexity:** Alternating GRPO adds compute and instability. Reproduction must report sampling budgets, update ratios, and reward normalisation.
