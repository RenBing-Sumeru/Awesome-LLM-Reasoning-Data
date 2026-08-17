The central recipe is to trade a small set of correctness-certified solutions for broad instruction coverage: exact-match-deduplicate public competitive-programming questions, sample many DeepSeek-R1 reasoning-and-code responses, retain format- and syntax-conforming outputs, and measure how corpus scale and execution-based selection change downstream SFT.

| Contract element | What is retained or observed |
|---|---|
| Prompt | Question text from TACO, APPS, CodeContests, or OpenR1 CodeForces, or a source index for reconstruction |
| Teacher behavior | DeepSeek-R1 `output`, including a tagged reasoning trace and a final code block |
| Artifact | Extracted Python `solution`; C++ is generated for an ablation |
| Metadata | `id`, `dataset`, `split`, `source`, `license`, `difficulty`, and when needed `index` |
| Main acceptance signal | Reasoning/code format and syntactic parseability |
| Signals not attached release-wide | Unit-test outcome, scalar reward, step label, or calibrated probability of correctness |

Benchmark-overlap screening adds a different feedback layer: cosine retrieval flags pairs, Llama-3.3-70B-Instruct and Qwen2.5-32B-Instruct judge semantic similarity, and humans inspect the remaining candidates. Unit tests appear only in the CodeContests ablation and benchmark evaluation. The target is therefore answer-level supervision even though the answer includes a long trace.

The closest comparison named in the paper is KODCODE, which contains 447K DeepSeek-R1 code-reasoning samples but fine-tunes on smaller LLM-test-validated subsets. OpenCodeReasoning changes the scale, source mixture, and ablation surface rather than inventing the teacher, SFT objective, syntax parser, or a new verifier.
