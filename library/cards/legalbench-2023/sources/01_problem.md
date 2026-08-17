LegalBench asks how to measure legal reasoning in English large language models across many task types rather than through a single bar-exam or legal-QA benchmark. The primary sources are arXiv:2308.11462, the Hazy Research project page, the official GitHub repository, and the Hugging Face dataset card.

The evaluation surface is an open-science collection of legal tasks. A sample may contain legal text, a prompt, a label, a class set, an extraction target, or a generation target, depending on whether the task is binary classification, multi-class classification, extraction, generation, or entailment.

The atlas boundary is legal reasoning benchmark construction. It is not a legal-advice product, not a verified law-currentness database, and not a single uniform metric. Reuse must keep task identity, source lineage, license, split, prompt, label space, and evaluator separate.
