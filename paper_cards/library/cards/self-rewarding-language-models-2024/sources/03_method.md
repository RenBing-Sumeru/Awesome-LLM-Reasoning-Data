At each iteration, the current model generates candidate answers for instruction prompts. A judge prompt asks that model to choose the better candidate, producing chosen and rejected responses that can be consumed by DPO.

The authors repeat this generation, self-judgment, and DPO sequence for three iterations with Llama 2 70B. They evaluate both instruction-following behavior and judging quality, treating the latter as a training-relevant capability rather than a fixed evaluator property.
