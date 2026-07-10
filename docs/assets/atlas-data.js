window.ATLAS_DATA = {
  "entries": [
    {
      "id": "tinyv-2025",
      "title": "TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Zhangchen Xu",
        "Yuetai Li",
        "Fengqing Jiang",
        "Bhaskar Ramasubramanian",
        "Luyao Niu",
        "Bill Yuchen Lin",
        "Radha Poovendran"
      ],
      "source_role": [
        "verifier_reward",
        "audit_failure",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "rlvr",
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.",
      "why_it_matters": "Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.",
      "data_object": "candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack",
      "feedback_verifier": "small LLM verifier augmenting rules",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.14625",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.14625",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/uw-nsl/TinyV",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/tinyv-2025"
      },
      "primary_link": "https://arxiv.org/abs/2505.14625"
    },
    {
      "id": "agnostics-universal-learning-environment-2026",
      "title": "Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment",
      "year": 2026,
      "venue": "ICLR 2026",
      "authors": [
        "Aleksander Boruch-Gruszecki",
        "Yangtian Zi",
        "Zixuan Wu",
        "Tejas Oberoi",
        "Carolyn Jane Anderson",
        "Joydeep Biswas",
        "Arjun Guha"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "rlvr",
        "evaluation",
        "audit"
      ],
      "domains": [
        "code",
        "low-resource-programming-languages",
        "rlvr",
        "execution"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "iclr-2026",
        "track-03",
        "code-rlvr",
        "programmatic-verifier",
        "low-resource-languages"
      ],
      "one_line_summary": "Agnostics builds a language-agnostic code RLVR environment where external I/O behavior becomes the verifier across programming languages.",
      "why_it_matters": "It is a strong 03-direction candidate because it packages code execution, verifier portability, RLVR training, and released artifacts into one reusable post-training surface.",
      "data_object": "Programming solution plus externally observable I/O behavior.; process: target language, compiler or interpreter config, I/O tests; Universal code execution environment configured per language with short YAML-like settings.",
      "feedback_verifier": "Programmatic execution verifier that judges behavior rather than language-specific syntax alone.",
      "audit_focus": "I/O-only tests may miss semantic edge cases., Verifier containers can encode language-specific quirks., Dataset rewriting can change task intent.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2508.04865",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2508.04865",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2508.04865",
        "code": "https://github.com/nuprl/Ag-LiveCodeBench-X",
        "data": "https://huggingface.co/datasets/nuprl/Ag-LiveCodeBench-X",
        "huggingface": "https://huggingface.co/nuprl/agnostics",
        "project": "https://agnostics.abgru.me/",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/agnostics-universal-learning-environment-2026"
      },
      "primary_link": "https://arxiv.org/abs/2508.04865"
    },
    {
      "id": "featurebench-2026",
      "title": "FeatureBench: Benchmarking Agentic Coding for Complex Feature Development",
      "year": 2026,
      "venue": "ICLR 2026",
      "authors": [
        "Qixing Zhou",
        "Jiacheng Zhang",
        "Haiyang Wang",
        "Rui Hao",
        "Jiahe Wang",
        "Minghao Han",
        "Yuxue Yang",
        "Shuzhe Wu",
        "Feiyang Pan",
        "Lue Fan",
        "Dandan Tu",
        "Zhaoxiang Zhang"
      ],
      "source_role": [
        "benchmark",
        "data_release",
        "agent_environment",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode",
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training",
        "audit"
      ],
      "domains": [
        "code",
        "software-engineering",
        "agents",
        "unit-tests"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "data_construction_open_release_recipes",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "iclr-2026",
        "track-03",
        "agentic-coding",
        "executable-benchmark",
        "unit-tests"
      ],
      "one_line_summary": "FeatureBench evaluates end-to-end feature development by deriving executable coding tasks and environments from repository unit tests.",
      "why_it_matters": "It moves coding-agent evaluation from isolated bug fixing toward feature-level repository work with programmatic execution checks and refreshable task construction.",
      "data_object": "Repository task, code context, generated changes, executable environment, and test result.; process: repository snapshot, feature task, dependency trace; Executable coding environments derived from 24 open-source repositories.",
      "feedback_verifier": "Execution-based evaluation protocol using unit tests and repository behavior checks.",
      "audit_focus": "Unit tests may underspecify the intended feature., Repository tasks may be contaminated through public code., Feature extraction can break hidden dependencies.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.10975",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.10975",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2602.10975",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/featurebench-2026"
      },
      "primary_link": "https://arxiv.org/abs/2602.10975"
    },
    {
      "id": "beyondbench-2026",
      "title": "BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models",
      "year": 2026,
      "venue": "ICLR 2026",
      "authors": [
        "Gaurav Srivastava",
        "Aafiya Hussain",
        "Zhenyu Bi",
        "Swastik Roy",
        "Priya Pitre",
        "Meng Lu",
        "Morteza Ziyadi",
        "Xuan Wang"
      ],
      "source_role": [
        "benchmark",
        "audit_failure",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "algorithmic-reasoning",
        "math",
        "contamination",
        "evaluation"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "iclr-2026",
        "track-03",
        "contamination-resistant",
        "algorithmic-generation",
        "deterministic-verifier"
      ],
      "one_line_summary": "BeyondBench generates fresh algorithmic reasoning problems with deterministic verification to reduce static-benchmark contamination.",
      "why_it_matters": "It is a clean 03-direction candidate because the benchmark is built around generated instances, deterministic answer checks, and explicit contamination-resistance claims.",
      "data_object": "Generated problem instance, model answer, and deterministic solution check.; process: task family, generator parameters, difficulty suite; Algorithmic problem generators and deterministic verifiers.",
      "feedback_verifier": "Mathematical/programmatic verifier with large combinatorial instance spaces.",
      "audit_focus": "Generator bugs can invalidate deterministic guarantees., Models may exploit task templates if generators are exposed., Tool-use settings can dominate reasoning comparisons.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.24210",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.24210",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2509.24210",
        "code": "https://github.com/ctrl-gaurav/BeyondBench",
        "data": null,
        "huggingface": null,
        "project": "https://ctrl-gaurav.github.io/BeyondBench/",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/beyondbench-2026"
      },
      "primary_link": "https://arxiv.org/abs/2509.24210"
    },
    {
      "id": "credit-budgeted-icpc-style-coding-2026",
      "title": "Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision",
      "year": 2026,
      "venue": "ICLR 2026",
      "authors": [
        "Lingfeng Zhou",
        "Junhao Shi",
        "Jin Gao",
        "Dequan Wang"
      ],
      "source_role": [
        "benchmark",
        "agent_environment",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode",
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training",
        "test_time_compute",
        "audit"
      ],
      "domains": [
        "code",
        "agents",
        "icpc",
        "resource-bounded-evaluation"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "iclr-2026",
        "track-03",
        "coding-agents",
        "budgeted-evaluation",
        "icpc"
      ],
      "one_line_summary": "Credit-Budgeted ICPC-Style Coding evaluates coding agents with a programmatic judge and an explicit credit cost for tokens, tests, and time.",
      "why_it_matters": "It expands Track 03 from pure correctness to correctness under resource budgets, which is closer to real agent deployment and test-time compute accounting.",
      "data_object": "Coding problem, generated solution, local-test decisions, token/time/test spending, and accepted/rejected outcome.; process: token budget, test budget, elapsed time; USACOArena interactive ACM-ICPC-style coding arena.",
      "feedback_verifier": "Programmatic coding judge plus explicit credit economy over tokens, tests, and time.",
      "audit_focus": "Budget settings can dominate model ranking., Local tests can be gamed or overused., Public programming problems can be contaminated.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2604.10182",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2604.10182",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2604.10182",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/credit-budgeted-icpc-style-coding-2026"
      },
      "primary_link": "https://arxiv.org/abs/2604.10182"
    },
    {
      "id": "geogrambench-2026",
      "title": "GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs",
      "year": 2026,
      "venue": "ICLR 2026",
      "authors": [
        "Shixian Luo",
        "Zezhou Zhu",
        "Yu Yuan",
        "Yuncheng Yang",
        "Lianlei Shan",
        "Yong Wu"
      ],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "geometry",
        "program-reasoning",
        "symbolic-spatial-reasoning",
        "evaluation"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "iclr-2026",
        "track-03",
        "geometry",
        "program-to-geometry",
        "benchmark"
      ],
      "one_line_summary": "GeoGramBench evaluates whether models can reason over geometric information expressed as procedural drawing code.",
      "why_it_matters": "It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.",
      "data_object": "Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.",
      "feedback_verifier": "Benchmark answer checking over curated geometric reasoning problems.",
      "audit_focus": "Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.17653",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.17653",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2505.17653",
        "code": "https://github.com/LiAuto-DSR/GeoGramBench",
        "data": "https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench",
        "huggingface": "https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench",
        "project": "https://github.com/LiAuto-DSR/GeoGramBench",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/geogrambench-2026"
      },
      "primary_link": "https://arxiv.org/abs/2505.17653"
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
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
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
        "paper_card_source": "paper_cards/sources/scaling-llm-test-time-compute-optimally-2024"
      },
      "primary_link": "https://arxiv.org/abs/2408.03314"
    },
    {
      "id": "math-dataset-2021",
      "title": "Measuring Mathematical Problem Solving With the MATH Dataset",
      "year": 2021,
      "venue": "NeurIPS 2021 Datasets and Benchmarks",
      "authors": [
        "Dan Hendrycks",
        "Collin Burns",
        "Saurav Kadavath",
        "Akul Arora",
        "Steven Basart",
        "Eric Tang",
        "Dawn Song",
        "Jacob Steinhardt"
      ],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "evaluation",
        "audit"
      ],
      "domains": [
        "math",
        "competition-mathematics",
        "answer-extraction"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "neurips-2021",
        "math",
        "answer-verification",
        "symbolic-normalization",
        "primary-link-checked"
      ],
      "one_line_summary": "MATH pairs competition problems and human solutions with an answer-level outcome surface that later reasoning pipelines reuse.",
      "why_it_matters": "It establishes the central trade-off for math outcome data: inexpensive final-answer supervision is useful only when extraction, equivalence, and contamination are audited.",
      "data_object": "Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficulty, full solution; Dataset loader and evaluation scripts distributed with the official repository.",
      "feedback_verifier": "Extracted final-answer matching with task-specific normalization.",
      "audit_focus": "Final-answer extraction can reject an otherwise correct derivation., Equivalent symbolic forms can be mishandled by brittle normalization., Public solutions create benchmark-contamination risk.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2103.03874",
        "venue": "https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html",
        "arxiv": "https://arxiv.org/abs/2103.03874",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2103.03874",
        "code": "https://github.com/hendrycks/math",
        "data": "https://github.com/hendrycks/math",
        "huggingface": null,
        "project": "https://github.com/hendrycks/math",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/math-dataset-2021"
      },
      "primary_link": "https://arxiv.org/abs/2103.03874"
    },
    {
      "id": "apps-2021",
      "title": "Measuring Coding Challenge Competence With APPS",
      "year": 2021,
      "venue": "NeurIPS 2021 Datasets and Benchmarks",
      "authors": [
        "Dan Hendrycks",
        "Steven Basart",
        "Saurav Kadavath",
        "Mantas Mazeika",
        "Akul Arora",
        "Ethan Guo",
        "Collin Burns",
        "Samir Puranik",
        "Horace He",
        "Dawn Song",
        "Jacob Steinhardt"
      ],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "sft",
        "rlvr",
        "evaluation",
        "audit"
      ],
      "domains": [
        "code",
        "program-synthesis",
        "unit-tests"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "neurips-2021",
        "code",
        "execution",
        "unit-tests",
        "hidden-tests",
        "primary-link-checked"
      ],
      "one_line_summary": "APPS is the core code-execution benchmark for studying how unit tests become outcome supervision.",
      "why_it_matters": "It makes the verifier contract concrete: generated code earns credit only through a pinned execution environment and test suite.",
      "data_object": "Natural-language specification, starter code where applicable, input/output examples, candidate Python program, and test outcomes.; process: problem difficulty, input-output tests, candidate program; Sandboxed Python execution with public and private test cases.",
      "feedback_verifier": "Functional correctness under test execution.",
      "audit_focus": "Tests can under-specify intended behavior., Public or leaked tests reward benchmark memorization., Sandbox and dependency differences can make execution non-reproducible.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2105.09938",
        "venue": "https://proceedings.neurips.cc/paper_files/paper/2021/hash/c24cd76e1ce41366a4bbe8a49b02a028-Abstract.html",
        "arxiv": "https://arxiv.org/abs/2105.09938",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2105.09938",
        "code": "https://github.com/hendrycks/apps",
        "data": "https://github.com/hendrycks/apps",
        "huggingface": "https://huggingface.co/datasets/codeparrot/apps",
        "project": "https://github.com/hendrycks/apps",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/apps-2021"
      },
      "primary_link": "https://arxiv.org/abs/2105.09938"
    },
    {
      "id": "minif2f-2022",
      "title": "MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics",
      "year": 2022,
      "venue": "ICLR 2022",
      "authors": [
        "Kunhao Zheng",
        "Jesse Michael Han",
        "Stanislas Polu"
      ],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "rlvr",
        "audit"
      ],
      "domains": [
        "formal-mathematics",
        "theorem-proving",
        "lean",
        "proof-checking"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "iclr-2022",
        "theorem-proving",
        "lean",
        "formal-proof",
        "proof-checker",
        "primary-link-checked"
      ],
      "one_line_summary": "miniF2F makes formal theorem statements and proof-checker outcomes a directly auditable evaluation record.",
      "why_it_matters": "It separates rigorous proof checking from ordinary answer matching while exposing environment-version and formalization risks.",
      "data_object": "Formal theorem statement, target proof-assistant language, candidate proof script, and checker verdict.; process: source problem, formal statement, proof assistant; Metamath, Lean, Isabelle, and HOL Light formal proof environments.",
      "feedback_verifier": "Native proof-assistant kernel/checker acceptance.",
      "audit_focus": "A proof can depend on undocumented imports or library versions., Formalization choices can change the difficulty of the original problem., Kernel success does not validate an informal translation's faithfulness.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2109.00110",
        "venue": "https://openreview.net/forum?id=9ZPegFuFTFv",
        "arxiv": "https://arxiv.org/abs/2109.00110",
        "openreview": "https://openreview.net/forum?id=9ZPegFuFTFv",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2109.00110",
        "code": "https://github.com/openai/miniF2F",
        "data": "https://github.com/openai/miniF2F",
        "huggingface": null,
        "project": "https://github.com/openai/miniF2F",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/minif2f-2022"
      },
      "primary_link": "https://arxiv.org/abs/2109.00110"
    },
    {
      "id": "leandojo-2023",
      "title": "LeanDojo: Theorem Proving with Retrieval-Augmented Language Models",
      "year": 2023,
      "venue": "NeurIPS 2023 Datasets and Benchmarks",
      "authors": [
        "Kaiyu Yang",
        "Aidan M. Swope",
        "Alex Gu",
        "Rahul Chalamala",
        "Peiyang Song",
        "Shixing Yu",
        "Saad Godil",
        "Ryan Prenger",
        "Anima Anandkumar"
      ],
      "source_role": [
        "data_release",
        "benchmark",
        "agent_environment",
        "verifier_reward"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "state_action_level",
        "full_episode"
      ],
      "training_use": [
        "sft",
        "agent_training",
        "rlvr",
        "evaluation",
        "audit"
      ],
      "domains": [
        "formal-mathematics",
        "theorem-proving",
        "lean",
        "premise-retrieval"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "neurips-2023",
        "theorem-proving",
        "lean",
        "proof-environment",
        "premise-retrieval",
        "primary-link-checked"
      ],
      "one_line_summary": "LeanDojo is the key proof-data card for programmatic interaction, premise-aware splits, and kernel-checked proof outcomes.",
      "why_it_matters": "It demonstrates that verifier reproducibility is part of the data contract: a proof trace is meaningful only under the exact formal environment that checked it.",
      "data_object": "Theorem, local proof state, accessible premises, candidate tactic, next proof state, and final checker verdict.; process: theorem declaration, proof state, tactic; Programmatic Lean 3/Lean 4 interaction environment with a pinned mathlib commit.",
      "feedback_verifier": "Lean proof-environment response and terminal kernel acceptance.",
      "audit_focus": "Mismatched Lean, mathlib, or import versions change checker behavior., Proof-environment wrappers can misjudge valid proofs., Retrieval can mask memorization unless premise-aware splits are used.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2306.15626",
        "venue": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html",
        "arxiv": "https://arxiv.org/abs/2306.15626",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2306.15626",
        "code": "https://github.com/lean-dojo/LeanDojo",
        "data": "https://leandojo.org/leandojo",
        "huggingface": null,
        "project": "https://leandojo.org/leandojo",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/leandojo-2023"
      },
      "primary_link": "https://arxiv.org/abs/2306.15626"
    },
    {
      "id": "self-consistency-chain-of-thought-2023",
      "title": "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
      "year": 2023,
      "venue": "ICLR 2023",
      "authors": [
        "Xuezhi Wang",
        "Jason Wei",
        "Dale Schuurmans",
        "Quoc Le",
        "Ed Chi",
        "Sharan Narang",
        "Aakanksha Chowdhery",
        "Denny Zhou"
      ],
      "source_role": [
        "scaling_study",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "math",
        "commonsense-reasoning",
        "sampling",
        "chain-of-thought"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "rollout_search_test_time_trace_data",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧠 Chain-of-thought / rationale data",
      "tags": [
        "iclr-2023",
        "self-consistency",
        "sampling-budget",
        "pass-at-k-adjacent",
        "primary-link-checked"
      ],
      "one_line_summary": "Self-consistency is the clean baseline for repeated-sampling test-time compute in CoT reasoning.",
      "why_it_matters": "Top-conference paper that turns repeated sampled reasoning paths into a simple test-time compute scaling primitive.",
      "data_object": "Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.; process: sample index, chain-of-thought path, answer extraction; Repeated inference sampling over answer-verifiable and judgment-required reasoning tasks.",
      "feedback_verifier": "Answer agreement and final-answer checking act as an implicit verifier.",
      "audit_focus": "More samples can hide answer-extraction bias., Majority vote can amplify a common wrong shortcut., Sampling budget may be incomparable across papers.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2203.11171",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2203.11171",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2203.11171",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/self-consistency-chain-of-thought-2023"
      },
      "primary_link": "https://arxiv.org/abs/2203.11171"
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
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
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
        "paper_card_source": "paper_cards/sources/tree-of-thoughts-2023"
      },
      "primary_link": "https://arxiv.org/abs/2305.10601"
    },
    {
      "id": "coderl-code-generation-rl-2022",
      "title": "CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning",
      "year": 2022,
      "venue": "NeurIPS 2022",
      "authors": [
        "Hung Le",
        "Yue Wang",
        "Akhilesh Deepak Gotmare",
        "Silvio Savarese",
        "Steven C. H. Hoi"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "rlvr",
        "reward_modeling",
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "code",
        "program-synthesis",
        "unit-tests",
        "rl"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "neurips-2022",
        "code-rl",
        "unit-tests",
        "critical-sampling",
        "primary-link-checked"
      ],
      "one_line_summary": "CodeRL is an early top-conference bridge between code verifiers, RL rewards, and inference-time critical sampling.",
      "why_it_matters": "Top-conference code RL paper that connects programmatic verifiers, learned critics, RL optimization, and inference-time resampling.",
      "data_object": "Problem, generated program, unit-test feedback, critic score, and final selected code.; process: problem statement, candidate program, unit-test result; Program execution and unit-test evaluation environment.",
      "feedback_verifier": "Unit tests and a critic trained to predict functional correctness.",
      "audit_focus": "Unit tests can be incomplete or overfit., Critic scores may reward test-passing shortcuts., Inference regeneration budget changes pass@k comparability.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2207.01780",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2207.01780",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2207.01780",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/coderl-code-generation-rl-2022"
      },
      "primary_link": "https://arxiv.org/abs/2207.01780"
    },
    {
      "id": "lets-verify-step-by-step-2023",
      "title": "Let's Verify Step by Step",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "Hunter Lightman",
        "Vineet Kosaraju",
        "Yura Burda",
        "Harri Edwards",
        "Bowen Baker",
        "Teddy Lee",
        "Jan Leike",
        "John Schulman",
        "Ilya Sutskever",
        "Karl Cobbe"
      ],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "math",
        "process-supervision",
        "reward-modeling"
      ],
      "category": [
        "process_trace_supervision_data",
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🪜 Human step-level labels",
      "tags": [
        "process-reward-model",
        "prm800k",
        "step-level-verifier",
        "verifier-scaling",
        "primary-link-checked"
      ],
      "one_line_summary": "This is the core PRM card for step-level verifier data and process-supervision scaling.",
      "why_it_matters": "Core verifier-scaling paper for process supervision, PRM training, active learning, and PRM-guided test-time selection.",
      "data_object": "Problem, reasoning steps, step labels, process reward model score, and final answer.; process: math problem, reasoning step, human step label; PRM800K-style process-supervision dataset for math reasoning.",
      "feedback_verifier": "Process reward model trained from human step-level labels.",
      "audit_focus": "Human step labels can encode style preferences., PRM scores can reward locally plausible but globally wrong paths., Verifier calls add TTC cost that must be disclosed.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2305.20050",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2305.20050",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2305.20050",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/lets-verify-step-by-step-2023"
      },
      "primary_link": "https://arxiv.org/abs/2305.20050"
    },
    {
      "id": "deepseekmath-2024",
      "title": "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Zhihong Shao",
        "Peiyi Wang",
        "Qihao Zhu",
        "Runxin Xu",
        "Junxiao Song",
        "Xiao Bi",
        "Haowei Zhang",
        "Mingchuan Zhang",
        "Y. K. Li",
        "Y. Wu",
        "Daya Guo"
      ],
      "source_role": [
        "data_release",
        "scaling_study",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "sft",
        "rlvr",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "rlvr",
        "data-scaling",
        "open-models"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧮 Math RLVR datasets",
      "tags": [
        "deepseekmath",
        "grpo",
        "math-rlvr",
        "data-scaling",
        "self-consistency-64",
        "primary-link-checked"
      ],
      "one_line_summary": "DeepSeekMath is the compact open-model card linking math data scale, GRPO, RLVR, and self-consistency budget.",
      "why_it_matters": "High-impact math RLVR report that ties data scaling, GRPO optimization, and 64-sample self-consistency into one reproducible reading target.",
      "data_object": "Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.; process: corpus filter signal, SFT example, RL prompt; Open mathematical reasoning model training pipeline.",
      "feedback_verifier": "GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.",
      "audit_focus": "Web data filtering may preserve benchmark leakage., GRPO gains can be confused with data-scale gains., Self-consistency improves scores but costs 64 samples.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2402.03300",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2402.03300",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2402.03300",
        "code": null,
        "data": null,
        "huggingface": "https://huggingface.co/deepseek-ai/deepseek-math-7b-base",
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/deepseekmath-2024"
      },
      "primary_link": "https://arxiv.org/abs/2402.03300"
    },
    {
      "id": "rest-em-self-training-2024",
      "title": "Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models",
      "year": 2024,
      "venue": "TMLR 2024",
      "authors": [
        "Avi Singh",
        "John D. Co-Reyes",
        "Rishabh Agarwal",
        "Ankesh Anand",
        "Piyush Patil",
        "Xavier Garcia",
        "Peter J. Liu",
        "James Harrison",
        "Jaehoon Lee",
        "Kelvin Xu",
        "Aaron Parisi",
        "Abhishek Kumar",
        "Alex Alemi",
        "Alex Rizkowsky",
        "Azade Nova",
        "Ben Adlam",
        "Bernd Bohnet",
        "Gamaleldin Elsayed",
        "Hanie Sedghi",
        "Igor Mordatch",
        "Isabelle Simpson",
        "Izzeddin Gur",
        "Jasper Snoek",
        "Jeffrey Pennington",
        "Jiri Hron",
        "Kathleen Kenealy",
        "Kevin Swersky",
        "Kshiteej Mahajan",
        "Laura Culp",
        "Lechao Xiao",
        "Maxwell L. Bileschi",
        "Noah Constant",
        "Roman Novak",
        "Rosanne Liu",
        "Tris Warkentin",
        "Yundi Qian",
        "Yamini Bansal",
        "Ethan Dyer",
        "Behnam Neyshabur",
        "Jascha Sohl-Dickstein",
        "Noah Fiedel"
      ],
      "source_role": [
        "scaling_study",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "sft",
        "rlvr",
        "evaluation"
      ],
      "domains": [
        "math",
        "code",
        "self-training",
        "data-reuse"
      ],
      "category": [
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "🧪 Filtering and verifier refresh",
      "tags": [
        "tmlr-2024",
        "rest-em",
        "self-training",
        "data-reuse",
        "verifier-filtering",
        "primary-link-checked"
      ],
      "one_line_summary": "ReST-EM is the data-reuse card for scaling self-training with verifier-filtered generated solutions.",
      "why_it_matters": "Strong self-training scaling paper for data reuse, scalar feedback filtering, and verifier-mediated synthetic data generation.",
      "data_object": "Prompt, generated sample, binary feedback result, filtered training example, and iteration number.; process: self-training round, sampled solution, binary verifier result; Expectation-maximization self-training loop over verifiable problem-solving tasks.",
      "feedback_verifier": "Binary correctness feedback from answer checks or execution-style evaluators.",
      "audit_focus": "Filtered data may become repetitive., Verifier errors are amplified across rounds., Data reuse counts can be mistaken for new unique data.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2312.06585",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2312.06585",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2312.06585",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/rest-em-self-training-2024"
      },
      "primary_link": "https://arxiv.org/abs/2312.06585"
    }
  ],
  "counts": {
    "total_entries": 17,
    "verified_entries": 17,
    "paper_card_sources": 17,
    "data_releases": 9,
    "verifiers_rewards": 8,
    "agent_environments": 4,
    "scaling_studies": 8,
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
      "id": "beginner_20",
      "emoji": "🌱",
      "title": "Beginner 20: Reasoning Data Orientation",
      "goal": "Build the vocabulary for post-training reasoning data before diving into recipes.",
      "entries": []
    },
    {
      "id": "builder_30",
      "emoji": "🏗️",
      "title": "Builder 30: Data Construction and Release Practice",
      "goal": "Learn how open reasoning-data recipes source prompts, write traces, filter, audit, and report artifacts.",
      "entries": []
    },
    {
      "id": "verifier_reward_25",
      "emoji": "🧪",
      "title": "Verifier and Reward 25",
      "goal": "Compare programmatic verifiers, PRMs, rubric rewards, LLM judges, and failure diagnostics.",
      "entries": []
    },
    {
      "id": "agent_data_25",
      "emoji": "🌐",
      "title": "Agent Data 25",
      "goal": "Understand trajectories, tool calls, browser/app/OS tasks, and SWE environments.",
      "entries": []
    },
    {
      "id": "scaling_20",
      "emoji": "📈",
      "title": "Scaling 20",
      "goal": "Read scaling claims across RL compute, data size, distillation, and test-time inference budget.",
      "entries": []
    },
    {
      "id": "representative_track_03",
      "emoji": "🧮",
      "title": "Representative 30: Programmatic Verification",
      "goal": "Cover the strongest math, code, proof, scientific-program-search, and real-task verifier surfaces.",
      "entries": []
    },
    {
      "id": "representative_track_10",
      "emoji": "🔁",
      "title": "Representative 30: RLVR and Test-Time Compute",
      "goal": "Compare verifier rewards, repeated sampling, tree search, process rewards, RL scaling, and failure audits.",
      "entries": [
        {
          "title": "TinyV",
          "entry_id": "tinyv-2025",
          "matched": true,
          "entry": {
            "id": "tinyv-2025",
            "title": "TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning",
            "year": 2025,
            "venue": "arXiv",
            "authors": [
              "Zhangchen Xu",
              "Yuetai Li",
              "Fengqing Jiang",
              "Bhaskar Ramasubramanian",
              "Luyao Niu",
              "Bill Yuchen Lin",
              "Radha Poovendran"
            ],
            "source_role": [
              "verifier_reward",
              "audit_failure",
              "construction_recipe"
            ],
            "verification_contract": [
              "programmatic",
              "judgment_required",
              "mixed"
            ],
            "supervision_granularity": [
              "answer_level",
              "scalar_reward"
            ],
            "training_use": [
              "rlvr",
              "reward_modeling",
              "evaluation"
            ],
            "domains": [
              "math"
            ],
            "category": [
              "preference_reward_feedback_data",
              "programmatically_verifiable_outcome_data",
              "process_trace_supervision_data",
              "judgment_rubric_domain_expert_data",
              "data_construction_open_release_recipes",
              "training_usage_optimization_objectives",
              "scaling_rlvr_test_time_compute",
              "audit_failure_contamination_verifier_attacks"
            ],
            "subfield": "Other related work",
            "tags": [
              "curated-card",
              "primary-link-checked"
            ],
            "one_line_summary": "Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.",
            "why_it_matters": "Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.",
            "data_object": "candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack",
            "feedback_verifier": "small LLM verifier augmenting rules",
            "audit_focus": "check links, lineage, verifier, split, and contamination",
            "curation_level": "L4_carded",
            "status": "verified",
            "needs_search": false,
            "artifacts": {
              "paper": "https://arxiv.org/abs/2505.14625",
              "venue": null,
              "arxiv": "https://arxiv.org/abs/2505.14625",
              "openreview": null,
              "acl": null,
              "pmlr": null,
              "cvf": null,
              "doi": null,
              "code": "https://github.com/uw-nsl/TinyV",
              "data": null,
              "huggingface": null,
              "project": null,
              "bibtex": null,
              "paper_card_source": "paper_cards/sources/tinyv-2025"
            },
            "primary_link": "https://arxiv.org/abs/2505.14625"
          }
        }
      ]
    },
    {
      "id": "audit_failure_20",
      "emoji": "🧯",
      "title": "Audit and Failure 20",
      "goal": "Build the habit of checking leakage, contamination, reward hacking, and judge robustness.",
      "entries": []
    },
    {
      "id": "industry_onboarding_40",
      "emoji": "🏭",
      "title": "Industry Onboarding 40",
      "goal": "A practical path for becoming useful on an LLM post-training data team.",
      "entries": []
    }
  ]
};
