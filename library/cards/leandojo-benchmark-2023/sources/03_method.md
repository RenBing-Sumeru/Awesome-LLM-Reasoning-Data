1. Inputs: Lean files and theorem declarations from supported repositories, plus dependency and premise information extracted by LeanDojo.
2. Pipeline: trace repositories, build theorem/premise data, split benchmark tasks, retrieve relevant premises, prompt a language model to produce tactics, and execute them in Lean.
3. Outputs: accepted proofs or tactic traces, failed attempts, Lean error messages, proof-state transitions, retrieval records, and benchmark pass rates.
4. Feedback: Lean's environment is the verifier; a tactic step must typecheck and move the proof state, and a full proof succeeds only when Lean accepts it under the pinned toolchain.
5. Reproducibility: pin Lean version, repository commit, LeanDojo version, traced corpus, split, timeout, search budget, retrieval index, model checkpoint, decoding settings, and whether generated proofs are rechecked from scratch.

Training and evaluation must be separated. The ReProver setup uses traced proofs and retrieved premises for learning, but benchmark claims depend on held-out theorem splits and Lean re-execution.
