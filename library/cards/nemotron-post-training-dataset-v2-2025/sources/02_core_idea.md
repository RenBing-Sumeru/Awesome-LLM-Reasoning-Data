The one-sentence contribution is: package 6.34 million synthetic post-training conversations across four technical/chat categories and five target-language splits, while retaining enough row metadata to stratify by generator, license, version, category, and reasoning mode.

| Contract element | Released or documented object |
|---|---|
| Prompt/task | Public/open-corpus prompt or synthetically generated prompt; upstream source ID is not universal |
| Behavior | One or more named DeepSeek/Qwen models produce a message-sequence response, sometimes in reasoning-on and reasoning-off modes |
| Trace/answer | `messages` carries the conversation; `reasoning` labels the mode; multilingual reasoning traces remain English |
| Selection feedback | Release-level quality/complexity and syntax checks, plus domain-specific checks described in the report |
| Row metadata | `uuid`, `license`, `generator`, `version`, `category`, `reasoning` |
| Missing feedback | Per-row verifier version/input/output/threshold, rejected candidates, scalar reward, and stage/run membership |

The feedback contract is therefore **mixed at pipeline level but answer-level in the released object**. The paper reports language identification, a lightweight tool-call verification layer, safety guards, IFEval rules, WorkBench database-state comparison, and a Qwen-based reward model in different branches. Those systems can observe target-language identity, tool formatting or environment state, instruction satisfaction, safety judgments, or rollout quality in their own stages. The visible release cannot show which system observed a given row or whether that system accepted it correctly.

The closest predecessor is NVIDIA's Nemotron-Post-Training-Dataset-v1, which the report uses for math, science, and code material. Version 2 adds a five-language extension and a different release ledger. The change is breadth plus explicit operational metadata, not a new SFT objective, translation method, verifier, DPO algorithm, or GRPO algorithm.
