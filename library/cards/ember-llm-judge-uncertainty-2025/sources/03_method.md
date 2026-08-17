1. Collect markers. The authors take 20 frequent strengtheners and 20 weakeners, sampling by observed LLM-use frequency.

2. Build QA triples. They select 1,000 Natural Questions and 1,000 TriviaQA examples from EVOUNA; GPT-4o adds a strengthener, weakener, or nothing, and humans check correctness and naturalness.

3. Build pairwise records. MIXINSTRUCT instructions receive GPT-4o-generated correct and incorrect answers, then markers on both sides.

4. Judge counterfactuals. Five LLMs evaluate each condition; accuracy change from neutral is the robustness signal, with human judgments as reference. Greedy generation uses temperature 0. Code/data are public; repository license must be checked.
