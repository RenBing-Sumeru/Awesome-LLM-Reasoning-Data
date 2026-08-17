1. **One-sentence positioning:** Simple preference labels and short explanations are insufficient for training general reward reasoning; it uses iteratively generating structured reviews and filtering them by preference-label consistency and format.
2. **Method handle:** The pipeline covers source preparation, record generation, verification, filtering, and release.
3. **Data handle:** GRAM-RR-TrainingData contains about 28.5GB of million-scale preference pairs and reward-reasoning trajectories and centers on prompts, candidate responses, feedback, comparisons, conclusions, and A/B labels.
4. **Evidence anchor:** Self-trained models consistently outperform size-matched generative baselines on several reward benchmarks, with conclusions limited to the reported setup.
5. **Reuse decision:** It is most suitable for general reward-model evaluation and policy selection; self-training bias, duplication, contamination, and unfaithful rationales must be checked before reuse.
