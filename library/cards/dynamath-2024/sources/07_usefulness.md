Use DynaMath as a recipe for dynamic multimodal benchmark design: preserve seed id, source, Python generator, variant parameters, random seeds, image renderer, generated question text, generated answer, model response, parser result, average accuracy, and worst-case seed outcome.

For atlas work, DynaMath is a strong example of moving from static benchmark rows to auditable programmatic families. It is useful for evaluating VLM robustness, benchmark contamination mitigation, and feedback contracts where the verifier is a generator plus answer matcher rather than a human judge.
