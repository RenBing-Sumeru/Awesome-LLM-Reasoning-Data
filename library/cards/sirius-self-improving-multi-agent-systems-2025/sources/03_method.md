The construction chain can be audited as five stages:

| Stage | Evidence-backed contract |
|---|---|
| Inputs | Labeled `(problem, answer)` pairs from custom College Physics and Chemistry pools, PubMedQA's labeled subset, or configured negotiation instances; manually designed role prompts and directed graphs |
| Interaction | Each role generates from the task and predecessor messages; competitive roles also condition on previous rounds and game state |
| Feedback | QA exposes parsed final-answer equality; failed QA augmentation adds ground-truth-conditioned critic text; Actor-Critic adds learned Judgment plus Critic feedback; games expose terminal state and deterministic role utility |
| Selection | Direct terminal success admits all participating role messages; a failed QA episode admits only the regenerated selected role and rerun successors when final correctness is restored |
| Outputs | Per-role, per-iteration SFT libraries followed by separate standard SFT jobs and another system rollout; exact paper-run libraries and trained model identifiers are not released |

For College Physics and Chemistry the graph is Physicist/Chemist → Mathematician → Summarizer. PubMedQA problem solving uses Context Analyst → Problem Solver. Actor-Critic uses Actor, Judgment, and Critic, with rejected Actor responses sent through feedback and regeneration. Resource Exchange and Ultimatum permit at most eight interaction rounds; Seller-Buyer permits ten. The natural-language moves are interpreted by the game code to update state and compute role-specific utilities.

Problem-solving verification parses the final answer as a multiple-choice letter, number, or yes/no label and compares it with ground truth. The current physics/chemistry implementation searches only a short suffix in some paths, so formatting can change correctness. Main inference temperature is 0. The named backbones are `gpt-3.5-turbo-0125`, `gpt-4o-mini-2024-07-18`, and, in Table 3 and Appendix D, `Llama-3.2-3B-Instruct`. Role policies are updated through OpenAI's Fine-tuning API, not a policy-gradient objective.

The paper reports 212/107 train/test items for physics: MMLU 68/34, GPQA 57/29, and TheoremQA 87/44. Chemistry has 128/65: MMLU 66/34 and GPQA 62/31. PubMedQA follows 500/500. Exact source rows, upstream revisions, ordering, split seed, and duplicate/decontamination decisions are unavailable. Across nine QA task/backbone cells, Table 7 supports 1,446 initially correct episodes plus 444 successfully repaired failures, totaling 1,890 case-level episodes. This is not a role-SFT-row count because one episode can yield multiple records and repair begins at different roles.

The implementation leaves key controls unresolved. Algorithm 1 exposes `epsilon`; Algorithm 2 exposes `maxsol`, `maxf`, and `maxre`; numeric values are not disclosed. A total iteration input `T` is defined, but a complete main-run iteration manifest is not pinned. Exact epochs, learning rate, batch size, provider defaults, run seeds, fine-tune IDs, token/cost budget, and compute inventory are `unknown`. Current code often uses a 4,096-token response cap, but that is not a complete paper-run budget.

Artifact and version inventory:

| Artifact | Verified state |
|---|---|
| NeurIPS final paper | Official 30-page Main Conference Track PDF |
| Proceedings supplement | Official ZIP with the three setting implementations; no README, environment file, license, sample data, trajectories, logs, or outputs |
| Current repository | Inspected at `16643cdc484b07d4d20419ba785a32a9845639b7`; 80 files, 13 commits, no tag or GitHub release |
| Code evolution | Current repository adds documentation, environment, MIT license, sample data, and helpers; 18 of 66 files shared with the supplement differ |
| Public data | One five-row `dataset/phy_train.jsonl` file with `index`, `question`, `groundtruth`, and `task`; all rows are MMLU physics inputs |
| Experience libraries | `null`; no paper-run role records, complete successes/failures, critic feedback, rewards, or iteration manifest |
| Models/checkpoints | `null`; no SiriuS weights or provider fine-tune identifiers |
| Logs/release/dataset card | `null`; no paper-run logs, immutable release, or dataset card |

The repository is therefore an open recipe and partial implementation, not an executable archive of the reported data lifecycle. PubMed scripts contain unset paths, competitive fine-tuning scripts contain omitted path values, and problem-solving conventions disagree across scripts. Reproduction requires repairing those paths and constructing the missing manifests rather than assuming the five-row sample is training data.
