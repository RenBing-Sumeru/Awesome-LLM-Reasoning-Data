1. Draw 1,055 recent competition problems from LiveCodeBench-v6, covering May 2023 to April 2025, as tasks less exposed to older models.
2. Ask strong generators to produce code, repairs, or unit-test outputs. For generation and repair, execute candidates against test cases; for unit tests, compare the generated expected output with ground truth.
3. Keep verified correct and incorrect outputs and discard problems that provide only one outcome. Pair one good and one bad candidate with the same instruction; randomize their presentation for pairwise judging.
4. Evaluate 26 judges with pairwise, pointwise, or best-of-N formats, reporting accuracy against the verified preference and analyses by task, difficulty, source model, and order swap.
5. Reproduce with the released dataset and prompts; fix dataset revision, generator outputs, execution harness, response preprocessing, and position order because each can alter the result.
