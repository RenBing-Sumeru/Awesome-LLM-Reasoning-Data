1. **One-sentence position:** LLaVA-Critic builds critic instruction data spanning diverse tasks and criteria and trains an open generalist multimodal evaluator that produces scores and rationales, performs pairwise comparisons, and supplies reward signals for preference learning.

2. **Method takeaway:** Design task-specific scoring or comparison criteria and use strong judges to generate scores, chosen/rejected labels, and natural-language rationales. Apply rule checks, format normalization, and quality filtering to unify pointwise and pairwise data as critic-instruction records.

3. **Data takeaway:** LLaVA-Critic-113K contains about 46K images and 113K critic-instruction examples spanning scoring, pairwise preference, evaluation rationales, and diverse visual tasks.

4. **Evidence anchor:** LLaVA-Critic matches or exceeds GPT models on several LMM-as-a-Judge evaluations and supplies useful rewards in preference-learning experiments, improving aligned multimodal models.

5. **Reuse decision:** Train an open multimodal judge that returns scores, preferences, and rationales. The main risk is that many labels are produced by strong models and inherit their visual blind spots, style preferences, and positional bias.
