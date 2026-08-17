# Merge report

Batches: incoming/cards_7_13

- cards in library before merge: 1542
- cards added: 116
- library cards replaced by a larger batch copy: 1
- entry_ids present in more than one source: 7
- of those, with disagreeing verdicts: 1
- library total after merge: 1658
- published pool after merge: 1421
- held back: 237

## Ids to list under `excluded_ids` in atlas.yaml

The winning copy of each of these says it is publishable, but another curator
rejected it. Listing the id keeps the strict verdict without editing the card.

  - codejudgebench-2025

## Tracks absorbed from a duplicate

| entry_id | winner's own tracks | absorbed |
|---|---|---|
| `codejudgebench-2025` | audit_failure_contamination_verifier_attacks | benchmarks_evaluation_surfaces |
| `compassverifier-2025` | data_construction_open_release_recipes | audit_failure_contamination_verifier_attacks |
| `deepmath-103k-2025` | instruction_demonstration_rationale_data | audit_failure_contamination_verifier_attacks |
| `healthbench-2025` | benchmarks_evaluation_surfaces | audit_failure_contamination_verifier_attacks |
| `mt-rewardtree-2025` | rollout_search_test_time_trace_data | audit_failure_contamination_verifier_attacks |
| `rewardbench-2-2025` | benchmarks_evaluation_surfaces | judgment_rubric_domain_expert_data |
| `vilbench-2025` | rollout_search_test_time_trace_data | audit_failure_contamination_verifier_attacks |

## Duplicate resolution

| entry_id | winner | bytes | losers | tracks kept | verdicts | published |
|---|---|---:|---|---|---|---|
| `codejudgebench-2025` | incoming/cards_7_13 | 20991 | library (16194) | audit_failure_contamination_verifier_attacks, benchmarks_evaluation_surfaces | promoted, rejected | no · rejected by a curator |
| `compassverifier-2025` | library | 38731 | incoming/cards_7_13 (13400) | data_construction_open_release_recipes, audit_failure_contamination_verifier_attacks | promoted | yes |
| `deepmath-103k-2025` | library | 23057 | incoming/cards_7_13 (12596) | instruction_demonstration_rationale_data, audit_failure_contamination_verifier_attacks | promoted | yes |
| `healthbench-2025` | library | 18680 | incoming/cards_7_13 (12782) | benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks | promoted | yes |
| `mt-rewardtree-2025` | library | 47629 | incoming/cards_7_13 (11922) | rollout_search_test_time_trace_data, audit_failure_contamination_verifier_attacks | promoted | yes |
| `rewardbench-2-2025` | library | 25616 | incoming/cards_7_13 (16898) | benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data | promoted | yes |
| `vilbench-2025` | library | 27896 | incoming/cards_7_13 (13045) | rollout_search_test_time_trace_data, audit_failure_contamination_verifier_attacks | promoted | yes |

## Held back from the published pool

