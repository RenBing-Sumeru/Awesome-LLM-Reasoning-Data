1. Collect 83 SE benchmarks and the disclosed StarCoder pre-training corpus across Java, Python, and C/C++.

2. Run MinHash+LSH over benchmark/pre-training pairs to nominate near duplicates; the scale is 1.7 trillion compared pairs.

3. Eight experienced annotators review nominated pairs and assign duplicate labels; confirmed duplicates determine each benchmark's leakage ratio.

4. Remove confirmed leaked items to form LessLeak-Bench, and retain 6,691 manually verified pairs for detection research. Reproduction requires the exact corpus, benchmark revisions, MinHash parameters, annotation policy, and original licenses; detection without disclosed pre-training data is not solved.
