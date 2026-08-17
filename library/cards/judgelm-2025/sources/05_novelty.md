PandaLM already fine-tunes an open judge and MT-Bench mitigates order effects by judging both answer orders at inference. JudgeLM changes the training record itself: it creates a swapped counterpart with swapped teacher scores, adds paired reference-conditioned supervision, and drops references during training. It also separates fast score generation from optional explanations.

The paper does not introduce LLM-as-a-judge or GPT-4 distillation. Its useful novelty is treating three failure modes as train-time data interventions and measuring them with swap consistency and bias metrics.
