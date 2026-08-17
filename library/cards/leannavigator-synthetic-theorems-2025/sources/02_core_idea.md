The core construction is to turn provable nodes in a Mathlib4 proof-state graph into supervised theorem/proof records.

| Contract element | Generation-time object | Public release |
|---|---|---|
| Task/state | Lean local hypotheses and target goal | Serialized proof-state string |
| Action | A tactic instantiated for the current state | Included only inside the target proof text |
| Observation | Error, successor state, or `ProofFinished` from LeanDojo | Not retained |
| Search structure | Directed graph with tactic-labelled edges and predecessor relations | Not retained |
| Success signal | `ProofFinished` reachable within at most eight tactics | Implied by the target; no verifier transcript |
| Selected target | Fewest-tactic path, tie-broken by total tactic-string length | Proof/tactic string |
| Failures | Invalid tactics and unsuccessful exploration attempts | Not retained |
| Provenance | Seed Mathlib4 theorem, graph, state ancestry, environment | Not retained per row |

The feedback contract is programmatic and environmental. Lean, accessed through LeanDojo, executes every proposed tactic. An error rejects the transition; a changed state extends the graph; `ProofFinished` supplies terminal success. No human judge or learned reward model decides correctness. This is stronger than text matching, but the released row does not carry the execution result, environment hash, or independent replay.

LeanNavigator reduces the candidate-action problem through normalized tactic templates. Variables are replaced by placeholders such as `{var0}`, hypotheses by `{hypothesis}`, and unrecognized spans by `{unknown}`. A contrastively trained GPTNeo-350M embedder places states and useful templates near each other; FAISS returns 100 nearest templates, which are filled with in-scope symbols and capped at 200 instantiated tactics per state.

The release is useful for supervised proof or tactic prediction only. It does not expose rollout groups, rewards, rejected candidates, policy log probabilities, or graph-level process labels needed to claim RLVR, reward-model, preference, or process-supervision data.
