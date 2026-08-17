The contribution is a compact benchmark that turns selected natural-language instructions into executable predicates. A model response is not judged for global quality; it is checked against each declared instruction and then aggregated into prompt-level strict and loose scores.

The core mechanism is the instruction registry: each prompt lists instruction ids and arguments, and evaluator code calls the matching checker on the model response. Loose scoring allows limited prompt/response normalization, while strict scoring uses the response more directly.

Closest comparisons are human instruction-following evaluation and LLM-based auto-evaluation. IFEval changes the direction by making the feedback contract explicit and auditable. The quality signal is strongest when the desired behavior is exactly expressible as a deterministic rule.
