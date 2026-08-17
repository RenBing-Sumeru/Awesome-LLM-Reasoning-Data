Prior approaches include zero-shot prompts such as “be concise,” explicit token budgets, external concise demonstrations, and Rational Metareasoning with a utility reward and iterative expert training. The paper finds prompting effects inconsistent across model families, especially for task-specialized math models.

Its specific construction change is per-question shortest-correct self-selection. Rather than compressing a chosen rationale token by token or imposing one global length threshold, it searches the target model's own distribution and preserves one concise parser-correct path for each solvable source question.

Few-shot conditioning and BoN search are treated as largely additive candidate-generation mechanisms. Distillation then amortizes their test-time overhead into model weights, enabling greedy evaluation. The FS-Self variant further shows how programmatic answer feedback and model judgment can occupy different layers of one recipe.

What is not new must remain explicit: the work does not introduce BoN, SFT, GSM8K, MATH, final-answer parsing, few-shot prompting, or token-length measurement. It does not prove shortest means faithful or optimal, and its main evidence remains task-specific mathematics. A sound reuse test should match construction compute and compare random-correct, shortest-correct, utility-based, length-stratified, and step-verified selectors.

