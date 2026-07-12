window.ATLAS_DATA = {
  "entries": [
    {
      "id": "alphamath-almost-zero-2024",
      "title": "AlphaMath Almost Zero: Process Supervision without Process",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [
        "Guoxin Chen",
        "Minpeng Liao",
        "Chengxi Li",
        "Kai Fan"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "MCTS turns answer-only mathematics problems into searched reasoning traces and automatically inferred step-level value supervision.",
      "why_it_matters": "Use this Card when designing answer-only-to-process-data pipelines, value-guided search, or comparisons between MCTS, beam search, and dense process annotation.",
      "data_object": "math problem; partial solution state; candidate next step; MCTS node and branch; rollout terminal answer; correctness result; backed-up node value; selected reasoning path; process: math problem, partial solution state, candidate next step; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "Final-answer matching or the task answer checker supplies the terminal outcome; an MCTS-derived value model acts as the selector for partial states.",
      "audit_focus": "Answer equivalence and extraction can be brittle; successful terminal answers do not prove every intermediate step is sound; incomplete release of rejected branches, visit counts, and policy versions weakens causal audit; MCTS compute can be mistaken for model improvement., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.03553",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.03553",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2405.03553",
        "code": "https://github.com/MARIO-Math-Reasoning/Super_MARIO",
        "data": "https://huggingface.co/datasets/MARIO-Math-Reasoning/AlphaMath-Trainset",
        "huggingface": null,
        "project": "https://openreview.net/forum?id=VaXnxQ3UKo",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/alphamath-almost-zero-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2405.03553"
    },
    {
      "id": "autopsv-automated-process-supervised-verifier-2024",
      "title": "AutoPSV: Automated Process-Supervised Verifier",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [
        "Jianqiao Lu",
        "Zhiyang Dou",
        "Hongru Wang",
        "Zeyu Cao",
        "Jianbo Dai",
        "Yingjia Wan",
        "Zhijiang Guo"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "math",
        "commonsense",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "primary-link-checked"
      ],
      "one_line_summary": "Automated process-supervision recipe that derives step annotations from verifier confidence changes.",
      "why_it_matters": "It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.",
      "data_object": "reasoning trace with step-level confidence-change annotations.; process: problem, candidate solution, reasoning step; offline reasoning traces",
      "feedback_verifier": "answer-trained verifier converted into automated process annotations.",
      "audit_focus": "answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.16802",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.16802",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2405.16802",
        "code": "https://github.com/rookie-joe/AutoPSV",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2405.16802"
    },
    {
      "id": "competition-level-code-generation-with-alphacode-2022",
      "title": "Competition-Level Code Generation with AlphaCode",
      "year": 2022,
      "venue": "Science 378(6624), 1092-1097",
      "authors": [
        "Yujia Li",
        "David Choi",
        "Junyoung Chung",
        "Nate Kushman",
        "Julian Schrittwieser",
        "Rémi Leblond",
        "Tom Eccles",
        "James Keeling",
        "Felix Gimeno",
        "Agustin Dal Lago",
        "Thomas Hubert",
        "Peter Choy",
        "Cyprien de Masson d'Autume",
        "Igor Babuschkin",
        "Xinyun Chen",
        "Po-Sen Huang",
        "Johannes Welbl",
        "Sven Gowal",
        "Alexey Cherepanov",
        "James Molloy",
        "Daniel J. Mankowitz",
        "Esme Sutherland Robson",
        "Pushmeet Kohli",
        "Nando de Freitas",
        "Koray Kavukcuoglu",
        "Oriol Vinyals"
      ],
      "source_role": [
        "model_report",
        "scaling_study",
        "construction_recipe"
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
        "test_time_compute"
      ],
      "domains": [
        "code",
        "competitive_programming",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🧠 Self-consistency / repeated sampling",
      "tags": [
        "alphacode",
        "repeated-sampling",
        "program-filtering",
        "behavioral-clustering",
        "competitive-programming"
      ],
      "one_line_summary": "Samples up to one million programs per model and problem, then filters and clusters them into ten contest submissions.",
      "why_it_matters": "It shows how generation budget, executable feedback, diversity control, and a hard external submission budget interact.",
      "data_object": "per-problem program pools with compilation status, example-test behavior, behavioral cluster membership, rank, and up to ten submitted programs.; process: problem statement, language, sampled program; compiler, public example tests, learned test-input generation, behavioral clustering, and hidden Codeforces judging.",
      "feedback_verifier": "compilation and example-test filtering followed by clustering and model-based ranking; hidden tests provide terminal evaluation only.",
      "audit_focus": "Example tests reject more than 99 percent of samples but do not guarantee hidden-test correctness., One million samples per model per problem is far removed from the final ten-submission evaluation budget., Behavioral clustering depends on generated tests and can merge semantically different programs or miss equivalent ones.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2203.07814",
        "venue": "https://www.science.org/doi/10.1126/science.abq1158",
        "arxiv": "https://arxiv.org/abs/2203.07814",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.1126/science.abq1158",
        "code": "https://github.com/google-deepmind/code_contests",
        "data": "https://github.com/google-deepmind/code_contests",
        "huggingface": null,
        "project": "https://deepmind.google/blog/competitive-programming-with-alphacode/",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/competition-level-code-generation-with-alphacode-2022/sources"
      },
      "primary_link": "https://arxiv.org/abs/2203.07814"
    },
    {
      "id": "deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024",
      "title": "DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Huajian Xin",
        "Z. Z. Ren",
        "Junxiao Song",
        "Zhihong Shao",
        "Wanjia Zhao",
        "Haocheng Wang",
        "Bo Liu",
        "Liyue Zhang",
        "Xuan Lu",
        "Qiushi Du",
        "Wenjun Gao",
        "Qihao Zhu",
        "Dejian Yang",
        "Zhibin Gou",
        "Z. F. Wu",
        "Fuli Luo",
        "Chong Ruan"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "Lean feedback and intrinsic-reward RMaxTS produce diverse, kernel-checkable formal proof paths at training and inference time.",
      "why_it_matters": "Use this Card for formal-verifier-anchored search traces, RL from proof feedback, proof-path diversity, and the distinction between kernel validity and informal mathematical faithfulness.",
      "data_object": "Lean theorem and imports; generated proof candidate; proof-assistant response; valid or failed proof path; RMaxTS node; intrinsic reward; selected path; terminal kernel verdict; search budget; process: Lean theorem and imports, generated proof candidate, proof-assistant response; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "Lean 4 and mathlib provide executable proof validity and terminal closure; RMaxTS combines policy likelihood, search statistics, and intrinsic reward to select expansions.",
      "audit_focus": "The training-time search corpus is not released as a standalone dataset; Lean and mathlib version drift changes replay; intrinsic reward may improve diversity without semantic progress; search cost and whole-proof generation length complicate matched-budget comparisons., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2408.08152",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2408.08152",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2408.08152",
        "code": "https://github.com/deepseek-ai/DeepSeek-Prover-V1.5",
        "data": "https://github.com/deepseek-ai/DeepSeek-Prover-V1.5/tree/main/datasets",
        "huggingface": null,
        "project": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learning-and-monte-carlo-tree-search-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2408.08152"
    },
    {
      "id": "deepseek-r1-2025",
      "title": "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
      "year": 2025,
      "venue": "Nature",
      "authors": [
        "DeepSeek-AI",
        "Daya Guo",
        "Dejian Yang",
        "Haowei Zhang",
        "Junxiao Song",
        "Ruoyu Zhang",
        "Runxin Xu",
        "Qihao Zhu",
        "Shirong Ma",
        "Peiyi Wang",
        "Xiao Bi",
        "Xiaokang Zhang",
        "Xingkai Yu",
        "Yu Wu",
        "Zhihong Shao"
      ],
      "source_role": [
        "model_report",
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "rlvr",
        "sft",
        "distillation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "code",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🔎 Rejection sampling traces",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Combines rule-rewarded on-policy reasoning rollouts, rejection-sampled SFT data, multi-stage RL, and long-CoT distillation.",
      "why_it_matters": "The report links emergent long reasoning under outcome RL to a practical multi-stage recipe that repairs readability and transfers behavior by rejection sampling and distillation.",
      "data_object": "prompt, policy checkpoint, sampled long reasoning response, final answer, accuracy and format rewards, rejection-sampling decision, SFT mixture membership, and distilled student target; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data",
      "audit_focus": "the complete training rollout corpus and rejected distribution are not released, multi-stage gains conflate RL, cold-start data, rejection sampling, and distillation, rule correctness does not verify the faithfulness or efficiency of a long rationale",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.12948",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.12948",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.12948",
        "code": "https://github.com/deepseek-ai/DeepSeek-R1",
        "data": null,
        "huggingface": "https://huggingface.co/deepseek-ai/DeepSeek-R1",
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/deepseek-r1-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2501.12948"
    },
    {
      "id": "efficient-long-cot-reasoning-in-small-language-models-2025",
      "title": "Efficient Long CoT Reasoning in Small Language Models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Zhaoyang Wang",
        "Jinqi Jiang",
        "Tian Qiu",
        "Hui Liu",
        "Xianfeng Tang",
        "Huaxiu Yao"
      ],
      "source_role": [
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation"
      ],
      "domains": [
        "math",
        "reasoning",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "✂️ Long2short / distill-from-search",
      "tags": [
        "long2short",
        "long-cot",
        "distillation",
        "on-policy-curation",
        "trace-pruning"
      ],
      "one_line_summary": "Distills long chain-of-thought into smaller models by pruning teacher traces and curating valid on-policy student traces.",
      "why_it_matters": "It makes long2short reasoning a data-lineage problem: teacher trace, pruning rule, student rollout, checker, and accepted compression all affect the result.",
      "data_object": "Pruned long reasoning trace, final answer, validity outcome, and selected student-training example.; process: problem, teacher long cot, pruned steps; Mathematical-reasoning tasks with answer-based validation.",
      "feedback_verifier": "Programmatic or answer-based correctness checks validate traces selected for on-policy curation.",
      "audit_focus": "Pruning can delete uncertainty, corrections, or premises that are important for a valid derivation., Answer correctness does not prove that the compressed rationale is faithful or pedagogically useful., On-policy curation can reinforce the student's existing shortcuts and reduce solution diversity.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.18440",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.18440",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2505.18440",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2505.18440"
    },
    {
      "id": "hypertree-proof-search-for-neural-theorem-proving-2022",
      "title": "HyperTree Proof Search for Neural Theorem Proving",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [
        "Guillaume Lample",
        "Marie-Anne Lachaux",
        "Thibaut Lavril",
        "Xavier Martinet",
        "Amaury Hayat",
        "Gabriel Ebner",
        "Aurélien Rodriguez",
        "Timothée Lacroix"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "AlphaZero-style HyperTree Proof Search learns online from kernel-checked AND/OR proof searches across formal theorem-proving environments.",
      "why_it_matters": "Use it for AND/OR proof-tree schemas, kernel-grounded trajectory collection, online expert iteration, and comparison with flat best-first or whole-proof sampling.",
      "data_object": "formal theorem; accessible premises; proof state; tactic action; multiple child subgoals; AND/OR hyper-tree edge; policy/value estimate; kernel response; solved/failed proof; online-training example; process: formal theorem, accessible premises, proof state; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "Metamath, Lean, or equivalent formal kernels check tactics and proof closure; HTPS policy/value estimates and AlphaZero-style search statistics choose expansions.",
      "audit_focus": "The official repository explicitly says it does not run out of the box after internal dependencies were removed; most code is CC-BY-NC; no packaged full online trajectory corpus is supplied; formal-system versions and premise sets strongly affect replay., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2205.11491",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2205.11491",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2205.11491",
        "code": "https://github.com/facebookresearch/Evariste",
        "data": "https://github.com/facebookresearch/Evariste/tree/main/formal",
        "huggingface": null,
        "project": "https://openreview.net/forum?id=J4pX8Q8cxHH",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/hypertree-proof-search-for-neural-theorem-proving-2022/sources"
      },
      "primary_link": "https://arxiv.org/abs/2205.11491"
    },
    {
      "id": "language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023",
      "title": "Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "Andy Zhou",
        "Kai Yan",
        "Michal Shlapentokh-Rothman",
        "Haohan Wang",
        "Yu-Xiong Wang"
      ],
      "source_role": [
        "construction_recipe",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode"
      ],
      "training_use": [
        "agent_training",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "agents",
        "code",
        "web",
        "math",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "lats",
        "mcts",
        "agent-trajectories",
        "self-reflection"
      ],
      "one_line_summary": "Combines MCTS, LM value functions, self-reflection, and environment feedback into search traces for language agents.",
      "why_it_matters": "It shows why a reusable agent-search trace must retain the environment state and feedback alongside the selected action path.",
      "data_object": "A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result.; process: observation, action, reflection; Task environments including programming tests, WebShop-style interaction, and reasoning tasks.",
      "feedback_verifier": "External environment feedback together with LM-powered value functions and self-reflection.",
      "audit_focus": "Environment state, web content, and tool versions can make trajectories non-replayable., Reflection text may sound corrective without improving the underlying action policy., Search results can be dominated by interaction budget rather than agent quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2310.04406",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2310.04406",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/lapisrocks/LanguageAgentTreeSearch",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2310.04406"
    },
    {
      "id": "large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024",
      "title": "Large Language Monkeys: Scaling Inference Compute with Repeated Sampling",
      "year": 2024,
      "venue": "arXiv preprint arXiv:2407.21787",
      "authors": [
        "Bradley Brown",
        "Jordan Juravsky",
        "Ryan Ehrlich",
        "Ronald Clark",
        "Quoc V. Le",
        "Christopher Ré",
        "Azalia Mirhoseini"
      ],
      "source_role": [
        "scaling_study",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "code",
        "formal_proofs",
        "software_engineering",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🧠 Self-consistency / repeated sampling",
      "tags": [
        "repeated-sampling",
        "pass-at-k",
        "test-time-compute",
        "coverage",
        "verifier-selection"
      ],
      "one_line_summary": "Studies repeated sampling as an inference-compute scaling axis across math, code, formal proof, and SWE-bench-style tasks.",
      "why_it_matters": "It gives atlas readers a concrete way to audit whether a reasoning gain comes from more samples, a usable verifier, a better selector, or a genuinely stronger model or training recipe.",
      "data_object": "candidate solution set for each problem, with final answers, code submissions, Lean proofs, or repository patches depending on task.; process: task, model, sample count; math benchmarks, Lean4 proof checker, programming contest tests, and SWE-bench Lite repository test suites.",
      "feedback_verifier": "automatic unit tests or Lean checker where available; oracle answer checks, majority voting, or reward-model scoring for math-answer selection.",
      "audit_focus": "Coverage can grow with sample budget even when practical selection precision remains poor., Automatic-verifier domains can overstate transfer to open-ended math or judgment-required tasks., Comparing repeated sampling against single attempts can conflate model quality with inference budget.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.21787",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.21787",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2407.21787"
    },
    {
      "id": "math-shepherd-2023",
      "title": "Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations",
      "year": 2023,
      "venue": "ACL",
      "authors": [
        "Peiyi Wang",
        "Lei Li",
        "Zhihong Shao",
        "Runxin Xu",
        "Damai Dai",
        "Yifei Li",
        "Deli Chen",
        "Yu Wu",
        "Zhifang Sui"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "rlvr",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🎲 Multiple rollouts / best-of-N",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Uses Monte Carlo continuations and final-answer checks to create automatic step labels for PRM training, reranking, and stepwise PPO.",
      "why_it_matters": "It replaces expensive human process labels with rollout-derived labels and demonstrates the same verifier in both best-of-N selection and policy optimization.",
      "data_object": "math problem, complete solution, step prefix, continuation rollouts, final-answer outcomes, automatic step label, PRM score, and selected response; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step",
      "audit_focus": "Monte Carlo labels depend strongly on continuation count and policy strength, a recoverable prefix may be labeled positive despite a locally invalid step, answer matching cannot establish faithfulness of the intermediate derivation",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2312.08935",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2312.08935",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2312.08935",
        "code": null,
        "data": "https://huggingface.co/datasets/peiyi9979/Math-Shepherd",
        "huggingface": "https://huggingface.co/datasets/peiyi9979/Math-Shepherd",
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/math-shepherd-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2312.08935"
    },
    {
      "id": "monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024",
      "title": "Monte Carlo Tree Search Boosts Reasoning via Iterative Preference Learning",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Yuxi Xie",
        "Anirudh Goyal",
        "Wenyue Zheng",
        "Min-Yen Kan",
        "Timothy P. Lillicrap",
        "Kenji Kawaguchi",
        "Michael Shieh"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "On-policy MCTS converts outcome validation and self-evaluation into step-level preference pairs for iterative DPO.",
      "why_it_matters": "Use this Card to specify online tree collection, sibling-pair extraction, mixed hard/soft judging, and the boundary between search-time traces and preference-training data.",
      "data_object": "reasoning prompt; partial state; candidate next steps sharing a parent; search visit/value; rollout outcome; step self-evaluation; chosen/rejected pair; policy iteration; inference budget; process: reasoning prompt, partial state, candidate next steps sharing a parent; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "Task answer validation supplies terminal evidence, while the language model's stepwise self-evaluation provides a softer local judge; MCTS statistics select nodes and determine preferences.",
      "audit_focus": "Self-evaluation can reinforce shared policy/judge errors; missing released search logs limits audit; dataset-specific answer checks differ in strength; iterative gains can conflate data freshness, DPO, and increased search compute., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.00451",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.00451",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2405.00451",
        "code": "https://github.com/YuxiXie/MCTS-DPO",
        "data": "https://github.com/YuxiXie/MCTS-DPO#dataset-download",
        "huggingface": null,
        "project": "https://github.com/YuxiXie/MCTS-DPO",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2405.00451"
    },
    {
      "id": "mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024",
      "title": "Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers",
      "year": 2024,
      "venue": "ICLR",
      "authors": [
        "Zhenting Qi",
        "Mingyuan Ma",
        "Jiahang Xu",
        "Li Lyna Zhang",
        "Fan Yang",
        "Mao Yang"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "A generator SLM explores human-like reasoning actions with MCTS while a peer SLM discriminates complete trajectories by mutual consistency.",
      "why_it_matters": "Use it to study generator–selector separation, model-based verification, heterogeneous search actions, and the difference between mutual consistency and executable correctness.",
      "data_object": "task prompt; MCTS state; human-like reasoning action; generated intermediate state; complete trajectory; generator answer; discriminator reconstruction or verdict; mutual-consistency label; selected path; compute budget; process: task prompt, MCTS state, human-like reasoning action; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "The peer SLM is a model-based discriminator rather than a programmatic verifier. Mutual agreement and search statistics select trajectories; benchmark answer matching evaluates the final output.",
      "audit_focus": "Agreement is not correctness and two related SLMs can share the same shortcut; no standalone full trajectory corpus is released; model calls and action branching make costs high; benchmark prompts and public solutions raise contamination risk., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2408.06195",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2408.06195",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2408.06195",
        "code": "https://github.com/zhentingqi/rStar",
        "data": "https://github.com/zhentingqi/rStar/tree/main/data",
        "huggingface": null,
        "project": "https://github.com/zhentingqi/rStar",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2408.06195"
    },
    {
      "id": "omegaprm-automated-process-supervision-2024",
      "title": "Improve Mathematical Reasoning in Language Models by Automated Process Supervision",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Liangchen Luo",
        "Yinxiao Liu",
        "Rosanne Liu",
        "Samrat Phatale",
        "Meiqi Guo",
        "Harsh Lara",
        "Yunxuan Li",
        "Lei Shu",
        "Yun Zhu",
        "Lei Meng",
        "Jiao Sun",
        "Abhinav Rastogi"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "OmegaPRM uses divide-and-conquer MCTS to locate reasoning errors efficiently and generate large-scale balanced process supervision for PRMs.",
      "why_it_matters": "OmegaPRM improves over independent per-step Monte Carlo estimation by allocating search adaptively and using binary-search-like error localization.",
      "data_object": "math problem, reasoning prefix, MCTS node, sampled continuation, terminal outcome, estimated value, first-error boundary, and positive or negative process annotation; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels",
      "audit_focus": "first-error localization assumes later continuations diagnose earlier steps reliably, search-tree labels depend on the ORM and prover policy, reported annotation scale does not by itself disclose per-problem compute or rejected branches",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.06592",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.06592",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.06592",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/omegaprm-automated-process-supervision-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2406.06592"
    },
    {
      "id": "prime-process-reinforcement-through-implicit-rewards-2025",
      "title": "PRIME: Process reinforcement through implicit rewards",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Ganqu Cui",
        "Lifan Yuan",
        "Zefan Wang",
        "Hanbin Wang",
        "Yuchen Zhang",
        "Jiacheng Chen",
        "Wendi Li",
        "Bingxiang He",
        "Yuchen Fan",
        "Tianyu Yu",
        "Qixin Xu",
        "Weize Chen",
        "Jiarui Yuan",
        "Huayu Chen",
        "Kaiyan Zhang",
        "Xingtai Lv",
        "Shuo Wang",
        "Yuan Yao",
        "Xu Han",
        "Hao Peng",
        "Yu Cheng",
        "Zhiyuan Liu",
        "Maosong Sun",
        "Bowen Zhou",
        "Ning Ding"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward",
        "answer_level"
      ],
      "training_use": [
        "rlvr",
        "process_supervision",
        "reward_modeling"
      ],
      "domains": [
        "math",
        "code",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib",
        "primary-link-checked"
      ],
      "one_line_summary": "Online process-reinforcement recipe that derives implicit process rewards from policy rollouts and outcome labels.",
      "why_it_matters": "It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.",
      "data_object": "policy rollout with final outcome label, implicit process reward estimates, and policy update signal.; process: prompt, policy rollout, outcome label; online RL training loop",
      "feedback_verifier": "implicit process rewards derived from outcome labels and updated on policy rollouts.",
      "audit_focus": "implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.01456",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.01456",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2502.01456",
        "code": "https://github.com/PRIME-RL/PRIME",
        "data": "https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout",
        "huggingface": "https://huggingface.co/PRIME-RL",
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2502.01456"
    },
    {
      "id": "re-rest-reflection-reinforced-self-training-for-language-agents-2024",
      "title": "Re-ReST: Reflection-Reinforced Self-Training for Language Agents",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Zi-Yi Dou",
        "Cheng-Fu Yang",
        "Xueqing Wu",
        "Kai-Wei Chang",
        "Nanyun Peng"
      ],
      "source_role": [
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "full_episode"
      ],
      "training_use": [
        "sft",
        "agent_training",
        "test_time_compute"
      ],
      "domains": [
        "agents",
        "code",
        "question_answering",
        "visual_question_answering"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "re-rest",
        "reflection",
        "self-training",
        "agent-trajectories"
      ],
      "one_line_summary": "Builds self-training episodes from an agent's initial output, external feedback, reflector revision, and refined trajectory.",
      "why_it_matters": "It makes rejected or weak agent attempts potentially useful only when their feedback and repair lineage are retained.",
      "data_object": "Initial agent output, external feedback, reflection, refined output, and selected self-training episode.; process: task input, initial agent output, environment feedback; Task-specific agent environments and feedback mechanisms.",
      "feedback_verifier": "External feedback such as code unit-test results, plus reflector-generated revisions.",
      "audit_focus": "A reflector can rationalize an incorrect output instead of fixing it., Feedback quality differs sharply across unit tests, QA labels, and subjective generation tasks., Treating reflection calls as free hides a material test-time compute cost.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.01495",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.01495",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.01495",
        "code": "https://github.com/PlusLabNLP/Re-ReST",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2406.01495"
    },
    {
      "id": "rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025",
      "title": "ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Zhongxiang Sun",
        "Qipeng Wang",
        "Weijie Yu",
        "Xiaoxue Zang",
        "Kai Zheng",
        "Jun Xu",
        "Xiao Zhang",
        "Song Yang",
        "Han Li"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "retrieval",
        "multi-hop reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "primary-link-checked"
      ],
      "one_line_summary": "Retrieval-augmented reasoning recipe that uses trustworthy process rewards, explanations, and MCTS to collect step-level preference data.",
      "why_it_matters": "It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.",
      "data_object": "step-level preference data with retrieval context, process reward score, process explanation, and final answer.; process: query, retrieval context, partial reasoning state; RAG reasoning pipeline",
      "feedback_verifier": "Process Reward Model plus Process Explanation Model, with MCTS-guided search.",
      "audit_focus": "PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.07861",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.07861",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.07861",
        "code": "https://github.com/Jeryi-Sun/ReARTeR",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2501.07861"
    },
    {
      "id": "reasoning-with-language-model-is-planning-with-world-model-2023",
      "title": "Reasoning with Language Model is Planning with World Model",
      "year": 2023,
      "venue": "EMNLP",
      "authors": [
        "Shibo Hao",
        "Yi Gu",
        "Haodi Ma",
        "Joshua Jiahua Hong",
        "Zhen Wang",
        "Daisy Zhe Wang",
        "Zhiting Hu"
      ],
      "source_role": [
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "trajectory_value"
      ],
      "training_use": [
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "reasoning",
        "planning",
        "math",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "rap",
        "mcts",
        "world-model",
        "search-tree"
      ],
      "one_line_summary": "Uses an LM as both reasoning agent and world model to build MCTS traces with predicted states and task-specific rewards.",
      "why_it_matters": "It exposes an often-hidden search record—state prediction, task reward, and tree policy—that is essential for attributing planning gains.",
      "data_object": "An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path.; process: problem, state, action or reasoning step; A language-model world model paired with Monte Carlo tree search.",
      "feedback_verifier": "Task-specific rewards and model-predicted state transitions guide MCTS selection.",
      "audit_focus": "A hallucinated world-model transition can steer search toward an invalid plan., Improvements can conflate MCTS budget, reward design, and base-model capability., The selected path hides the distribution of rejected branches unless logs are retained.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2305.14992",
        "venue": "https://aclanthology.org/2023.emnlp-main.507/",
        "arxiv": "https://arxiv.org/abs/2305.14992",
        "openreview": null,
        "acl": "https://aclanthology.org/2023.emnlp-main.507/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2305.14992"
    },
    {
      "id": "reinforced-self-training-rest-for-language-modeling-2023",
      "title": "Reinforced Self-Training (ReST) for Language Modeling",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "Caglar Gulcehre",
        "Tom Le Paine",
        "Srivatsan Srinivasan",
        "Ksenia Konyushkova",
        "Lotte Weerts",
        "Abhishek Sharma",
        "Aditya Siddhant",
        "Alex Ahern",
        "Miaosen Wang",
        "Chenjie Gu",
        "Wolfgang Macherey",
        "Arnaud Doucet",
        "Orhan Firat",
        "Nando de Freitas"
      ],
      "source_role": [
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "machine_translation",
        "post_training",
        "synthetic_data"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "rest",
        "self-training",
        "offline-rl",
        "generated-candidates"
      ],
      "one_line_summary": "Alternates policy-generated offline batches with offline RL improvement, making generated candidates and their quality signals the training record.",
      "why_it_matters": "It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims.",
      "data_object": "Input-candidate-output records carrying quality/reward information for offline policy improvement.; process: source input, candidate generation, quality signal; Offline language-model generation and batch reinforcement-learning pipeline.",
      "feedback_verifier": "Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse.",
      "audit_focus": "Quality filtering can collapse output diversity when only high-scoring candidates are retained., Offline reuse can amplify reward-model or metric bias across iterations., Reported gains should not be generalized from translation to verifiable reasoning without an equivalent feedback contract.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2308.08998",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2308.08998",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2308.08998",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/reinforced-self-training-rest-for-language-modeling-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2308.08998"
    },
    {
      "id": "rest-mcts-2024",
      "title": "ReST-MCTS*",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [
        "Dan Zhang",
        "Sining Zhoubian",
        "Ziniu Hu",
        "Yisong Yue",
        "Yuxiao Dong",
        "Jie Tang"
      ],
      "source_role": [
        "process_supervision",
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "seeded-from-bib",
        "primary-link-checked"
      ],
      "one_line_summary": "Process-reward-guided tree search recipe for collecting reasoning traces and inferred per-step value targets.",
      "why_it_matters": "It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.",
      "data_object": "searched reasoning trajectory with intermediate node states, final answer, verifier outcome, and inferred process reward.; process: problem, partial solution state, candidate next step; MCTS-style reasoning tree",
      "feedback_verifier": "process reward model guided by final-answer oracle feedback and MCTS-derived value targets.",
      "audit_focus": "search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.03816",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.03816",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.03816",
        "code": "https://github.com/THUDM/ReST-MCTS",
        "data": "https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th",
        "huggingface": "https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th",
        "project": "https://rest-mcts.github.io/",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/rest-mcts-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2406.03816"
    },
    {
      "id": "rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024",
      "title": "Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning",
      "year": 2024,
      "venue": "ICLR",
      "authors": [
        "Amrith Setlur",
        "Chirag Nagpal",
        "Adam Fisch",
        "Xinyang Geng",
        "Jacob Eisenstein",
        "Rishabh Agarwal",
        "Alekh Agarwal",
        "Jonathan Berant",
        "Aviral Kumar"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "reward_modeling",
        "rlvr",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.",
      "why_it_matters": "The work argues that absolute prefix solvability is not the right process target; the useful signal is the step's marginal progress under a complementary prover.",
      "data_object": "problem, reasoning state before a step, proposed step, state after the step, prover rollout success estimates, process advantage target, PAV score, and search or RL outcome; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "progress is the change in future success probability before and after a step under a prover policy distinct from the base policy",
      "audit_focus": "progress estimates inherit variance and bias from the chosen prover, a weak prover helps only when its errors complement the base policy, search and RL gains can be misattributed if rollout budgets and prover calls are omitted",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.08146",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.08146",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.08146",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2410.08146"
    },
    {
      "id": "rstar-math-2025",
      "title": "rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Xinyu Guan",
        "Li Lyna Zhang",
        "Yifei Liu",
        "Ning Shang",
        "Youran Sun",
        "Yi Zhu",
        "Fan Yang",
        "Mao Yang"
      ],
      "source_role": [
        "construction_recipe",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "process_supervision",
        "preference_learning",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "track-05",
        "primary-link-checked"
      ],
      "one_line_summary": "MCTS, code execution, and a process preference model co-evolve policy traces and sibling-step preference data across four rounds.",
      "why_it_matters": "Use it as a reference architecture for tree-to-SFT and tree-to-preference conversion, iterative policy/verifier co-training, and compute-aware test-time deep thinking.",
      "data_object": "math question; code-augmented reasoning step; executable snippet and result; MCTS parent/child relation; complete rollout; terminal answer; visit/value statistics; SFT trace; sibling preference pair; evolution round; process: math question, code-augmented reasoning step, executable snippet and result; Search tree or formal proof-search substrate described by the paper.",
      "feedback_verifier": "A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS.",
      "audit_focus": "Public SFT/PPM tables are derived views, not necessarily full tree logs; code execution can validate an accidental shortcut; NuminaMath and MetaMath lineage and licenses must be retained; results depend heavily on GPU/search budget and PPM calibration., Search budget or selector quality can be mistaken for base-model capability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.04519",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.04519",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.04519",
        "code": "https://github.com/microsoft/rStar/tree/rStar-math",
        "data": "https://huggingface.co/datasets/ElonTusk2001/rstar_sft",
        "huggingface": null,
        "project": "https://huggingface.co/datasets/ElonTusk2001/rstar_ppm",
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/rstar-math-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2501.04519"
    },
    {
      "id": "s1-simple-test-time-scaling-2025",
      "title": "s1: Simple test-time scaling",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Niklas Muennighoff",
        "Zitong Yang",
        "Weijia Shi",
        "Xiang Lisa Li",
        "Li Fei-Fei",
        "Hannaneh Hajishirzi",
        "Luke Zettlemoyer",
        "Percy Liang",
        "Emmanuel Candès",
        "Tatsunori Hashimoto"
      ],
      "source_role": [
        "construction_recipe",
        "data_release",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "full_episode",
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.",
      "why_it_matters": "s1 isolates a deliberately small trace set and a simple decoding intervention, making training-data scale and inference-budget effects easier to study together.",
      "data_object": "question, source dataset, teacher reasoning trace, difficulty score, diversity cluster, quality decision, selected SFT record, token budget, forced stop or Wait extension, and final answer; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality",
      "audit_focus": "teacher trace lineage and filtering choices dominate a very small dataset, appending Wait may teach or exploit a formatting artifact rather than general search, token budget is an incomplete proxy for actual inference compute and useful reasoning",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.19393",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.19393",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.19393",
        "code": "https://github.com/simplescaling/s1",
        "data": "https://huggingface.co/datasets/simplescaling/s1K",
        "huggingface": "https://huggingface.co/simplescaling/s1-32B",
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/s1-simple-test-time-scaling-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2501.19393"
    },
    {
      "id": "scaling-llm-test-time-compute-optimally-2024",
      "title": "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Charlie Snell",
        "Jaehoon Lee",
        "Kelvin Xu",
        "Aviral Kumar"
      ],
      "source_role": [
        "scaling_study",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed",
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "process_reward"
      ],
      "training_use": [
        "test_time_compute",
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "math",
        "reasoning",
        "test-time-compute",
        "scaling"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "test-time-compute",
        "best-of-n",
        "verifier-guided-search",
        "scaling-attribution",
        "primary-link-checked"
      ],
      "one_line_summary": "This paper makes test-time compute a budgeted scaling object instead of an informal decoding trick.",
      "why_it_matters": "Exact-match test-time compute scaling paper that separates best-of-N, verifier-guided search, prompt difficulty, and FLOPs-matched scaling attribution.",
      "data_object": "Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.; process: prompt difficulty estimate, sample count, verifier reward; Inference-time sampling and verifier-guided search over math-style reasoning tasks.",
      "feedback_verifier": "Dense process-based verifier reward models plus answer-level evaluation.",
      "audit_focus": "Verifier quality can dominate the measured scaling curve., Difficulty estimation can leak benchmark-specific assumptions., More samples can be mistaken for more unique data.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2408.03314",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2408.03314",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2408.03314",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2408.03314"
    },
    {
      "id": "scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023",
      "title": "Scaling Relationship on Learning Mathematical Reasoning with Large Language Models",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "Zheng Yuan",
        "Hongyi Yuan",
        "Chengpeng Li",
        "Guanting Dong",
        "Keming Lu",
        "Chuanqi Tan",
        "Chang Zhou",
        "Jingren Zhou"
      ],
      "source_role": [
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "evaluation"
      ],
      "domains": [
        "math",
        "reasoning",
        "synthetic_data"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🔎 Rejection sampling traces",
      "tags": [
        "rejection-sampling",
        "rft",
        "math-reasoning",
        "accepted-traces"
      ],
      "one_line_summary": "Studies rejection-sampling fine-tuning, where multiple generated math rationales are answer-checked and only correct paths become augmented SFT data.",
      "why_it_matters": "It is a clean data-lineage case: the prompt, candidate pool, answer checker, accepted trace, and source model all affect the claimed scaling gain.",
      "data_object": "A generated reasoning path paired with final answer correctness and selection for the augmented fine-tuning set.; process: math problem, generated rationale, final answer; Mathematical reasoning dataset with answer matching for rejection-sampling selection.",
      "feedback_verifier": "Final-answer correctness check retains correct reasoning paths.",
      "audit_focus": "Retaining only correct final answers hides plausible but invalid rationales and collapses failure diversity., Exact-answer matching may accept reasoning with unsupported steps or reject equivalent answer formats., Reusing benchmark prompts for augmentation can contaminate subsequent benchmark evaluation.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2308.01825",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2308.01825",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2308.01825",
        "code": "https://github.com/OFA-Sys/gsm8k-ScRel",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2308.01825"
    },
    {
      "id": "smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025",
      "title": "Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling",
      "year": 2025,
      "venue": "ICLR 2025 Poster",
      "authors": [
        "Hritik Bansal",
        "Arian Hosseini",
        "Rishabh Agarwal",
        "Vinh Q. Tran",
        "Mehran Kazemi"
      ],
      "source_role": [
        "scaling_study",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "sft",
        "distillation",
        "evaluation"
      ],
      "domains": [
        "math",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🔎 Rejection sampling traces",
      "tags": [
        "compute-optimal-sampling",
        "synthetic-reasoning-data",
        "rejection-sampling",
        "weak-to-strong",
        "budget-matching"
      ],
      "one_line_summary": "Shows that more samples from a weaker, cheaper generator can produce better filtered reasoning-training data under a fixed budget.",
      "why_it_matters": "It makes sampling budget a first-class part of synthetic reasoning-data quality rather than treating teacher strength as the only variable.",
      "data_object": "per-question candidate reasoning sets with final answers, correctness filters, generator identity, and compute- or price-matched budget records.; process: question, generator model, candidate solution; exact reference-answer checks for math, with LM-as-a-judge variants when gold answers are withheld.",
      "feedback_verifier": "final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting.",
      "audit_focus": "Final-answer filtering admits false-positive reasoning, and weaker generators exhibit a higher measured false-positive rate., Parameter count approximates generation FLOPs and API price approximates proprietary-model compute only coarsely., The August 2024 Pro-to-Flash price ratio is time-dependent and should not be treated as a universal compute ratio.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2408.16737",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2408.16737",
        "openreview": "https://openreview.net/forum?id=3OyaXFQuDl",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025/sources"
      },
      "primary_link": "https://arxiv.org/abs/2408.16737"
    },
    {
      "id": "star-bootstrapping-reasoning-with-reasoning-2022",
      "title": "STaR: Bootstrapping Reasoning With Reasoning",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [
        "Eric Zelikman",
        "Yuhuai Wu",
        "Jesse Mu",
        "Noah D. Goodman"
      ],
      "source_role": [
        "construction_recipe",
        "model_report"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "sft",
        "distillation"
      ],
      "domains": [
        "math",
        "commonsense",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "✂️ Long2short / distill-from-search",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.",
      "why_it_matters": "STaR turns a small rationale seed into an iterative generate-filter-train loop and explicitly recovers some failures through answer-conditioned rationalization.",
      "data_object": "question, generated rationale, predicted answer, correctness decision, rationalization flag, model iteration, and retention decision; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer",
      "audit_focus": "answer-conditioned rationalization can leak the target into the trace, retaining only correct answers hides rejected rollout diversity, acceptance rates depend on prompt, sampler, and model iteration",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2203.14465",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2203.14465",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2203.14465",
        "code": "https://github.com/ezelikman/STaR",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/star-bootstrapping-reasoning-with-reasoning-2022/sources"
      },
      "primary_link": "https://arxiv.org/abs/2203.14465"
    },
    {
      "id": "training-verifiers-to-solve-math-word-problems-2021",
      "title": "Training Verifiers to Solve Math Word Problems",
      "year": 2021,
      "venue": "arXiv preprint arXiv:2110.14168",
      "authors": [
        "Karl Cobbe",
        "Vineet Kosaraju",
        "Mohammad Bavarian",
        "Mark Chen",
        "Heewoo Jun",
        "Lukasz Kaiser",
        "Matthias Plappert",
        "Jerry Tworek",
        "Jacob Hilton",
        "Reiichiro Nakano",
        "Christopher Hesse",
        "John Schulman"
      ],
      "source_role": [
        "construction_recipe",
        "scaling_study",
        "verifier_reward"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward",
        "full_episode"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "test_time_compute"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🎲 Multiple rollouts / best-of-N",
      "tags": [
        "best-of-n",
        "learned-verifier",
        "gsm8k",
        "outcome-labels",
        "test-time-compute"
      ],
      "one_line_summary": "Generates 100 GSM8K solutions per problem and uses a learned verifier to select the highest-scoring candidate.",
      "why_it_matters": "It is an early auditable template for separating candidate coverage from selector quality in reasoning systems.",
      "data_object": "per-problem candidate sets containing a natural-language derivation, calculator annotations, and a final numeric answer.; process: problem, candidate solution, final answer; GSM8K answer matching with an injected calculator protocol for annotated arithmetic spans.",
      "feedback_verifier": "a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness.",
      "audit_focus": "Final-answer labels can mark flawed reasoning as correct when it reaches the right number accidentally., Oracle test@N measures coverage, not whether the learned verifier can identify a correct candidate., More generator training improves greedy accuracy while collapsing high-temperature candidate diversity.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2110.14168",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2110.14168",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/openai/grade-school-math",
        "data": "https://github.com/openai/grade-school-math",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/training-verifiers-to-solve-math-word-problems-2021/sources"
      },
      "primary_link": "https://arxiv.org/abs/2110.14168"
    },
    {
      "id": "tree-of-thoughts-2023",
      "title": "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
      "year": 2023,
      "venue": "NeurIPS 2023",
      "authors": [
        "Shunyu Yao",
        "Dian Yu",
        "Jeffrey Zhao",
        "Izhak Shafran",
        "Thomas L. Griffiths",
        "Yuan Cao",
        "Karthik Narasimhan"
      ],
      "source_role": [
        "scaling_study",
        "construction_recipe",
        "agent_environment"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "test_time_compute",
        "evaluation",
        "audit"
      ],
      "domains": [
        "planning",
        "search",
        "reasoning",
        "games"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🌳 Search trees / MCTS",
      "tags": [
        "neurips-2023",
        "tree-search",
        "test-time-compute",
        "verifier-guided-search",
        "primary-link-checked"
      ],
      "one_line_summary": "Tree of Thoughts turns language reasoning into a search trace with explicit branch and evaluation budgets.",
      "why_it_matters": "Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.",
      "data_object": "Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.",
      "feedback_verifier": "Self-evaluation, task-specific checks, and final outcome scoring.",
      "audit_focus": "Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2305.10601",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2305.10601",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2305.10601",
        "code": "https://github.com/princeton-nlp/tree-of-thought-llm",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/tree-of-thoughts-2023/sources"
      },
      "primary_link": "https://arxiv.org/abs/2305.10601"
    },
    {
      "id": "v-star-training-verifiers-for-self-taught-reasoners-2024",
      "title": "V-STaR: Training Verifiers for Self-Taught Reasoners",
      "year": 2024,
      "venue": "COLM",
      "authors": [
        "Arian Hosseini",
        "Xingdi Yuan",
        "Nikolay Malkin",
        "Aaron Courville",
        "Alessandro Sordoni",
        "Rishabh Agarwal"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "sft",
        "reward_modeling",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "code",
        "reasoning"
      ],
      "category": [
        "rollout_search_test_time_trace_data"
      ],
      "subfield": "🎲 Multiple rollouts / best-of-N",
      "tags": [
        "primary-link-checked",
        "track-05-candidate"
      ],
      "one_line_summary": "Reuses both correct and incorrect self-generated solutions to co-evolve a reasoner and a DPO-trained verifier for best-of-N selection.",
      "why_it_matters": "Unlike STaR, V-STaR does not discard incorrect generations: it converts them into preference data and closes the loop between generator and selector.",
      "data_object": "problem, policy iteration, sampled solution, correctness label, positive-negative verifier pair, verifier score, candidate set, and selected answer; process: problem or prompt, candidate rollout or reasoning state, feedback or verifier signal; Offline and on-policy reasoning rollout/search pipeline",
      "feedback_verifier": "unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones",
      "audit_focus": "incorrect labels inherit weaknesses of tests and answer normalization, verifier gains may be confounded with larger candidate budgets, pairs from the current policy may narrow verifier coverage across iterations",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2402.06457",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2402.06457",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2402.06457",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/library/cards/v-star-training-verifiers-for-self-taught-reasoners-2024/sources"
      },
      "primary_link": "https://arxiv.org/abs/2402.06457"
    }
  ],
  "counts": {
    "total_entries": 29,
    "verified_entries": 29,
    "paper_card_sources": 29,
    "data_releases": 1,
    "verifiers_rewards": 9,
    "agent_environments": 2,
    "scaling_studies": 18,
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
      "id": "local_review_core",
      "emoji": "🔁",
      "title": "Local Review Core",
      "goal": "Start with a canonical search-trace paper retained in the local curated library.",
      "entries": [
        {
          "title": "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
          "entry_id": "tree-of-thoughts-2023",
          "matched": true,
          "entry": {
            "id": "tree-of-thoughts-2023",
            "title": "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
            "year": 2023,
            "venue": "NeurIPS 2023",
            "authors": [
              "Shunyu Yao",
              "Dian Yu",
              "Jeffrey Zhao",
              "Izhak Shafran",
              "Thomas L. Griffiths",
              "Yuan Cao",
              "Karthik Narasimhan"
            ],
            "source_role": [
              "scaling_study",
              "construction_recipe",
              "agent_environment"
            ],
            "verification_contract": [
              "judgment_required",
              "mixed"
            ],
            "supervision_granularity": [
              "step_level",
              "full_episode"
            ],
            "training_use": [
              "test_time_compute",
              "evaluation",
              "audit"
            ],
            "domains": [
              "planning",
              "search",
              "reasoning",
              "games"
            ],
            "category": [
              "rollout_search_test_time_trace_data"
            ],
            "subfield": "🌳 Search trees / MCTS",
            "tags": [
              "neurips-2023",
              "tree-search",
              "test-time-compute",
              "verifier-guided-search",
              "primary-link-checked"
            ],
            "one_line_summary": "Tree of Thoughts turns language reasoning into a search trace with explicit branch and evaluation budgets.",
            "why_it_matters": "Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.",
            "data_object": "Problem, intermediate thought states, branch scores, search actions, and final solution.; process: thought node, branch candidates, state evaluation; Explicit tree search over language-model thought units.",
            "feedback_verifier": "Self-evaluation, task-specific checks, and final outcome scoring.",
            "audit_focus": "Value estimates may be prompt-sensitive., Search budget can dominate model ranking., Small task suites can overfit scaffolds.",
            "curation_level": "L4_carded",
            "status": "verified",
            "needs_search": false,
            "artifacts": {
              "paper": "https://arxiv.org/abs/2305.10601",
              "venue": null,
              "arxiv": "https://arxiv.org/abs/2305.10601",
              "openreview": null,
              "acl": null,
              "pmlr": null,
              "cvf": null,
              "doi": "https://doi.org/10.48550/arXiv.2305.10601",
              "code": "https://github.com/princeton-nlp/tree-of-thought-llm",
              "data": null,
              "huggingface": null,
              "project": null,
              "bibtex": null,
              "paper_card_source": "paper_cards/library/cards/tree-of-thoughts-2023/sources"
            },
            "primary_link": "https://arxiv.org/abs/2305.10601"
          }
        }
      ]
    }
  ]
};