| entry_id | verdicts | reason |
|---|---|---|
| `ada-rs-selective-thinking-2026` | rejected | rejected by a curator |
| `agentpack-code-changes-2025` | rejected | rejected by a curator |
| `agentquest-2024` | rejected | rejected by a curator |
| `agentrl-2025` | rejected | rejected by a curator |
| `agentrx-failure-trajectories-2026` | rejected | rejected by a curator |
| `agieval-2023` | rejected | rejected by a curator |
| `ai2-arc-2018` | rejected | rejected by a curator |
| `alternative-annotator-test-llm-judge-2025` | rejected | rejected by a curator |
| `am-thinking-v1-2025` | rejected | rejected by a curator |
| `android-daily-2026` | rejected | rejected by a curator |
| `android-in-the-wild-device-control-2023` | rejected | rejected by a curator |
| `android-in-the-zoo-coat-2024` | rejected | rejected by a curator |
| `androidcontrol-ui-control-agents-2024` | rejected | rejected by a curator |
| `androiddaily-2026` | rejected | rejected by a curator |
| `androidlab-2024` | rejected | rejected by a curator |
| `androidworld-2024` | rejected | rejected by a curator |
| `apex-agents-2026` | rejected | rejected by a curator |
| `api-bank-2023` | rejected | rejected by a curator |
| `api-blend-2024` | rejected | rejected by a curator |
| `appagent-smartphone-users-2025` | rejected | rejected by a curator |
| `appworld-interactive-coding-agents-2024` | rejected | rejected by a curator |
| `assistantbench-2024` | rejected | rejected by a curator |
| `auto-j-2023` | rejected | rejected by a curator |
| `autodroid-android-task-automation-2024` | rejected | rejected by a curator |
| `b-moca-2025` | rejected | rejected by a curator |
| `baichuan-m2-2025` | rejected | rejected by a curator |
| `bamboogle-2022` | rejected | rejected by a curator |
| `bearcubs-2025` | rejected | rejected by a curator |
| `bespoke-stratos-17k-2025` | rejected | rejected by a curator |
| `bfs-po-2026` | rejected | rejected by a curator |
| `big-bench-hard-2022` | rejected | rejected by a curator |
| `biggen-bench-2024` | rejected | rejected by a curator |
| `browsergym-ecosystem-2024` | rejected | rejected by a curator |
| `calm-bias-framework-2024` | rejected | rejected by a curator |
| `causal-agent-replay-2026` | rejected | rejected by a curator |
| `chain-of-thought-prompting` | rejected | rejected by a curator |
| `chartqa-2022` | — | never reviewed |
| `chembench-2024` | rejected | rejected by a curator |
| `classeval-2023` | rejected | rejected by a curator |
| `claw-swe-bench-openclaw-harnesses-2026` | rejected | rejected by a curator |
| `code-generation-differential-test-time-scaling-2026` | rejected | rejected by a curator |
| `codeagent-codeagentbench-2024` | rejected | rejected by a curator |
| `codecontests-alphacode-2022` | rejected | rejected by a curator |
| `codejudgebench-2025` | promoted, rejected | rejected by a curator |
| `codeplan-repository-coding-2024` | rejected | rejected by a curator |
| `common-pile-v0-1-2025` | rejected | rejected by a curator |
| `compass-thinker-7b-2025` | rejected | rejected by a curator |
| `condefects-2023` | rejected | rejected by a curator |
| `constrained-mcts-long-cot-2025` | rejected | rejected by a curator |
| `cooper-cooptimizing-policy-reward-2025` | rejected | rejected by a curator |
| `cost-of-dynamic-reasoning-2025` | rejected | rejected by a curator |
| `crab-cross-environment-agent-benchmark-2024` | rejected | rejected by a curator |
| `crosscodeeval-2023` | rejected | rejected by a curator |
| `d-gara-2025` | rejected | rejected by a curator |
| `datascience-instruct-2025` | rejected | rejected by a curator |
| `datasheets-for-datasets` | rejected | rejected by a curator |
| `depo-2026` | rejected | rejected by a curator |
| `deveval-repository-code-generation-2024` | rejected | rejected by a curator |
| `difficulty-targeted-online-selection-2025` | rejected | rejected by a curator |
| `direct-preference-optimization` | rejected | rejected by a curator |
| `docvqa-2020` | — | never reviewed |
| `drive-rlvr-code-curation-2025` | rejected | rejected by a curator |
| `drop-2019` | rejected | rejected by a curator |
| `dynscaling-2025` | rejected | rejected by a curator |
| `emergence-webvoyager-2026` | rejected | rejected by a curator |
| `emperors-new-clothes-benchmarking` | rejected | rejected by a curator |
| `evalbiasbench-offsetbias-2024` | rejected | rejected by a curator |
| `exaone-deep-2025` | rejected | rejected by a curator |
| `faults-formal-benchmarking-2026` | rejected | rejected by a curator |
| `finance-agent-2025` | — | never reviewed |
| `fineweb2` | rejected | rejected by a curator |
| `first-finish-search-2025` | rejected | rejected by a curator |
| `flask-2023` | rejected | rejected by a curator |
| `formfactory-form-filling-agents-2025` | rejected | rejected by a curator |
| `from-long-to-lean-macc-2025` | rejected | rejected by a curator |
| `g-eval-2023` | rejected | rejected by a curator |
| `genprove-2026` | rejected | rejected by a curator |
| `gsm1k-2023` | — | never reviewed |
| `guided-by-gut-2025` | rejected | rejected by a curator |
| `harnessfix-harness-flaws-2026` | rejected | rejected by a curator |
| `harvey-legal-agent-benchmark-2025` | rejected | rejected by a curator |
| `holistic-agent-evaluation-failure-diagnosis-2026` | rejected | rejected by a curator |
| `hotbugs-jar-time-critical-bugs-2025` | rejected | rejected by a curator |
| `instructgpt-human-feedback` | rejected | rejected by a curator |
| `intercode-2023` | rejected | rejected by a curator |
| `iosworld-personally-intelligent-phone-agents-2026` | rejected | rejected by a curator |
| `judgelm-2023` | rejected | rejected by a curator |
| `kernel-divergence-score` | rejected | rejected by a curator |
| `l-eval-2023` | rejected | rejected by a curator |
| `lab-bench-2024` | rejected | rejected by a curator |
| `latency-aware-test-time-scaling-2025` | rejected | rejected by a curator |
| `lawbench-2023` | rejected | rejected by a curator |
| `leannavigator-synthetic-theorems-2025` | rejected | rejected by a curator |
| `learning-when-to-plan-2025` | rejected | rejected by a curator |
| `livecodebench-pro-2025` | — | never reviewed |
| `llm-first-search-2025` | rejected | rejected by a curator |
| `llmbar-2023` | — | never reviewed |
| `long-short-cot-mixture-sft-2025` | rejected | rejected by a curator |
| `longfact-2024` | — | never reviewed |
| `lost-in-the-middle-2023` | rejected | rejected by a curator |
| `lppo-progressive-optimization-2025` | rejected | rejected by a curator |
| `macarena-2026` | rejected | rejected by a curator |
| `math-shepherd-2024` | rejected | rejected by a curator |
| `mathbench-2024` | rejected | rejected by a curator |
| `mathhay-2024` | rejected | rejected by a curator |
| `mbpp-2021` | — | never reviewed |
| `mcp-atlas-2025` | — | never reviewed |
| `mcpagentbench-2025` | — | never reviewed |
| `megamath-2025` | rejected | rejected by a curator |
| `metatool-toole-2023` | — | never reviewed |
| `michelangelo-mrcr-2024` | — | never reviewed |
| `mind2web-2-2025` | rejected | rejected by a curator |
| `mind2web-2023` | rejected | rejected by a curator |
| `minedojo-2022` | — | never reviewed |
| `minerva-2022` | rejected | rejected by a curator |
| `minimalist-rejection-reinforce-2025` | rejected | rejected by a curator |
| `mle-bench-2024` | — | never reviewed |
| `mmat-1m-2025` | rejected | rejected by a curator |
| `mmbench-gui-2025` | rejected | rejected by a curator |
| `mmeb-v2-image-2025` | — | never reviewed |
| `mmlu-redux-2024` | rejected | rejected by a curator |
| `mmmlu-2024` | — | never reviewed |
| `mobile-agent-v3-gui-automation-2025` | rejected | rejected by a curator |
| `mobile-agent-visual-perception-2024` | rejected | rejected by a curator |
| `mobile-bench-2024` | rejected | rejected by a curator |
| `mobileagentbench-2024` | rejected | rejected by a curator |
| `mteb-2022` | — | never reviewed |
| `muianno-mobile-ui-understanding-2026` | rejected | rejected by a curator |
| `multichallenge-2024` | — | never reviewed |
| `multiple-2022` | — | never reviewed |
| `musique-2022` | — | never reviewed |
| `mypcbench-2026` | — | never reviewed |
| `natural-questions-2019` | — | never reviewed |
| `nemotron-math-proofs-v2-2026` | rejected | rejected by a curator |
| `new-legal-research-bench-2025` | — | never reviewed |
| `not-all-rollouts-useful-2025` | rejected | rejected by a curator |
| `oases-2026` | rejected | rejected by a curator |
| `officebench-office-automation-2024` | — | never reviewed |
| `olmo-3-2025` | rejected | rejected by a curator |
| `olympicarena-2024` | rejected | rejected by a curator |
| `omniact-2024` | — | never reviewed |
| `omnidocbench-2024` | — | never reviewed |
| `omnigui-2026` | rejected | rejected by a curator |
| `one-shot-rlvr-2025` | rejected | rejected by a curator |
| `online-difficulty-filtering-rorl-2025` | rejected | rejected by a curator |
| `open-data-arena-2025` | rejected | rejected by a curator |
| `open-proof-corpus-2026` | rejected | rejected by a curator |
| `openbookqa-2018` | — | never reviewed |
| `openeqa-2024` | — | never reviewed |
| `optimizing-anytime-reasoning-brpo-2025` | rejected | rejected by a curator |
| `osworld-2-0-2026` | — | never reviewed |
| `osworld-computer-environment-benchmark-2024` | — | never reviewed |
| `osworld-human-2025` | — | never reviewed |
| `osworld-verified-2025` | — | never reviewed |
| `phi-4-reasoning-2025` | rejected | rejected by a curator |
| `piqa-2019` | — | never reviewed |
| `portool-tool-use-llm-training-with-rewarded-tree-2025` | rejected | rejected by a curator |
| `prism-2025` | rejected | rejected by a curator |
| `prm800k-let-us-verify-step-by-step-2023` | rejected | rejected by a curator |
| `programbench-2025` | — | never reviewed |
| `prometheus-feedback-collection-2023` | — | never reviewed |
| `proofnet-2023` | rejected | rejected by a curator |
| `pspa-bench-2026` | rejected | rejected by a curator |
| `puredocbench-2026` | — | never reviewed |
| `putnambench-2024` | rejected | rejected by a curator |
| `r1-searcher-2025` | rejected | rejected by a curator |
| `r2e-gym-procedural-environments-hybrid-verifiers-2025` | — | never reviewed |
| `race-bench-2026` | rejected | rejected by a curator |
| `rag-rewardbench-2024` | — | never reviewed |
| `ragas-2023` | rejected | rejected by a curator |
| `re-bench-2024` | — | never reviewed |
| `realworldqa-2024` | — | never reviewed |
| `repobench-code-autocompletion-2024` | rejected | rejected by a curator |
| `rethinking-stateful-tool-use-2025` | rejected | rejected by a curator |
| `rewardbench-reward-model-evaluation-2024` | — | never reviewed |
| `rift-negative-samples-2026` | rejected | rejected by a curator |
| `rise-self-verification-2025` | rejected | rejected by a curator |
| `rm-bench-2024` | — | never reviewed |
| `rstar2-agent-2025` | rejected | rejected by a curator |
| `rubric-anchors-2025` | rejected | rejected by a curator |
| `rubricbench-2026` | — | never reviewed |
| `rubriceval-2026` | — | never reviewed |
| `ruler-2024` | — | never reviewed |
| `s-star-test-time-scaling-code-generation-2025` | rejected | rejected by a curator |
| `scalewob-2026` | — | never reviewed |
| `scaling-flaws-verifier-guided-search-2025` | rejected | rejected by a curator |
| `scibench-2023` | rejected | rejected by a curator |
| `scicode-2024` | — | never reviewed |
| `scienceagentbench-2024` | — | never reviewed |
| `scienceworld-2022` | — | never reviewed |
| `screenspot-pro-2025` | rejected | rejected by a curator |
| `search-r1-2025` | rejected | rejected by a curator |
| `seeact-generalist-web-agent-2024` | rejected | rejected by a curator |
| `seed-oss-2025` | — | never reviewed |
| `self-evolving-curriculum-2025` | rejected | rejected by a curator |
| `shoppingbench-2025` | rejected | rejected by a curator |
| `sima-2-2025` | rejected | rejected by a curator |
| `skywork-or1-2025` | rejected | rejected by a curator |
| `slopcodebench-2026` | rejected | rejected by a curator |
| `small-models-struggle-strong-reasoners-2025` | rejected | rejected by a curator |
| `socratic-zero-2025` | rejected | rejected by a curator |
| `soft-sverl-2026` | rejected | rejected by a curator |
| `squad-2016` | rejected | rejected by a curator |
| `step-length-confounding-2026` | rejected | rejected by a curator |
| `superglue-2019` | rejected | rejected by a curator |
| `swe-bench-verified-2024` | rejected | rejected by a curator |
| `swe-gym-2024` | rejected | rejected by a curator |
| `swe-polybench-2025` | rejected | rejected by a curator |
| `swebench-memory-audit-2025` | rejected | rejected by a curator |
| `tabmwp-2022` | rejected | rejected by a curator |
| `telechat2-t1-2025` | rejected | rejected by a curator |
| `tensorbench-2026` | rejected | rejected by a curator |
| `testeval-test-case-generation-2024` | rejected | rejected by a curator |
| `tests4py-system-testing-2024` | rejected | rejected by a curator |
| `theorembench-2026` | rejected | rejected by a curator |
| `theoremqa-2023` | rejected | rejected by a curator |
| `tool-r1-2025` | rejected | rejected by a curator |
| `toolsandbox-2024` | rejected | rejected by a curator |
| `towards-data-contamination-detection` | rejected | rejected by a curator |
| `traject-bench-2026` | rejected | rejected by a curator |
| `trajselector-2025` | rejected | rejected by a curator |
| `tree-rpo-2025` | rejected | rejected by a curator |
| `two-heads-multi-agent-collaborative-reasoning-2025` | rejected | rejected by a curator |
| `u-math-2024` | rejected | rejected by a curator |
| `ui-tars-2025` | rejected | rejected by a curator |
| `vds-ttt-verifier-driven-sample-selection-2025` | rejected | rejected by a curator |
| `verifiable-fine-tuning-2025` | rejected | rejected by a curator |
| `verifier-backed-hard-problem-generation-2026` | rejected | rejected by a curator |
| `weavebench-2026` | rejected | rejected by a curator |
| `webarxiv-2025` | rejected | rejected by a curator |
| `webcanvas-2024` | rejected | rejected by a curator |
| `webmall-2025` | rejected | rejected by a curator |
| `webshop-2022` | rejected | rejected by a curator |
| `windows-agent-arena-2024` | rejected | rejected by a curator |
| `windowsworld-2026` | rejected | rejected by a curator |
| `zaya1-8b-2026` | rejected | rejected by a curator |
| `zerosearch-2025` | rejected | rejected by a curator |

## Track distribution after merge

| track | published cards |
|---|---:|
| `training_usage_optimization_objectives` | 125 |
| `benchmarks_evaluation_surfaces` | 123 |
| `programmatically_verifiable_outcome_data` | 115 |
| `preference_reward_feedback_data` | 113 |
| `data_construction_open_release_recipes` | 108 |
| `audit_failure_contamination_verifier_attacks` | 108 |
| `scaling_rlvr_test_time_compute` | 107 |
| `process_trace_supervision_data` | 106 |
| `judgment_rubric_domain_expert_data` | 106 |
| `frontier_reports_data_disclosure_ledger` | 104 |
| `rollout_search_test_time_trace_data` | 103 |
| `instruction_demonstration_rationale_data` | 102 |
| `environment_agent_trajectory_data` | 101 |
| `foundations_and_primers` | 56 |
