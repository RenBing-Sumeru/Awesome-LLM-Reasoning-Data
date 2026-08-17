1. **Position.** OpenRubrics makes preference judging explainable through generated hard rules and principles.
2. **Method handle.** CRG sees a prompt plus ranked answers; preference-label consistency at threshold 0.5 decides whether each rubric record survives.
3. **Artifact handle.** The release reports 35.7K instructions and publishes data and weights at Hugging Face OpenRubrics; inspect its current license and source subsets.
4. **Evidence anchor.** RUBRIC-RM-8B averages 70.1 versus 57.7 for direct Qwen-3-8B; voting@5 reaches 73.0.
5. **Reuse decision.** Best for pairwise reward modeling with trusted labels; first audit cultural bias, label noise, and whether an absolute score rather than a pairwise verdict is required.
