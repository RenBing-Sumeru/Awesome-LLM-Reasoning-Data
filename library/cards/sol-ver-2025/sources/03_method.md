The paper describes the following pipeline.

1. Problem sourcing. Llama 3.1 8B is prompted with open-source snippets from OSS-Instruct and problem-format templates adapted from MBPP, APPS, and CodeContests training sets. It generates Python problem descriptions and then function signatures. Deduplication leaves 103,280 problem descriptions. Exact source revisions, mixture weights, and the deduplication algorithm are not disclosed.

2. Solver generation. Given a problem and signature, the model generates code and is asked to explain its reasoning in comments. The number of code candidates and main-generation decoding settings are not consolidated in the paper.

3. Verifier generation. The model first generates test inputs for general, corner, and difficult cases, then predicts expected outputs with reasoning. Majority voting and CoT are used for expected-output generation. Candidate tests are selected to maximize branch coverage of the solution and to diversify output values so trivial constant-output code is less likely to pass.

4. Execution and data construction. Code is executed against the generated suite and scored by pass fraction. The default binary gate requires at least one solution to pass every generated test. Full-pass solution-test tuples populate mixed Solver/Verifier SFT data. Failing code under a chosen test suite forms Solver DPO negatives; alternative expected outputs form Verifier DPO negatives. In Iter 1, only 45% of examples yield such an agreed pair.

5. Iteration. Each round performs SFT followed by DPO for both roles, then reuses the updated weights to regenerate data. Sol-Ver reports three rounds. Iter 1 and Iter 2 test outputs show 75.14% agreement on MBPP and 72.38% on LiveCodeBench; tests from both rounds are ensembled for third-round data generation.

Training uses fairseq2 and inference uses vLLM. Evaluation code generation uses greedy pass@1. For the false-positive evaluation only, 20 candidate codes per problem are sampled with temperature 0.6 and top-p 0.9, then gold tests identify 400 flawed examples for each benchmark. These settings must not be misreported as the undisclosed main synthetic-generation configuration. No author-linked code, generated corpus, checkpoint, or executable sandbox specification was verified.
