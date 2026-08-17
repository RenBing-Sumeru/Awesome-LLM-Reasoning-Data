The learned probe is supervised by a strong LLM judge, so a high probe score can faithfully reproduce teacher bias rather than semantic correctness. Reuse should audit disagreements against human or executable references before treating it as a filter.

The reported benchmarks are reasoning tasks and the learned classifier depends on a base model, selected layers, prompts, and score taxonomy. Transfer to other domains or a changed model is unproven; retrain and revalidate rather than assuming plug-and-play judge validity.
