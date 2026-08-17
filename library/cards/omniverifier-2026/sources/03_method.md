1. Define visual verification targets. ViVerBench organizes visual outcomes into 16 categories, with prompts, generated images or multimodal responses, and verification targets.

2. Construct verification data. The authors use two automated pipelines to build large-scale visual-verification supervision; detailed scale, license, and every filtering threshold should be taken from the release, not inferred from the benchmark page.

3. Train OmniVerifier-7B. The model learns to output a verification answer and explanation for an image–prompt input, making its judgment usable as feedback rather than a scalar-only score.

4. Evaluate verification. Store model responses in JSON and run either the released rule-based evaluator or the model-based evaluator, which uses GPT-4.1 as judge; the chosen evaluator is part of the measurement contract.

5. Refine at test time. OmniVerifier-TTS sequentially uses verifier feedback to bridge generation and editing. Reproduction requires the released model/data versions, prompt/image inputs, evaluator choice, and generation/editing budget; unspecified hyperparameters are unknown.
