Generates 100 GSM8K solutions per problem and uses a learned verifier to select the highest-scoring candidate.

GPT-3-family generators fine-tuned for two epochs sample complete natural-language solutions. The feedback contract is: a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness. The terminal condition is: the selected candidate reaches the reference final answer; oracle test@N asks whether any candidate does.
