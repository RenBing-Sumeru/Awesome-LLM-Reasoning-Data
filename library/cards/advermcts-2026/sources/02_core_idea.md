AdverMCTS couples two persistent Monte Carlo tree searches through a shared, problem-local test memory.

| Component | Produces | Feedback it receives | Effect on later search |
|---|---|---|---|
| Solver MCTS | partial reasoning thoughts and complete Python programs | public-test pass rate; penalties for failing retained adversarial tests | only programs passing all visible and retained tests may enter the code pool |
| Attacker MCTS | vulnerability strategies and concrete test inputs | output divergence among programs in the current code pool | searches for inputs that separate apparently correct programs |
| LLM output Arbiter | a validity judgment and expected output for a divergent input | problem statement, candidate input, and divergent program outputs | accepted `(input, expected_output)` pairs enter global test memory |
| Execution environment | outputs, failures, timeouts, and pass/fail signals | generated programs and public/adversarial inputs | supplies the observable evidence used by all three roles |
| Final reranker | one submitted program | public-test score first, accumulated adversarial-test score second | uses retained tests as a hard secondary discriminator |

The same selected backbone family is reused as Solver, Attacker, and Arbiter; there is no separately trained verifier or independent teacher. The important feedback contract is therefore **mixed**: executable tests provide objective observations, divergence is only a heuristic search reward, and the expected output is supplied by an LLM judge. A retained test becomes a persistent hard constraint even though its label may be wrong.

Compared with MCTS-Thought and RethinkMCTS, the central change is that verification evidence evolves with the candidate pool rather than remaining a fixed set of public tests. Compared with CodeT-style test generation, the method organizes test construction as a persistent adversarial search and feeds accepted tests back into subsequent Solver expansion. These are methodological comparisons from the paper, not evidence that the produced tests form a higher-quality reusable dataset.

The verifier cannot observe hidden-test correctness. It can also miss a shared bug when every pooled program returns the same wrong output, because output divergence is then zero. The paper states this limitation explicitly.
