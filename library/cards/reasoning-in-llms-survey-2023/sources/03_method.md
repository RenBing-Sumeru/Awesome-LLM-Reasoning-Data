1. **Collect primary claims.** Input: papers on language-model reasoning available through the survey period. Operation: record the task, model, prompt or training data, generated rationale/answer, feedback, and metric. Output: comparable claim records. Check: do not merge results with different models or evaluation protocols.

2. **Route supervised methods.** Input: examples with annotated answers, derivations, explanations, or programs. Operation: group methods by how those targets train the model. Output: a map of supervised reasoning data and consumers. Check: distinguish answer-only labels from process supervision.

3. **Route prompting methods.** Input: instructions, demonstrations, decompositions, working-memory prompts, and tool prompts used at inference time. Operation: classify zero/few-shot and in-context elicitation methods. Output: a map of inference-time interventions. Check: a prompt gain does not by itself show parameter learning.

4. **Route hybrid methods.** Input: model-generated rationales or answers plus a selection signal. Operation: organize self-training, bootstrapping, and iterative generation-training loops. Output: a map from generated records to later training. Check: identify the trace author, acceptance rule, and whether intermediate steps are verified.

5. **Separate evaluation and interpretation.** Input: benchmarks, task accuracy, analyses, and qualitative chains. Operation: classify what is measured and what conclusions are drawn. Output: a decision map for reading primary papers. Check: verify contamination, prompt/model versions, and whether fluent explanations support faithfulness claims.
