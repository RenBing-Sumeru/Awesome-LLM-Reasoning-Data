1. Generate candidates. Mistral 7B, GPT-3.5, and Llama-3.1 70B answer samples from TruthfulQA, TriviaQA, and HotpotQA.

2. Establish human reference. Human annotators judge candidate outputs; their majority vote is the evaluation comparison target.

3. Judge with references. Each LLM judge receives P={input, candidate answer, reference answer} and returns a True/False verdict. The reference answer is the central constraint.

4. Aggregate and compare. Majority vote across three LLM judges is compared with human-majority labels using Cohen's kappa. The method has no training stage; prompt wording, judge versions, 100-sample slices, and voting rule must be fixed for reproduction.
