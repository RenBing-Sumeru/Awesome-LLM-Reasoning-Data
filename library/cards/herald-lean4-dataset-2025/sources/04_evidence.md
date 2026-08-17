The accepted ICLR 2025 paper reports the following Herald Translator Pass@128 results: 96.7 on miniF2F-test, 96.3 on miniF2F-valid, 23.5 on Extract-Theorem, and 16.0 on College CoT. These numbers support the claim that the released statement data can train an effective translator on the evaluated setup. They do not establish that every released NL-FL row is semantically aligned, that the proof annotations improve a proof model, or that the corpus is uncontaminated.

The most informative quality evidence is the ProofNet human audit in Table 4:

| Model | Passed validation | Correct | Minor error | Major error |
|---|---:|---:|---:|---:|
| InternLM2 | 72 | 42 | 12 | 18 |
| Herald | 151 | 101 | 24 | 26 |

Herald produces more validation-passed outputs and more fully correct outputs than InternLM2 in this audit. At the same time, only 101 of its 151 validation-passed outputs are fully correct. Fifty accepted outputs still contain minor or major semantic errors. This is direct evidence that the Lean-plus-back-translation/NLI pipeline is a useful but noisy proxy for semantic correctness.

The appendix makes the boundary concrete. One candidate consisting only of comments can pass the compiler and NLI path despite containing no theorem declaration. Another candidate compiles but formalizes a two-variable polynomial problem as a one-variable proposition. These are not merely hypothetical limitations: they demonstrate that “no Lean error” and learned equivalence can jointly admit vacuous or semantically wrong outputs. False negatives are also possible because back-translation and the learned judge can distort a correct formalization.

Lean still provides meaningful evidence within its actual scope. Tactic-state-derived declarations are reported as compiler-validated, complete source proofs can be checked, and the released evaluation code uses a specific mechanical rule: accept Lean output when REPL messages contain no severity `error`. Warnings remain acceptable, including warnings associated with `sorry`. Thus the formal layer supports syntactic and type-level validity under an environment, not proof existence for statement rows or natural-language equivalence.

Version drift matters when citing results. The accepted proceedings paper reports 96.7% on miniF2F-test and 23.5% on the graduate-level Extract-Theorem set. The arXiv v2 abstract still reports older values, 93.2% and 22.5%. This Card treats the accepted ICLR paper as the authoritative results source and retains arXiv only as a versioned access point.
