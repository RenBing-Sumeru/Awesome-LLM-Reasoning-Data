1. **Construct visual representations:** Convert mathematical reasoning steps into visual process inputs that are easier for the model to inspect and compare.
2. **Generate CoT reviews:** Sample candidate rationales and use a strong model to produce stepwise analyses, scores, and terminal judgments, forming VRPRM3.6K.
3. **Supervise fine-tuning:** Train the PRM on 4,294 records to generate an evaluation rationale before assigning step rewards.
4. **Apply reinforcement learning:** Optimize scoring with about 50K non-CoT process examples and use the model for Best-of-N selection.
