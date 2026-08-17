1. **Collect seeds.** The authors draw image-grounded questions from MMK12, MathVision, MathVista, and MathVerse, covering mathematics, biology, physics, geometry, and chemistry.

2. **Generate and cross-check chains.** GPT-4o produces numbered solutions at temperature 1.0. The final calculation and answer are removed; Gemini-2.5-flash, GPT-4o, and Qwen-2.5-VL-72B must all recover the correct answer before the chain is retained.

3. **Insert and verify errors.** GPT-4o is prompted to inject one of nine error types, including visual perception, while maintaining downstream coherence. LLM filtering and manual review decide whether the intended error is present and usable.

4. **Evaluate and calibrate.** A tested MPRM identifies erroneous steps under fixed prompts and temperature 0.0. Strict accuracy requires every true error and no false positive; relaxed precision and recall capture partial detection. BR2-PRM then uses benchmark calibration data to reliability-weight dimensions for best-of-N selection.

Reproduction requires the seed versions, generation and cross-verification prompts, model versions, human-review protocol, error templates, and evaluation split. Annotation budget and public artifact revision are unknown.
