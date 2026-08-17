The core construction records are not public: the full source statement manifest, Claude Sonnet 4 formalizer examples, teacher whole-proof traces, S1/S2/S3 tables, failed attempts, compiler messages, correction targets, RL rollouts, reward logs, and per-item generator/checkpoint lineage. Models and inference code therefore do not make the training dataset independently auditable.

Formal verification has two semantic boundaries. A Lean-successful proof is valid only for the supplied formal theorem in the configured environment. Autoformalization can still alter assumptions or conclusions, and extracted goals from failed proofs can be mathematically unhelpful or unprovable. The paper uses LLM semantic judging and correctness/difficulty filters, but does not report their false-accept or false-reject rates.

The feedback distribution is selective. Expert iteration retains verified successes, while RL dynamic sampling removes prompts with pass rate 0 and prompts above 0.75. Failed easy and persistently unsolved cases are therefore treated differently, and the public report does not expose enough records to measure the resulting domain or difficulty skew.

Reproduction also depends on versioning. The repository points to Lean 4.9 and pins a mathlib4 submodule, but does not publish immutable containers for every experiment. Main-text and appendix wording differ on whether the 32B RL run consumed about 67K or 64K unique inputs. Exact temperatures, seeds, source proportions, per-stage yields, averaging coefficients for the final released models, and broad train/benchmark overlap remain unknown.

The official repository and MathOlympiadBench state Apache-2.0, but that does not automatically resolve licenses for every upstream theorem corpus, natural-language source, teacher output, or derived training record. Benchmark gains are aggregate utility evidence, not proof of training-data quality.

