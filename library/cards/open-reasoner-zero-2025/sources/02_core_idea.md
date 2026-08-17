The one-sentence contribution is: run vanilla critic-based PPO directly from Qwen2.5 Base, generate 64 responses for every sampled reasoning prompt, assign a binary programmatic answer reward, and scale the same recipe from 0.5B to 32B without an SFT warm start.

| Contract element | Released prompt object | Online training object |
|---|---|---|
| Input | `human.value` problem | Prompt wrapped in named `think` and `answer` sections |
| Reference | `assistant.ground_truth.value` | Used by the checker, not shown as target text to the policy |
| Behavior | Not released | Full sampled response-token trajectory |
| Verifier observation | Not released | Parsed boxed answer and normalized mathematical comparison |
| Reward | Not released | Terminal Boolean correctness mapped to 1 or 0; intermediate rewards are zero |
| Value feedback | Not released | Separate critic prediction \(V(s_t)\) at every response-token state |
| Advantage | Not released | \(R - V(s_t)\) because \(\gamma=\lambda=1\), then batch normalization |
| Grouping | Three named prompt files | 64 responses per prompt; 128 unique prompts per generation iteration |
| Failures | Not released | Incorrect, unparseable, truncated, repetitive, and other failed responses exist during training |

The feedback contract is answer-level, programmatic, and terminal. It does not label whether intermediate reasoning steps are correct. The paper describes extracting the answer span and awarding 1 for an exact match to the reference. The released implementation is more specific: it expects a `\boxed{...}` expression inside the named `answer` section, normalizes candidate and reference with `solution2answer`, and applies `is_equal` mathematical-equivalence logic. This difference matters for parser failures, accepted equivalent forms, and reward-hacking analysis.

The learned critic supplies trajectory-value estimates, not process-correctness labels. With \(\gamma=\lambda=1\), every token's return is the same terminal outcome and the advantage subtracts the critic's current value prediction. A critic can devalue repetitive prefixes without certifying the logical validity of the reasoning.

The released prompt corpus supports ORZ's RLVR recipe; it is not SFT data in this Card's training-use classification, and the main method is not distillation. A separate 14B transfer experiment starts from a distilled checkpoint but does not redefine the core Reasoner-Zero object.
