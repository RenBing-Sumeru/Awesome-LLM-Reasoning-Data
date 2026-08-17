1. **Initialize seeds.** Input: 52K Alpaca instructions. Operation: attach an evolution-round identifier and preserve the original text. Output: the current instruction pool. Check: keep seed identity so later complexity claims remain traceable.

2. **Evolve in depth.** Input: a current instruction and one of five prompts. Operation: add constraints, deepen inquiry, make the request concrete, require more reasoning steps, or complicate the input. Output: a harder candidate instruction. Check: reject evolutions that do not add information, cannot be answered, or merely copy the seed.

3. **Evolve in breadth.** Input: a seed or current instruction. Operation: ask the OpenAI dialogue model to create a rarer, differently scoped task inspired by it. Output: a new task type rather than a restatement. Check: enforce plausibility, clarity, and non-duplication.

4. **Generate answers and iterate.** Input: accepted evolved instructions and the OpenAI dialogue model. Operation: generate target responses, merge the new records, and repeat evolution for four rounds. Output: 250K instruction-response candidates. Check: save teacher/version, operator, round, and filtering decision.

5. **Train and evaluate.** Input: a random 70K candidate subset and LLaMA 13B. Operation: SFT the student and compare it with Alpaca, Vicuna, and other 13B models on common benchmarks and WizardEval. Output: WizardLM and evaluation scores. Check: match data size and base model when attributing gains to Evol-Instruct.
