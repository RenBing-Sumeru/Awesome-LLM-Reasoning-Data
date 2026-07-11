window.ATLAS_DATA = {
  "entries": [
    {
      "id": "faults-formal-benchmarking-2026",
      "title": "Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving",
      "year": 2026,
      "venue": "ICML 2026",
      "authors": [
        "Pawan Sasanka Ammanamanchi",
        "Siddharth Bhat",
        "Stella Biderman"
      ],
      "source_role": [
        "audit_failure",
        "benchmark",
        "infrastructure"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "formal-mathematics",
        "lean4",
        "benchmark-audit"
      ],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "programmatically-verifiable-outcome",
        "Lean",
        "benchmark-audit",
        "verifier-robustness",
        "ICML-2026"
      ],
      "one_line_summary": "Faults in Our Formal Benchmarking audits Lean benchmarks with static checkers and certified witnesses, showing where a kernel-accepted result is not enough.",
      "why_it_matters": "It turns verifier robustness and statement fidelity into data fields that can be checked, rather than assuming every Lean pass is a trustworthy label.",
      "data_object": "A finding with its affected theorem, fault type, checker result, and—where applicable—a machine-checkable witness.; process: formal statement, Lean environment, static-check result; Pinned Lean 3/Lean 4 benchmark environments and the released audit checker suite.",
      "feedback_verifier": "Lean metaprogram/static checks and mechanically certified counterexample, vacuity, or unprovability evidence; semantic prompts are a separate non-deterministic audit layer.",
      "audit_focus": "A Lean kernel proof certifies the encoded statement, not its informal fidelity., Static checking cannot decide every semantic mismatch., Results depend on the pinned Lean and dependency environment.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2606.29493",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2606.29493",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/Shashi456/atp-checkers",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/faults-formal-benchmarking-2026/sources"
      },
      "primary_link": "https://arxiv.org/abs/2606.29493"
    },
    {
      "id": "leap-formal-mathematics-2026",
      "title": "LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks",
      "year": 2026,
      "venue": "arXiv",
      "authors": [
        "Po-Nien Kung",
        "Linfeng Song",
        "Dawsen Hwang",
        "Jinsung Yoon",
        "Chun-Liang Li",
        "Simone Severini",
        "Mirek Olšák",
        "Edward Lockhart",
        "Quoc V. Le",
        "Burak Gokturk",
        "Thang Luong",
        "Tomas Pfister",
        "Nanyun Peng"
      ],
      "source_role": [
        "benchmark",
        "data_release",
        "infrastructure"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "agent_training",
        "test_time_compute",
        "audit"
      ],
      "domains": [
        "formal-mathematics",
        "lean4",
        "theorem-proving"
      ],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "programmatically-verifiable-outcome",
        "formal-mathematics",
        "lean4",
        "agentic-proving",
        2026
      ],
      "one_line_summary": "LEAP turns blueprint-guided theorem-proving rollouts into Lean-checkable proof outcomes and introduces IMO-LeanProofBench for hard formal mathematics.",
      "why_it_matters": "It makes the Lean compiler a reproducible terminal predicate for long-horizon mathematical agent traces instead of relying on natural-language plausibility.",
      "data_object": "A Lean proof artifact plus the Lean checker acceptance or rejection outcome.; process: informal blueprint, AND-OR proof graph, candidate Lean code; The Lean proof environment, retrieval/search tools, and the released IMO-LeanProofBench task suite.",
      "feedback_verifier": "Lean compiler and kernel acceptance of formal proof code.",
      "audit_focus": "Geometry remains materially harder than algebra, combinatorics, and number theory in the reported benchmark., A checker-accepted proof establishes formal correctness only relative to the encoded theorem statement and pinned Lean environment., Reported performance depends on the backend model, retrieval corpus, and inference-time search budget.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2606.03303",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2606.03303",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/google-deepmind/superhuman/tree/main/leap",
        "data": "https://imobench.github.io/",
        "huggingface": null,
        "project": "https://imobench.github.io/",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/leap-formal-mathematics-2026/sources"
      },
      "primary_link": "https://arxiv.org/abs/2606.03303"
    },
    {
      "id": "wonda-invariant-curation-2026",
      "title": "Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs",
      "year": 2026,
      "venue": "ICML 2026",
      "authors": [
        "Ido Pinto",
        "Yizhak Yisrael Elboher",
        "Haoze Wu",
        "Nina Narodytska",
        "Guy Katz"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "sft",
        "evaluation",
        "audit"
      ],
      "domains": [
        "program-verification",
        "loop-invariants",
        "C-programs"
      ],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "🧪 Verifier robustness and answer extraction",
      "tags": [
        "programmatically-verifiable-outcome",
        "loop-invariants",
        "program-verification",
        "data-curation",
        "ICML-2026"
      ],
      "one_line_summary": "WONDA converts noisy verifier-generated loop invariants into readable training data, rechecking every risky transformation with a formal verifier.",
      "why_it_matters": "It shows how to improve the pedagogical quality of verifier-backed data without silently replacing correctness with an LLM rewrite judgment.",
      "data_object": "A candidate loop invariant attached to a program location, with correctness and sufficiency verification outcomes.; process: verification query, raw invariant, normalized AST; UAutomizer-backed program-verification environment with enforced time/memory limits.",
      "feedback_verifier": "A sound verification oracle checks invariant induction/correctness and sufficiency for the program query.",
      "audit_focus": "A verifier-valid invariant can be unreadable or overly specialized., LLM rewriting can introduce semantic drift unless every candidate is rechecked., Verification timeouts and UNKNOWN results need an explicit retention policy.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2603.15510",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2603.15510",
        "openreview": "https://openreview.net/forum?id=fS28SOioQd",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/idopinto/wonda",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/wonda-invariant-curation-2026/sources"
      },
      "primary_link": "https://arxiv.org/abs/2603.15510"
    }
  ],
  "counts": {
    "total_entries": 3,
    "verified_entries": 3,
    "paper_card_sources": 3,
    "data_releases": 2,
    "verifiers_rewards": 1,
    "agent_environments": 0,
    "scaling_studies": 0,
    "needs_search": 0
  },
  "categories": [
    {
      "id": "foundations_and_primers",
      "order": 0,
      "group": "background_foundations",
      "emoji": "🧭",
      "title": "Foundations and Primers",
      "file": "00_background_foundations/00_foundations_and_primers.md",
      "summary": "Surveys, primers, classic post-training lineages, data documentation, and evaluation background for readers entering the field.",
      "reader_promise": "Use this track when you need the map before the terrain: vocabulary, taxonomies, historical lineages, and recurring audit questions.",
      "why": [
        "This track is the front door of the atlas. It gives new readers a controlled way to understand post-training reasoning data before opening dozens of specialized papers. The goal is not to flatten the field into a generic survey list; it is to teach the reader which objects repeat across the repo: prompts, traces, answers, verifiers, rewards, judges, environments, metadata, and audit evidence.",
        "The track combines field surveys with foundational alignment-data papers because modern reasoning-data work inherits older habits from instruction tuning, RLHF, preference optimization, chain-of-thought prompting, self-training, and data documentation. Those lineages explain why a reasoning-data release is more than a prompt-answer table and why every useful entry needs source, label, verifier, split, license, and contamination context.",
        "Readers should treat this page as a routing layer. Extract the taxonomy first, then jump into the data-type tracks once you know whether you are studying demonstrations, preference pairs, programmatically verified outcomes, process labels, rollout traces, agent episodes, or rubric judgments."
      ],
      "how_to_read": [
        "Separate concept papers from primary data releases, benchmarks, and model reports.",
        "Track which taxonomy each paper uses: data object, feedback contract, training objective, or audit risk.",
        "When a survey mentions a benchmark or dataset, follow the primary source before treating the claim as reusable evidence.",
        "Record missing metadata explicitly instead of promoting uncertain entries as verified resources."
      ],
      "open_questions": [
        "Which taxonomy best predicts what a downstream builder should do next?",
        "How should surveys represent partially disclosed frontier-model data recipes?",
        "What metadata fields are essential for a living Awesome list to stay reproducible?",
        "How can Chinese and English learning routes stay aligned as the field changes?"
      ],
      "related_docs": [
        "../docs/00_start_here.md",
        "../docs/01_what_is_post_training_reasoning_data.md",
        "../docs/02_verifier_anchored_taxonomy.md",
        "../docs/09_audit_and_failure_modes.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "instruction_demonstration_rationale_data",
      "order": 1,
      "group": "core_reasoning_data_types",
      "emoji": "🧱",
      "title": "Instruction, Demonstration, and Rationale Data",
      "file": "01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md",
      "summary": "Instruction-response examples, human demonstrations, synthetic instructions, rationales, chain-of-thought traces, and teacher-written reasoning targets.",
      "reader_promise": "Use this track to understand how reasoning behavior is serialized before preference, verifier, or environment feedback is added.",
      "why": [
        "Many reasoning-data systems still begin with demonstrations: a task, a target answer, and sometimes a rationale or chain-of-thought trace. This track collects the papers that teach how those targets are sourced, generated, filtered, distilled, and reused for SFT or bootstrapped reasoning improvement.",
        "The key distinction is fidelity. A rationale can be a useful teaching artifact, but it can also be a style target that merely looks like reasoning. For every paper, readers should ask who authored the trace, whether the final answer was checked, whether rejected traces are visible, and whether the training objective consumes the trace or only the final answer.",
        "This track gives contributors a clear home for instruction tuning, self-instruction, CoT, STaR, long/short reasoning traces, and teacher-distilled demonstration releases without mixing them into preference rewards or programmatic-verifier work."
      ],
      "how_to_read": [
        "Identify the serialized target: answer only, rationale, long CoT, critique, tool trace, or teacher solution.",
        "Write down the trace author: human, base model, teacher model, self-training policy, or search procedure.",
        "Check whether the paper verifies final correctness before training on the rationale.",
        "Distinguish demonstration quality from downstream reward or verifier quality."
      ],
      "open_questions": [
        "When does training on rationales teach transferable reasoning rather than trace style?",
        "How much teacher identity and sampling metadata should an open rationale release disclose?",
        "Can long-CoT distillation preserve useful uncertainty and failed attempts?",
        "What should a paper card record when the demonstration source is partially hidden?"
      ],
      "related_docs": [
        "../docs/03_reasoning_data_objects.md",
        "../docs/05_construction_cookbook.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "preference_reward_feedback_data",
      "order": 2,
      "group": "core_reasoning_data_types",
      "emoji": "🤝",
      "title": "Preference and Reward Feedback Data",
      "file": "01_core_reasoning_data_types/02_preference_reward_feedback_data.md",
      "summary": "Human preferences, AI feedback, reward models, DPO-style pairs, scalar rewards, critiques, and rubric-conditioned feedback records.",
      "reader_promise": "Use this track to compare preference and reward signals before they become training objectives or evaluation proxies.",
      "why": [
        "Preference and reward data is the bridge between demonstrations and optimization. It can appear as chosen/rejected pairs, scalar scores, critiques, reward-model labels, constitutional feedback, rubric scores, or judge outputs. Reasoning work often reuses these signals, but the meaning changes when the task also has a programmatic verifier or an environment predicate.",
        "The practical question is whether the feedback contract is reusable. A reward model trained for helpfulness may not be a reliable verifier for math reasoning. A rubric score can be interpretable but brittle. A DPO pair can encode useful preferences while hiding annotator context. This track keeps those assumptions visible.",
        "For high-quality curation, each paper card should state who produced the feedback, what alternatives were compared, what the reward optimizes, and where the feedback can fail or be gamed."
      ],
      "how_to_read": [
        "Name the feedback object: pairwise preference, scalar reward, critique, rubric score, judge vote, or reward-model output.",
        "Check who or what labels the data: humans, experts, frontier models, synthetic judges, or trained reward models.",
        "Ask whether the feedback trains a reward model, directly optimizes a policy, filters data, reranks candidates, or evaluates outputs.",
        "Look for reward overoptimization, judge bias, position effects, and domain mismatch."
      ],
      "open_questions": [
        "Which preference signals remain useful once a cheap programmatic verifier exists?",
        "How should reward datasets disclose annotator and judge assumptions?",
        "Can AI feedback be made auditable enough for open reasoning-data releases?",
        "What evidence shows a reward improves real reasoning rather than stylistic compliance?"
      ],
      "related_docs": [
        "../docs/06_verifiers_and_rewards.md",
        "../docs/04_data_quality.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "programmatically_verifiable_outcome_data",
      "order": 3,
      "group": "core_reasoning_data_types",
      "emoji": "🧮",
      "title": "Programmatically Verifiable Outcome Data",
      "file": "01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md",
      "summary": "Math answers, code execution, unit tests, proof checkers, symbolic predicates, answer extraction, and verifier robustness studies.",
      "reader_promise": "Use this track for the cleanest verifier-bearing reasoning records: final answers or artifacts checked by code, rules, tests, or formal systems.",
      "why": [
        "Programmatic verification is central to post-training reasoning data because it can turn correctness into a relatively cheap feedback signal. Math answer checkers, code unit tests, compilers, and proof assistants make outcome supervision concrete enough for filtering, rejection sampling, RLVR, benchmark evaluation, and sometimes training rewards.",
        "The clean surface is also dangerous. A model can learn answer-format shortcuts, leaked tests, brittle normalizers, proof-environment quirks, or benchmark-specific patterns. Good curation therefore records not just the dataset name but the verifier, false-positive risks, split policy, and whether the release exposes traces, failed attempts, or only accepted solutions.",
        "This page is the natural assignment for contributors working on math, code, and proof papers, but many of those papers should also be tagged as construction recipes, scaling studies, benchmarks, or frontier disclosures when appropriate."
      ],
      "how_to_read": [
        "Write down the verifier: exact answer, symbolic checker, unit tests, compiler, hidden judge, proof assistant, or learned verifier.",
        "Check whether the paper releases prompts, solutions, traces, execution logs, proof scripts, and filtering code.",
        "Separate trainable data from evaluation-only benchmarks.",
        "Audit answer extraction, decontamination, public/private split, and benchmark reuse."
      ],
      "open_questions": [
        "How should math releases expose answer normalizers and edge cases?",
        "Can public code benchmarks remain useful once they become training signals?",
        "What metadata is needed to replay proof-checking environments?",
        "How should accepted and rejected programmatic rollouts be released?"
      ],
      "related_docs": [
        "../docs/02_verifier_anchored_taxonomy.md",
        "../docs/03_reasoning_data_objects.md",
        "../docs/04_data_quality.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "process_trace_supervision_data",
      "order": 4,
      "group": "core_reasoning_data_types",
      "emoji": "🪜",
      "title": "Process and Trace Supervision Data",
      "file": "01_core_reasoning_data_types/04_process_trace_supervision_data.md",
      "summary": "Step-level labels, process reward models, rollout values, first-error localization, automatic process supervision, and PRM evaluation.",
      "reader_promise": "Use this track to move from final-answer feedback to intermediate feedback attached to reasoning steps or trace states.",
      "why": [
        "Process supervision asks where the reasoning path becomes right, wrong, uncertain, or useful. Its data objects are richer than outcome labels: a prompt, intermediate steps, labels or values over those steps, sometimes a first-error marker, and a process reward model or verifier trained to score partial progress.",
        "This track keeps human step labels, PRM training, rollout-value supervision, automatic process labels, and PRM benchmarks in one place. It is deliberately separate from generic CoT data because a trace is not process supervision unless there is a feedback contract attached to intermediate states.",
        "Contributors should be skeptical. A process reward can improve search or reranking while failing to improve final correctness. It can reward plausible-looking traces or annotation style. Paper cards should therefore state label granularity, label source, use case, and failure modes."
      ],
      "how_to_read": [
        "Identify whether labels attach to steps, transitions, whole traces, rollout values, or first-error positions.",
        "Check whether the label source is human annotation, verifier rollouts, judge models, code execution, or theorem proving.",
        "Separate PRM training, reranking, search, evaluation, and diagnosis.",
        "Look for experiments that connect process reward to final-answer correctness."
      ],
      "open_questions": [
        "When does a PRM add signal beyond an outcome verifier plus search?",
        "How should uncertainty and annotator disagreement be represented in step labels?",
        "Can process supervision scale to long agent trajectories?",
        "What diagnostics reveal reward of trace style rather than causal progress?"
      ],
      "related_docs": [
        "../docs/06_verifiers_and_rewards.md",
        "../docs/03_reasoning_data_objects.md",
        "../docs/08_scaling_and_test_time_compute.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "rollout_search_test_time_trace_data",
      "order": 5,
      "group": "core_reasoning_data_types",
      "emoji": "🔁",
      "title": "Rollout, Search, and Test-Time Trace Data",
      "file": "01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md",
      "summary": "Multiple rollouts, search trees, best-of-N samples, self-consistency traces, MCTS records, selected/rejected candidates, and test-time compute logs.",
      "reader_promise": "Use this track when the important data is not one answer but a set of sampled attempts, search paths, selector scores, or inference-budget traces.",
      "why": [
        "A growing part of reasoning data is produced by search. A model samples many attempts, a verifier or value function scores them, and the system keeps accepted candidates, sometimes with rejected traces, budgets, tree nodes, or pass-rate bands. These records connect data construction, process supervision, RLVR, and test-time compute.",
        "This track exists because search traces are often hidden inside other categories. If a paper relies on best-of-N, self-consistency, MCTS, rejection sampling, long-to-short reasoning, or repeated sampling, contributors should record the rollout budget and selector, not just the final chosen answer.",
        "For curation, the most important audit question is attribution: did performance improve because of better data, more samples, a stronger verifier, a different optimizer, or a larger inference budget?"
      ],
      "how_to_read": [
        "Record the sampling budget, temperature, verifier score, selector, and whether rejected traces are released.",
        "Separate training-time search-generated data from test-time compute used only at inference.",
        "Check whether pass@k or best-of-N comparisons use equal budgets.",
        "Look for decontamination and duplicate-prompt controls in search-generated data."
      ],
      "open_questions": [
        "How much of a reasoning-data gain comes from search rather than the final dataset?",
        "Should open releases include rejected rollouts and search trees by default?",
        "How can pass@k and training-data scale be compared fairly?",
        "Can selector behavior be audited without exposing proprietary verifier details?"
      ],
      "related_docs": [
        "../docs/05_construction_cookbook.md",
        "../docs/08_scaling_and_test_time_compute.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "environment_agent_trajectory_data",
      "order": 6,
      "group": "core_reasoning_data_types",
      "emoji": "🌐",
      "title": "Environment and Agent Trajectory Data",
      "file": "01_core_reasoning_data_types/06_environment_agent_trajectory_data.md",
      "summary": "Tool calls, web/browser tasks, app and OS agents, repository-level SWE episodes, replayable trajectories, and terminal predicates.",
      "reader_promise": "Use this track to understand how interactive environments become post-training data sources and feedback contracts.",
      "why": [
        "Agent data turns reasoning from a static completion into an episode. The model observes state, chooses actions, calls tools, receives environment responses, and eventually succeeds, fails, or times out. The environment is therefore part of the verifier, not just a UI around the task.",
        "This track covers tool-use data, browser and web agents, mobile/app tasks, desktop/OS tasks, SWE repository agents, terminal predicates, replay metadata, and agent benchmarks. It is designed for contributors who want to add papers without losing the crucial episode schema.",
        "High-quality cards should state the state/action/observation format, tool schema, environment version, terminal predicate, failure preservation, and whether the same tasks are used for training and evaluation."
      ],
      "how_to_read": [
        "Write down the episode schema: observation, state, action, tool/environment response, reward, terminal predicate, and replay metadata.",
        "Check whether tasks are demonstrations, executable environments, generated training worlds, or evaluation benchmarks.",
        "Inspect public GitHub issue, benchmark, and hidden-test contamination carefully.",
        "Verify whether the environment can be reset and replayed."
      ],
      "open_questions": [
        "Which agent datasets are replayable enough for RL rather than only SFT?",
        "How should failed and near-miss trajectories be released?",
        "Can live web/app environments remain stable enough for benchmark claims?",
        "What is the minimum metadata for a SWE episode to be auditable?"
      ],
      "related_docs": [
        "../docs/07_agent_trajectory_data.md",
        "../docs/06_verifiers_and_rewards.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "judgment_rubric_domain_expert_data",
      "order": 7,
      "group": "core_reasoning_data_types",
      "emoji": "⚖️",
      "title": "Judgment, Rubric, and Domain-Expert Data",
      "file": "01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md",
      "summary": "LLM-as-judge data, human/expert judgment, medical and safety rubrics, factuality, legal and financial reasoning, and rubric reward models.",
      "reader_promise": "Use this track when correctness needs a rubric, expert judgment, grounding evidence, or calibrated evaluator rather than a cheap programmatic checker.",
      "why": [
        "Many important reasoning tasks cannot be checked by exact answers or unit tests. They require domain rubrics, experts, factual grounding, safety judgments, legal or medical caution, or LLM judges. This track collects the data where the feedback contract is judgment-required.",
        "Judgment data can be highly valuable for post-training, but it is also easy to over-trust. A judge prompt can be attacked; a rubric can encode hidden values; an expert label can be expensive and inconsistent; a domain benchmark can leak templates. Paper cards should therefore make the judge, rubric, disagreement policy, and failure modes explicit.",
        "This track gives researchers a place to compare high-stakes and rubric-driven reasoning data without mixing it into programmatic-verifier claims."
      ],
      "how_to_read": [
        "Identify the judge: expert human, crowd worker, LLM-as-judge, rubric model, retrieval/evidence checker, or hybrid evaluator.",
        "Record rubric source, prompt, domain expertise, disagreement handling, and calibration evidence.",
        "Look for attacks, style bias, verbosity bias, position bias, and unsupported citation risks.",
        "Separate benchmark labels from trainable reward signals."
      ],
      "open_questions": [
        "How can open projects audit LLM judges without exposing proprietary evaluation prompts?",
        "What makes a medical or legal reasoning rubric reusable across datasets?",
        "Can factuality and grounding scores be turned into robust post-training rewards?",
        "How should paper cards report expert disagreement?"
      ],
      "related_docs": [
        "../docs/06_verifiers_and_rewards.md",
        "../docs/09_audit_and_failure_modes.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "data_construction_open_release_recipes",
      "order": 8,
      "group": "data_lifecycle",
      "emoji": "🏗️",
      "title": "Data Construction and Open Release Recipes",
      "file": "02_data_lifecycle/08_data_construction_open_release_recipes.md",
      "summary": "Prompt sourcing, teacher traces, rejection sampling, self-play, filtering, verifier refresh, open releases, lineage, and release metadata.",
      "reader_promise": "Use this track to learn how reasoning datasets are actually built, filtered, packaged, and released.",
      "why": [
        "A high-impact Awesome repo must teach recipes, not just cite papers. This track collects the construction pipeline: task sourcing, teacher trace generation, rollout/search expansion, rejection sampling, self-improvement, verifier refresh, filtering, deduplication, decontamination, release packaging, and metadata.",
        "Open releases vary widely. Some expose data and scripts; others expose only a report. Contributors should identify what is reproducible and what is hidden: teacher models, sampling rules, prompts, filters, accepted/rejected traces, splits, license, lineage, and known failures.",
        "This track is where students can turn a paper into operational knowledge: what should another lab do if it wants to build a similar dataset?"
      ],
      "how_to_read": [
        "Map the pipeline from prompt source to final released record.",
        "Record teacher model, generator, sampling budget, filtering rule, verifier, deduplication, and release license.",
        "Check whether rejected examples and ablations are visible.",
        "Distinguish an open dataset from an open recipe."
      ],
      "open_questions": [
        "What is the minimum release metadata for safe reuse?",
        "Should rejected traces be released as first-class data?",
        "How can open projects document proprietary teacher effects?",
        "Which filtering rules become hidden training objectives?"
      ],
      "related_docs": [
        "../docs/05_construction_cookbook.md",
        "../docs/04_data_quality.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "training_usage_optimization_objectives",
      "order": 9,
      "group": "data_lifecycle",
      "emoji": "🎯",
      "title": "Training Usage and Optimization Objectives",
      "file": "02_data_lifecycle/09_training_usage_optimization_objectives.md",
      "summary": "How data enters SFT, distillation, preference optimization, reward modeling, PRM training, RLVR, agent training, evaluation, reranking, and audit.",
      "reader_promise": "Use this track to connect a data object to the objective or system component that consumes it.",
      "why": [
        "The same paper can release examples, train a reward, evaluate a model, and disclose a model report. For builders, the crucial question is not only what the data is, but how it is consumed. This track organizes papers by training usage and optimization role.",
        "It turns the atlas from a list into a design guide. A contributor should identify whether a record feeds SFT, distillation, DPO, reward modeling, PRM training, RLVR, agent training, reranking, evaluation, or audit. Those uses require different metadata and have different risks.",
        "The track also prevents overclaiming. A benchmark score is not necessarily training data; a preference pair is not necessarily a robust reward; a verifier outcome is not necessarily a reusable RL signal without cost and false-positive analysis."
      ],
      "how_to_read": [
        "Name the objective or pipeline stage that consumes the data.",
        "Check whether the same data appears in training, validation, reward modeling, and evaluation.",
        "Record objective-specific fields such as chosen/rejected response, reward score, step label, environment action, or verifier outcome.",
        "Look for ablations that isolate the data contribution from optimizer or inference-budget changes."
      ],
      "open_questions": [
        "Which objective-specific metadata should be mandatory in paper cards?",
        "How can a repository detect unsafe reuse across training and evaluation?",
        "When should a benchmark be treated as a feedback source rather than only an evaluation surface?",
        "How should contributors tag multi-use frontier reports?"
      ],
      "related_docs": [
        "../docs/05_construction_cookbook.md",
        "../docs/08_scaling_and_test_time_compute.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "scaling_rlvr_test_time_compute",
      "order": 10,
      "group": "data_lifecycle",
      "emoji": "📈",
      "title": "Scaling, RLVR, and Test-Time Compute",
      "file": "02_data_lifecycle/10_scaling_rlvr_test_time_compute.md",
      "summary": "Data scaling, data reuse, RLVR optimization, verifier scaling, pass@k, sampling budgets, test-time compute, and scaling attribution.",
      "reader_promise": "Use this track to interpret claims about how much data, verifier strength, RL, and inference budget contribute to reasoning gains.",
      "why": [
        "Scaling claims are central to modern reasoning models. Papers report more data, stronger verifiers, larger rollout budgets, better RL optimization, longer thinking, and better pass@k. This track helps readers separate those factors instead of treating every gain as a generic reasoning-data improvement.",
        "RLVR makes the data/verifier link especially visible. A verifier can generate reward, filter samples, guide search, and evaluate final answers. The same benchmark can also become a training target. Good curation records the reward contract, data reuse, rollout policy, and inference budget.",
        "For high-impact use, this track should become the place readers visit before believing a scaling curve."
      ],
      "how_to_read": [
        "Record whether the paper scales data count, unique prompts, rollout attempts, verifier coverage, RL steps, model size, or inference budget.",
        "Check whether pass@k and test-time compute are compared under equal budgets.",
        "Look for data-reuse and contamination controls.",
        "Separate verifier improvements from optimizer and scaffold improvements."
      ],
      "open_questions": [
        "What is the right unit of reasoning-data scale: prompt, trace, rollout, verified answer, or environment episode?",
        "How should RLVR reports disclose verifier false positives?",
        "Can data scale and test-time compute scale be disentangled cleanly?",
        "How much reuse is acceptable before benchmark claims become fragile?"
      ],
      "related_docs": [
        "../docs/08_scaling_and_test_time_compute.md",
        "../docs/06_verifiers_and_rewards.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "benchmarks_evaluation_surfaces",
      "order": 11,
      "group": "data_lifecycle",
      "emoji": "🧰",
      "title": "Benchmarks and Evaluation Surfaces",
      "file": "02_data_lifecycle/11_benchmarks_evaluation_surfaces.md",
      "summary": "Math, code, proof, agent, rubric/domain, reward-model, live, hidden, and contamination-resistant benchmarks.",
      "reader_promise": "Use this track to understand what an evaluation surface measures and whether it can safely become a feedback source.",
      "why": [
        "Benchmarks are not just scoreboards. In post-training reasoning, a benchmark can become a verifier, a filtering tool, a reward source, a test-time selection criterion, or a contamination risk. This track organizes evaluation surfaces by feedback contract and audit risk.",
        "A good benchmark page should identify whether scoring is programmatic, environmental, judgment-required, mixed, live, hidden, or expert-driven. It should also state what happens if the benchmark becomes part of training data or public prompt pools.",
        "For contributors, the goal is to make benchmark entries useful to builders: what can be scored, what can leak, what can be replayed, and what should not be reused as reward without extra checks."
      ],
      "how_to_read": [
        "Name the evaluation surface and scoring contract.",
        "Check whether the benchmark is static, hidden, live, refreshed, or generated.",
        "Inspect public/private split, contamination controls, and task-generation pipeline.",
        "Decide whether the benchmark is evaluation-only or can support training feedback."
      ],
      "open_questions": [
        "Which benchmarks are still useful after becoming public training targets?",
        "How should live benchmarks expose enough information for trust without leaking answers?",
        "Can reward-model and PRM benchmarks predict downstream training value?",
        "How should agent benchmarks standardize replay metadata?"
      ],
      "related_docs": [
        "../docs/04_data_quality.md",
        "../docs/09_audit_and_failure_modes.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "frontier_reports_data_disclosure_ledger",
      "order": 12,
      "group": "data_lifecycle",
      "emoji": "🚀",
      "title": "Frontier Reports and Data Disclosure Ledger",
      "file": "02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md",
      "summary": "DeepSeek-R1, Kimi, Qwen, Magistral, Phi, Nemotron, RLVR reports, and what each frontier-style report discloses or hides about data.",
      "reader_promise": "Use this track to read frontier model reports as partial data-disclosure documents rather than only model-performance announcements.",
      "why": [
        "Frontier reasoning reports shape the field even when they do not release full data. They disclose hints about SFT mixtures, distillation, RLVR rewards, verifier contracts, safety tuning, rejection sampling, inference budgets, and evaluation practices. This track turns those hints into a disclosure ledger.",
        "The goal is not to overclaim hidden recipes. The page should separate what is disclosed, what is inferred, and what remains unknown. That distinction is essential for a trusted Awesome project.",
        "Contributors should tag frontier reports across data types and lifecycle stages while using this track to summarize the report-level disclosure quality."
      ],
      "how_to_read": [
        "Separate SFT data, RL/RLVR data, distillation data, safety data, evaluation data, and inference-time methods.",
        "Mark every claim as disclosed, inferred, or hidden.",
        "Check whether the report exposes reward/verifier design, rollout budget, data source, filtering, and decontamination.",
        "Avoid treating model performance as evidence of a reproducible data recipe."
      ],
      "open_questions": [
        "What should a standard frontier-report data-disclosure table include?",
        "How can open projects cite frontier reports without overstating hidden details?",
        "Which disclosed fields are most predictive of reproducibility?",
        "How should model-family updates be versioned in the atlas?"
      ],
      "related_docs": [
        "../docs/05_construction_cookbook.md",
        "../docs/08_scaling_and_test_time_compute.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    },
    {
      "id": "audit_failure_contamination_verifier_attacks",
      "order": 13,
      "group": "data_lifecycle",
      "emoji": "🧯",
      "title": "Audit, Failure, Contamination, and Verifier Attacks",
      "file": "02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md",
      "summary": "Benchmark contamination, search-time leakage, hidden lineage, reward hacking, verifier gaming, LLM-as-judge attacks, spurious rewards, and reproducibility failures.",
      "reader_promise": "Use this track when you want to know how reasoning-data claims can fail and how to audit them before reuse.",
      "why": [
        "A trustworthy Awesome repo must make failure visible. Reasoning-data systems can leak benchmarks, memorize teacher artifacts, exploit judges, game verifiers, overfit public tests, optimize spurious rewards, and collapse under small evaluation changes. This track is the atlas safety rail.",
        "The page is not a pessimistic appendix; it is practical infrastructure. Every data track needs an audit lens, and every paper card should contain enough failure analysis for builders to decide whether a resource is safe to reuse.",
        "Contributors should use this track to collect both direct failure papers and audit-relevant benchmark or model-report analyses."
      ],
      "how_to_read": [
        "Identify what can leak: prompt, answer, benchmark item, teacher trace, verifier, judge prompt, or environment state.",
        "Check whether attacks target the actual scoring setup or a simplified proxy.",
        "Record whether failures affect training, evaluation, model selection, or public interpretation.",
        "Prefer reproducible audit evidence over general warnings."
      ],
      "open_questions": [
        "How should open reasoning-data releases report contamination checks?",
        "Can verifier and judge attacks be standardized across domains?",
        "What is the right card schema for hidden lineage and teacher leakage?",
        "How should the atlas decide when to demote a benchmark or paper due to audit failures?"
      ],
      "related_docs": [
        "../docs/09_audit_and_failure_modes.md",
        "../docs/04_data_quality.md"
      ],
      "related_cards": [
        "../docs/paper_card_sop.md",
        "../docs/paper_card_sop.md"
      ]
    }
  ],
  "research_tracks": [
    {
      "category_id": "foundations_and_primers",
      "short_title": "Foundations & Primers",
      "navigator_title": "🧭 Foundations & Primers",
      "best_for": "beginners building the field map before primary papers",
      "subfields": [
        {
          "name": "🧭 Post-training surveys",
          "focus": "field-level maps of post-training, reasoning models, and data-centric LLM practice",
          "key_risk": "survey taxonomy hides concrete data objects",
          "keywords": [
            "survey",
            "primer",
            "post training survey",
            "post-training survey",
            "comprehensive survey",
            "mid-training",
            "field map"
          ]
        },
        {
          "name": "🧠 Reasoning LLM surveys",
          "focus": "reasoning-model lineages, claims, and recurring evaluation patterns",
          "key_risk": "model-centric framing obscures data and verifier details",
          "keywords": [
            "reasoning large language models",
            "reasoning with large language models",
            "reasoning with foundation models",
            "reasoning llms",
            "reasoning lms",
            "reasoning survey",
            "learning to reason",
            "system 1",
            "system 2"
          ]
        },
        {
          "name": "📦 Data documentation / datasheets",
          "focus": "datasheets, data statements, lineage, license, and release metadata",
          "key_risk": "reusable data lacks provenance or consent context",
          "keywords": [
            "datasheets",
            "data statements",
            "data provenance",
            "provenance",
            "lineage"
          ]
        },
        {
          "name": "🧪 RLHF / reward-model surveys",
          "focus": "background linking preference data, reward models, and reasoning rewards",
          "key_risk": "generic alignment lessons are over-applied to verifiable reasoning",
          "keywords": [
            "rlhf survey",
            "reinforcement learning from human feedback survey",
            "survey of reinforcement learning",
            "reward model taxonomy",
            "survey of reward models",
            "human preference learning survey",
            "overoptimization"
          ]
        },
        {
          "name": "🌐 Agent data / tool-use surveys",
          "focus": "orientation for tools, web tasks, OS tasks, and repository agents",
          "key_risk": "agent traces are treated as transcripts rather than replayable episodes",
          "keywords": [
            "agent survey",
            "llm based agents",
            "llm-based agents",
            "agent evaluation",
            "agent-evaluation",
            "tool-use survey",
            "tool use",
            "web agent",
            "swe agent"
          ]
        },
        {
          "name": "🧯 Contamination / evaluation surveys",
          "focus": "reproducibility, contamination, model collapse, and benchmark refresh",
          "key_risk": "benchmark deltas are accepted without overlap checks",
          "keywords": [
            "contamination",
            "reproducibility",
            "collapse",
            "sober",
            "livebench"
          ]
        }
      ]
    },
    {
      "category_id": "instruction_demonstration_rationale_data",
      "short_title": "Instruction / Demo / Rationale",
      "navigator_title": "🧱 Instruction / Demo / Rationale",
      "best_for": "demonstration, SFT, CoT, rationale, and teacher-trace data",
      "subfields": [
        {
          "name": "🧱 Instruction tuning / SFT data",
          "focus": "instruction-response examples, demonstrations, and target behavior records",
          "key_risk": "prompt sources and mixture weights are hidden",
          "keywords": [
            "instruction",
            "instruct",
            "sft",
            "flan",
            "t0",
            "tulu"
          ]
        },
        {
          "name": "🧑‍🏫 Human demonstrations",
          "focus": "human-written solutions, explanations, rationales, and expert demonstrations",
          "key_risk": "human trace policy and expertise are unclear",
          "keywords": [
            "human demonstration",
            "expert demonstration",
            "demonstration",
            "human-written"
          ]
        },
        {
          "name": "🤖 Synthetic instruction data",
          "focus": "self-instruct, teacher-generated tasks, and synthetic instruction mixtures",
          "key_risk": "synthetic prompts collapse diversity or inherit teacher artifacts",
          "keywords": [
            "self-instruct",
            "synthetic",
            "teacher-generated",
            "wizard",
            "orca"
          ]
        },
        {
          "name": "🧠 Chain-of-thought / rationale data",
          "focus": "rationales, CoT traces, self-consistency, and reasoning-style supervision",
          "key_risk": "trace style is mistaken for faithful reasoning",
          "keywords": [
            "chain-of-thought",
            "cot",
            "self-consistency",
            "rationale",
            "distilling step"
          ]
        },
        {
          "name": "🔁 Self-training / STaR",
          "focus": "bootstrapped traces, self-training, critique loops, and filtered self-improvement",
          "key_risk": "feedback loop repeats hidden errors or shortcuts",
          "keywords": [
            "star",
            "self-training",
            "bootstrapping",
            "reflexion",
            "self-improvement"
          ]
        },
        {
          "name": "✂️ Long/short CoT distillation",
          "focus": "teacher long traces, distilled short traces, and reasoning compression",
          "key_risk": "distillation loses uncertainty and failed attempts",
          "keywords": [
            "long cot",
            "short cot",
            "distill",
            "distillation",
            "long2short"
          ]
        }
      ]
    },
    {
      "category_id": "preference_reward_feedback_data",
      "short_title": "Preference & Reward Feedback",
      "navigator_title": "🤝 Preference & Reward Feedback",
      "best_for": "RLHF, DPO, reward modeling, rubric rewards, and AI feedback",
      "subfields": [
        {
          "name": "🤝 Human preference data / RLHF",
          "focus": "human comparison data, helpful/harmless feedback, and RLHF reward targets",
          "key_risk": "annotator assumptions and disagreement are hidden",
          "keywords": [
            "preference",
            "rlhf",
            "human feedback",
            "helpful",
            "harmless"
          ]
        },
        {
          "name": "⚖️ DPO / preference optimization",
          "focus": "pairwise data used directly for preference optimization",
          "key_risk": "preference pairs are reused outside collection context",
          "keywords": [
            "dpo",
            "direct preference",
            "preference optimization",
            "ipo",
            "kto"
          ]
        },
        {
          "name": "🎚️ Scalar reward / ORM data",
          "focus": "outcome reward labels, scalar scores, and trained reward-model targets",
          "key_risk": "scalar reward hides why an answer is better",
          "keywords": [
            "outcome reward",
            "orm",
            "scalar reward",
            "reward model"
          ]
        },
        {
          "name": "🤖 RLAIF / synthetic feedback",
          "focus": "model-generated preferences, critiques, and constitutional feedback",
          "key_risk": "synthetic judge behavior is treated as human preference",
          "keywords": [
            "constitutional",
            "rlaif",
            "ai feedback",
            "self-rewarding",
            "ultrafeedback"
          ]
        },
        {
          "name": "🧪 Reward-model benchmarks",
          "focus": "rewardbench-style evaluation data and reward-model stress tests",
          "key_risk": "benchmark preference does not predict downstream training value",
          "keywords": [
            "rewardbench",
            "reward model benchmark",
            "judge benchmark"
          ]
        },
        {
          "name": "🧾 Rubric-conditioned rewards",
          "focus": "rubric scores, critique-plus-score records, and domain-specific reward signals",
          "key_risk": "rubric wording becomes an exploitable reward channel",
          "keywords": [
            "rubric",
            "prometheus",
            "critique",
            "score"
          ]
        }
      ]
    },
    {
      "category_id": "programmatically_verifiable_outcome_data",
      "short_title": "Programmatic Verification",
      "navigator_title": "🧮 Programmatic Verification",
      "best_for": "math, code, proof, and answer-verifiable reasoning data",
      "subfields": [
        {
          "name": "📐 Math answer-verifiable data",
          "focus": "math problems, final answers, solution traces, and answer checkers",
          "key_risk": "answer extraction and normalization inflate scores",
          "keywords": [
            "gsm8k",
            "math",
            "numina",
            "deepmath",
            "openmath",
            "frontiermath"
          ]
        },
        {
          "name": "🧮 Math RLVR datasets",
          "focus": "math records used for rejection sampling, SFT, PRMs, and RLVR",
          "key_risk": "data reuse and contamination are not reported",
          "keywords": [
            "math rlvr",
            "deepseekmath",
            "openr1",
            "big-math",
            "math-prm"
          ]
        },
        {
          "name": "💻 Code execution / unit-test data",
          "focus": "code problems, unit tests, generated tests, execution logs, and repair tasks",
          "key_risk": "flaky or leaked tests become the reward",
          "keywords": [
            "humaneval",
            "mbpp",
            "apps",
            "livecodebench",
            "code",
            "unit test"
          ]
        },
        {
          "name": "🧾 Formal proof / Lean / theorem proving",
          "focus": "Lean, proof scripts, tactic environments, theorem statements, and proof checkers",
          "key_risk": "proof succeeds only under an undocumented environment",
          "keywords": [
            "lean",
            "proof",
            "prover",
            "theorem",
            "minif2f",
            "leandojo"
          ]
        },
        {
          "name": "🧪 Verifier robustness and answer extraction",
          "focus": "false positives, false negatives, checker brittleness, and adversarial formats",
          "key_risk": "model learns verifier quirks instead of task skill",
          "keywords": [
            "tinyv",
            "verifier",
            "answer extraction",
            "robustness",
            "symbolic",
            "checker"
          ]
        },
        {
          "name": "🧰 Programmatic benchmarks",
          "focus": "evaluation sets whose scoring can become a post-training signal",
          "key_risk": "benchmark scoring is reused as reward without audit",
          "keywords": [
            "benchmark",
            "evaluation",
            "scicode",
            "gpqa",
            "frontiermath"
          ]
        }
      ]
    },
    {
      "category_id": "process_trace_supervision_data",
      "short_title": "Process / Trace Supervision",
      "navigator_title": "🪜 Process / Trace Supervision",
      "best_for": "step-level labels, PRMs, rollout values, and first-error signals",
      "subfields": [
        {
          "name": "🪜 Human step-level labels",
          "focus": "human-labeled intermediate steps and first-error annotations",
          "key_risk": "step boundaries and label policy are ambiguous",
          "keywords": [
            "human step",
            "first-error",
            "prm800k",
            "let's verify"
          ]
        },
        {
          "name": "🧪 Process reward models",
          "focus": "PRMs, process verifiers, calibration, and reward-model training",
          "key_risk": "process reward rises while final correctness does not",
          "keywords": [
            "prm",
            "process reward",
            "process verifier",
            "reward model"
          ]
        },
        {
          "name": "🔁 Rollout-value supervision",
          "focus": "rollout values, search-derived labels, and automated progress signals",
          "key_risk": "rollout policy leaks solver strength into labels",
          "keywords": [
            "rollout",
            "value",
            "math-shepherd",
            "rewarding progress"
          ]
        },
        {
          "name": "🛠️ Automatic process supervision",
          "focus": "programmatic or model-generated process labels without dense human annotation",
          "key_risk": "automatic labels silently inherit verifier bias",
          "keywords": [
            "automatic",
            "automated process",
            "implicit rewards",
            "prime",
            "prof"
          ]
        },
        {
          "name": "❌ First-error localization",
          "focus": "where a solution first becomes invalid and how that signal is used",
          "key_risk": "localized errors are not causally linked to correction",
          "keywords": [
            "first error",
            "localization",
            "step-dpo",
            "error"
          ]
        },
        {
          "name": "📊 PRM benchmarks and evaluation",
          "focus": "ProcessBench, PRMBench, Qwen PRM, and evaluation surfaces for process rewards",
          "key_risk": "PRM benchmark success does not transfer to training use",
          "keywords": [
            "processbench",
            "prmbench",
            "qwen",
            "benchmark"
          ]
        }
      ]
    },
    {
      "category_id": "rollout_search_test_time_trace_data",
      "short_title": "Rollout / Search / TTC Trace",
      "navigator_title": "🔁 Rollout / Search / TTC Trace",
      "best_for": "search-generated candidates, best-of-N, pass@k, and test-time compute traces",
      "subfields": [
        {
          "name": "🎲 Multiple rollouts / best-of-N",
          "focus": "sets of sampled attempts and selected accepted answers",
          "key_risk": "only accepted traces are visible",
          "keywords": [
            "best-of",
            "best of",
            "multiple rollouts",
            "pass@k",
            "sample"
          ]
        },
        {
          "name": "🌳 Search trees / MCTS",
          "focus": "tree search, MCTS, verifier-guided search, and path selection",
          "key_risk": "tree policy or value model is hidden",
          "keywords": [
            "mcts",
            "tree search",
            "search tree",
            "rest-mcts"
          ]
        },
        {
          "name": "🔎 Rejection sampling traces",
          "focus": "accepted and rejected candidates produced during filtering",
          "key_risk": "rejected examples are not released",
          "keywords": [
            "rejection sampling",
            "reject",
            "accepted",
            "filtered"
          ]
        },
        {
          "name": "🧠 Self-consistency / repeated sampling",
          "focus": "vote-based or agreement-based reasoning from repeated samples",
          "key_risk": "sampling budget is not comparable",
          "keywords": [
            "self-consistency",
            "repeated sampling",
            "large language monkeys"
          ]
        },
        {
          "name": "⏱️ Test-time compute logs",
          "focus": "thinking budgets, inference-time scaling, and runtime search traces",
          "key_risk": "training and inference budget effects are conflated",
          "keywords": [
            "test-time",
            "inference budget",
            "thinking budget",
            "s1"
          ]
        },
        {
          "name": "✂️ Long2short / distill-from-search",
          "focus": "using long search traces to train shorter or cheaper behavior",
          "key_risk": "teacher search artifacts become hidden data lineage",
          "keywords": [
            "long2short",
            "distill",
            "search-generated",
            "distillation"
          ]
        }
      ]
    },
    {
      "category_id": "environment_agent_trajectory_data",
      "short_title": "Environment & Agent Trajectories",
      "navigator_title": "🌐 Environment & Agent Trajectories",
      "best_for": "tool, web, OS, app, SWE, and replayable environment data",
      "subfields": [
        {
          "name": "🛠️ Tool-use data",
          "focus": "tool calls, function signatures, API banks, and tool-use traces",
          "key_risk": "tool schemas change or hide execution failures",
          "keywords": [
            "tool",
            "api",
            "function",
            "gorilla",
            "toolformer",
            "toolllm"
          ]
        },
        {
          "name": "🌍 Web/browser agents",
          "focus": "web tasks, browser state, navigation traces, and page observations",
          "key_risk": "web state is not replayable after collection",
          "keywords": [
            "web",
            "browser",
            "webarena",
            "mind2web",
            "weblinx",
            "browsergym"
          ]
        },
        {
          "name": "📱 App/mobile agents",
          "focus": "mobile apps, app-world tasks, UI actions, and user simulators",
          "key_risk": "UI state and app versions are not pinned",
          "keywords": [
            "app",
            "android",
            "mobile",
            "appworld"
          ]
        },
        {
          "name": "🖥️ OS/desktop agents",
          "focus": "desktop/OS tasks, filesystem state, shell actions, and multi-app workflows",
          "key_risk": "hidden environment state makes episodes non-reproducible",
          "keywords": [
            "osworld",
            "desktop",
            "computer",
            "workarena"
          ]
        },
        {
          "name": "🧑‍💻 SWE/repository agents",
          "focus": "GitHub issues, code patches, tests, commits, and repository repair episodes",
          "key_risk": "repository commit, tests, and scaffold are not pinned",
          "keywords": [
            "swe",
            "repository",
            "software",
            "swe-bench",
            "r2e",
            "terminal-bench"
          ]
        },
        {
          "name": "🔁 Replayable trajectory data",
          "focus": "state-action-observation schemas, terminal predicates, and failure traces",
          "key_risk": "success transcript cannot be replayed or audited",
          "keywords": [
            "trajectory",
            "state",
            "action",
            "observation",
            "terminal",
            "replay"
          ]
        },
        {
          "name": "🧰 Agent benchmarks and terminal predicates",
          "focus": "agent evaluation suites, task resets, terminal predicates, and success/failure labels",
          "key_risk": "score is reported without a replayable predicate",
          "keywords": [
            "agent benchmark",
            "terminal predicate",
            "benchmark"
          ]
        }
      ]
    },
    {
      "category_id": "judgment_rubric_domain_expert_data",
      "short_title": "Judgment / Rubric / Domain Expert",
      "navigator_title": "⚖️ Judgment / Rubric / Domain Expert",
      "best_for": "LLM judges, expert rubrics, factuality, safety, medical, legal, and finance reasoning",
      "subfields": [
        {
          "name": "⚖️ LLM-as-judge data",
          "focus": "model judges, preference judgments, judge prompts, and evaluator models",
          "key_risk": "judge is sensitive to style, position, or prompt attacks",
          "keywords": [
            "judge",
            "llm-as-judge",
            "mt-bench",
            "arena",
            "prometheus"
          ]
        },
        {
          "name": "🧑‍⚖️ Human/expert judgment",
          "focus": "human labels, expert adjudication, disagreement handling, and rubric design",
          "key_risk": "expertise and adjudication policy are not disclosed",
          "keywords": [
            "human",
            "expert",
            "adjudication",
            "rubric"
          ]
        },
        {
          "name": "🩺 Medical reasoning / health rubrics",
          "focus": "health, biomedical, scientific, and evidence-grounded reasoning tasks",
          "key_risk": "rubrics are not calibrated for high-stakes error",
          "keywords": [
            "medical",
            "health",
            "biomedical",
            "science",
            "gpqa",
            "healthbench"
          ]
        },
        {
          "name": "🛡️ Safety reasoning data",
          "focus": "safety reasoning, refusals, jailbreaks, harmfulness, and guardrail data",
          "key_risk": "safe-looking refusals replace correct domain reasoning",
          "keywords": [
            "safety",
            "harm",
            "refusal",
            "guard",
            "aegis"
          ]
        },
        {
          "name": "🧾 Factuality / grounding",
          "focus": "claims, citations, retrieval grounding, fact checking, and evidence quality",
          "key_risk": "citation style masks unsupported claims",
          "keywords": [
            "factuality",
            "fact",
            "citation",
            "retrieval",
            "grounding"
          ]
        },
        {
          "name": "⚖️ Legal reasoning",
          "focus": "legal QA, statutes, case reasoning, contracts, and expert legal rubrics",
          "key_risk": "splits leak templates or jurisdiction assumptions",
          "keywords": [
            "legal",
            "law",
            "contract",
            "casehold",
            "statute"
          ]
        },
        {
          "name": "🏦 Financial reasoning",
          "focus": "financial QA, tabular/text numerical reasoning, filings, and analyst-style judgments",
          "key_risk": "splits leak templates or memorized company facts",
          "keywords": [
            "finance",
            "financial",
            "finqa",
            "tat-qa",
            "financebench"
          ]
        },
        {
          "name": "🧪 Rubric reward models",
          "focus": "rubrics as trainable rewards and domain-conditioned reward models",
          "key_risk": "rubric scores are optimized without semantic robustness",
          "keywords": [
            "rubric reward",
            "rewardbench",
            "prometheus",
            "rubrics as rewards"
          ]
        }
      ]
    },
    {
      "category_id": "data_construction_open_release_recipes",
      "short_title": "Construction & Open Releases",
      "navigator_title": "🏗️ Construction & Open Releases",
      "best_for": "building, filtering, releasing, and reproducing reasoning datasets",
      "subfields": [
        {
          "name": "🧱 Prompt sourcing",
          "focus": "question pools, seed sources, licenses, difficulty, and base-model pass rates",
          "key_risk": "prompt sources are mixed without attribution",
          "keywords": [
            "prompt",
            "source",
            "seed",
            "question",
            "dataset"
          ]
        },
        {
          "name": "✍️ Teacher trace generation",
          "focus": "teacher models, trace policies, sampling settings, and distillation targets",
          "key_risk": "teacher identity or sampling protocol is hidden",
          "keywords": [
            "teacher",
            "trace",
            "distill",
            "solution",
            "rationale"
          ]
        },
        {
          "name": "🔎 Rejection sampling / search-generated data",
          "focus": "candidate generation, search budget, filtering, and accepted/rejected examples",
          "key_risk": "only accepted traces are released",
          "keywords": [
            "rejection",
            "sampling",
            "search",
            "candidate",
            "filter"
          ]
        },
        {
          "name": "🔁 Self-play / self-improvement",
          "focus": "self-improvement, co-evolution, generator-verifier cycles, and curricula",
          "key_risk": "feedback loop amplifies hidden shortcuts",
          "keywords": [
            "self-play",
            "self-improvement",
            "co-evolution",
            "generator",
            "verifier"
          ]
        },
        {
          "name": "🧪 Filtering and verifier refresh",
          "focus": "answer filters, judge filters, decontamination, and verifier updates",
          "key_risk": "filter thresholds become hidden objectives",
          "keywords": [
            "filtering",
            "verifier",
            "decontamination",
            "dedup",
            "refresh"
          ]
        },
        {
          "name": "🏗️ Open reasoning data releases",
          "focus": "open datasets, code, HF releases, recipes, ablations, and reproducibility",
          "key_risk": "dataset is open but recipe details are not",
          "keywords": [
            "openthoughts",
            "openmath",
            "openr1",
            "open reasoning",
            "release"
          ]
        },
        {
          "name": "🧬 Data lineage and release metadata",
          "focus": "datasheets, splits, lineage, licensing, versioning, and known failures",
          "key_risk": "reuse loses the release context",
          "keywords": [
            "lineage",
            "metadata",
            "license",
            "datasheet",
            "split"
          ]
        }
      ]
    },
    {
      "category_id": "training_usage_optimization_objectives",
      "short_title": "Training Usage & Objectives",
      "navigator_title": "🎯 Training Usage & Objectives",
      "best_for": "how data enters SFT, DPO, RM, PRM, RLVR, agents, evaluation, and audit",
      "subfields": [
        {
          "name": "🧱 SFT / instruction tuning",
          "focus": "data used as supervised target behavior",
          "key_risk": "target text hides verifier and source assumptions",
          "keywords": [
            "sft",
            "instruction tuning",
            "supervised",
            "demonstration"
          ]
        },
        {
          "name": "📚 Distillation",
          "focus": "teacher outputs, traces, or policies distilled into a student",
          "key_risk": "teacher lineage is hidden",
          "keywords": [
            "distill",
            "distillation",
            "teacher"
          ]
        },
        {
          "name": "⚖️ Preference optimization",
          "focus": "pairwise feedback for DPO/IPO/KTO-style objectives",
          "key_risk": "pair context does not match downstream use",
          "keywords": [
            "dpo",
            "preference optimization",
            "ipo",
            "kto"
          ]
        },
        {
          "name": "🎚️ Reward modeling / ORM",
          "focus": "scalar or pairwise data used to train outcome rewards",
          "key_risk": "reward can be overoptimized",
          "keywords": [
            "reward model",
            "orm",
            "outcome reward"
          ]
        },
        {
          "name": "🪜 PRM / process supervision",
          "focus": "step-level or trace-level signals used to train process rewards",
          "key_risk": "PRM rewards trace style",
          "keywords": [
            "prm",
            "process reward",
            "step label"
          ]
        },
        {
          "name": "🏋️ RLVR / verifier RL",
          "focus": "programmatic or verifier rewards used in RL",
          "key_risk": "verifier false positives become policy incentives",
          "keywords": [
            "rlvr",
            "reinforcement",
            "grpo",
            "ppo",
            "verifier"
          ]
        },
        {
          "name": "🌐 Agent training",
          "focus": "environment episodes, tool traces, or terminal rewards for agent policies",
          "key_risk": "environment cannot be replayed",
          "keywords": [
            "agent training",
            "environment",
            "trajectory",
            "tool"
          ]
        },
        {
          "name": "🧪 Evaluation / reranking / audit",
          "focus": "data used for scoring, selection, reporting, or failure analysis",
          "key_risk": "evaluation data becomes training data",
          "keywords": [
            "evaluation",
            "rerank",
            "audit",
            "benchmark"
          ]
        }
      ]
    },
    {
      "category_id": "scaling_rlvr_test_time_compute",
      "short_title": "Scaling / RLVR / TTC",
      "navigator_title": "📈 Scaling / RLVR / TTC",
      "best_for": "data scale, RLVR, verifier scaling, pass@k, and inference budget claims",
      "subfields": [
        {
          "name": "📈 Data scaling",
          "focus": "number, diversity, difficulty, and uniqueness of examples",
          "key_risk": "unique examples and repeated rollouts are conflated",
          "keywords": [
            "data scaling",
            "large-scale",
            "data scale"
          ]
        },
        {
          "name": "🔁 Data reuse and uniqueness",
          "focus": "reuse counts, deduplication, repeated prompts, and train/test overlap",
          "key_risk": "same source examples are counted as fresh data",
          "keywords": [
            "reuse",
            "dedup",
            "unique",
            "train-test overlap"
          ]
        },
        {
          "name": "⏱️ Test-time compute",
          "focus": "sampling, search, self-critique, thinking budgets, and inference-time scaling",
          "key_risk": "different inference budgets are compared",
          "keywords": [
            "test-time",
            "inference",
            "compute",
            "thinking budget",
            "s1"
          ]
        },
        {
          "name": "🎲 pass@k / sampling budget",
          "focus": "pass@k, repeated sampling, best-of-N, and budget-aware evaluation",
          "key_risk": "reported gains hide selection or budget changes",
          "keywords": [
            "pass@",
            "pass k",
            "sampling budget",
            "repeated sampling"
          ]
        },
        {
          "name": "🧪 Verifier scaling",
          "focus": "how verifier strength, refresh, and coverage scale with training",
          "key_risk": "verifier becomes stale or easy to exploit",
          "keywords": [
            "verifier scaling",
            "reward scaling",
            "refresh",
            "coverage"
          ]
        },
        {
          "name": "🏋️ RLVR optimization scaling",
          "focus": "policy optimization, reward contracts, curriculum, and rollout policy",
          "key_risk": "optimizer/scaffold gains are mistaken for data gains",
          "keywords": [
            "rlvr",
            "dapo",
            "deepscaler",
            "open-reasoner",
            "grpo"
          ]
        },
        {
          "name": "🔍 Scaling attribution",
          "focus": "separating data, verifier, optimizer, model, and inference-budget effects",
          "key_risk": "ablation tables do not isolate the source of improvement",
          "keywords": [
            "attribution",
            "ablation",
            "sober",
            "origin"
          ]
        }
      ]
    },
    {
      "category_id": "benchmarks_evaluation_surfaces",
      "short_title": "Benchmarks & Evaluation",
      "navigator_title": "🧰 Benchmarks & Evaluation",
      "best_for": "evaluation surfaces and reusable feedback contracts",
      "subfields": [
        {
          "name": "📐 Math benchmarks",
          "focus": "math problem sets, answer extraction, verifier compatibility, and difficulty",
          "key_risk": "short-answer normalization hides reasoning errors",
          "keywords": [
            "math",
            "gsm8k",
            "frontiermath",
            "math-perturb"
          ]
        },
        {
          "name": "💻 Code benchmarks",
          "focus": "coding tasks, generated tests, hidden tests, repair tasks, and live coding",
          "key_risk": "unit tests are brittle, leaked, or too narrow",
          "keywords": [
            "code",
            "humaneval",
            "apps",
            "livecodebench",
            "bigcodebench"
          ]
        },
        {
          "name": "🧾 Proof benchmarks",
          "focus": "formal proof datasets, proof assistants, theorem statements, and checking",
          "key_risk": "proof checker version and imports are not pinned",
          "keywords": [
            "proof",
            "theorem",
            "minif2f",
            "proofnet",
            "holist"
          ]
        },
        {
          "name": "🌐 Agent benchmarks",
          "focus": "web, tool, OS, app, and SWE environments with terminal predicates",
          "key_risk": "benchmark episodes cannot be replayed",
          "keywords": [
            "agent",
            "web",
            "swe",
            "os",
            "tool",
            "app"
          ]
        },
        {
          "name": "⚖️ Rubric/domain benchmarks",
          "focus": "medical, safety, legal, finance, science, factuality, and expert rubrics",
          "key_risk": "rubric or judge expertise is insufficiently disclosed",
          "keywords": [
            "medical",
            "safety",
            "legal",
            "finance",
            "factuality",
            "healthbench"
          ]
        },
        {
          "name": "🧪 Reward-model benchmarks",
          "focus": "reward model, LLM-judge, PRM, and rubric evaluation suites",
          "key_risk": "benchmark reward preference does not reflect training value",
          "keywords": [
            "rewardbench",
            "prmbench",
            "processbench",
            "judge"
          ]
        },
        {
          "name": "🧯 Live / contamination-resistant benchmarks",
          "focus": "live, refreshed, hidden, or contamination-aware evaluation",
          "key_risk": "static benchmark becomes a training target",
          "keywords": [
            "live",
            "contamination",
            "fresh",
            "hidden",
            "lasting"
          ]
        }
      ]
    },
    {
      "category_id": "frontier_reports_data_disclosure_ledger",
      "short_title": "Frontier Disclosure Ledger",
      "navigator_title": "🚀 Frontier Disclosure Ledger",
      "best_for": "reading frontier reports as partial data-recipe disclosures",
      "subfields": [
        {
          "name": "🚀 DeepSeek-R1 family",
          "focus": "RLVR, distillation, reasoning traces, and public recipe disclosure",
          "key_risk": "report describes outcomes but not enough data partitions",
          "keywords": [
            "deepseek-r1",
            "deepseek r1",
            "r1-zero",
            "r1 zero",
            "r1",
            "distill"
          ]
        },
        {
          "name": "🌙 Kimi reasoning reports",
          "focus": "long-context reasoning, RL compute, and frontier inference budgets",
          "key_risk": "test-time compute is mixed with training-data effects",
          "keywords": [
            "kimi",
            "k1.5",
            "moonshot"
          ]
        },
        {
          "name": "🐉 Qwen reasoning/math/code reports",
          "focus": "math, code, PRM, and open-weight reasoning model families",
          "key_risk": "release cards do not separate SFT, RLVR, and evaluation data",
          "keywords": [
            "qwen",
            "qwen2.5",
            "qwen3"
          ]
        },
        {
          "name": "🧠 Magistral / Phi / Nemotron style reports",
          "focus": "open-weight reasoning reports with partial data and reward disclosures",
          "key_risk": "model-card claims cannot be mapped to concrete data objects",
          "keywords": [
            "magistral",
            "phi",
            "nemotron",
            "minimax",
            "llama"
          ]
        },
        {
          "name": "🧪 RLVR recipe reports",
          "focus": "reports that expose reward contracts, rollout policies, or RL scaffolds",
          "key_risk": "RL gains are attributed without verifier coverage",
          "keywords": [
            "rlvr",
            "reinforcement",
            "reward",
            "verifier",
            "dapo"
          ]
        },
        {
          "name": "🧬 What is disclosed vs hidden",
          "focus": "data sources, filters, lineage, safety mixtures, and undisclosed partitions",
          "key_risk": "opaque mixtures are reused as open recipes",
          "keywords": [
            "technical report",
            "data mixture",
            "disclosed",
            "hidden"
          ]
        }
      ]
    },
    {
      "category_id": "audit_failure_contamination_verifier_attacks",
      "short_title": "Audit & Failure Modes",
      "navigator_title": "🧯 Audit & Failure Modes",
      "best_for": "leakage, contamination, verifier gaming, judge attacks, and reproducibility failures",
      "subfields": [
        {
          "name": "🧯 Benchmark contamination",
          "focus": "train/test overlap, stale evaluations, and benchmark refresh",
          "key_risk": "memorized items are reported as reasoning progress",
          "keywords": [
            "contamination",
            "benchmark",
            "livebench",
            "lastingbench"
          ]
        },
        {
          "name": "🔍 Search-time contamination",
          "focus": "contamination introduced by search, tools, retrieval, or inference scaffolds",
          "key_risk": "test-time tool access leaks answer traces",
          "keywords": [
            "search-time",
            "retrieval",
            "tool",
            "contamination"
          ]
        },
        {
          "name": "🧬 Hidden lineage / teacher leakage",
          "focus": "teacher-model traces, synthetic data inheritance, and hidden trait transfer",
          "key_risk": "student behavior inherits undisclosed teacher artifacts",
          "keywords": [
            "lineage",
            "teacher",
            "subliminal",
            "leaky",
            "hidden"
          ]
        },
        {
          "name": "🎮 Reward hacking",
          "focus": "ways reward models, tests, or judges can be optimized as shortcuts",
          "key_risk": "reward rises while real quality falls",
          "keywords": [
            "reward hacking",
            "spurious",
            "gaming",
            "overoptimization"
          ]
        },
        {
          "name": "🧪 Verifier gaming",
          "focus": "models exploiting checkers, answer formats, or judge blind spots",
          "key_risk": "verifier-passing examples are semantically wrong",
          "keywords": [
            "verifier",
            "gaming",
            "imperfect",
            "attack",
            "robustness"
          ]
        },
        {
          "name": "⚖️ LLM-as-judge attacks",
          "focus": "one-token attacks, position bias, verbosity bias, and prompt attacks",
          "key_risk": "judge score changes for non-semantic reasons",
          "keywords": [
            "judge",
            "one token",
            "attack",
            "bias",
            "llm-as-a-judge"
          ]
        },
        {
          "name": "🧨 Spurious rewards",
          "focus": "shortcut rewards, memorization-triggered rewards, and wrong-behavior correlations",
          "key_risk": "reward improves while model learns a shortcut",
          "keywords": [
            "spurious",
            "shortcut",
            "memorization shortcut",
            "reward paradox"
          ]
        },
        {
          "name": "📉 Reproducibility failures",
          "focus": "decoding, evaluation, scaffold, and data reporting failures",
          "key_risk": "reported gains disappear under controlled reruns",
          "keywords": [
            "reproducibility",
            "sober",
            "decoding",
            "evaluation"
          ]
        }
      ]
    }
  ],
  "starter_packs": [
    {
      "id": "programmatic_verification_2026",
      "emoji": "🧮",
      "title": "Programmatic Verification 3: 2026 Collection",
      "goal": "Start from three recent, top-institution papers on Lean proof agents, formal-benchmark audit, and verifier-preserving invariant-data curation.",
      "entries": [
        {
          "title": "LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks",
          "entry_id": "leap-formal-mathematics-2026",
          "matched": true,
          "entry": {
            "id": "leap-formal-mathematics-2026",
            "title": "LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks",
            "year": 2026,
            "venue": "arXiv",
            "authors": [
              "Po-Nien Kung",
              "Linfeng Song",
              "Dawsen Hwang",
              "Jinsung Yoon",
              "Chun-Liang Li",
              "Simone Severini",
              "Mirek Olšák",
              "Edward Lockhart",
              "Quoc V. Le",
              "Burak Gokturk",
              "Thang Luong",
              "Tomas Pfister",
              "Nanyun Peng"
            ],
            "source_role": [
              "benchmark",
              "data_release",
              "infrastructure"
            ],
            "verification_contract": [
              "programmatic"
            ],
            "supervision_granularity": [
              "answer_level",
              "full_episode"
            ],
            "training_use": [
              "evaluation",
              "agent_training",
              "test_time_compute",
              "audit"
            ],
            "domains": [
              "formal-mathematics",
              "lean4",
              "theorem-proving"
            ],
            "category": [
              "programmatically_verifiable_outcome_data"
            ],
            "subfield": "🧾 Formal proof / Lean / theorem proving",
            "tags": [
              "programmatically-verifiable-outcome",
              "formal-mathematics",
              "lean4",
              "agentic-proving",
              2026
            ],
            "one_line_summary": "LEAP turns blueprint-guided theorem-proving rollouts into Lean-checkable proof outcomes and introduces IMO-LeanProofBench for hard formal mathematics.",
            "why_it_matters": "It makes the Lean compiler a reproducible terminal predicate for long-horizon mathematical agent traces instead of relying on natural-language plausibility.",
            "data_object": "A Lean proof artifact plus the Lean checker acceptance or rejection outcome.; process: informal blueprint, AND-OR proof graph, candidate Lean code; The Lean proof environment, retrieval/search tools, and the released IMO-LeanProofBench task suite.",
            "feedback_verifier": "Lean compiler and kernel acceptance of formal proof code.",
            "audit_focus": "Geometry remains materially harder than algebra, combinatorics, and number theory in the reported benchmark., A checker-accepted proof establishes formal correctness only relative to the encoded theorem statement and pinned Lean environment., Reported performance depends on the backend model, retrieval corpus, and inference-time search budget.",
            "curation_level": "L4_carded",
            "status": "verified",
            "needs_search": false,
            "artifacts": {
              "paper": "https://arxiv.org/abs/2606.03303",
              "venue": null,
              "arxiv": "https://arxiv.org/abs/2606.03303",
              "openreview": null,
              "acl": null,
              "pmlr": null,
              "cvf": null,
              "doi": null,
              "code": "https://github.com/google-deepmind/superhuman/tree/main/leap",
              "data": "https://imobench.github.io/",
              "huggingface": null,
              "project": "https://imobench.github.io/",
              "bibtex": null,
              "paper_card_source": "paper_cards/library/cards/leap-formal-mathematics-2026/sources"
            },
            "primary_link": "https://arxiv.org/abs/2606.03303"
          }
        },
        {
          "title": "Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving",
          "entry_id": "faults-formal-benchmarking-2026",
          "matched": true,
          "entry": {
            "id": "faults-formal-benchmarking-2026",
            "title": "Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving",
            "year": 2026,
            "venue": "ICML 2026",
            "authors": [
              "Pawan Sasanka Ammanamanchi",
              "Siddharth Bhat",
              "Stella Biderman"
            ],
            "source_role": [
              "audit_failure",
              "benchmark",
              "infrastructure"
            ],
            "verification_contract": [
              "mixed"
            ],
            "supervision_granularity": [
              "answer_level",
              "step_level"
            ],
            "training_use": [
              "evaluation",
              "audit"
            ],
            "domains": [
              "formal-mathematics",
              "lean4",
              "benchmark-audit"
            ],
            "category": [
              "programmatically_verifiable_outcome_data"
            ],
            "subfield": "🧾 Formal proof / Lean / theorem proving",
            "tags": [
              "programmatically-verifiable-outcome",
              "Lean",
              "benchmark-audit",
              "verifier-robustness",
              "ICML-2026"
            ],
            "one_line_summary": "Faults in Our Formal Benchmarking audits Lean benchmarks with static checkers and certified witnesses, showing where a kernel-accepted result is not enough.",
            "why_it_matters": "It turns verifier robustness and statement fidelity into data fields that can be checked, rather than assuming every Lean pass is a trustworthy label.",
            "data_object": "A finding with its affected theorem, fault type, checker result, and—where applicable—a machine-checkable witness.; process: formal statement, Lean environment, static-check result; Pinned Lean 3/Lean 4 benchmark environments and the released audit checker suite.",
            "feedback_verifier": "Lean metaprogram/static checks and mechanically certified counterexample, vacuity, or unprovability evidence; semantic prompts are a separate non-deterministic audit layer.",
            "audit_focus": "A Lean kernel proof certifies the encoded statement, not its informal fidelity., Static checking cannot decide every semantic mismatch., Results depend on the pinned Lean and dependency environment.",
            "curation_level": "L4_carded",
            "status": "verified",
            "needs_search": false,
            "artifacts": {
              "paper": "https://arxiv.org/abs/2606.29493",
              "venue": null,
              "arxiv": "https://arxiv.org/abs/2606.29493",
              "openreview": null,
              "acl": null,
              "pmlr": null,
              "cvf": null,
              "doi": null,
              "code": "https://github.com/Shashi456/atp-checkers",
              "data": null,
              "huggingface": null,
              "project": null,
              "bibtex": null,
              "paper_card_source": "paper_cards/library/cards/faults-formal-benchmarking-2026/sources"
            },
            "primary_link": "https://arxiv.org/abs/2606.29493"
          }
        },
        {
          "title": "Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs",
          "entry_id": "wonda-invariant-curation-2026",
          "matched": true,
          "entry": {
            "id": "wonda-invariant-curation-2026",
            "title": "Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs",
            "year": 2026,
            "venue": "ICML 2026",
            "authors": [
              "Ido Pinto",
              "Yizhak Yisrael Elboher",
              "Haoze Wu",
              "Nina Narodytska",
              "Guy Katz"
            ],
            "source_role": [
              "data_release",
              "construction_recipe",
              "verifier_reward"
            ],
            "verification_contract": [
              "programmatic"
            ],
            "supervision_granularity": [
              "answer_level",
              "step_level"
            ],
            "training_use": [
              "sft",
              "evaluation",
              "audit"
            ],
            "domains": [
              "program-verification",
              "loop-invariants",
              "C-programs"
            ],
            "category": [
              "programmatically_verifiable_outcome_data"
            ],
            "subfield": "🧪 Verifier robustness and answer extraction",
            "tags": [
              "programmatically-verifiable-outcome",
              "loop-invariants",
              "program-verification",
              "data-curation",
              "ICML-2026"
            ],
            "one_line_summary": "WONDA converts noisy verifier-generated loop invariants into readable training data, rechecking every risky transformation with a formal verifier.",
            "why_it_matters": "It shows how to improve the pedagogical quality of verifier-backed data without silently replacing correctness with an LLM rewrite judgment.",
            "data_object": "A candidate loop invariant attached to a program location, with correctness and sufficiency verification outcomes.; process: verification query, raw invariant, normalized AST; UAutomizer-backed program-verification environment with enforced time/memory limits.",
            "feedback_verifier": "A sound verification oracle checks invariant induction/correctness and sufficiency for the program query.",
            "audit_focus": "A verifier-valid invariant can be unreadable or overly specialized., LLM rewriting can introduce semantic drift unless every candidate is rechecked., Verification timeouts and UNKNOWN results need an explicit retention policy.",
            "curation_level": "L4_carded",
            "status": "verified",
            "needs_search": false,
            "artifacts": {
              "paper": "https://arxiv.org/abs/2603.15510",
              "venue": null,
              "arxiv": "https://arxiv.org/abs/2603.15510",
              "openreview": "https://openreview.net/forum?id=fS28SOioQd",
              "acl": null,
              "pmlr": null,
              "cvf": null,
              "doi": null,
              "code": "https://github.com/idopinto/wonda",
              "data": null,
              "huggingface": null,
              "project": null,
              "bibtex": null,
              "paper_card_source": "paper_cards/library/cards/wonda-invariant-curation-2026/sources"
            },
            "primary_link": "https://arxiv.org/abs/2603.15510"
          }
        }
      ]
    }
  ]
};
