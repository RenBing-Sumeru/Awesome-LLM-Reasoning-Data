
- Treat the 133,700 examples as generated weak-supervision records, not human-verified process annotations.
- Record both verifier layers: Math-Verify creates trajectory outcomes, while Qwen3-0.6B-Base predicts process scores from frozen Qwen3-8B hidden states.
- Preserve the exact contract: think-region extraction, \n\n segmentation, final-token hidden states, right-class probability, arithmetic mean, and argmax.
- Read benchmark gains as selector evidence, not as proof that every selected trace is correct or high quality; note the five-versus-six benchmark inconsistency.
- Keep code, checkpoint, constructed corpus, hidden states, split, validation, decontamination, and generated-artifact license unresolved until official releases exist.
