# Reading notes

- **Positioning:** the paper addresses low question density per image, not a new multimodal architecture.
- **Method handle:** 40k selected seeds become 360k records through image mining plus complex, rephrased, and underspecified variants.
- **Data handle:** the public 174.6 MB JSON serializes an image path and two-turn LLaVA conversation; it does not serialize a rationale.
- **Evidence anchor:** under the same LLaVA-1.5-13B consumer, random 40k sampling scores 35.6 on MathVista, selection 38.2, and the full mixture 46.6.
- **Reuse decision:** use for short-answer multimodal SFT only after operation-stratified answer audits, image-level split checks, and per-source license review.
