1. Select cases. From base and spurious-RLVR Qwen2.5-Math-7B checkpoints, label questions wrong-to-right as leakage candidates; use stable questions and LiveMathBench as controls.

2. Detect the macro signature. Track full-text and answer-token perplexity across checkpoints, then use partial-prompt completion to test whether answer strings are retrieved rather than reasoned.

3. Localize the circuit. Path-patch leakage/stable activations, inspect layerwise Logit Lens and counterfactual MLP JSD, and fit NDE trajectories. The combined output is a Functional Anchor at L18–20 and Structural Adapters from L21 onward.

4. Test causality. Reset or retain the selected layers, rank ten task-relevant MLP neurons per layer by key activation and answer-token overlap, and scale their keys at inference. A Layer-19 probe gates suppression only for suspicious prompts.

Reproduction requires released analysis code, the exact Qwen checkpoints and upstream RLVR data/preparation. The paper does not release a new dataset or the announced OLMo/LLaMA/Qwen3 checkpoints.
