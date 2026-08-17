1. **Proof-completion evaluation:** Pin the official Lean version, replace only theorem `sorry` holes, measure compilation success, and stratify by curated status, difficulty, and theorem count while scanning for cheating constructs.

2. **Verified-code SFT or RLVR:** Train models to generate functions and proofs and use Lean diagnostics as feedback. Rewards can be staged across syntax, type checking, example execution, and theorem closure.

3. **Specification-quality research:** Compare original APPS tests, `#eval` checks, and universal theorems, generating counterexamples to test specification adequacy. For runtime performance, system APIs, or multi-file repositories, FVAPPS’s pure-function Lean representation is insufficient and needs real execution environments.
