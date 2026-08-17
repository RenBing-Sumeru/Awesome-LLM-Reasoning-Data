The one-sentence contribution is: spend a large hidden search budget to find difficult questions and long, exploratory-looking reasoning chains, then use only the top 800 triples to elicit reasoning from Qwen2.5-32B-Instruct through full SFT.

The construction contract has four distinct feedback surfaces:

| Stage | Object | Feedback / selection rule | What it cannot establish |
|---|---|---|---|
| Coarse difficulty | Candidate question | Exclude if Qwen2.5-Math-7B-Instruct solves it within four attempts | Whether failures reflect true difficulty, decoding variance, or checker error |
| Fine difficulty | Remaining question | Retain if DeepSeek-R1-Distill-Qwen-32B solves only 1–3 of 32 attempts | Correct difficulty outside this model/budget |
| Benchmark audit | Question | Undisclosed n-gram matching against evaluation benchmarks | Semantic overlap, pretraining contamination, or reproducible decisions |
| Trace quality | Candidate solution | Weighted lexical score: length 30%; validation-word frequency 20%; tentative-expression frequency 25%; connective-phrase frequency 25%, normalized by length | Mathematical validity, step faithfulness, or causal usefulness of the words |

After the filters produce a 2,125-question LIMO-Pool, DeepSeek R1, DeepSeek-R1-Distill-Qwen-32B, and QwQ-32B each supply multiple candidate solutions. The authors examine filtered examples to identify elaborated reasoning, self-verification, exploration, and adaptive granularity. The lexical score chooses the highest-scoring solution for each question, then all pairs are ranked and the top 800 retained.

The feedback contract is therefore mixed but incompletely specified. Model solve counts define relative question difficulty, n-gram matching supplies a lexical contamination check, humans inform the quality dimensions, and a deterministic proxy score ranks traces. The exact final-answer checker for generated solutions is not published. Inclusion means “passed the disclosed funnel and ranked highly by the proxy,” not “every reasoning step was verified.”

The closest comparison class is large SFT corpora that keep many more mathematical examples and recent small curated sets that emphasize long reasoning traces. LIMO changes the emphasis by treating base-model prerequisite knowledge and demonstration quality as the limiting variables. It does not introduce full SFT, long-CoT distillation, solve-rate filtering, or keyword scoring as individual techniques.

The direction signal is also an audit warning: “800 examples” is the final loss-bearing set size, not the total data or compute budget. The pipeline begins with tens of millions of questions, 4- and 32-attempt difficulty passes, and multiple 32B-scale reasoning teachers, none of whose construction cost or rejected outputs is released.
