window.ATLAS_DATA = {
  "entries": [
    {
      "id": "an-overview-of-the-bioasq-large-scale-biomedical-semantic-indexing-and-question--2015",
      "title": "An overview of the BioASQ large-scale biomedical semantic indexing and question answering competition",
      "year": 2015,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "deep-reinforcement-learning-from-human-preferences-2017",
      "title": "Deep reinforcement learning from human preferences",
      "year": 2017,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning"
      ],
      "domains": [
        "alignment"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib",
        "rlhf",
        "preference-data",
        "reward-modeling"
      ],
      "one_line_summary": "Shows how human preference comparisons can train reward models for reinforcement learning.",
      "why_it_matters": "It is a foundation for later post-training data records that turn comparisons into trainable reward signals.",
      "data_object": "pairwise preference; scalar reward",
      "feedback_verifier": "judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/1706.03741",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/1706.03741",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/1706.03741"
    },
    {
      "id": "data-statements-for-natural-language-processing-2018",
      "title": "Data statements for natural language processing",
      "year": 2018,
      "venue": "TACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "data_documentation",
        "nlp"
      ],
      "category": [
        "foundations_and_primers",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "📦 Data documentation / datasheets",
      "tags": [
        "seeded-from-bib",
        "dataset-documentation",
        "provenance",
        "nlp"
      ],
      "one_line_summary": "Proposes data statements for NLP datasets, foregrounding language, speaker/community provenance, annotation context, and intended deployment boundaries.",
      "why_it_matters": "Reasoning-data users need this lens when a corpus mixes web text, synthetic questions, human annotations, or domain-specific tasks whose population assumptions affect generalization.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://aclanthology.org/Q18-1041/",
        "venue": null,
        "arxiv": null,
        "openreview": null,
        "acl": "https://aclanthology.org/Q18-1041/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://aclanthology.org/Q18-1041/"
    },
    {
      "id": "datasheets-for-datasets-2018",
      "title": "Datasheets for datasets",
      "year": 2018,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "data_documentation"
      ],
      "category": [
        "foundations_and_primers",
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "📦 Data documentation / datasheets",
      "tags": [
        "seeded-from-bib",
        "dataset-documentation",
        "provenance",
        "audit"
      ],
      "one_line_summary": "Introduces dataset datasheets: a structured documentation template for provenance, composition, collection process, recommended uses, and limitations.",
      "why_it_matters": "It gives reasoning-data releases a minimum disclosure standard before anyone reuses prompts, traces, labels, rewards, or benchmark items.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/1803.09010",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/1803.09010",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/1803.09010"
    },
    {
      "id": "holist-an-environment-for-machine-learning-of-higher-order-logic-theorem-proving-2019",
      "title": "HOList: An environment for machine learning of higher-order logic theorem proving",
      "year": 2019,
      "venue": "ICML",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "pubmedqa-a-dataset-for-biomedical-research-question-answering-2019",
      "title": "PubMedQA: A dataset for biomedical research question answering",
      "year": 2019,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "a-primer-in-bertology-what-we-know-about-how-bert-works-2020",
      "title": "A primer in BERTology: What we know about how BERT works",
      "year": 2020,
      "venue": "TACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "process_trace_supervision_data"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "fact-or-fiction-verifying-scientific-claims-2020",
      "title": "Fact or fiction: Verifying scientific claims",
      "year": 2020,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "retrieval-augmented-generation-for-knowledge-intensive-nlp-tasks-2020",
      "title": "Retrieval-augmented generation for knowledge-intensive NLP tasks",
      "year": 2020,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "casehold-a-dataset-for-legal-holding-statement-prediction-2021",
      "title": "CaseHOLD: A dataset for legal holding statement prediction",
      "year": 2021,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "⚖️ Legal reasoning",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "contractnli-a-dataset-for-document-level-natural-language-inference-for-contract-2021",
      "title": "ContractNLI: A dataset for document-level natural language inference for contracts",
      "year": 2021,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "cuad-an-expert-annotated-nlp-dataset-for-legal-contract-review-2021",
      "title": "CUAD: An expert-annotated NLP dataset for legal contract review",
      "year": 2021,
      "venue": "NeurIPS Datasets and Benchmarks",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "⚖️ Legal reasoning",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "evaluating-large-language-models-trained-on-code-2021",
      "title": "Evaluating large language models trained on code",
      "year": 2021,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "data_release",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "code",
        "software_engineering"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib",
        "humaneval",
        "code",
        "unit-tests",
        "benchmark"
      ],
      "one_line_summary": "The Codex evaluation paper introduces HumanEval and studies code generation through functional correctness, repeated sampling, and pass@k.",
      "why_it_matters": "It connects code reasoning data to executable verification: generated programs are judged by tests, not by surface similarity to reference solutions.",
      "data_object": "executable Python function.; process: prompt, generated code, unit-test results, sample count.; Python execution sandbox and test suite.",
      "feedback_verifier": "HumanEval tests and pass@k evaluation.",
      "audit_focus": "Small public benchmarks are easy to memorize., Unit tests can miss incorrect or insecure behavior., Repeated sampling can hide low single-sample reliability.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2107.03374",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2107.03374",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/openai/human-eval",
        "data": "https://github.com/openai/human-eval",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2107.03374"
    },
    {
      "id": "finetuned-language-models-are-zero-shot-learners-2021",
      "title": "Finetuned language models are zero-shot learners",
      "year": 2021,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "finqa-a-dataset-of-numerical-reasoning-over-financial-data-2021",
      "title": "FinQA: A dataset of numerical reasoning over financial data",
      "year": 2021,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "benchmark",
        "data_release"
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
        "sft"
      ],
      "domains": [],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "seeded-from-bib",
        "finance",
        "numerical-reasoning",
        "tabular-textual-qa"
      ],
      "one_line_summary": "FinQA introduces financial-document QA with expert-written questions and gold reasoning programs for numerical reasoning over financial reports.",
      "why_it_matters": "It is a finance-domain reasoning benchmark where the data object includes questions, evidence from financial reports, answers, and reasoning programs rather than only free-form responses.",
      "data_object": "answer level; step level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L2_artifact_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://aclanthology.org/2021.emnlp-main.300/",
        "venue": null,
        "arxiv": null,
        "openreview": null,
        "acl": "https://aclanthology.org/2021.emnlp-main.300/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": "https://finqasite.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://aclanthology.org/2021.emnlp-main.300/"
    },
    {
      "id": "measuring-coding-challenge-competence-with-apps-2021",
      "title": "Measuring coding challenge competence with APPS",
      "year": 2021,
      "venue": "NeurIPS",
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
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "sft",
        "test_time_compute"
      ],
      "domains": [
        "code",
        "programming",
        "unit-tests"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "code",
        "programming",
        "seeded-from-bib",
        "unit-tests"
      ],
      "one_line_summary": "APPS evaluates code-generation competence with 10,000 programming problems checked by executable test cases.",
      "why_it_matters": "It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.",
      "data_object": "Python code submission evaluated against test cases.; process: difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.; offline programming benchmark with executable Python tests.",
      "feedback_verifier": "unit-test pass/fail signal.",
      "audit_focus": "Programs can overfit weak tests., Syntax validity is not the same as functional correctness., Contamination can inflate code benchmark scores.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2105.09938",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2105.09938",
        "openreview": "https://openreview.net/forum?id=sD93GOzH3i5",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/hendrycks/apps",
        "data": "https://github.com/hendrycks/apps",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/measuring-coding-challenge-competence-with-apps-2021"
      },
      "primary_link": "https://arxiv.org/abs/2105.09938"
    },
    {
      "id": "measuring-mathematical-problem-solving-with-the-math-dataset-2021",
      "title": "Measuring mathematical problem solving with the MATH dataset",
      "year": 2021,
      "venue": "NeurIPS Datasets and Benchmarks",
      "authors": [],
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
        "evaluation",
        "sft"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "seeded-from-bib",
        "math",
        "benchmark",
        "dataset"
      ],
      "one_line_summary": "Introduces MATH, a competition-style math benchmark with challenging problems, subject categories, and step-by-step solutions.",
      "why_it_matters": "MATH became a central answer-verifiable surface for evaluating and training advanced mathematical reasoning beyond grade-school word problems.",
      "data_object": "answer level",
      "feedback_verifier": "programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2103.03874",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2103.03874",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/hendrycks/math",
        "data": "https://github.com/hendrycks/math",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/measuring-mathematical-problem-solving-with-the-math-dataset-2021"
      },
      "primary_link": "https://arxiv.org/abs/2103.03874"
    },
    {
      "id": "minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021",
      "title": "miniF2F: A cross-system benchmark for formal olympiad-level mathematics",
      "year": 2021,
      "venue": "ICLR",
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
        "step_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training",
        "sft"
      ],
      "domains": [
        "formal-math",
        "theorem-proving",
        "proof-assistants"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "formal-math",
        "proof-assistants",
        "seeded-from-bib",
        "theorem-proving"
      ],
      "one_line_summary": "miniF2F is a cross-system formal mathematics benchmark for comparing theorem provers across Lean, Metamath, Isabelle, and HOL Light targets.",
      "why_it_matters": "It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.",
      "data_object": "formal proof accepted by a target proof assistant.; process: formal system, theorem statement, split, generated proof/tactics, verifier result.; Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.",
      "feedback_verifier": "proof assistant kernel/checker acceptance.",
      "audit_focus": "A theorem can be easier in one formal system than another., Search budget can dominate model differences., Forks can drift from the original benchmark.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2109.00110",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2109.00110",
        "openreview": "https://openreview.net/forum?id=9ZPegFuFTFv",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/openai/miniF2F",
        "data": "https://github.com/openai/miniF2F",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021"
      },
      "primary_link": "https://arxiv.org/abs/2109.00110"
    },
    {
      "id": "multitask-prompted-training-enables-zero-shot-task-generalization-2021",
      "title": "Multitask prompted training enables zero-shot task generalization",
      "year": 2021,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "qasper-a-dataset-of-information-seeking-questions-and-answers-over-scientific-re-2021",
      "title": "Qasper: A dataset of information-seeking questions and answers over scientific research papers",
      "year": 2021,
      "venue": "NAACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "tat-qa-a-question-answering-benchmark-on-a-hybrid-of-tabular-and-textual-content-2021",
      "title": "TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance",
      "year": 2021,
      "venue": "ACL",
      "authors": [],
      "source_role": [
        "benchmark",
        "data_release"
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
        "sft"
      ],
      "domains": [],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "seeded-from-bib",
        "finance",
        "table-text-reasoning",
        "numerical-reasoning"
      ],
      "one_line_summary": "TAT-QA evaluates numerical reasoning over hybrid financial tables and text, with annotated derivations and answers.",
      "why_it_matters": "It gives legal/finance-style domain reasoning a concrete benchmark surface where evidence selection, table-text grounding, arithmetic, and answer normalization all matter.",
      "data_object": "answer level; step level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L2_artifact_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://aclanthology.org/2021.acl-long.254/",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2105.07624",
        "openreview": null,
        "acl": "https://aclanthology.org/2021.acl-long.254/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/NExTplusplus/TAT-QA",
        "data": "https://github.com/NExTplusplus/TAT-QA",
        "huggingface": null,
        "project": "https://nextplusplus.github.io/TAT-QA/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://aclanthology.org/2021.acl-long.254/"
    },
    {
      "id": "training-verifiers-to-solve-math-word-problems-2021",
      "title": "Training verifiers to solve math word problems",
      "year": 2021,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🎚️ Scalar reward / ORM data",
      "tags": [
        "seeded-from-bib",
        "gsm8k",
        "math",
        "verifier",
        "benchmark"
      ],
      "one_line_summary": "Introduces GSM8K and trains verifier models to rank model-generated math solutions by likely correctness.",
      "why_it_matters": "It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.",
      "data_object": "answer level; scalar reward",
      "feedback_verifier": "programmatic, judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
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
        "huggingface": "https://huggingface.co/datasets/openai/gsm8k",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2110.14168"
    },
    {
      "id": "chain-of-thought-prompting-elicits-reasoning-in-large-language-models-2022",
      "title": "Chain-of-thought prompting elicits reasoning in large language models",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation"
      ],
      "domains": [
        "prompting",
        "reasoning"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "Shows that few-shot natural-language rationales can elicit multi-step reasoning behavior from sufficiently large language models.",
      "why_it_matters": "It is the conceptual bridge from answer-only prompts to trace-shaped reasoning examples, which later become SFT, distillation, filtering, and verifier targets.",
      "data_object": "answer level",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2201.11903",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2201.11903",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2201.11903"
    },
    {
      "id": "coderl-mastering-code-generation-through-pretrained-models-and-deep-reinforcemen-2022",
      "title": "CodeRL: Mastering code generation through pretrained models and deep reinforcement learning",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": "paper_cards/sources/coderl-mastering-code-generation-through-pretrained-models-and-deep-reinforcemen-2022"
      },
      "primary_link": null
    },
    {
      "id": "codet-code-generation-with-generated-tests-2022",
      "title": "CodeT: Code generation with generated tests",
      "year": 2022,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "coliee-competition-on-legal-information-extraction-entailment-2022",
      "title": "COLIEE: Competition on legal information extraction/entailment",
      "year": 2022,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "constitutional-ai-harmlessness-from-ai-feedback-2022",
      "title": "Constitutional AI: Harmlessness from AI feedback",
      "year": 2022,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "construction_recipe",
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "preference_learning",
        "safety_alignment",
        "reward_modeling"
      ],
      "domains": [
        "safety",
        "alignment"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "Constitutional AI trains harmless behavior from AI-generated critiques, revisions, and AI preference feedback guided by a written constitution.",
      "why_it_matters": "It is a core recipe for replacing part of human feedback with principle-guided model feedback, making critiques and preference pairs first-class post-training data.",
      "data_object": "original answer, self-critique, revised answer, preference pair, reward-model score.; process: principle used, critique, revision, comparison, preference label.; offline SL and RLHF/RLAIF alignment pipeline.",
      "feedback_verifier": "AI preference model trained from comparisons guided by constitutional principles.",
      "audit_focus": "AI feedback can encode model bias at scale., Principles may be underspecified or culturally narrow., A model can become safe-looking but evasive if helpfulness is not audited.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2212.08073",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2212.08073",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": "https://github.com/anthropics/ConstitutionalHarmlessnessPaper",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2212.08073"
    },
    {
      "id": "convfinqa-exploring-the-chain-of-numerical-reasoning-in-conversational-finance-q-2022",
      "title": "ConvFinQA: Exploring the chain of numerical reasoning in conversational finance question answering",
      "year": 2022,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "draft-sketch-and-prove-guiding-formal-theorem-provers-with-informal-proofs-2022",
      "title": "Draft, sketch, and prove: Guiding formal theorem provers with informal proofs",
      "year": 2022,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "scaling-laws-for-reward-model-overoptimization-2022",
      "title": "Scaling laws for reward model overoptimization",
      "year": 2022,
      "venue": "ICML",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 RLHF / reward-model surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "scienceworld-is-your-agent-smarter-than-a-5th-grader-2022",
      "title": "ScienceWorld: Is your agent smarter than a 5th grader?",
      "year": 2022,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "solving-math-word-problems-with-process-and-outcome-based-feedback-2022",
      "title": "Solving math word problems with process- and outcome-based feedback",
      "year": 2022,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "star-bootstrapping-reasoning-with-reasoning-2022",
      "title": "STaR: Bootstrapping reasoning with reasoning",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "construction_recipe",
        "survey_background"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation"
      ],
      "domains": [
        "reasoning"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "STaR iteratively generates rationales, keeps examples whose final answers are correct, and fine-tunes on the accepted reasoning traces.",
      "why_it_matters": "It is a compact recipe for self-improving reasoning data: model traces become training data only after answer-based filtering.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2203.14465"
    },
    {
      "id": "training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-2022",
      "title": "Training a helpful and harmless assistant with reinforcement learning from human feedback",
      "year": 2022,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning",
        "safety_alignment"
      ],
      "domains": [
        "alignment",
        "safety"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "📦 Data documentation / datasheets",
      "tags": [
        "seeded-from-bib",
        "rlhf",
        "preference-data",
        "safety"
      ],
      "one_line_summary": "Documents preference and RLHF data for helpfulness and harmlessness assistant behavior.",
      "why_it_matters": "It provides the alignment-data lineage that later reasoning-data recipes inherit when they combine demonstrations, preferences, and reward models.",
      "data_object": "pairwise preference; scalar reward",
      "feedback_verifier": "judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2204.05862",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2204.05862",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2204.05862"
    },
    {
      "id": "training-language-models-to-follow-instructions-with-human-feedback-2022",
      "title": "Training language models to follow instructions with human feedback",
      "year": 2022,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background",
        "model_report"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "sft",
        "preference_learning",
        "reward_modeling"
      ],
      "domains": [
        "alignment",
        "chat"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "InstructGPT establishes the demonstration, preference-comparison, reward-model, and PPO pipeline that many later post-training recipes inherit.",
      "why_it_matters": "It is the alignment-data baseline for separating supervised demonstrations, pairwise preferences, learned rewards, and policy optimization in later reasoning models.",
      "data_object": "pairwise preference; scalar reward",
      "feedback_verifier": "judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2203.02155",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2203.02155",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2203.02155"
    },
    {
      "id": "truthfulqa-2022",
      "title": "TruthfulQA",
      "year": 2022,
      "venue": "ACL",
      "authors": [
        "Stephanie Lin",
        "Jacob Hilton",
        "Owain Evans"
      ],
      "source_role": [
        "benchmark",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "safety_alignment",
        "audit"
      ],
      "domains": [
        "truthfulness",
        "factuality",
        "safety"
      ],
      "category": [
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "factuality",
        "safety",
        "seeded-from-bib",
        "truthfulness"
      ],
      "one_line_summary": "TruthfulQA is a benchmark for measuring whether models imitate common human falsehoods instead of giving truthful answers.",
      "why_it_matters": "It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.",
      "data_object": "free-form generation or multiple-choice answer with truthfulness and informativeness labels.; process: question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.; offline benchmark with human-written items and evaluator scripts.",
      "feedback_verifier": "human references plus automated/human scoring protocols for truthfulness and informativeness.",
      "audit_focus": "A model can be uninformative but truthful., A model can sound confident while reproducing a human misconception., Multiple-choice and generation modes can lead to different conclusions.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2109.07958",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2109.07958",
        "openreview": null,
        "acl": "https://aclanthology.org/2022.acl-long.229/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/sylinrl/TruthfulQA",
        "data": "https://github.com/sylinrl/TruthfulQA",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2109.07958"
    },
    {
      "id": "alce-enabling-large-language-models-to-generate-text-with-citations-2023",
      "title": "ALCE: Enabling large language models to generate text with citations",
      "year": 2023,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "api-bank-a-benchmark-for-tool-augmented-llms-2023",
      "title": "API-Bank: A benchmark for tool-augmented LLMs",
      "year": 2023,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "data-provenance-for-language-models-2023",
      "title": "Data provenance for language models",
      "year": 2023,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "📦 Data documentation / datasheets",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "direct-preference-optimization-your-language-model-is-secretly-a-reward-model-2023",
      "title": "Direct preference optimization: Your language model is secretly a reward model",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "alignment",
        "preference"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "DPO trains a policy directly from preference pairs by turning the reward-model objective into a supervised contrastive optimization problem.",
      "why_it_matters": "It shows that pairwise preference data can shape post-training behavior without deploying a separate learned reward model during optimization.",
      "data_object": "pairwise preference",
      "feedback_verifier": "judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2305.18290",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2305.18290",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2305.18290"
    },
    {
      "id": "distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023",
      "title": "Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes",
      "year": 2023,
      "venue": "ACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "factscore-2023",
      "title": "FActScore",
      "year": 2023,
      "venue": "EMNLP",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "financebench-a-benchmark-for-financial-question-answering-2023",
      "title": "FinanceBench: A benchmark for financial question answering",
      "year": 2023,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧰 Agent benchmarks and terminal predicates",
      "tags": [
        "seeded-from-bib",
        "finance",
        "domain-benchmark",
        "factuality"
      ],
      "one_line_summary": "FinanceBench benchmarks financial question answering over public company filings and expert-authored answers.",
      "why_it_matters": "It is a domain-specific reasoning benchmark where grounding, evidence retrieval, expert answers, and current filing data matter more than generic exact-match reasoning.",
      "data_object": "answer level",
      "feedback_verifier": "judgment required, mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L2_artifact_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2311.11944",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2311.11944",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/patronus-ai/financebench",
        "data": "https://github.com/patronus-ai/financebench",
        "huggingface": "https://huggingface.co/datasets/PatronusAI/financebench",
        "project": "https://github.com/patronus-ai/financebench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2311.11944"
    },
    {
      "id": "gorilla-2023",
      "title": "Gorilla",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "gpqa-2023",
      "title": "GPQA",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "David Rein",
        "Betty Li Hou",
        "Asa Cooper Stickland",
        "Jackson Petty",
        "Richard Yuanzhe Pang",
        "Julien Dirani",
        "Julian Michael",
        "Samuel R. Bowman"
      ],
      "source_role": [
        "benchmark"
      ],
      "verification_contract": [
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
        "science",
        "expert-evaluation",
        "scalable-oversight"
      ],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🌍 Web/browser agents",
      "tags": [
        "expert-evaluation",
        "scalable-oversight",
        "science",
        "seeded-from-bib"
      ],
      "one_line_summary": "GPQA is a graduate-level science Q&A benchmark designed so skilled non-experts with web access still struggle.",
      "why_it_matters": "It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.",
      "data_object": "multiple-choice answer with optional rationale and expert label.; process: domain, question, answer options, expert label, validation metadata, canary/string metadata.; offline expert Q&A benchmark.",
      "feedback_verifier": "expert-authored answer key and validation protocol.",
      "audit_focus": "Multiple-choice guessing can inflate scores., Non-expert validators may not catch subtle mistakes., Tool access changes what the benchmark measures.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2311.12022",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2311.12022",
        "openreview": "https://openreview.net/forum?id=Ti67584b98",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/idavidrein/gpqa",
        "data": "https://github.com/idavidrein/gpqa",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2311.12022"
    },
    {
      "id": "judgelm-fine-tuned-large-language-models-are-scalable-judges-2023",
      "title": "JudgeLM: Fine-tuned large language models are scalable judges",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023",
      "title": "Judging LLM-as-a-judge with MT-Bench and Chatbot Arena",
      "year": 2023,
      "venue": "NeurIPS Datasets and Benchmarks",
      "authors": [
        "Lianmin Zheng",
        "Wei-Lin Chiang",
        "Ying Sheng",
        "Siyuan Zhuang",
        "Zhanghao Wu",
        "Yonghao Zhuang",
        "Zi Lin",
        "Zhuohan Li",
        "Dacheng Li",
        "Eric P. Xing",
        "Hao Zhang",
        "Joseph E. Gonzalez",
        "Ion Stoica"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling",
        "preference_learning",
        "audit"
      ],
      "domains": [
        "llm-as-judge",
        "preference-evaluation",
        "chat"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "chat",
        "llm-as-judge",
        "preference-evaluation",
        "seeded-from-bib"
      ],
      "one_line_summary": "MT-Bench and Chatbot Arena establish LLM-as-a-judge and pairwise human-preference evaluation surfaces for open-ended chat models.",
      "why_it_matters": "It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.",
      "data_object": "model response, judge score, pairwise preference, or arena battle outcome.; process: question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.; offline judge harness and crowd-sourced arena platform.",
      "feedback_verifier": "strong model judge and human preference comparisons.",
      "audit_focus": "Judge scores can be position-biased., Verbose answers can be over-rewarded., A model judge may share weaknesses with the evaluated model.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2306.05685",
        "venue": "https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html",
        "arxiv": "https://arxiv.org/abs/2306.05685",
        "openreview": "https://openreview.net/forum?id=uccHPGDlao",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge",
        "data": "https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2306.05685"
    },
    {
      "id": "language-models-do-not-always-say-what-they-think-unfaithful-explanations-in-cha-2023",
      "title": "Language models do not always say what they think: Unfaithful explanations in chain-of-thought prompting",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "large-language-models-encode-clinical-knowledge-2023",
      "title": "Large language models encode clinical knowledge",
      "year": 2023,
      "venue": "Nature",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Verifier robustness and answer extraction",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "leandojo-theorem-proving-with-retrieval-augmented-language-models-2023",
      "title": "LeanDojo: Theorem proving with retrieval-augmented language models",
      "year": 2023,
      "venue": "NeurIPS Datasets and Benchmarks",
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
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "state_action_level",
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "agent_training",
        "sft",
        "evaluation"
      ],
      "domains": [
        "formal-math",
        "lean",
        "retrieval"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "formal-math",
        "lean",
        "retrieval",
        "seeded-from-bib"
      ],
      "one_line_summary": "LeanDojo releases an open Lean theorem-proving environment, benchmark, and retrieval-augmented prover pipeline.",
      "why_it_matters": "It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.",
      "data_object": "Lean tactic sequence or proof script checked by Lean.; process: repository commit, theorem, proof state, premises, retrieved context, tactic, Lean feedback, split.; Lean proof assistant environment and traced math-library repositories.",
      "feedback_verifier": "Lean checker and environment feedback.",
      "audit_focus": "A prover can rely on retrieval leakage., Lean version drift can break proofs., Premise accessibility rules can change task difficulty.",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": "https://github.com/lean-dojo/LeanDojo",
        "data": "https://zenodo.org/records/10114157",
        "huggingface": null,
        "project": "https://leandojo.org/",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/leandojo-theorem-proving-with-retrieval-augmented-language-models-2023"
      },
      "primary_link": "https://arxiv.org/abs/2306.15626"
    },
    {
      "id": "legalbench-2023",
      "title": "LegalBench",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "benchmark",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧰 Agent benchmarks and terminal predicates",
      "tags": [
        "seeded-from-bib",
        "legal",
        "domain-benchmark",
        "legal-reasoning"
      ],
      "one_line_summary": "LegalBench provides a collaboratively built benchmark suite for legal reasoning tasks across many legal domains.",
      "why_it_matters": "It anchors the legal side of judgment-required reasoning data, where task definitions, legal-domain splits, expert validity, and answer rubrics are often more important than a simple verifier.",
      "data_object": "answer level",
      "feedback_verifier": "judgment required, mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L2_artifact_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2308.11462",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2308.11462",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/HazyResearch/legalbench",
        "data": "https://github.com/HazyResearch/legalbench",
        "huggingface": "https://huggingface.co/datasets/nguha/legalbench",
        "project": "https://hazyresearch.stanford.edu/legalbench/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2308.11462"
    },
    {
      "id": "mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023",
      "title": "MAmmoTH: Building math generalist models through hybrid instruction tuning",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "maud-a-merger-agreement-understanding-dataset-2023",
      "title": "MAUD: A merger agreement understanding dataset",
      "year": 2023,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "measuring-faithfulness-in-chain-of-thought-reasoning-2023",
      "title": "Measuring faithfulness in chain-of-thought reasoning",
      "year": 2023,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023",
      "title": "MetaMath: Bootstrap your own mathematical questions for large language models",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "mind2web-towards-a-generalist-agent-for-the-web-2023",
      "title": "Mind2Web: Towards a generalist agent for the web",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🌍 Web/browser agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "orca-progressive-learning-from-complex-explanation-traces-of-gpt-4-2023",
      "title": "Orca: Progressive learning from complex explanation traces of GPT-4",
      "year": 2023,
      "venue": "arXiv",
      "authors": [
        "Subhabrata Mukherjee",
        "Arindam Mitra",
        "Ganesh Jawahar",
        "Sahaj Agarwal",
        "Hamid Palangi",
        "Ahmed Awadallah"
      ],
      "source_role": [
        "construction_recipe",
        "model_report"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation",
        "evaluation"
      ],
      "domains": [
        "explanation-traces",
        "distillation",
        "synthetic-data"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "distillation",
        "explanation-traces",
        "seeded-from-bib",
        "synthetic-data"
      ],
      "one_line_summary": "Orca studies progressive learning from complex teacher explanation traces rather than shallow imitation of final answers.",
      "why_it_matters": "It is an early and influential reasoning-distillation recipe: the reusable object is teacher-assisted explanation data plus careful evaluation against style-only imitation.",
      "data_object": "instruction response with detailed explanation, intermediate reasoning, and final answer.; process: prompt source, teacher identity, explanation trace, task type, response, evaluation benchmark.; offline synthetic-data distillation and evaluation pipeline.",
      "feedback_verifier": "downstream reasoning, exam, and benchmark evaluation rather than a single automatic verifier.",
      "audit_focus": "Students can learn teacher style without robust reasoning., Synthetic traces can include teacher errors., Closed teacher data makes lineage hard to audit.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2306.02707",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2306.02707",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": "https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2306.02707"
    },
    {
      "id": "prm800k-2023",
      "title": "Let's Verify Step by Step",
      "year": 2023,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "process_supervision",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "programmatic"
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
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.",
      "why_it_matters": "It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.",
      "data_object": "step-level labels and final answers; process: step, label, solution trace; offline math reasoning traces",
      "feedback_verifier": "process reward model trained from step labels",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/prm800k-2023"
      },
      "primary_link": "https://arxiv.org/abs/2305.20050"
    },
    {
      "id": "proofnet-autoformalizing-and-formally-proving-undergraduate-level-mathematics-2023",
      "title": "ProofNet: Autoformalizing and formally proving undergraduate-level mathematics",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "react-synergizing-reasoning-and-acting-in-language-models-2023",
      "title": "ReAct: Synergizing reasoning and acting in language models",
      "year": 2023,
      "venue": "ICLR",
      "authors": [
        "Shunyu Yao",
        "Jeffrey Zhao",
        "Dian Yu",
        "Nan Du",
        "Izhak Shafran",
        "Karthik Narasimhan",
        "Yuan Cao"
      ],
      "source_role": [
        "agent_environment",
        "construction_recipe"
      ],
      "verification_contract": [
        "environmental",
        "mixed"
      ],
      "supervision_granularity": [
        "state_action_level",
        "full_episode"
      ],
      "training_use": [
        "agent_training",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "agents",
        "tools",
        "reasoning-acting"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "⏱️ Test-time compute logs",
      "tags": [
        "agents",
        "reasoning-acting",
        "seeded-from-bib",
        "tools"
      ],
      "one_line_summary": "ReAct interleaves reasoning traces with task-specific actions so models can update plans from external observations.",
      "why_it_matters": "It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.",
      "data_object": "trajectory containing reasoning note, action, observation, and final answer or task completion.; process: task state, action string, observation, reasoning note, final answer, success indicator.; Wikipedia API, embodied/web shopping environments, and task-specific simulators.",
      "feedback_verifier": "environment success, answer correctness, or task-specific evaluation.",
      "audit_focus": "Reasoning notes can rationalize bad actions., Environment wrappers can change task difficulty., Few-shot exemplars may encode brittle action formats.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2210.03629",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2210.03629",
        "openreview": "https://openreview.net/forum?id=WE_vluYUL-X",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/ysymyth/ReAct",
        "data": null,
        "huggingface": null,
        "project": "https://react-lm.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2210.03629"
    },
    {
      "id": "reflexion-language-agents-with-verbal-reinforcement-learning-2023",
      "title": "Reflexion: Language agents with verbal reinforcement learning",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "rest-textsuperscriptem-2023",
      "title": "ReST\\textsuperscriptEM",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023",
      "title": "Self-consistency improves chain of thought reasoning in language models",
      "year": 2023,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "scaling_study",
        "survey_background"
      ],
      "verification_contract": [
        "mixed",
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "reasoning",
        "test_time_compute"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "Self-consistency samples multiple chain-of-thought reasoning paths and chooses the answer that is most consistent across samples.",
      "why_it_matters": "It is the classic test-time compute baseline for reasoning: performance can improve by spending more samples and marginalizing over traces without changing training data.",
      "data_object": "multiple rationales and final answers for the same prompt.; process: sampling temperature, number of paths, answer extraction, aggregation rule.; benchmark prompting setup.",
      "feedback_verifier": "majority or marginalization over sampled answers.",
      "audit_focus": "More samples can amplify benchmark-specific shortcuts., Aggregation does not guarantee step faithfulness., Unmatched inference budgets can make methods look better than they are.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2203.11171",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2203.11171",
        "openreview": "https://openreview.net/forum?id=1PL1NIMMrw",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/self-consistency-improves-chain-of-thought-reasoning-in-language-models-2023"
      },
      "primary_link": "https://arxiv.org/abs/2203.11171"
    },
    {
      "id": "self-instruct-aligning-language-models-with-self-generated-instructions-2023",
      "title": "Self-Instruct: Aligning language models with self-generated instructions",
      "year": 2023,
      "venue": "ACL",
      "authors": [],
      "source_role": [
        "construction_recipe",
        "data_release"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft"
      ],
      "domains": [
        "instruction_following"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "Other related work",
      "tags": [
        "foundation-starter",
        "primary-link-checked"
      ],
      "one_line_summary": "Self-Instruct bootstraps instruction-following data by having a model generate instructions, inputs, and outputs, then filtering low-quality or duplicate examples.",
      "why_it_matters": "It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2212.10560",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2212.10560",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2212.10560"
    },
    {
      "id": "self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023",
      "title": "Self-RAG: Learning to retrieve, generate, and critique through self-reflection",
      "year": 2023,
      "venue": "ICLR",
      "authors": [
        "Akari Asai",
        "Zeqiu Wu",
        "Yizhong Wang",
        "Avirup Sil",
        "Hannaneh Hajishirzi"
      ],
      "source_role": [
        "construction_recipe",
        "data_release",
        "agent_environment"
      ],
      "verification_contract": [
        "mixed",
        "judgment_required"
      ],
      "supervision_granularity": [
        "step_level",
        "answer_level"
      ],
      "training_use": [
        "sft",
        "evaluation",
        "agent_training",
        "audit"
      ],
      "domains": [
        "retrieval",
        "critique",
        "factuality"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "critique",
        "factuality",
        "retrieval",
        "seeded-from-bib"
      ],
      "one_line_summary": "Self-RAG trains models to decide when to retrieve, generate with evidence, and critique outputs using reflection tokens.",
      "why_it_matters": "It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.",
      "data_object": "generation with retrieval decisions, critique signals, and final answer.; process: query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.; retriever plus generation model with special reflection tokens.",
      "feedback_verifier": "critique signals and task-specific factuality/answer-quality evaluation.",
      "audit_focus": "A model can retrieve irrelevant passages confidently., Critique tokens can become style markers without true verification., Retriever choice changes benchmark conclusions.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2310.11511",
        "venue": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html",
        "arxiv": "https://arxiv.org/abs/2310.11511",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/akariasai/self-rag",
        "data": "https://huggingface.co/datasets/selfrag/selfrag_train_data",
        "huggingface": "https://huggingface.co/selfrag/selfrag_llama2_7b",
        "project": "https://selfrag.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2310.11511"
    },
    {
      "id": "selfcodealign-self-alignment-for-code-generation-2023",
      "title": "SelfCodeAlign: Self-alignment for code generation",
      "year": 2023,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "swe-bench-can-language-models-resolve-real-world-github-issues-2023",
      "title": "SWE-bench: Can language models resolve real-world GitHub issues?",
      "year": 2023,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "software_engineering",
        "code"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib",
        "swe-bench",
        "software-engineering",
        "agent",
        "environment"
      ],
      "one_line_summary": "SWE-bench turns real GitHub issues into repository-level repair tasks evaluated by applying patches and running tests.",
      "why_it_matters": "It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.",
      "data_object": "full episode; state action level",
      "feedback_verifier": "environmental, programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2310.06770",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2310.06770",
        "openreview": "https://openreview.net/forum?id=VTF8yNQM66",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/swe-bench/SWE-bench",
        "data": "https://github.com/swe-bench/SWE-bench",
        "huggingface": null,
        "project": "https://www.swebench.com/original.html",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2310.06770"
    },
    {
      "id": "toolformer-language-models-can-teach-themselves-to-use-tools-2023",
      "title": "Toolformer: Language models can teach themselves to use tools",
      "year": 2023,
      "venue": "NeurIPS",
      "authors": [
        "Timo Schick",
        "Jane Dwivedi-Yu",
        "Roberto Dessi",
        "Roberta Raileanu",
        "Maria Lomeli",
        "Luke Zettlemoyer",
        "Nicola Cancedda",
        "Thomas Scialom"
      ],
      "source_role": [
        "construction_recipe",
        "agent_environment"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "answer_level"
      ],
      "training_use": [
        "sft",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "tools",
        "api-calls",
        "self-supervision"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "api-calls",
        "seeded-from-bib",
        "self-supervision",
        "tools"
      ],
      "one_line_summary": "Toolformer creates self-supervised tool-use data by inserting API calls only when tool results improve language-model likelihood.",
      "why_it_matters": "It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.",
      "data_object": "text sequence with inserted API call and tool result markup.; process: candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.; external tool APIs used during data construction and evaluation.",
      "feedback_verifier": "language-model likelihood improvement after including tool result.",
      "audit_focus": "Likelihood improvement may not equal truthful tool use., Tools can return stale or wrong outputs., The model can learn call syntax without robust tool-selection judgment.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2302.04761",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2302.04761",
        "openreview": "https://openreview.net/forum?id=Yacmpz84TH",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2302.04761"
    },
    {
      "id": "ultrafeedback-boosting-language-models-with-high-quality-feedback-2023",
      "title": "UltraFeedback: Boosting language models with high-quality feedback",
      "year": 2023,
      "venue": "ICML",
      "authors": [
        "Ganqu Cui",
        "Lifan Yuan",
        "Ning Ding",
        "Guanming Yao",
        "Bingxiang He",
        "Wei Zhu",
        "Yuan Ni",
        "Guotong Xie",
        "Ruobing Xie",
        "Yankai Lin",
        "Zhiyuan Liu",
        "Maosong Sun"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning",
        "reward_modeling",
        "sft",
        "safety_alignment"
      ],
      "domains": [
        "preference-data",
        "ai-feedback",
        "reward-modeling"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "ai-feedback",
        "preference-data",
        "reward-modeling",
        "seeded-from-bib"
      ],
      "one_line_summary": "UltraFeedback releases large-scale AI feedback with fine-grained ratings and critiques over diverse instruction-response pairs.",
      "why_it_matters": "It is a widely reused preference/reward data source, but its value depends on auditing prompt sources, judge model behavior, rubric dimensions, and corrected labels.",
      "data_object": "instruction, candidate responses, fine-grained ratings, textual critiques, and derived preference pairs.; process: source dataset, model identity, response, rating dimension, critique text, corrected overall score.; offline feedback generation and reward-model training pipeline.",
      "feedback_verifier": "AI-generated scalar and textual feedback over response quality dimensions.",
      "audit_focus": "AI feedback can encode judge-model bias., A corrected dataset version can change reward-model behavior., Fine-grained scores may not translate cleanly into pairwise preferences.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2310.01377",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2310.01377",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/OpenBMB/UltraFeedback",
        "data": "https://huggingface.co/datasets/openbmb/UltraFeedback",
        "huggingface": "https://huggingface.co/datasets/openbmb/UltraFeedback",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2310.01377"
    },
    {
      "id": "webarena-a-realistic-web-environment-for-building-autonomous-agents-2023",
      "title": "WebArena: A realistic web environment for building autonomous agents",
      "year": 2023,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "web",
        "agents"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.",
      "why_it_matters": "Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.",
      "data_object": "environment interaction trajectory; process: observation, action, state; browser-accessible web environment",
      "feedback_verifier": "task-specific success evaluator",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2307.13854",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2307.13854",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2307.13854"
    },
    {
      "id": "wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023",
      "title": "WizardMath: Empowering mathematical reasoning for large language models via reinforced evol-instruct",
      "year": 2023,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "ai-models-collapse-when-trained-on-recursively-generated-data-2024",
      "title": "AI models collapse when trained on recursively generated data",
      "year": 2024,
      "venue": "Nature",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "apigen-automated-pipeline-for-generating-verifiable-and-diverse-function-calling-2024",
      "title": "APIGen: Automated pipeline for generating verifiable and diverse function-calling datasets",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "appworld-a-controllable-world-of-apps-and-people-for-benchmarking-interactive-co-2024",
      "title": "AppWorld: A controllable world of apps and people for benchmarking interactive coding agents",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "apps",
        "agents",
        "code"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.",
      "why_it_matters": "Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.",
      "data_object": "API/tool action trajectory; process: tool call, state transition, observation; simulated app ecosystem with users and APIs",
      "feedback_verifier": "programmatic environment assertions",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.18901",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.18901",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.18901"
    },
    {
      "id": "bfcl-v3-2024",
      "title": "BFCL v3",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "bigcodebench-benchmarking-code-generation-with-diverse-function-calls-and-comple-2024",
      "title": "BigCodeBench: Benchmarking code generation with diverse function calls and complex instructions",
      "year": 2024,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "bright-a-realistic-and-challenging-benchmark-for-reasoning-intensive-retrieval-2024",
      "title": "BRIGHT: A realistic and challenging benchmark for reasoning-intensive retrieval",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "browsergym-a-gym-environment-for-web-agents-2024",
      "title": "BrowserGym: A gym environment for web agents",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "infrastructure",
        "agent_environment",
        "benchmark"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "web",
        "agents"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.",
      "why_it_matters": "A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.",
      "data_object": "browser trajectory; process: DOM/state observation, action, reward/result; gym-style browser environment",
      "feedback_verifier": "environment task evaluator",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2412.05467",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2412.05467",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2412.05467"
    },
    {
      "id": "chembench-a-benchmark-for-evaluating-large-language-models-in-chemistry-2024",
      "title": "ChemBench: A benchmark for evaluating large language models in chemistry",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "deepseek-prover-advancing-theorem-proving-in-llms-2024",
      "title": "DeepSeek-Prover: Advancing theorem proving in LLMs",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Huajian Xin",
        "Daya Guo",
        "Zhihong Shao",
        "Zhizhou Ren",
        "Qihao Zhu",
        "Bo Liu",
        "Chong Ruan",
        "Wenda Li",
        "Xiaodan Liang"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "model_report"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "step_level",
        "answer_level"
      ],
      "training_use": [
        "sft",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "formal-math",
        "lean",
        "synthetic-data"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "formal-math",
        "lean",
        "seeded-from-bib",
        "synthetic-data"
      ],
      "one_line_summary": "DeepSeek-Prover generates large-scale Lean 4 theorem-proving data from informal math problems and trains a formal proof model.",
      "why_it_matters": "It is a key formal-reasoning data recipe where synthetic formal statements, generated proofs, and Lean verification form a reusable post-training object.",
      "data_object": "Lean 4 theorem statement and proof script checked by Lean.; process: informal problem, formal statement, generated proof, Lean result, benchmark split.; Lean 4 proof assistant and formal theorem-proving benchmark harness.",
      "feedback_verifier": "Lean kernel/checker acceptance.",
      "audit_focus": "Formal statements can be wrong even if proofs verify., Pass@k hides low single-shot reliability., Lean/mathlib version drift can break reproducibility.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.14333",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.14333",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": "https://huggingface.co/datasets/deepseek-ai/DeepSeek-Prover-V1",
        "huggingface": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1",
        "project": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.14333"
    },
    {
      "id": "deepseek-prover-v1-5-harnessing-proof-assistant-feedback-for-reinforcement-learn-2024",
      "title": "DeepSeek-Prover-V1.5: Harnessing proof assistant feedback for reinforcement learning and Monte-Carlo tree search",
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
        "model_report",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "step_level",
        "scalar_reward",
        "full_episode"
      ],
      "training_use": [
        "rlvr",
        "agent_training",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "formal-math",
        "lean",
        "rl"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "formal-math",
        "lean",
        "rl",
        "seeded-from-bib"
      ],
      "one_line_summary": "DeepSeek-Prover-V1.5 adds proof-assistant feedback, RL, and RMaxTS search on top of DeepSeek-Prover-style formal proof data.",
      "why_it_matters": "It shows how proof-assistant feedback can become both a reward signal and a search guide for formal mathematical reasoning.",
      "data_object": "Lean proof script, proof-search path, feedback signal, and verification result.; process: theorem, proof attempt, Lean feedback, reward, search node, final proof, pass/fail result.; Lean 4 proof assistant plus RMaxTS search procedure.",
      "feedback_verifier": "proof assistant feedback used for RL and search selection.",
      "audit_focus": "Search budget can dominate model quality., Checker feedback is sparse and version-dependent., RL can optimize toward easy theorem families.",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": "https://github.com/deepseek-ai/DeepSeek-Prover-V1.5",
        "data": null,
        "huggingface": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL",
        "project": "https://github.com/deepseek-ai/DeepSeek-Prover-V1.5",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2408.08152"
    },
    {
      "id": "deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024",
      "title": "DeepSeekMath: Pushing the limits of mathematical reasoning in open language models",
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
        "web-data"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "math",
        "rlvr",
        "seeded-from-bib",
        "web-data"
      ],
      "one_line_summary": "DeepSeekMath combines math-focused web-data selection with SFT, GRPO-style RL, and self-consistency evaluation for open mathematical reasoning.",
      "why_it_matters": "It is an important bridge from data selection to RLVR: performance gains are attributed to both a math pretraining corpus and a more memory-efficient policy-optimization recipe.",
      "data_object": "natural-language mathematical solution plus final answer, sometimes sampled multiple times.; process: data-selection score, training stage, problem, solution, final answer, verifier/evaluation result, sampling count.; offline math training and benchmark evaluation pipeline.",
      "feedback_verifier": "answer correctness and GRPO-style reward over math tasks.",
      "audit_focus": "Self-consistency can hide weak single-sample accuracy., Web-data mining may import benchmark leakage., Final-answer rewards can miss flawed derivations.",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": "https://github.com/deepseek-ai/deepseek-math",
        "data": null,
        "huggingface": "https://huggingface.co/collections/deepseek-ai/deepseek-math",
        "project": "https://github.com/deepseek-ai/deepseek-math",
        "bibtex": null,
        "paper_card_source": "paper_cards/sources/deepseekmath-pushing-the-limits-of-mathematical-reasoning-in-open-language-model-2024"
      },
      "primary_link": "https://arxiv.org/abs/2402.03300"
    },
    {
      "id": "does-writing-with-lms-reduce-content-diversity-2024",
      "title": "Does writing with LMs reduce content diversity?",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 Verifier gaming",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "frontiermath-a-benchmark-for-evaluating-advanced-mathematical-reasoning-in-ai-2024",
      "title": "FrontierMath: A benchmark for evaluating advanced mathematical reasoning in AI",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "goedel-prover-a-frontier-model-for-open-source-automated-theorem-proving-2024",
      "title": "Goedel-Prover: A frontier model for open-source automated theorem proving",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧾 Formal proof / Lean / theorem proving",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "gsm-symbolic-2024",
      "title": "GSM-Symbolic",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 Verifier robustness and answer extraction",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "harmbench-2024",
      "title": "HarmBench",
      "year": 2024,
      "venue": "ICML",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "helpsteer-2-open-source-dataset-for-training-top-performing-reward-models-2024",
      "title": "HelpSteer 2: Open-source dataset for training top-performing reward models",
      "year": 2024,
      "venue": "NeurIPS 2024 Datasets and Benchmarks Track",
      "authors": [
        "Zhilin Wang",
        "Yi Dong",
        "Olivier Delalleau",
        "Jiaqi Zeng",
        "Gerald Shen",
        "Daniel Egert",
        "Jimmy J. Zhang",
        "Makesh Narsimhan Sreedhar",
        "Oleksii Kuchaiev"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling"
      ],
      "domains": [
        "preference-data",
        "reward-modeling",
        "human-feedback",
        "alignment",
        "open-data"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "HelpSteer2",
        "preference-data",
        "reward-modeling",
        "human-feedback",
        "scalar-reward",
        "alignment",
        "open-data"
      ],
      "one_line_summary": "HelpSteer 2 releases a CC-BY-4.0 preference dataset with prompt-response records and five human-annotated quality scores for training reward models.",
      "why_it_matters": "It gives the Preference & Reward Feedback track a compact, permissively licensed reward-model training dataset with richer scalar feedback than a single chosen/rejected label.",
      "data_object": "prompt, response, and five Likert-style attribute scores; process: prompt, response, helpfulness; offline reward-model training dataset",
      "feedback_verifier": "human annotation of response quality attributes",
      "audit_focus": "Scalar attribute scores can hide why one response is preferred over another., Reward models may learn annotator style, verbosity preferences, or attribute-specific shortcuts., Mostly English, US-annotator data may not generalize to other languages or preference populations.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html",
        "venue": "https://neurips.cc/virtual/2024/poster/97706",
        "arxiv": "https://arxiv.org/abs/2406.08673",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.52202/079017-0047",
        "code": "https://github.com/NVIDIA/NeMo-Aligner",
        "data": "https://huggingface.co/datasets/nvidia/HelpSteer2",
        "huggingface": "https://huggingface.co/datasets/nvidia/HelpSteer2",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/02fd91a387a6a5a5751e81b58a75af90-Abstract-Datasets_and_Benchmarks_Track.html"
    },
    {
      "id": "introducing-swe-bench-verified-2024",
      "title": "Introducing SWE-bench Verified",
      "year": 2024,
      "venue": "OpenAI / SWE-bench report",
      "authors": [
        "SWE-bench Team",
        "OpenAI Preparedness"
      ],
      "source_role": [
        "benchmark",
        "agent_environment",
        "audit_failure"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training",
        "audit"
      ],
      "domains": [
        "software-engineering",
        "agents",
        "unit-tests"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "agents",
        "seeded-from-bib",
        "software-engineering",
        "unit-tests"
      ],
      "one_line_summary": "SWE-bench Verified is a human-filtered 500-instance subset of SWE-bench designed to reduce ambiguous, unsolvable, or incorrectly tested software-engineering tasks.",
      "why_it_matters": "It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.",
      "data_object": "patch diff applied to a repository plus test execution results.; process: repository, issue, base commit, patch, FAIL TO PASS tests, PASS TO PASS tests, human validation notes.; Dockerized repository checkout and unit-test harness.",
      "feedback_verifier": "post-patch unit tests plus human filtering of task validity.",
      "audit_focus": "Leaderboard scores can depend strongly on scaffold design., Tests may not cover all acceptable patches., Public benchmark tasks can become training targets over time.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://openai.com/index/introducing-swe-bench-verified/",
        "venue": "https://www.swebench.com/verified.html",
        "arxiv": null,
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/swe-bench/SWE-bench",
        "data": "https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified",
        "huggingface": "https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified",
        "project": "https://www.swebench.com/verified.html",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://openai.com/index/introducing-swe-bench-verified/"
    },
    {
      "id": "is-model-collapse-inevitable-2024",
      "title": "Is model collapse inevitable?",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "lab-bench-measuring-capabilities-of-language-models-for-biology-research-2024",
      "title": "LAB-Bench: Measuring capabilities of language models for biology research",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024",
      "title": "Large Language Monkeys: Scaling Inference Compute with Repeated Sampling",
      "year": 2024,
      "venue": "arXiv preprint arXiv:2407.21787",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "rollout_search_test_time_trace_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.21787"
    },
    {
      "id": "learning-to-reason-with-llms-2024",
      "title": "Learning to reason with LLMs",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧠 Reasoning LLM surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "livebench-a-challenging-contamination-free-benchmark-for-large-language-models-2024",
      "title": "LiveBench: A challenging, contamination-free benchmark for large language models",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "audit_failure"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "evaluation",
        "math",
        "code",
        "reasoning"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib",
        "livebench",
        "contamination",
        "benchmark",
        "evaluation"
      ],
      "one_line_summary": "LiveBench is a frequently updated, contamination-limited benchmark that uses recent sources and objective scoring across math, code, reasoning, language, instruction following, and data analysis.",
      "why_it_matters": "It gives reasoning-data readers a benchmark-refresh pattern for separating real progress from memorized or stale evaluation items.",
      "data_object": "answer level",
      "feedback_verifier": "programmatic, mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.19314",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.19314",
        "openreview": "https://openreview.net/forum?id=sKYHBTAxVa",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": "https://livebench.ai/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.19314"
    },
    {
      "id": "livecodebench-holistic-and-contamination-free-evaluation-of-large-language-model-2024",
      "title": "LiveCodeBench: Holistic and contamination-free evaluation of large language models for code",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Naman Jain",
        "King Han",
        "Alex Gu",
        "Wen-Ding Li",
        "Fanjia Yan",
        "Tianjun Zhang",
        "Sida Wang",
        "Armando Solar-Lezama",
        "Koushik Sen",
        "Ion Stoica"
      ],
      "source_role": [
        "benchmark",
        "audit_failure"
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
        "audit",
        "test_time_compute"
      ],
      "domains": [
        "code",
        "contamination",
        "execution"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "code",
        "contamination",
        "execution",
        "seeded-from-bib"
      ],
      "one_line_summary": "LiveCodeBench continuously collects recent programming problems to evaluate code generation, execution, repair, and test-output prediction under lower contamination risk.",
      "why_it_matters": "It gives code-reasoning evaluation a moving-time-window design, making it harder to confuse memorized public problems with genuine coding capability.",
      "data_object": "program submission or code-related output evaluated by tests or task-specific checks.; process: problem release date, platform, prompt, generated code, tests, pass/fail result, evaluation window.; code execution and benchmark leaderboard infrastructure.",
      "feedback_verifier": "programmatic tests and task-specific correctness checks.",
      "audit_focus": "Live benchmarks still become stale after release., Execution settings can affect pass/fail outcomes., Public leaderboard feedback can shape future training.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2403.07974",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2403.07974",
        "openreview": "https://openreview.net/forum?id=chfJJYC3iL",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/livecodebench/livecodebench",
        "data": "https://github.com/livecodebench/livecodebench",
        "huggingface": null,
        "project": "https://livecodebench.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2403.07974"
    },
    {
      "id": "magicoder-empowering-code-generation-with-oss-instruct-2024",
      "title": "Magicoder: Empowering code generation with OSS-instruct",
      "year": 2024,
      "venue": "ICML",
      "authors": [
        "Yuxiang Wei",
        "Zhe Wang",
        "Jiawei Liu",
        "Yifeng Ding",
        "Lingming Zhang"
      ],
      "source_role": [
        "construction_recipe",
        "data_release",
        "model_report"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "sft",
        "evaluation",
        "distillation"
      ],
      "domains": [
        "code",
        "synthetic-data",
        "open-source-context"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "code",
        "open-source-context",
        "seeded-from-bib",
        "synthetic-data"
      ],
      "one_line_summary": "Magicoder introduces OSS-Instruct, a code-data recipe that uses open-source code snippets to generate more realistic instruction data.",
      "why_it_matters": "It is a strong code-data construction example because it grounds synthetic coding instructions in real open-source references rather than free-floating prompt invention.",
      "data_object": "instruction-response coding example, often linked to a code reference or task scaffold.; process: source snippet, generated instruction, solution response, model family, benchmark result.; offline code-data generation and code benchmark evaluation.",
      "feedback_verifier": "coding benchmark pass rates and optional executable checks.",
      "audit_focus": "Synthetic code tasks can inherit license issues., Reference snippets may leak benchmark patterns., Teacher-generated solutions can be plausible but wrong.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2312.02120",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2312.02120",
        "openreview": null,
        "acl": null,
        "pmlr": "https://proceedings.mlr.press/v235/wei24h.html",
        "cvf": null,
        "doi": null,
        "code": "https://github.com/ise-uiuc/magicoder",
        "data": "https://huggingface.co/datasets/ise-uiuc/Magicoder-OSS-Instruct-75K",
        "huggingface": "https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2312.02120"
    },
    {
      "id": "mammoth2-scaling-instructions-from-the-web-2024",
      "title": "MAmmoTH2: Scaling Instructions from the Web",
      "year": 2024,
      "venue": "Advances in Neural Information Processing Systems (NeurIPS)",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.03548",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.03548",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.03548"
    },
    {
      "id": "math-shepherd-2024",
      "title": "Math-Shepherd",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "process_supervision",
        "verifier_reward"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "Rollout-value supervision method that assigns process rewards to intermediate math reasoning steps.",
      "why_it_matters": "It is the clearest bridge between final-answer verifiers and step-level PRM data: the label is not a human judgment but a rollout-derived estimate of whether a partial step can still reach the right answer.",
      "data_object": "step-level rollout-value labels; process: reasoning step, rollout result, process reward score; offline math reasoning traces",
      "feedback_verifier": "rollout-derived process reward signal",
      "audit_focus": "rollout policy strength can leak into labels, step rewards may favor locally plausible continuations, generated solutions can inherit base-model shortcuts",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2312.08935"
    },
    {
      "id": "opencodeinterpreter-integrating-code-generation-with-execution-and-refinement-2024",
      "title": "OpenCodeInterpreter: Integrating code generation with execution and refinement",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024",
      "title": "OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data",
      "year": 2024,
      "venue": "ICLR",
      "authors": [
        "Shubham Toshniwal",
        "Wei Du",
        "Ivan Moshkov",
        "Branislav Kisacanin",
        "Alexan Ayrapetyan",
        "Igor Gitman"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "sft",
        "distillation",
        "evaluation"
      ],
      "domains": [
        "math",
        "synthetic-data",
        "instruction-tuning"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "instruction-tuning",
        "math",
        "seeded-from-bib",
        "synthetic-data"
      ],
      "one_line_summary": "OpenMathInstruct-2 releases 14M math instruction-tuning problem-solution pairs generated with an open synthesis pipeline.",
      "why_it_matters": "It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.",
      "data_object": "problem-solution pair with natural-language mathematical reasoning and final answer.; process: source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.; NVIDIA NeMo-Skills generation, training, and evaluation pipeline.",
      "feedback_verifier": "answer checks and benchmark evaluation over math tasks.",
      "audit_focus": "Synthetic solutions can encode teacher shortcuts., Large scale can hide duplicated or near-duplicated questions., Verbose traces may hurt rather than help SFT.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.01560",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.01560",
        "openreview": "https://openreview.net/forum?id=mTCbq2QssD",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/NVIDIA-NeMo/Skills",
        "data": "https://huggingface.co/datasets/nvidia/OpenMathInstruct-2",
        "huggingface": "https://huggingface.co/datasets/nvidia/OpenMathInstruct-2",
        "project": "https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.01560"
    },
    {
      "id": "osworld-benchmarking-multimodal-agents-for-open-ended-tasks-in-real-computer-env-2024",
      "title": "OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "computer_use",
        "agents",
        "multimodal"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.",
      "why_it_matters": "Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.",
      "data_object": "GUI/OS action trajectory; process: observation, action, environment state; desktop operating-system environment",
      "feedback_verifier": "task completion evaluator",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2404.07972",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2404.07972",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2404.07972"
    },
    {
      "id": "overoptimization-in-direct-alignment-algorithms-2024",
      "title": "Overoptimization in direct alignment algorithms",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 RLHF / reward-model surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "paperqa2-language-agents-achieve-superhuman-synthesis-of-scientific-knowledge-2024",
      "title": "PaperQA2 / Language agents achieve superhuman synthesis of scientific knowledge",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024",
      "title": "Prometheus 2: An open source language model specialized in evaluating other language models",
      "year": 2024,
      "venue": "EMNLP",
      "authors": [
        "Seungone Kim",
        "Juyoung Suk",
        "Shayne Longpre",
        "Bill Yuchen Lin",
        "Jamin Shin",
        "Sean Welleck",
        "Graham Neubig",
        "Moontae Lee",
        "Kyungjae Lee",
        "Minjoon Seo"
      ],
      "source_role": [
        "verifier_reward",
        "model_report",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning",
        "evaluation",
        "audit"
      ],
      "domains": [
        "llm-as-judge",
        "rubrics",
        "evaluation-models"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "evaluation-models",
        "llm-as-judge",
        "rubrics",
        "seeded-from-bib"
      ],
      "one_line_summary": "Prometheus 2 is an open evaluator model for both direct assessment and pairwise ranking under user-defined criteria.",
      "why_it_matters": "It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.",
      "data_object": "rubric-conditioned scalar score, critique, or pairwise preference output.; process: instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.; open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.",
      "feedback_verifier": "Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.",
      "audit_focus": "Open judges can inherit rubric bias., Agreement with another judge is not the same as correctness., Pairwise and scalar formats can disagree.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.01535",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.01535",
        "openreview": null,
        "acl": "https://aclanthology.org/2024.emnlp-main.248/",
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.18653/v1/2024.emnlp-main.248",
        "code": "https://github.com/prometheus-eval/prometheus-eval",
        "data": "https://aclanthology.org/2024.emnlp-main.248.data.zip",
        "huggingface": "https://huggingface.co/prometheus-eval/prometheus-7b-v2.0",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.01535"
    },
    {
      "id": "qwen2-5-math-technical-report-toward-mathematical-expert-model-via-self-improvem-2024",
      "title": "Qwen2.5-Math technical report: Toward mathematical expert model via self-improvement",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Qwen Team"
      ],
      "source_role": [
        "model_report",
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
        "reward_modeling",
        "rlvr",
        "evaluation",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "tool-integrated-reasoning",
        "reward-modeling"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🔁 Self-training / STaR",
      "tags": [
        "math",
        "reward-modeling",
        "seeded-from-bib",
        "tool-integrated-reasoning"
      ],
      "one_line_summary": "Qwen2.5-Math reports a math-specialized model family supporting chain-style and tool-integrated reasoning with base, instruct, and reward-model variants.",
      "why_it_matters": "It is a useful model-report case where math post-training data, reward models, tool-integrated reasoning, and multilingual math evaluation are tied together.",
      "data_object": "math solution, final answer, optional tool/code execution trace, and reward-model score.; process: model stage, problem source, reasoning mode, tool use, answer, reward score, benchmark result.; Qwen math model family, GitHub evaluation scripts, and Hugging Face model releases.",
      "feedback_verifier": "math answer checks, reward model signals, and benchmark evaluations.",
      "audit_focus": "Tool-integrated results are not comparable to no-tool results., Reward models can favor format over proof validity., Model-family reports can blur data and inference effects.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2409.12122",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2409.12122",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/QwenLM/Qwen2.5-Math",
        "data": null,
        "huggingface": "https://huggingface.co/Qwen/Qwen2.5-Math-7B",
        "project": "https://qwenlm.github.io/blog/qwen2.5-math/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2409.12122"
    },
    {
      "id": "r-tuning-2024",
      "title": "R-Tuning",
      "year": 2024,
      "venue": "NAACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "raft-adapting-language-model-to-domain-specific-rag-2024",
      "title": "RAFT: Adapting language model to domain-specific RAG",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "rest-mcts-2024",
      "title": "ReST-MCTS*",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
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
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib",
        "primary-link-checked"
      ],
      "one_line_summary": "Process-reward-guided tree search recipe for self-training reasoning traces.",
      "why_it_matters": "It shows how a process reward can guide search-generated trajectories, so readers can separate data generation, verifier choice, and inference-budget effects.",
      "data_object": "reasoning trajectory with intermediate search states; process: node state, rollout candidate, process reward score; MCTS-style reasoning tree",
      "feedback_verifier": "process reward guided tree search",
      "audit_focus": "search policy may overfit process reward artifacts, accepted traces can hide rejected rollout distribution, inference budget may be conflated with data quality",
      "curation_level": "L1_link_verified",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.03816"
    },
    {
      "id": "rewardbench-evaluating-reward-models-for-language-modeling-2024",
      "title": "RewardBench: Evaluating Reward Models for Language Modeling",
      "year": 2024,
      "venue": "NeurIPS",
      "authors": [
        "Nathan Lambert",
        "Valentina Pyatkin",
        "Jacob Morrison",
        "LJ Miranda",
        "Bill Yuchen Lin",
        "Khyathi Chandu",
        "Nouha Dziri",
        "Sachin Kumar",
        "Tom Zick",
        "Yejin Choi",
        "Noah A. Smith",
        "Hannaneh Hajishirzi"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "chat",
        "reasoning",
        "safety",
        "reward-model-benchmark"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "rewardbench",
        "reward-model-benchmark",
        "curated-card"
      ],
      "one_line_summary": "RewardBench evaluates reward models on prompt/chosen/rejected trios spanning chat, reasoning, and safety, including structured preference failures.",
      "why_it_matters": "It helps readers test whether a reward signal generalizes beyond helpfulness style into subtle factual, reasoning, refusal, and safety preferences.",
      "data_object": "prompt with chosen and rejected completion, scored by reward model accuracy.; process: prompt, chosen, rejected; offline reward-model benchmark and leaderboard",
      "feedback_verifier": "reward model assigns scalar scores to chosen and rejected completions",
      "audit_focus": "Aggregate accuracy can hide subset-specific failures., Leaderboard exposure can create benchmark overfitting., Pairwise labels may encode hidden style or value preferences.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2403.13787",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2403.13787",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2403.13787",
        "code": "https://github.com/allenai/reward-bench",
        "data": "https://huggingface.co/datasets/allenai/reward-bench",
        "huggingface": "https://huggingface.co/datasets/allenai/reward-bench",
        "project": "https://huggingface.co/spaces/allenai/reward-bench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2403.13787"
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
        "verifier_reward",
        "process_supervision",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward",
        "scalar_reward"
      ],
      "training_use": [
        "process_supervision",
        "reward_modeling",
        "rlvr",
        "test_time_compute"
      ],
      "domains": [
        "process-reward-models",
        "rlvr",
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "math",
        "process-reward-models",
        "rlvr"
      ],
      "one_line_summary": "Rewarding Progress proposes Process Advantage Verifiers that score whether a reasoning step increases future correctness probability.",
      "why_it_matters": "It gives process supervision a concrete reward target beyond dense labels: progress under a prover policy.",
      "data_object": "problem, partial trace before step, proposed step, future success estimate, process advantage score, and final correctness signal.; process: problem, partial trace, step; reasoning search and online RL setup using process rewards.",
      "feedback_verifier": "Process Advantage Verifier trained to predict progress toward correct answer.",
      "audit_focus": "Progress estimates can be policy-specific., Verifier-guided search can exploit reward artifacts., Step rewards can encourage short-term progress that hurts final correctness.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.08146",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.08146",
        "openreview": "https://openreview.net/forum?id=A6Y7AqlzLW",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.08146",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.08146"
    },
    {
      "id": "scicode-a-benchmark-for-scientific-code-generation-and-reasoning-2024",
      "title": "SciCode: A benchmark for scientific code generation and reasoning",
      "year": 2024,
      "venue": "NeurIPS Datasets and Benchmarks",
      "authors": [
        "Minyang Tian",
        "Luyu Gao",
        "Shizhuo Dylan Zhang",
        "Xinan Chen",
        "Cunwei Fan",
        "Xuefei Guo",
        "Roland Haas",
        "Pan Ji",
        "Kittithat Krongchon",
        "Yao Li",
        "Shengyan Liu",
        "Di Luo",
        "Yutao Ma",
        "Hao Tong",
        "Kha Trinh",
        "Chenyu Tian",
        "Zihan Wang",
        "Bohao Wu",
        "Yanyu Xiong",
        "Shengzhu Yin",
        "Minhui Zhu",
        "Kilian Lieret",
        "Yanxin Lu",
        "Genglin Liu",
        "Yufeng Du",
        "Tianhua Tao",
        "Ofir Press",
        "Jamie Callan",
        "Eliu Huerta",
        "Hao Peng"
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
        "answer_level",
        "step_level"
      ],
      "training_use": [
        "evaluation",
        "audit",
        "test_time_compute"
      ],
      "domains": [
        "scientific-code",
        "research-problems",
        "execution"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [
        "execution",
        "research-problems",
        "scientific-code",
        "seeded-from-bib"
      ],
      "one_line_summary": "SciCode evaluates code generation for realistic scientific research problems decomposed into subproblems with tests and gold solutions.",
      "why_it_matters": "It is a high-quality scientific-code benchmark where the data object links domain context, subproblem decomposition, code synthesis, and executable tests.",
      "data_object": "code solution evaluated with scientist-annotated tests or expected outputs.; process: domain, main problem, subproblem, background text, generated code, tests, gold solution, pass/fail.; scientific Python/code execution benchmark harness.",
      "feedback_verifier": "test cases and scientist-curated gold solutions.",
      "audit_focus": "Models can pass narrow tests without scientific validity., Domain background can leak solution hints., Execution environments can change numerical results.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.13168",
        "venue": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/36850592258c8c41cecdaa3dea5ff7de-Abstract-Datasets_and_Benchmarks_Track.html",
        "arxiv": "https://arxiv.org/abs/2407.13168",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/scicode-bench/SciCode",
        "data": null,
        "huggingface": null,
        "project": "https://scicode-bench.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.13168"
    },
    {
      "id": "self-rewarding-lms-2024",
      "title": "Self-Rewarding Language Models",
      "year": 2024,
      "venue": "ICML 2024",
      "authors": [
        "Weizhe Yuan",
        "Richard Yuanzhe Pang",
        "Kyunghyun Cho",
        "Xian Li",
        "Sainbayar Sukhbaatar",
        "Jing Xu",
        "Jason Weston"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward",
        "process_reward"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "ai-feedback",
        "rlaif",
        "synthetic-feedback",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤖 RLAIF / synthetic feedback",
      "tags": [
        "self-rewarding",
        "rlaif",
        "synthetic-feedback"
      ],
      "one_line_summary": "Self-Rewarding Language Models uses a model's own LLM-as-a-judge feedback to create preference data for iterative DPO.",
      "why_it_matters": "It is a central RLAIF/synthetic-feedback recipe showing how reward labels can be generated by the same model family being optimized.",
      "data_object": "instruction prompt, candidate responses, self-generated score out of 5 with justification, chosen/rejected preference pair, and iteration id.; process: prompt, candidate response, self judgment; offline iterative self-feedback alignment pipeline.",
      "feedback_verifier": "the policy model itself acts as LLM-as-a-judge to provide rewards.",
      "audit_focus": "Self-confirming reward loops can amplify model bias., The judge and policy share blind spots., Self-judgment can reward response style instead of substantive correctness.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2401.10020",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2401.10020",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2401.10020",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2401.10020"
    },
    {
      "id": "meta-rewarding-language-models-self-improving-alignment-with-llm-as-a-meta-judge-2024",
      "title": "Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Tianhao Wu",
        "Weizhe Yuan",
        "Olga Golovneva",
        "Jing Xu",
        "Yuandong Tian",
        "Jiantao Jiao",
        "Jason Weston",
        "Sainbayar Sukhbaatar"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "process_reward",
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning",
        "evaluation"
      ],
      "domains": [
        "ai-feedback",
        "rlaif",
        "synthetic-feedback",
        "llm-as-judge",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤖 RLAIF / synthetic feedback",
      "tags": [
        "meta-rewarding",
        "llm-as-a-meta-judge",
        "synthetic-feedback"
      ],
      "one_line_summary": "Meta-Rewarding adds an LLM-as-a-meta-judge step so a model can generate feedback about its own judgments during self-improving alignment.",
      "why_it_matters": "It makes judge quality itself part of the feedback loop, which is important for auditing recursive synthetic reward data.",
      "data_object": "prompt, sampled responses, judge outputs with chain-of-thought and score, meta-judge comparison over judgments, actor preference pair, judge preference pair, and iteration id.; process: prompt, candidate response, judge output; iterative self-improvement pipeline for both response generation and judging ability.",
      "feedback_verifier": "LLM-as-a-meta-judge signal over the model's own judgments.",
      "audit_focus": "Meta-judge and base judge can share the same blind spots., Recursive self-judgment can amplify evaluation artifacts., Meta-judge develops score and positional biases during training.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.19594",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.19594",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2407.19594",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.19594"
    },
    {
      "id": "process-based-self-rewarding-language-models-2025",
      "title": "Process-based Self-Rewarding Language Models",
      "year": 2025,
      "venue": "ACL Findings 2025",
      "authors": [
        "Shimao Zhang",
        "Xiao Liu",
        "Xin Zhang",
        "Junxiao Liu",
        "Zheheng Luo",
        "Shujian Huang",
        "Yeyun Gong"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "preference_learning",
        "process_supervision"
      ],
      "domains": [
        "ai-feedback",
        "rlaif",
        "synthetic-feedback",
        "mathematical-reasoning",
        "process-supervision"
      ],
      "category": [
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤖 RLAIF / synthetic feedback",
      "tags": [
        "process-based-self-rewarding",
        "step-wise-feedback",
        "synthetic-feedback"
      ],
      "one_line_summary": "Process-based Self-Rewarding uses long-thought traces, step-wise LLM-as-a-judge feedback, and step-wise preference optimization for mathematical reasoning.",
      "why_it_matters": "It connects Preference & Reward Feedback Data with process supervision by making self-generated step judgments part of the reward object.",
      "data_object": "math problem, long-thought trace, segmented reasoning step, candidate next steps, chosen/rejected step pair, step-wise judge explanation, and final answer.; process: problem, long thought trace, previous steps; iterative process-based self-rewarding pipeline for mathematical reasoning.",
      "feedback_verifier": "step-wise LLM-as-a-judge self-reward with pairwise comparison over candidate reasoning steps.",
      "audit_focus": "Step-wise judges may reward surface reasoning style instead of valid reasoning., Long-thought traces can contain plausible but incorrect intermediate steps., Self-generated process rewards can amplify the model's own reasoning blind spots.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.03746",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.03746",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2503.03746",
        "code": "https://github.com/Shimao-Zhang/Process-Self-Rewarding",
        "data": "https://github.com/Shimao-Zhang/Process-Self-Rewarding/tree/master/data",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.03746"
    },
    {
      "id": "spin-self-play-fine-tuning-converts-weak-language-models-to-strong-language-mode-2024",
      "title": "SPIN: Self-play fine-tuning converts weak language models to strong language models",
      "year": 2024,
      "venue": "ICML",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "swe-gym-advancing-software-engineering-agents-with-training-and-evaluation-envir-2024",
      "title": "SWE-Gym: Advancing software engineering agents with training and evaluation environments",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "swe-search-2024",
      "title": "SWE-Search",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "tau-bench-a-benchmark-for-tool-agent-user-interaction-in-real-world-domains-2024",
      "title": "tau-bench: A benchmark for tool-agent-user interaction in real-world domains",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "the-llama-3-herd-of-models-2024",
      "title": "The Llama 3 Herd of models",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧠 Magistral / Phi / Nemotron style reports",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "toolace-winning-the-points-of-llm-function-calling-2024",
      "title": "ToolACE: Winning the points of LLM function calling",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "toolllm-facilitating-large-language-models-to-master-16000-real-world-apis-2024",
      "title": "ToolLLM: Facilitating large language models to master 16000+ real-world APIs",
      "year": 2023,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "data_release",
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "state_action_level"
      ],
      "training_use": [
        "sft",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "tools",
        "apis",
        "agents"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.",
      "why_it_matters": "Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.",
      "data_object": "tool-call trajectory plus final response; process: API call, arguments, tool response; real-world API/tool catalog",
      "feedback_verifier": "tool response validity and task success checks",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2307.16789",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2307.16789",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2307.16789"
    },
    {
      "id": "toolsandbox-a-stateful-conversational-interactive-evaluation-benchmark-for-tool--2024",
      "title": "ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "tulu-3-pushing-frontiers-in-open-language-model-post-training-2024",
      "title": "Tulu 3: Pushing frontiers in open language model post-training",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Nathan Lambert",
        "Jacob Morrison",
        "Valentina Pyatkin",
        "Shengyi Huang",
        "Hamish Ivison",
        "Faeze Brahman",
        "Lester James V. Miranda",
        "Alisa Liu",
        "Nouha Dziri",
        "Shane Lyu",
        "Yuling Gu",
        "Saumya Malik",
        "Victoria Graf",
        "Jena D. Hwang",
        "Jiangjiang Yang",
        "Ronan Le Bras",
        "Oyvind Tafjord",
        "Chris Wilhelm",
        "Luca Soldaini",
        "Noah A. Smith",
        "Yizhong Wang",
        "Pradeep Dasigi",
        "Hannaneh Hajishirzi"
      ],
      "source_role": [
        "model_report",
        "construction_recipe",
        "data_release"
      ],
      "verification_contract": [
        "mixed",
        "programmatic",
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "sft",
        "preference_learning",
        "reward_modeling",
        "rlvr",
        "evaluation"
      ],
      "domains": [
        "post-training",
        "preference-data",
        "reward-modeling",
        "instruction-tuning",
        "rlvr",
        "open-data"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "Tulu-3",
        "open-instruct",
        "post-training",
        "preference-data",
        "reward-modeling",
        "instruction-tuning",
        "rlvr",
        "open-data"
      ],
      "one_line_summary": "Tulu 3 releases an open post-training stack with SFT data, preference data, RLVR recipes, code, models, and evaluation guidance.",
      "why_it_matters": "It is one of the clearest open references for modern post-training pipelines because it exposes data mixtures, objectives, decontamination, evaluation, and training infrastructure together.",
      "data_object": "instruction-response examples, preference pairs, verifiable task outputs, and model-evaluation records.; process: dataset shard, objective stage, prompt; open-instruct training/evaluation stack and Hugging Face dataset/model releases.",
      "feedback_verifier": "mixture of preference labels, reward models, and verifiable rewards depending on stage.",
      "audit_focus": "Full-stack releases can obscure which component caused a gain., Evaluation suites can leak into data curation loops., Preference labels, reward models, and verifiable rewards should not be collapsed into one feedback type.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2411.15124",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2411.15124",
        "openreview": "https://openreview.net/forum?id=i1uGbfHHpH",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/allenai/open-instruct",
        "data": "https://huggingface.co/collections/allenai/tulu-3-datasets",
        "huggingface": "https://huggingface.co/collections/allenai/tulu-3-datasets",
        "project": "https://allenai.org/blog/tulu-3-technical",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2411.15124"
    },
    {
      "id": "visualwebarena-evaluating-multimodal-agents-on-realistic-visual-web-tasks-2024",
      "title": "VisualWebArena: Evaluating multimodal agents on realistic visual web tasks",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "web",
        "vision",
        "agents"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.",
      "why_it_matters": "Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.",
      "data_object": "visual web tasks with screenshots and browser state",
      "feedback_verifier": "task success checks",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "partial",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "weblinx-real-world-website-navigation-with-multi-turn-dialogue-2024",
      "title": "WebLINX: Real-world website navigation with multi-turn dialogue",
      "year": 2024,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🌍 Web/browser agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "wildguard-2024",
      "title": "WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs",
      "year": 2024,
      "venue": "NeurIPS 2024 Datasets & Benchmarks",
      "authors": [
        "Seungju Han",
        "Kavel Rao",
        "Allyson Ettinger",
        "Liwei Jiang",
        "Bill Yuchen Lin",
        "Nathan Lambert",
        "Yejin Choi",
        "Nouha Dziri"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "benchmark"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "safety_alignment",
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "safety",
        "moderation",
        "jailbreak",
        "refusal-detection",
        "guardrails"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🎚️ Scalar reward / ORM data",
      "tags": [
        "wildguard",
        "safety-moderation",
        "refusal-detection"
      ],
      "one_line_summary": "WildGuard releases a safety moderation dataset and model for prompt harmfulness, response harmfulness, jailbreaks, and refusal detection.",
      "why_it_matters": "It turns safety moderation into a feedback-bearing data object with explicit harm/refusal labels useful for guardrail training and reward-model auditing.",
      "data_object": "prompt or prompt-response item with prompt harmfulness, response harmfulness, response refusal/compliance, adversarial flag, and risk subcategory.; process: prompt, adversarial, response; offline safety moderation and guardrail evaluation dataset.",
      "feedback_verifier": "WildGuard model and labels for prompt harmfulness, response harmfulness, and refusal detection.",
      "audit_focus": "Safety labels depend on policy choices and cultural context., Refusal detection can reward over-refusal if helpfulness is not tracked., Jailbreak distributions may age quickly as attacks change.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.18495",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.18495",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.18495",
        "code": "https://github.com/allenai/wildguard",
        "data": "https://huggingface.co/datasets/allenai/wildguardmix",
        "huggingface": "https://huggingface.co/allenai/wildguard",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.18495"
    },
    {
      "id": "workarena-how-capable-are-web-agents-at-solving-common-knowledge-work-tasks-2024",
      "title": "WorkArena: How capable are web agents at solving common knowledge work tasks?",
      "year": 2024,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🌍 Web/browser agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "xstest-2024",
      "title": "XSTest",
      "year": 2024,
      "venue": "NAACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "1-4-million-open-source-distilled-reasoning-dataset-to-empower-large-language-mo-2025",
      "title": "1.4 Million Open-Source Distilled Reasoning Dataset to Empower Large Language Model Training (AM-DeepSeek-R1-Distilled)",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2503.19633",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.19633",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.19633",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.19633"
    },
    {
      "id": "1-shot-rlvr-learning-reasoning-with-minimal-verifiable-data-2025",
      "title": "1-shot RLVR: Learning reasoning with minimal verifiable data",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🏋️ RLVR optimization scaling",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-repro-2025",
      "title": "A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility",
      "year": 2025,
      "venue": "Conference on Language Modeling (COLM)",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Audits reasoning-model progress claims by showing that benchmark results can be highly sensitive to decoding, seeds, prompt format, and environment details.",
      "why_it_matters": "It is an audit anchor for this atlas: reasoning-data claims need reproducible evaluation settings, not just headline benchmark gains.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.07086",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.07086",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.07086"
    },
    {
      "id": "a-survey-on-llm-mid-training-2025",
      "title": "A Survey on LLM Mid-Training",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.23081",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.23081",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.23081",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.23081"
    },
    {
      "id": "absolute-zero-reinforced-self-play-reasoning-with-zero-data-2025",
      "title": "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.03335",
      "authors": [],
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
        "rlvr",
        "evaluation"
      ],
      "domains": [
        "math",
        "code"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.",
      "why_it_matters": "Self-play RLVR recipe where the model proposes and solves tasks without external training data, using verifiable feedback to ground the loop.",
      "data_object": "generated task, solution, and verified answer; process: proposed task, solution, verifier result; code executor / verifiable task substrate",
      "feedback_verifier": "executor-backed verifiable reward",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.03335",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.03335",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.03335"
    },
    {
      "id": "abstentionbench-2025",
      "title": "AbstentionBench",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "safety_alignment"
      ],
      "domains": [
        "abstention",
        "factuality",
        "uncertainty"
      ],
      "category": [
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "AbstentionBench evaluates whether LLMs know when not to answer across unknown, underspecified, false-premise, subjective, and stale-information questions.",
      "why_it_matters": "It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.",
      "data_object": "model response, abstention decision, and correctness/abstention judgment.; process: scenario type, source dataset, answerability label, judge/validation metadata.; offline benchmark with model-evaluation harness.",
      "feedback_verifier": "human-validated judges and benchmark labels for abstention scenarios.",
      "audit_focus": "A model can game abstention by refusing too often., Benchmark labels around subjectivity and underspecification can be ambiguous., Prompt tuning may improve benchmark score without improving epistemic reasoning.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.09038",
        "venue": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html",
        "arxiv": "https://arxiv.org/abs/2506.09038",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/facebookresearch/AbstentionBench",
        "data": "https://huggingface.co/datasets/facebook/AbstentionBench",
        "huggingface": "https://huggingface.co/datasets/facebook/AbstentionBench",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.09038"
    },
    {
      "id": "abstentionbench-reasoning-llms-fail-on-unanswerable-questions-2025",
      "title": "AbstentionBench: Reasoning LLMs Fail on Unanswerable Questions",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.09038",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧠 Reasoning LLM surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.09038",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.09038",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.09038"
    },
    {
      "id": "acord-attorney-curated-open-research-dataset-2025",
      "title": "ACORD: Attorney-curated open research dataset",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "aegis2-0-a-diverse-ai-safety-dataset-and-risks-taxonomy-for-alignment-of-llm-gua-2025",
      "title": "Aegis2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails",
      "year": 2025,
      "venue": "NAACL",
      "authors": [
        "Shaona Ghosh",
        "Prasoon Varshney",
        "Makesh Narsimhan Sreedhar",
        "Aishwarya Padmakumar",
        "Traian Rebedea",
        "Jibin Rajan Varghese",
        "Christopher Parisien"
      ],
      "source_role": [
        "data_release",
        "benchmark",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "safety_alignment",
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "safety",
        "guardrails",
        "alignment",
        "content-safety"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "aegis",
        "safety-taxonomy",
        "guardrails"
      ],
      "one_line_summary": "Aegis2.0 releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.",
      "why_it_matters": "It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.",
      "data_object": "prompt or prompt-response sample with hazard taxonomy labels and safety annotations.; process: prompt, response, top level hazard category; offline guardrail training/evaluation dataset.",
      "feedback_verifier": "risk taxonomy labels, human annotations, multi-LLM jury judgments, and guard-model evaluation signal.",
      "audit_focus": "Safety taxonomy labels are policy- and culture-dependent., Human and multi-LLM jury labels can disagree, especially near policy boundaries., Guard models can overfit visible hazard categories and miss emerging harms.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.09004",
        "venue": "https://aclanthology.org/2025.naacl-long.306/",
        "arxiv": "https://arxiv.org/abs/2501.09004",
        "openreview": null,
        "acl": "https://aclanthology.org/2025.naacl-long.306/",
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.18653/v1/2025.naacl-long.306",
        "code": null,
        "data": "https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0",
        "huggingface": "https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.09004"
    },
    {
      "id": "alphaevolve-a-coding-agent-for-scientific-and-algorithmic-discovery-2025",
      "title": "AlphaEvolve: A coding agent for scientific and algorithmic discovery",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.13131",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.13131",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.13131",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.13131"
    },
    {
      "id": "am-thinking-v1-advancing-the-frontier-of-reasoning-at-32b-scale-2025",
      "title": "AM-Thinking-v1: Advancing the Frontier of Reasoning at 32B Scale",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.08311",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.08311",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.08311",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.08311"
    },
    {
      "id": "androidworld-a-dynamic-benchmarking-environment-for-autonomous-agents-2025",
      "title": "AndroidWorld: A dynamic benchmarking environment for autonomous agents",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "agent_training"
      ],
      "domains": [
        "mobile",
        "agents"
      ],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Android tasks turn mobile UI state and action histories into evaluable agent trajectories.",
      "why_it_matters": "Android tasks turn mobile UI state and action histories into evaluable agent trajectories.",
      "data_object": "Android action trajectory; process: screen observation, UI action, state transition; Android device/emulator environment",
      "feedback_verifier": "task-specific success evaluator",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.14573",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.14573",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.14573"
    },
    {
      "id": "beyond-correctness-harmonizing-process-and-outcome-rewards-through-rl-training-p-2025",
      "title": "Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2509.03403",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "process_trace_supervision_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.03403",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.03403",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.03403"
    },
    {
      "id": "big-math-2025",
      "title": "Big-Math-RL-Verified",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "benchmark"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "rlvr",
        "sft",
        "evaluation"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.",
      "why_it_matters": "Large-scale math release useful for studying answer verification, false negatives, and RLVR-ready filtering.",
      "data_object": "math problem, answer, and verification signal; process: problem, answer, verification label; offline math verifier substrate",
      "feedback_verifier": "answer-level math verifier",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.17387",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.17387",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.17387"
    },
    {
      "id": "big-math-a-large-scale-high-quality-math-dataset-for-reinforcement-learning-and--2025",
      "title": "Big-math: A large-scale, high-quality math dataset for reinforcement learning and supervised fine-tuning",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "chemllmbench-and-chemistry-reasoning-evaluations-for-language-models-2025",
      "title": "ChemLLMBench and chemistry reasoning evaluations for language models",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "clip-low-increases-entropy-and-clip-high-decreases-entropy-in-reinforcement-lear-2025",
      "title": "Clip-Low Increases Entropy and Clip-High Decreases Entropy in Reinforcement Learning of Large Language Models",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2509.26114",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.26114",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.26114",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.26114"
    },
    {
      "id": "cognitive-behaviors-that-enable-self-improving-reasoners-or-four-habits-of-highl-2025",
      "title": "Cognitive Behaviors that Enable Self-Improving Reasoners, or, Four Habits of Highly Effective STaRs",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2503.01307",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.01307",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.01307",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.01307"
    },
    {
      "id": "dapo-2025",
      "title": "DAPO",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
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
        "rlvr"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [],
      "one_line_summary": "GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.",
      "why_it_matters": "GRPO-lineage RLVR recipe where filtering changes what reaches the gradient.",
      "data_object": "answer level",
      "feedback_verifier": "programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.14476",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.14476",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.14476"
    },
    {
      "id": "dapo-an-open-source-llm-reinforcement-learning-system-at-scale-2025",
      "title": "DAPO: An open-source LLM reinforcement learning system at scale",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "deepmath-103k-2025",
      "title": "DeepMath-103K",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
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
        "rlvr",
        "evaluation"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "Math release highlighted for verifier pinning and decontamination.",
      "why_it_matters": "Math release highlighted for verifier pinning and decontamination.",
      "data_object": "answer level",
      "feedback_verifier": "programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.11456",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.11456",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.11456"
    },
    {
      "id": "deepmath-103k-a-large-scale-challenging-decontaminated-and-verifiable-mathematic-2025",
      "title": "DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2504.11456",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.11456",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.11456",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.11456"
    },
    {
      "id": "deepscaler-scaling-reinforcement-learning-for-reasoning-in-open-models-2025",
      "title": "DeepScaleR: Scaling reinforcement learning for reasoning in open models",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "deepseek-prover-v2-advancing-formal-mathematical-reasoning-via-reinforcement-lea-2025",
      "title": "DeepSeek-Prover-V2: Advancing formal mathematical reasoning via reinforcement learning",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Z. Z. Ren",
        "Zhihong Shao",
        "Junxiao Song",
        "Huajian Xin",
        "Haocheng Wang",
        "Wanjia Zhao",
        "Liyue Zhang",
        "Zhe Fu",
        "Qihao Zhu",
        "Dejian Yang",
        "Z. F. Wu",
        "Zhibin Gou",
        "Shirong Ma",
        "Hongxuan Tang",
        "Yuxuan Liu",
        "Wenjun Gao",
        "Daya Guo",
        "Chong Ruan"
      ],
      "source_role": [
        "model_report",
        "construction_recipe",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "environmental",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode",
        "scalar_reward"
      ],
      "training_use": [
        "rlvr",
        "sft",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "formal-math",
        "lean",
        "subgoal-decomposition"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "formal-math",
        "lean",
        "seeded-from-bib",
        "subgoal-decomposition"
      ],
      "one_line_summary": "DeepSeek-Prover-V2 uses recursive subgoal decomposition and RL to connect informal reasoning with formal Lean theorem proving.",
      "why_it_matters": "It is a frontier formal-reasoning stack where data includes subgoals, informal reasoning, synthesized formal proofs, and proof-assistant verification.",
      "data_object": "subgoal chain, informal reasoning trace, Lean proof, and checker result.; process: problem, subgoal decomposition, synthesized proof, Lean feedback, reward, benchmark result.; Lean 4 environment plus recursive theorem-proving pipeline.",
      "feedback_verifier": "Lean verification and RL reward over formal proof success.",
      "audit_focus": "Subgoal decomposition can introduce false intermediate claims., Formal and informal reasoning scores are not directly comparable., Large-model teacher lineage can hide data provenance.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.21801",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.21801",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/deepseek-ai/DeepSeek-Prover-V2",
        "data": "https://huggingface.co/datasets/deepseek-ai/DeepSeek-ProverBench",
        "huggingface": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B",
        "project": "https://github.com/deepseek-ai/DeepSeek-Prover-V2",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.21801"
    },
    {
      "id": "deepseek-r1-2025",
      "title": "DeepSeek-R1",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "distillation",
        "rlvr"
      ],
      "domains": [
        "math",
        "code",
        "reasoning"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "DeepSeek-R1 reports a reasoning-model post-training recipe centered on reinforcement learning with verifiable rewards, cold-start data, and distillation.",
      "why_it_matters": "It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.12948"
    },
    {
      "id": "deepseek-r1-incentivizing-reasoning-capability-in-llms-via-reinforcement-learnin-2025",
      "title": "DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "deepseek-v3-2-pushing-the-frontier-of-open-large-language-models-2025",
      "title": "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2512.02556",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2512.02556",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2512.02556",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2512.02556"
    },
    {
      "id": "distillation-scaling-laws-2025",
      "title": "Distillation Scaling Laws",
      "year": 2025,
      "venue": "Proceedings of the 42nd International Conference on Machine Learning (ICML)",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.08606",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.08606",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.08606"
    },
    {
      "id": "does-rl-really-incentivize-reasoning-beyond-base-2025",
      "title": "Does RL really incentivize reasoning beyond base?",
      "year": 2025,
      "venue": "NeurIPS Oral",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "does-supervised-fine-tuning-memorize-while-reinforcement-learning-generalizes-2025",
      "title": "Does supervised fine-tuning memorize while reinforcement learning generalizes?",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "faithbench-a-diverse-hallucination-benchmark-for-summarization-by-modern-llms-2025",
      "title": "FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2410.13210",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.13210",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.13210",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.13210"
    },
    {
      "id": "finder-financial-data-extraction-and-reasoning-2025",
      "title": "FinDER: Financial data extraction and reasoning",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🏦 Financial reasoning",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "from-accuracy-to-robustness-a-study-of-rule-and-model-based-verifiers-in-mathema-2025",
      "title": "From Accuracy to Robustness: A Study of Rule- and Model-based Verifiers in Mathematical Reasoning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.22203",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.22203",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.22203",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.22203"
    },
    {
      "id": "from-system-1-to-system-2-a-survey-of-reasoning-large-language-models-2025",
      "title": "From system 1 to system 2: A survey of reasoning large language models",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "🧠 Reasoning LLM surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "gaperon-a-peppered-english-french-generative-language-model-suite-2025",
      "title": "Gaperon: A Peppered English-French Generative Language Model Suite",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.25771",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.25771",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.25771",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.25771"
    },
    {
      "id": "general-reasoning-models-survey-and-perspectives-2025",
      "title": "General reasoning models: Survey and perspectives",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "goedel-prover-v2-scaling-formal-theorem-proving-with-scaffolded-data-synthesis-a-2025",
      "title": "Goedel-Prover-V2: Scaling Formal Theorem Proving with Scaffolded Data Synthesis and Self-Correction",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2508.03613",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2508.03613",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2508.03613",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2508.03613"
    },
    {
      "id": "grpo-is-secretly-a-process-reward-model-2025",
      "title": "GRPO is Secretly a Process Reward Model",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2509.21154",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.21154",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.21154",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.21154"
    },
    {
      "id": "healthbench-2025",
      "title": "HealthBench: Evaluating Large Language Models Towards Improved Human Health",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Rahul K. Arora",
        "Jason Wei",
        "Rebecca Soskin Hicks",
        "Preston Bowman",
        "Joaquin Quiñonero-Candela",
        "Foivos Tsimpourlas",
        "Michael Sharman",
        "Meghan Shah",
        "Andrea Vallone",
        "Alex Beutel",
        "Johannes Heidecke",
        "Karan Singhal"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling",
        "safety_alignment"
      ],
      "domains": [
        "health",
        "medical",
        "safety",
        "rubric-evaluation"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "healthbench",
        "medical-rubrics",
        "llm-as-judge"
      ],
      "one_line_summary": "HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and health-domain contexts.",
      "why_it_matters": "It is a high-stakes example of reward/verifier data where expert rubric design and grader calibration matter more than exact-match correctness.",
      "data_object": "conversation context, candidate response, physician-written rubric criteria, point weights, criterion-met labels, and aggregate score.; process: conversation, candidate response, rubric criterion; open-ended healthcare conversation evaluation benchmark.",
      "feedback_verifier": "physician-written rubrics graded by GPT-4.1 as a model-based grader.",
      "audit_focus": "High-stakes medical rubrics can miss rare but severe harms., Model-based grading must be calibrated against physician judgment., Aggregate scores can hide medically critical failure modes.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.08775",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.08775",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2505.08775",
        "code": "https://github.com/openai/simple-evals",
        "data": "https://github.com/openai/simple-evals",
        "huggingface": null,
        "project": "https://openai.com/index/healthbench/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.08775"
    },
    {
      "id": "humanity-s-last-exam-2025",
      "title": "Humanity's Last Exam",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "introducing-openai-o3-and-o4-mini-2025",
      "title": "Introducing OpenAI o3 and o4-mini",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧪 RLVR recipe reports",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "khatri-scaling-rl-2025",
      "title": "The Art of Scaling Reinforcement Learning Compute for LLMs",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "scaling_study",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward"
      ],
      "training_use": [
        "rlvr",
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "scaling",
        "rlvr"
      ],
      "category": [
        "preference_reward_feedback_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "The Art of Scaling RL Compute studies RL compute scaling with large ablations and separates asymptotic performance from compute efficiency.",
      "why_it_matters": "It gives atlas readers a framework for judging RL recipe claims: some choices move the ceiling, while others mostly change how cheaply the run reaches it.",
      "data_object": "training runs, reward outcomes, validation curves, and ablation results.; process: loss aggregation, normalization, curriculum, off-policy choice, compute budget, asymptote, efficiency.; large-scale RL training experiments.",
      "feedback_verifier": "compute-performance curves and recipe ablations.",
      "audit_focus": "Compute-heavy studies can be hard to reproduce., Best-practice recipes may depend on task/reward families., Scaling curves can encourage overconfidence if validation tasks are narrow.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.13786",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.13786",
        "openreview": "https://openreview.net/forum?id=FMjeC9Msws",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.13786"
    },
    {
      "id": "kimi-k1-5-2025",
      "title": "Kimi K1.5: Scaling Reinforcement Learning with LLMs",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "rlvr",
        "test_time_compute"
      ],
      "domains": [
        "math",
        "code",
        "long-context"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [],
      "one_line_summary": "Frontier report used for long-context RL and scaling discussion.",
      "why_it_matters": "Frontier report used for long-context RL and scaling discussion.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.12599",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.12599",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.12599"
    },
    {
      "id": "kimi-k2-open-agentic-intelligence-2025",
      "title": "Kimi K2: Open Agentic Intelligence",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2507.20534",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.20534",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.20534",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.20534"
    },
    {
      "id": "kodcode-a-diverse-challenging-and-verifiable-synthetic-dataset-for-coding-2025",
      "title": "KodCode: A Diverse, Challenging, and Verifiable Synthetic Dataset for Coding",
      "year": 2025,
      "venue": "ACL Findings",
      "authors": [],
      "source_role": [
        "data_release",
        "construction_recipe",
        "benchmark"
      ],
      "verification_contract": [
        "programmatic"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "rlvr",
        "evaluation"
      ],
      "domains": [
        "code"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🤖 Synthetic instruction data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.",
      "why_it_matters": "Synthetic coding dataset where problems, solutions, and tests form a verifiable training object for SFT and RLVR.",
      "data_object": "question-solution-test triplet; process: problem, solution, unit tests; code execution and unit-test substrate",
      "feedback_verifier": "test-based self-verification",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.02951",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.02951",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.02951"
    },
    {
      "id": "lastingbench-defend-benchmarks-against-knowledge-leakage-2025",
      "title": "LastingBench: Defend Benchmarks Against Knowledge Leakage",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.21614",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.21614",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.21614",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.21614"
    },
    {
      "id": "leaky-thoughts-2025",
      "title": "Leaky Thoughts",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "audit_failure",
        "benchmark"
      ],
      "verification_contract": [
        "judgment_required",
        "environmental"
      ],
      "supervision_granularity": [
        "step_level",
        "full_episode"
      ],
      "training_use": [
        "evaluation",
        "safety_alignment",
        "audit"
      ],
      "domains": [
        "privacy",
        "agent",
        "security"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧠 Chain-of-thought / rationale data",
      "tags": [],
      "one_line_summary": "Leaky Thoughts shows that reasoning traces from personal-agent settings can expose sensitive user data through prompt injection or accidental leakage.",
      "why_it_matters": "It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.",
      "data_object": "internal reasoning trace, final answer, and leakage/extraction outcome.; process: sensitive field, prompt-injection condition, reasoning length or budget, output leakage indicator.; personal-agent evaluation setting with hidden or internal reasoning traces.",
      "feedback_verifier": "extraction probes and agentic evaluations.",
      "audit_focus": "Hiding thoughts from users does not make them safe., Trace logging can create a new privacy dataset., Utility improvements from more reasoning may worsen leakage risk.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.15674",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.15674",
        "openreview": null,
        "acl": "https://aclanthology.org/2025.emnlp-main.1347/",
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/parameterlab/leaky_thoughts",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.15674"
    },
    {
      "id": "leaky-thoughts-large-reasoning-models-are-not-private-thinkers-2025",
      "title": "Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.15674",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.15674",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.15674",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.15674"
    },
    {
      "id": "limo-2025",
      "title": "LIMO: Less Is More for Reasoning",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [],
      "one_line_summary": "Small-set curation reference distinguishing elicitation from broad coverage.",
      "why_it_matters": "Small-set curation reference distinguishing elicitation from broad coverage.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.03387",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.03387",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.03387"
    },
    {
      "id": "llama-nemotron-2025",
      "title": "Llama-Nemotron: Efficient Reasoning Models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report",
        "data_release"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation",
        "rlvr"
      ],
      "domains": [
        "reasoning",
        "chat",
        "safety"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "Mixed post-training corpus reference for reasoning, chat, and safety partitions.",
      "why_it_matters": "Mixed post-training corpus reference for reasoning, chat, and safety partitions.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.00949",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.00949",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.00949"
    },
    {
      "id": "long-grounded-thoughts-2025",
      "title": "Long Grounded Thoughts",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2511.05705",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2511.05705",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2511.05705",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2511.05705"
    },
    {
      "id": "magistral-2025",
      "title": "Magistral",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "rlvr"
      ],
      "domains": [
        "math",
        "code"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [],
      "one_line_summary": "Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.",
      "why_it_matters": "Reasoning report illustrating reward-stack pinning and prompt-corpus cycling.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.10910",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.10910",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.10910"
    },
    {
      "id": "math-perturb-2025",
      "title": "MATH-Perturb",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "mcp-universe-tool-and-environment-infrastructure-for-agent-evaluation-and-traini-2025",
      "title": "MCP-Universe: Tool and environment infrastructure for agent evaluation and training",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "medreason-eliciting-factual-medical-reasoning-steps-in-llms-via-knowledge-graphs-2025",
      "title": "MedReason: Eliciting factual medical reasoning steps in LLMs via knowledge graphs",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🩺 Medical reasoning / health rubrics",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "megascience-a-benchmark-and-data-resource-for-scientific-reasoning-2025",
      "title": "MegaScience: A benchmark and data resource for scientific reasoning",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "mid-training-of-large-language-models-a-survey-2025",
      "title": "Mid-Training of Large Language Models: A Survey",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.06826",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.06826",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.06826",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.06826"
    },
    {
      "id": "min-k-2025",
      "title": "Min-K\\%++",
      "year": 2025,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 Verifier gaming",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "minimax-m1-scaling-test-time-compute-efficiently-with-lightning-attention-2025",
      "title": "MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.13585",
      "authors": [],
      "source_role": [
        "model_report",
        "scaling_study",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed",
        "programmatic",
        "environmental"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "rlvr",
        "test_time_compute",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "math",
        "code",
        "software_engineering",
        "agents"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.",
      "why_it_matters": "Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.",
      "data_object": "reasoning output, code/tool result, or agent task output; process: reasoning output, benchmark result, thinking budget; math, code, SWE, tool-use, and long-context evaluation surfaces",
      "feedback_verifier": "programmatic, environment, and benchmark feedback",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.13585",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.13585",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/MiniMax-AI/MiniMax-M1",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.13585"
    },
    {
      "id": "multi-agent-evolve-llm-self-improve-through-co-evolution-2025",
      "title": "Multi-Agent Evolve: LLM self-improve through co-evolution",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "naturalreasoning-reasoning-in-natural-language-with-large-scale-verifiable-data-2025",
      "title": "NaturalReasoning: Reasoning in the Wild with 2.8M Challenging Questions",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "distillation",
        "evaluation"
      ],
      "domains": [
        "stem",
        "economics",
        "social_science",
        "general_reasoning"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.",
      "why_it_matters": "Large-scale natural-language reasoning questions broaden post-training data beyond math/code while keeping a verifiability lens.",
      "data_object": "question with reference answer or reasoning target; process: question, reference answer, domain label; offline natural-language tasks",
      "feedback_verifier": "reference answers, reward models, or self-rewarding depending on split",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.13124",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.13124",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.13124"
    },
    {
      "id": "nemotron-math-reasoning-data-with-tool-integrated-reasoning-variants-2025",
      "title": "Nemotron-Math: Reasoning Data with Tool-Integrated Reasoning Variants",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2512.15489",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2512.15489",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2512.15489",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2512.15489"
    },
    {
      "id": "one-token-to-fool-2025",
      "title": "One Token to Fool LLM-as-a-Judge",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "audit_failure",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "judge"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "Verifier-attack paper showing trivial cue tokens can flip judge verdicts.",
      "why_it_matters": "Verifier-attack paper showing trivial cue tokens can flip judge verdicts.",
      "data_object": "scalar reward",
      "feedback_verifier": "judgment required",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.08794",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.08794",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.08794"
    },
    {
      "id": "online-rubrics-elicitation-from-pairwise-comparisons-2025",
      "title": "Online Rubrics Elicitation from Pairwise Comparisons",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.07284",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.07284",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.07284",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.07284"
    },
    {
      "id": "onlinerubrics-2025",
      "title": "OnlineRubrics",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "open-reasoner-zero-an-open-source-approach-to-rlvr-for-reasoning-2025",
      "title": "Open-Reasoner-Zero: An open-source approach to RLVR for reasoning",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "open-reasoner-zero-an-open-source-approach-to-scaling-up-reinforcement-learning--2025",
      "title": "Open-Reasoner-Zero: An Open Source Approach to Scaling Up Reinforcement Learning on the Base Model",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2503.24290",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.24290",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.24290",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.24290"
    },
    {
      "id": "opencodereasoning-2-scalable-code-reasoning-data-2025",
      "title": "OpenCodeReasoning-2: Scalable code reasoning data",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "opencodereasoning-code-reasoning-traces-at-scale-2025",
      "title": "OpenCodeReasoning: Code reasoning traces at scale",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "opencodereasoning-ii-a-simple-test-time-scaling-approach-via-self-critique-2025",
      "title": "OpenCodeReasoning-II: A Simple Test Time Scaling Approach via Self-Critique",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "construction_recipe",
        "scaling_study"
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
        "distillation",
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "code"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.",
      "why_it_matters": "Large code-reasoning release with question-solution-critique triples, connecting distillation data to test-time self-critique.",
      "data_object": "question-solution-critique triple; process: solution, critique, language/runtime label; coding benchmark / compiler substrate",
      "feedback_verifier": "tests and critique model signals",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.09075",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.09075",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.09075"
    },
    {
      "id": "openhands-2025",
      "title": "OpenHands: An Open Platform for AI Software Developers as Generalist Agents",
      "year": 2024,
      "venue": "ICLR",
      "authors": [],
      "source_role": [
        "infrastructure",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "mixed"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "software_engineering",
        "agents"
      ],
      "category": [
        "preference_reward_feedback_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.",
      "why_it_matters": "Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.",
      "data_object": "tool/action/observation trajectory; process: plan, shell command, file edit; sandboxed software-development runtime",
      "feedback_verifier": "task, test, or human-review outcome depending on benchmark",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.16741",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.16741",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/All-Hands-AI/OpenHands",
        "data": null,
        "huggingface": null,
        "project": "https://www.openhands.dev/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.16741"
    },
    {
      "id": "openmathreasoning-2025",
      "title": "OpenMathReasoning: A large-scale dataset of math reasoning traces",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
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
        "distillation",
        "rlvr"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [],
      "one_line_summary": "Large-scale math reasoning trace release for programmatic verification.",
      "why_it_matters": "Large-scale math reasoning trace release for programmatic verification.",
      "data_object": "answer level",
      "feedback_verifier": "programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.16891",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.16891",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.16891"
    },
    {
      "id": "openthoughts3-2025",
      "title": "OpenThoughts: Data recipes for reasoning models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "construction_recipe"
      ],
      "verification_contract": [
        "mixed"
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
        "code",
        "science"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "OpenThoughts studies open data recipes for reasoning models through large public reasoning datasets and many controlled pipeline experiments.",
      "why_it_matters": "It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.",
      "data_object": "reasoning traces and final answers; process: question, reasoning trace, answer; offline reasoning corpus",
      "feedback_verifier": "filters, benchmark feedback, and recipe ablations",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.04178",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.04178",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/open-thoughts/open-thoughts",
        "data": null,
        "huggingface": "https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.04178"
    },
    {
      "id": "phi-4-reasoning-2025",
      "title": "Phi-4-reasoning Technical Report",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "distillation",
        "sft"
      ],
      "domains": [
        "math",
        "code"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [],
      "one_line_summary": "Reasoning model report highlighting teacher distillation as trace writing.",
      "why_it_matters": "Reasoning model report highlighting teacher distillation as trace writing.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.21318",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.21318",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.21318"
    },
    {
      "id": "prime-process-reinforcement-through-implicit-rewards-2025",
      "title": "PRIME: Process reinforcement through implicit rewards",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
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
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib",
        "primary-link-checked"
      ],
      "one_line_summary": "Online process-reinforcement recipe that derives implicit process rewards from rollouts and outcome labels.",
      "why_it_matters": "It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.",
      "data_object": "rollout with implicit process reward signal; process: policy rollout, outcome label, implicit process reward; online RL training loop",
      "feedback_verifier": "implicit process rewards derived from outcome labels",
      "audit_focus": "implicit rewards can inherit outcome-verifier shortcuts, online reward updates may introduce reward hacking, benchmark improvements may conflate optimizer and reward-contract changes",
      "curation_level": "L2_artifact_verified",
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
        "doi": null,
        "code": "https://github.com/PRIME-RL/PRIME",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.01456"
    },
    {
      "id": "autopsv-automated-process-supervised-verifier-2024",
      "title": "AutoPSV: Automated Process-Supervised Verifier",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
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
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "Other related work",
      "tags": [
        "primary-link-checked"
      ],
      "one_line_summary": "Automated process-supervision recipe that derives step annotations from verifier confidence changes.",
      "why_it_matters": "It gives the PRM track a concrete automatic-labeling path between human step labels and rollout-value supervision.",
      "data_object": "step-level confidence-change annotations; process: reasoning step, verifier confidence, relative confidence change; offline reasoning traces",
      "feedback_verifier": "answer-trained verifier converted into process annotations",
      "audit_focus": "answer-level verifier confidence can mislabel intermediate steps, relative confidence changes may not identify causal first errors, commonsense and math tasks may require different error taxonomies",
      "curation_level": "L2_artifact_verified",
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
        "doi": null,
        "code": "https://github.com/rookie-joe/AutoPSV",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.16802"
    },
    {
      "id": "step-dpo-step-wise-preference-optimization-for-long-chain-reasoning-of-llms-2024",
      "title": "Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Xin Lai",
        "Zhuotao Tian",
        "Yukang Chen",
        "Senqiao Yang",
        "Xiangru Peng",
        "Jiaya Jia"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "reasoning",
        "math",
        "process-supervision"
      ],
      "category": [
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "process-supervision"
      ],
      "one_line_summary": "Step-DPO turns long-chain math reasoning into step-level preferred/rejected continuation pairs.",
      "why_it_matters": "It bridges Preference & Reward Feedback Data and Process / Trace Supervision Data by making the preference unit an intermediate reasoning step rather than a whole answer.",
      "data_object": "step-wise preferred/rejected reasoning continuations; process: problem, initial correct reasoning steps, preferred reasoning step; math long-chain reasoning",
      "feedback_verifier": "step-level preference signal over reasoning continuations",
      "audit_focus": "A locally preferred reasoning step may not guarantee final-answer correctness., Self-generated reasoning can preserve model-specific style and error patterns., Benchmark gains should not be treated as proof of preference-label quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.18629",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.18629",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.18629",
        "code": "https://github.com/dvlab-research/Step-DPO",
        "data": "https://github.com/dvlab-research/Step-DPO",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.18629"
    },
    {
      "id": "rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025",
      "title": "ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
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
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "primary-link-checked"
      ],
      "one_line_summary": "Retrieval-augmented reasoning recipe that uses trustworthy process rewards and explanations to collect step-level preference data.",
      "why_it_matters": "It broadens the PRM track from math-only step labels to retrieval-grounded reasoning where process scores, explanations, and search all affect the reusable data object.",
      "data_object": "step-level preference data with process scores and explanations; process: retrieval context, reasoning step, process reward score; RAG reasoning pipeline",
      "feedback_verifier": "process reward model plus process explanation model",
      "audit_focus": "PRM and explanation model may disagree, retrieval context can leak answer evidence unevenly, early-step PRM bias can distort search",
      "curation_level": "L2_artifact_verified",
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
        "doi": null,
        "code": "https://github.com/Jeryi-Sun/ReARTeR",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.07861"
    },
    {
      "id": "prmbench-a-fine-grained-and-challenging-benchmark-for-process-level-reward-model-2025",
      "title": "PRMBench: A fine-grained and challenging benchmark for process-level reward models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "process_supervision"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "step_level",
        "process_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling",
        "process_supervision"
      ],
      "domains": [
        "math",
        "reasoning"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.",
      "why_it_matters": "Fine-grained PRM benchmark for testing whether process reward models catch local reasoning mistakes rather than only final-answer failure.",
      "data_object": "step-level labels or scores; process: step, label, error type; offline reasoning traces",
      "feedback_verifier": "process-level reward model benchmark",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.03124",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.03124",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.03124"
    },
    {
      "id": "process-reward-models-for-code-reasoning-2025",
      "title": "Process reward models for code reasoning",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "processbench-identifying-process-errors-in-mathematical-reasoning-2025",
      "title": "ProcessBench: Identifying Process Errors in Mathematical Reasoning",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "benchmark",
        "process_supervision",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "programmatic"
      ],
      "supervision_granularity": [
        "step_level"
      ],
      "training_use": [
        "evaluation",
        "process_supervision",
        "reward_modeling"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.",
      "why_it_matters": "Benchmark centered on first-error/local-error detection, a core failure mode for process supervision and verifier training.",
      "data_object": "step labels or first-error markers; process: reasoning step, error marker, diagnostic label; offline math traces",
      "feedback_verifier": "process-error detector",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2412.06559",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2412.06559",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2412.06559"
    },
    {
      "id": "qwen2-5-math-prm-2025",
      "title": "Qwen2.5-Math-PRM",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "qwen3-2025",
      "title": "Qwen3 Technical Report",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "model_report"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "rlvr"
      ],
      "domains": [
        "math",
        "code",
        "general"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [],
      "one_line_summary": "Open model-family report useful for coordinated release-tick analysis.",
      "why_it_matters": "Open model-family report useful for coordinated release-tick analysis.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.09388",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.09388",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.09388"
    },
    {
      "id": "r-zero-self-evolving-reasoning-llm-from-zero-data-2025",
      "title": "R-Zero: Self-Evolving Reasoning LLM from Zero Data",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2508.05004",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2508.05004",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2508.05004",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2508.05004"
    },
    {
      "id": "r2e-gym-2025",
      "title": "R2E-Gym",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "agent_environment",
        "benchmark"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "software-engineering"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [],
      "one_line_summary": "Verifiable SWE environment for reasoning-to-edit tasks.",
      "why_it_matters": "Verifiable SWE environment for reasoning-to-edit tasks.",
      "data_object": "full episode; state action level",
      "feedback_verifier": "environmental, programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.07164",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.07164",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.07164"
    },
    {
      "id": "r2e-gym-procedural-training-environments-for-repository-level-code-agents-2025",
      "title": "R2E-Gym: Procedural training environments for repository-level code agents",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "r3-robust-rubric-agnostic-reward-models-2025",
      "title": "R3: Robust Rubric-Agnostic Reward Models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "David Anugraha",
        "Zilu Tang",
        "Lester James V. Miranda",
        "Hanyang Zhao",
        "Shou-Yi Hung",
        "Mohammad Rifqi Farhansyah",
        "Garry Kuwanto",
        "Derry Wijaya",
        "Genta Indra Winata"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference",
        "answer_level",
        "process_reward"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "rubric-reward",
        "llm-as-judge",
        "reward-modeling",
        "instruction-following",
        "reasoning",
        "factuality"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "r3",
        "rubric-agnostic-reward-model",
        "llm-as-judge"
      ],
      "one_line_summary": "R3 trains compact rubric-agnostic reward models on point-wise, pair-wise, and binary evaluation data with generated rubrics and explanation traces.",
      "why_it_matters": "It turns heterogeneous rubric-conditioned judgments into a compact reward-model data object whose reusable fields include rubric, score, and explanation rather than only a scalar label.",
      "data_object": "instruction, task description, input, response or response pair, evaluation rubric, score, and reasoning or explanation.; process: instruction, task description, input; offline rubric-conditioned reward-model training and evaluation pipeline.",
      "feedback_verifier": "R3 reward model produces interpretable reasoned score assignments across point-wise, pair-wise, and binary evaluation formats.",
      "audit_focus": "Explanation traces may rationalize a score after the fact., Rubric-agnostic training can still fail on unseen rubric wording or missing preference dimensions., Heterogeneous source labels can encode incompatible notions of quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.13388",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.13388",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2505.13388",
        "code": "https://github.com/rubricreward/r3",
        "data": "https://github.com/rubricreward/r3/tree/main/data",
        "huggingface": "https://huggingface.co/rubricreward/R3-Qwen3-14B-LoRA-4k",
        "project": "https://rubricreward.github.io",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.13388"
    },
    {
      "id": "rethinking-rubric-generation-for-improving-llm-judge-and-reward-modeling-for-open-ended-tasks-2026",
      "title": "Rethinking Rubric Generation for Improving LLM-as-a-Judge and Reward Modeling for Open-Ended Tasks",
      "year": 2026,
      "venue": "arXiv",
      "authors": [
        "William F. Shen",
        "Xinchi Qiu",
        "Chenxi Whitehouse",
        "Lisa Alazraki",
        "Shashwat Goel",
        "Francesco Barbieri",
        "Timon Willi",
        "Akhil Mathur",
        "Ilias Leontiadis"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "rubric-generation",
        "llm-as-judge",
        "reward-modeling",
        "open-ended-tasks",
        "non-verifiable-tasks"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "rrd",
        "rubric-generation",
        "llm-as-judge"
      ],
      "one_line_summary": "RRD studies recursive rubric generation and filtering to improve LLM judges and reward modeling for open-ended tasks.",
      "why_it_matters": "It treats rubric construction itself as a reward-data problem, separating rubric decomposition, filtering, weighting, and downstream reward use.",
      "data_object": "coarse rubric, decomposed fine-grained criteria, filtered rubric set, correlation-aware weights, judge decision, and reward signal.; process: prompt, candidate response, coarse rubric; rubric-generation and rubric-conditioned judge/reward-model evaluation pipeline for open-ended tasks.",
      "feedback_verifier": "recursively decomposed and filtered rubrics used to improve judge scoring and reward-model signals.",
      "audit_focus": "Generated rubrics can miss preference dimensions that humans use., Redundant or correlated criteria can distort scalar rewards., Rubric-conditioned RFT gains are not proof that the rubric data is complete or clean.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.05125",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.05125",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2602.05125",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.05125"
    },
    {
      "id": "reinforcement-learning-with-verifiable-rewards-implicitly-incentivizes-correct-r-2025",
      "title": "Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2506.14245",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.14245",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.14245",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.14245"
    },
    {
      "id": "retool-reinforcement-learning-for-strategic-tool-use-in-llms-2025",
      "title": "ReTool: Reinforcement Learning for Strategic Tool Use in LLMs",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2504.11536",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🛠️ Tool-use data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.11536",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.11536",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.11536"
    },
    {
      "id": "rstar-math-2025",
      "title": "rStar-Math",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "rstar2-agent-agentic-reasoning-technical-report-2025",
      "title": "rStar2-Agent: Agentic Reasoning Technical Report",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2508.20722",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2508.20722",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2508.20722",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2508.20722"
    },
    {
      "id": "rubrics-as-rewards-2025",
      "title": "Rubrics as rewards",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Rubric reward models",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "s1-2025",
      "title": "s1: Simple Test-Time Scaling",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "construction_recipe",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level"
      ],
      "training_use": [
        "sft",
        "test_time_compute"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [],
      "one_line_summary": "s1 curates a small s1K reasoning dataset and studies budget forcing as a simple way to scale test-time reasoning compute.",
      "why_it_matters": "It is a useful counterpoint to massive-data recipes: careful small-set curation plus inference-budget control can materially change reasoning performance.",
      "data_object": "answer level",
      "feedback_verifier": "mixed",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L5_audit_ready",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.19393"
    },
    {
      "id": "safechain-safety-of-language-models-with-long-chain-of-thought-reasoning-capabil-2025",
      "title": "SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2502.12025",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.12025",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.12025",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.12025"
    },
    {
      "id": "safety-through-reasoning-an-empirical-study-of-reasoning-guardrail-models-2025",
      "title": "Safety Through Reasoning: An Empirical Study of Reasoning Guardrail Models",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.20087",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🛡️ Safety reasoning data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.20087",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.20087",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.20087"
    },
    {
      "id": "scaling-behaviors-of-llm-reinforcement-learning-post-training-an-empirical-study-2025",
      "title": "Scaling Behaviors of LLM Reinforcement Learning Post-Training: An Empirical Study in Mathematical Reasoning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2509.25300",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧪 Verifier robustness and answer extraction",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.25300",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.25300",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.25300"
    },
    {
      "id": "search-time-data-contamination-2025",
      "title": "Search-Time Data Contamination",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2508.13180",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2508.13180",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2508.13180",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2508.13180"
    },
    {
      "id": "sky-t1-fully-open-reasoning-model-and-data-recipe-2025",
      "title": "Sky-T1: Fully open reasoning model and data recipe",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "🏗️ Open reasoning data releases",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "skywork-open-reasoner-1-technical-report-2025",
      "title": "Skywork Open Reasoner 1 Technical Report",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.22312",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.22312",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.22312",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.22312"
    },
    {
      "id": "spurious-rewards-2025",
      "title": "Spurious Rewards: Rethinking Training Signals in RLVR",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Rulin Shao",
        "Shuyue Stella Li",
        "Rui Xin",
        "Scott Geng",
        "Yiping Wang",
        "Sewoong Oh",
        "Simon Shaolei Du",
        "Nathan Lambert",
        "Sewon Min",
        "Ranjay Krishna",
        "Yulia Tsvetkov",
        "Hannaneh Hajishirzi",
        "Pang Wei Koh",
        "Luke Zettlemoyer"
      ],
      "source_role": [
        "audit_failure",
        "verifier_reward",
        "scaling_study"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "answer_level"
      ],
      "training_use": [
        "audit",
        "evaluation",
        "rlvr"
      ],
      "domains": [
        "math",
        "rlvr",
        "reward-hacking",
        "spurious-correlation"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "spurious-rewards",
        "rlvr",
        "reward-hacking"
      ],
      "one_line_summary": "Spurious Rewards shows that RLVR can improve math benchmark scores even under rewards with little or negative correctness signal.",
      "why_it_matters": "It warns that verifiable or scalar rewards can surface pretrained shortcuts rather than teach genuine reasoning.",
      "data_object": "problem, response or trace, reward type, verifier reward, model family, training step, and evaluation result.; process: problem, response, reward type; RLVR training with GRPO over math reasoning tasks.",
      "feedback_verifier": "ground-truth, random, format, incorrect-label, one-shot RL, majority-voting, or other spurious reward signals.",
      "audit_focus": "Reward increases can reflect shortcut exploitation rather than capability gains., Qwen2.5-Math code-reasoning priors may be amplified by spurious rewards., Results are model-family dependent and may not generalize.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.10947",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.10947",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2506.10947",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.10947"
    },
    {
      "id": "subliminal-learning-2025",
      "title": "Subliminal Learning",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "audit_failure",
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
        "distillation",
        "evaluation",
        "audit"
      ],
      "domains": [
        "synthetic-data",
        "lineage",
        "distillation"
      ],
      "category": [
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "✍️ Teacher trace generation",
      "tags": [],
      "one_line_summary": "Subliminal Learning shows that teacher models can transmit behavioral traits through semantically unrelated generated data, even after visible trait references are filtered.",
      "why_it_matters": "It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.",
      "data_object": "generated data plus downstream behavioral evaluation of the student.; process: teacher identity, student base model, visible filtering policy, hidden trait evaluation.; distillation and synthetic-data training pipeline.",
      "feedback_verifier": "trait probes after student training.",
      "audit_focus": "Data may look safe while carrying hidden traits., Lineage effects can be invisible from sample inspection., Distillation chains can propagate behavior across model generations.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.14805",
        "venue": "https://www.nature.com/articles/s41586-026-10319-8",
        "arxiv": "https://arxiv.org/abs/2507.14805",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/MinhxLe/subliminal-learning",
        "data": null,
        "huggingface": null,
        "project": "https://subliminal-learning.com/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.14805"
    },
    {
      "id": "subliminal-learning-language-models-transmit-behavioral-traits-via-hidden-signal-2025",
      "title": "Subliminal Learning: Language models transmit behavioral traits via hidden signals in data",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2507.14805",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧬 Hidden lineage / teacher leakage",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.14805",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.14805",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.14805"
    },
    {
      "id": "swe-gym-2025",
      "title": "SWE-Gym",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "data_release",
        "agent_environment"
      ],
      "verification_contract": [
        "environmental",
        "programmatic"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "software-engineering",
        "agent"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧰 Programmatic benchmarks",
      "tags": [],
      "one_line_summary": "Repository-scale training environment showing substrate as data.",
      "why_it_matters": "Repository-scale training environment showing substrate as data.",
      "data_object": "full episode; state action level",
      "feedback_verifier": "environmental, programmatic",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2412.21139",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2412.21139",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2412.21139"
    },
    {
      "id": "swe-rebench-an-automated-pipeline-for-task-collection-and-decontaminated-evaluat-2025",
      "title": "SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.20411",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.20411",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.20411",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.20411"
    },
    {
      "id": "swe-rl-advancing-language-agents-for-software-engineering-via-reinforcement-lear-2025",
      "title": "SWE-RL: Advancing language agents for software engineering via reinforcement learning",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "swe-rl-advancing-llm-reasoning-via-reinforcement-learning-on-open-software-evolu-2025",
      "title": "SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution",
      "year": 2025,
      "venue": "Advances in Neural Information Processing Systems (NeurIPS)",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "preference_reward_feedback_data",
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.18449",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.18449",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.18449"
    },
    {
      "id": "swe-smith-scaling-data-construction-for-software-engineering-agents-2025",
      "title": "SWE-smith: Scaling data construction for software engineering agents",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "tan-scaling-rl-2025",
      "title": "Scaling Behaviors of LLM Reinforcement Learning Post-Training",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "scaling_study",
        "construction_recipe"
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
        "evaluation"
      ],
      "domains": [
        "math",
        "scaling",
        "rlvr"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "Other related work",
      "tags": [],
      "one_line_summary": "This study measures how model size, data volume, and compute budget interact during RL post-training for mathematical reasoning.",
      "why_it_matters": "It helps turn RLVR from recipe folklore into a scaling problem: data reuse, optimization steps, and model size have different effects on learning efficiency and final performance.",
      "data_object": "problem, generated solution/answer, reward outcome, and training curve metrics.; process: model size, data volume, compute budget, optimization steps, reward signal, validation performance.; RL post-training experiments over math tasks.",
      "feedback_verifier": "answer-level reward for mathematical reasoning and scaling curves.",
      "audit_focus": "Math-only scaling can overstate transfer to open-ended reasoning., Repeated data reuse can improve metrics while increasing overfitting risk., Power-law fits can hide reward or benchmark artifacts.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.25300",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.25300",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.25300"
    },
    {
      "id": "the-agent-company-benchmarking-and-analyzing-agent-work-in-enterprise-like-envir-2025",
      "title": "The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "the-entropy-mechanism-of-reinforcement-learning-for-reasoning-language-models-2025",
      "title": "The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2505.22617",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.22617",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2505.22617",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.22617"
    },
    {
      "id": "the-invisible-leash-why-rlvr-may-or-may-not-escape-its-origin-2025",
      "title": "The Invisible Leash: Why RLVR May or May Not Escape Its Origin",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2507.14843",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🏋️ RLVR optimization scaling",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.14843",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.14843",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.14843"
    },
    {
      "id": "the-markovian-thinker-architecture-agnostic-linear-scaling-of-reasoning-2025",
      "title": "The Markovian Thinker: Architecture-Agnostic Linear Scaling of Reasoning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.06557",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.06557",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.06557",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.06557"
    },
    {
      "id": "toward-conversational-diagnostic-ai-the-amie-system-2025",
      "title": "Toward conversational diagnostic AI: The AMIE system",
      "year": 2025,
      "venue": "Nature",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧾 Factuality / grounding",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "towards-understanding-self-play-for-llm-reasoning-2025",
      "title": "Towards Understanding Self-play for LLM Reasoning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2510.27072",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "🔁 Self-play / self-improvement",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.27072",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.27072",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.27072"
    },
    {
      "id": "ttrl-test-time-reinforcement-learning-2025",
      "title": "TTRL: Test-Time Reinforcement Learning",
      "year": 2025,
      "venue": "arXiv preprint arXiv:2504.16084",
      "authors": [],
      "source_role": [
        "construction_recipe",
        "scaling_study",
        "verifier_reward"
      ],
      "verification_contract": [
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "answer_level"
      ],
      "training_use": [
        "rlvr",
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "reasoning",
        "unlabeled_data"
      ],
      "category": [
        "preference_reward_feedback_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked",
        "seeded-from-bib"
      ],
      "one_line_summary": "Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.",
      "why_it_matters": "Test-time reinforcement learning recipe that studies how unlabeled data and reward signals can adapt a model during inference-time training.",
      "data_object": "candidate response with reward/adaptation signal; process: unlabeled input, rollout, reward signal; test-time task distribution",
      "feedback_verifier": "task-specific or learned reward used during adaptation",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.16084",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.16084",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.16084"
    },
    {
      "id": "var-math-2025",
      "title": "VAR-MATH",
      "year": 2025,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "programmatically_verifiable_outcome_data"
      ],
      "subfield": "📐 Math answer-verifiable data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "why-we-no-longer-evaluate-on-swe-bench-verified-2025",
      "title": "Why we no longer evaluate on SWE-bench Verified",
      "year": 2025,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "xlam-a-family-of-large-action-models-to-empower-ai-agent-systems-2025",
      "title": "xLAM: A family of large action models to empower AI agent systems",
      "year": 2025,
      "venue": "NAACL",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🔁 Replayable trajectory data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "agent-world-scaling-real-world-environment-synthesis-for-evolving-general-agent--2026",
      "title": "Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2604.18292",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2604.18292",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2604.18292",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2604.18292"
    },
    {
      "id": "alternating-reinforcement-learning-for-rubric-based-reward-modeling-in-non-verifiable-llm-post-training-rubric-arm-2026",
      "title": "Alternating Reinforcement Learning for Rubric-Based Reward Modeling in Non-Verifiable LLM Post-Training (Rubric-ARM)",
      "year": 2026,
      "venue": "arXiv",
      "authors": [
        "Ran Xu",
        "Tianci Liu",
        "Zihan Dong",
        "Tony Yu",
        "Ilgee Hong",
        "Carl Yang",
        "Linjun Zhang",
        "Tao Zhao",
        "Haoyu Wang"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "rubric-reward",
        "llm-as-judge",
        "non-verifiable-tasks",
        "creative-writing",
        "open-ended-instruction-following"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "rubric-arm",
        "rubric-based-reward-modeling",
        "alternating-rl"
      ],
      "one_line_summary": "Rubric-ARM trains a rubric generator and rubric-conditioned judge with alternating reinforcement learning for non-verifiable preference feedback.",
      "why_it_matters": "It makes the generated rubric itself part of the reward-model data object, so reuse requires auditing rubric quality, judge correctness, and policy optimization together.",
      "data_object": "prompt, candidate response pair, generated rubric, rubric-conditioned reasoning chain, preference prediction, preference-correctness reward, and policy/reward update signal.; process: prompt, response a, response b; alternating reinforcement-learning setup for rubric generator and rubric-conditioned judge.",
      "feedback_verifier": "rubric-conditioned judge trained with preference-correctness and format rewards.",
      "audit_focus": "Generated rubrics can drift away from human preference dimensions., Alternating updates can create non-stationary reward targets and reward hacking., A format-valid judge trajectory is not necessarily a correct or useful feedback signal.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.01511",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.01511",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2602.01511",
        "code": null,
        "data": null,
        "huggingface": "https://huggingface.co/collections/OpenRubrics/rubricarm",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.01511"
    },
    {
      "id": "an-imperfect-verifier-is-good-enough-learning-with-noisy-rewards-2026",
      "title": "An Imperfect Verifier is Good Enough: Learning with Noisy Rewards",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2604.07666",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "process_trace_supervision_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2604.07666",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2604.07666",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2604.07666"
    },
    {
      "id": "autorubric-unifying-rubric-based-llm-evaluation-2026",
      "title": "Autorubric: Unifying Rubric-based LLM Evaluation",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2603.00077",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧑‍⚖️ Human/expert judgment",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2603.00077",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2603.00077",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2603.00077"
    },
    {
      "id": "bootstrapping-post-training-signals-for-open-ended-tasks-via-rubric-based-self-p-2026",
      "title": "Bootstrapping Post-training Signals for Open-ended Tasks via Rubric-based Self-play on Pre-training Text (POP)",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2604.20051",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "judgment_rubric_domain_expert_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2604.20051",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2604.20051",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2604.20051"
    },
    {
      "id": "coverrl-breaking-the-consensus-trap-in-label-free-reasoning-via-generator-verifi-2026",
      "title": "CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2603.17775",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "process_trace_supervision_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2603.17775",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2603.17775",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2603.17775"
    },
    {
      "id": "decoupling-kl-and-trajectories-a-unified-perspective-for-sft-dagger-offline-rl-a-2026",
      "title": "Decoupling KL and Trajectories: A Unified Perspective for SFT, DAgger, Offline RL, and OPD in LLM Distillation",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2605.16826",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "instruction_demonstration_rationale_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2605.16826",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2605.16826",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2605.16826"
    },
    {
      "id": "dual-consensus-escaping-from-spurious-majority-in-unsupervised-rlvr-via-two-stag-2026",
      "title": "Dual Consensus: Escaping from Spurious Majority in Unsupervised RLVR via Two-Stage Vote Mechanism",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2603.16223",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2603.16223",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2603.16223",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2603.16223"
    },
    {
      "id": "learning-beyond-teacher-generalized-on-policy-distillation-with-reward-extrapola-2026",
      "title": "Learning beyond Teacher: Generalized On-Policy Distillation with Reward Extrapolation (G-OPD)",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2602.12125",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "✍️ Teacher trace generation",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.12125",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.12125",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.12125"
    },
    {
      "id": "live-swe-agent-can-software-engineering-agents-self-evolve-on-the-fly-2026",
      "title": "Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2511.13646",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2511.13646",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2511.13646",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2511.13646"
    },
    {
      "id": "llms-gaming-verifiers-rlvr-can-lead-to-reward-hacking-2026",
      "title": "LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2604.15149",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "process_trace_supervision_data",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2604.15149",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2604.15149",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2604.15149"
    },
    {
      "id": "omni-rrm-advancing-omni-reward-modeling-via-automatic-rubric-grounded-preference-synthesis-2026",
      "title": "Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis",
      "year": 2026,
      "venue": "ECCV 2026",
      "authors": [
        "Zicheng Kong",
        "Dehua Ma",
        "Zhenbo Xu",
        "Alven Yang",
        "Yiwei Ru",
        "Haoran Wang",
        "Zixuan Zhou",
        "Fuqing Bie",
        "Liuyu Xiang",
        "Huijia Wu",
        "Jian Zhao",
        "Zhaofeng He"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference",
        "answer_level"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "rubric-reward",
        "omni-reward-modeling",
        "multimodal",
        "text",
        "image",
        "video",
        "audio"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "omni-rrm",
        "omni-reward-modeling",
        "multimodal-preference-data"
      ],
      "one_line_summary": "Omni-RRM constructs omni-modal rubric-grounded preference data and trains reward models across text, image, video, and audio.",
      "why_it_matters": "It extends preference/reward feedback beyond text-only responses and makes modality, rubric dimension, score, and justification part of the reusable reward-data object.",
      "data_object": "prompt, modality, candidate pair, raw preference candidate, rubric dimensions, scalar rubric scores, synthesized preference label, JSON justification, and reward score.; process: prompt, modality, candidate response a; omni-modal reward-model training pipeline over text, image, video, and audio inputs.",
      "feedback_verifier": "Omni-RRM reward model trained from automatically synthesized rubric-grounded preference data.",
      "audit_focus": "Synthetic rubric labels can inherit teacher-model bias across modalities., Perception errors in image, video, or audio inputs can be mistaken for preference errors., Strong/weak response generation can create artificial preference shortcuts.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.00846",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.00846",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2602.00846",
        "code": "https://anonymous.4open.science/r/Omni-RRM-CC08",
        "data": "https://anonymous.4open.science/r/Omni-RRM-CC08",
        "huggingface": null,
        "project": "https://tmfk418.github.io/Omni-RRM/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.00846"
    },
    {
      "id": "pass-k-t-re-examining-the-reasoning-boundary-for-agentic-rl-2026",
      "title": "pass@$(k,T)$: Re-examining the reasoning boundary for agentic RL",
      "year": 2026,
      "venue": "arXiv preprint",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "rollout_search_test_time_trace_data",
        "environment_agent_trajectory_data",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "🎲 Multiple rollouts / best-of-N",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "rewardbench-2-advancing-reward-model-evaluation-2025",
      "title": "RewardBench 2: Advancing Reward Model Evaluation",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Saumya Malik",
        "Valentina Pyatkin",
        "Sander Land",
        "Jacob Morrison",
        "Noah A. Smith",
        "Hannaneh Hajishirzi",
        "Nathan Lambert"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "reward-model-benchmark",
        "factuality",
        "instruction-following",
        "math",
        "safety",
        "calibration"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "rewardbench-2",
        "reward-model-benchmark",
        "best-of-4"
      ],
      "one_line_summary": "RewardBench 2 releases a multi-skill reward-model benchmark with one chosen and three rejected completions across factuality, instruction following, math, safety, focus, and ties.",
      "why_it_matters": "It upgrades reward-model evaluation from simple pairwise checks toward harder multi-candidate and domain-specific verifier contracts.",
      "data_object": "best-of-4 item with one chosen/correct completion and three rejected/incorrect completions.; process: id, prompt, chosen; offline reward-model benchmark and RewardBench evaluation harness",
      "feedback_verifier": "manual, programmatic, or LM-based verification depending on subset",
      "audit_focus": "Aggregate score can hide domain-specific reward-model failures., Accuracy-based benchmark correlation should not be treated as proof of downstream RLHF quality., Ties subset differs from ordinary chosen/rejected preference evaluation.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2506.01937",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2506.01937",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2506.01937",
        "code": "https://github.com/allenai/reward-bench",
        "data": "https://huggingface.co/datasets/allenai/reward-bench-2",
        "huggingface": "https://huggingface.co/datasets/allenai/reward-bench-2",
        "project": "https://huggingface.co/spaces/allenai/reward-bench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2506.01937"
    },
    {
      "id": "soft-contamination-means-benchmarks-test-shallow-generalization-2026",
      "title": "Soft Contamination Means Benchmarks Test Shallow Generalization",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2602.12413",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.12413",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.12413",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.12413"
    },
    {
      "id": "spurious-rewards-paradox-mechanistically-understanding-how-rlvr-activates-memori-2026",
      "title": "Spurious Rewards Paradox: Mechanistically Understanding How RLVR Activates Memorization Shortcuts in LLMs",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2601.11061",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🏋️ RLVR optimization scaling",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2601.11061",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2601.11061",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2601.11061"
    },
    {
      "id": "swe-master-unleashing-the-potential-of-software-engineering-agents-via-post-trai-2026",
      "title": "SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2602.03411",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "foundations_and_primers",
        "environment_agent_trajectory_data"
      ],
      "subfield": "Other related work",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "survey background",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2602.03411",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2602.03411",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2602.03411"
    },
    {
      "id": "terminal-bench-a-benchmark-and-task-environment-for-terminal-agents-2026",
      "title": "Terminal-Bench: A benchmark and task environment for terminal agents",
      "year": 2026,
      "venue": "unknown",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "environment_agent_trajectory_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧑‍💻 SWE/repository agents",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "needs_metadata",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
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
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "why-does-self-distillation-sometimes-degrade-the-reasoning-capability-of-llms-2026",
      "title": "Why Does Self-Distillation (Sometimes) Degrade the Reasoning Capability of LLMs?",
      "year": 2026,
      "venue": "arXiv preprint arXiv:2603.24472",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "unknown"
      ],
      "domains": [],
      "category": [
        "data_construction_open_release_recipes"
      ],
      "subfield": "🧱 Prompt sourcing",
      "tags": [
        "seeded-from-bib"
      ],
      "one_line_summary": "Official source is linked; detailed reasoning-data summary is still pending.",
      "why_it_matters": "Verified citation waypoint; add a paper-specific data-object, verifier, and audit note before promoting it as a core read.",
      "data_object": "metadata pending",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2603.24472",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2603.24472",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2603.24472"
    },
    {
      "id": "openr1-math-220k-2025",
      "title": "OpenR1-Math-220k",
      "year": 2025,
      "venue": "Hugging Face / GitHub",
      "authors": [],
      "source_role": [
        "data_release",
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
        "distillation",
        "rlvr"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.",
      "why_it_matters": "Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.",
      "data_object": "math problem with reasoning trace and final answer; process: problem, reasoning trace, answer; offline math corpus",
      "feedback_verifier": "math answer verifier / filtering pipeline",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "partial",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/huggingface/open-r1",
        "data": null,
        "huggingface": "https://huggingface.co/datasets/open-r1/OpenR1-Math-220k",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "omegaprm-automated-process-supervision-2024",
      "title": "OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
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
        "math"
      ],
      "category": [
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute"
      ],
      "subfield": "Other related work",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.",
      "why_it_matters": "Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.",
      "data_object": "process supervision annotations; process: partial reasoning prefix, first-error signal, positive/negative step examples; offline math search tree",
      "feedback_verifier": "automated process reward signal",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
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
        "doi": null,
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.06592"
    },
    {
      "id": "tinyv-2025",
      "title": "TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
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
      "id": "qwen3-coder-2025",
      "title": "Qwen3-Coder",
      "year": 2025,
      "venue": "GitHub / project report",
      "authors": [],
      "source_role": [
        "model_report",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "environmental",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "full_episode"
      ],
      "training_use": [
        "sft",
        "rlvr",
        "agent_training",
        "evaluation"
      ],
      "domains": [
        "code",
        "software_engineering",
        "agents"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "frontier_reports_data_disclosure_ledger"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "curated-card",
        "primary-link-checked"
      ],
      "one_line_summary": "Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.",
      "why_it_matters": "Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.",
      "data_object": "code solution, tool-call, or agent trajectory; process: code answer, tool call, execution result; code execution and agent task environments",
      "feedback_verifier": "unit tests, execution feedback, and agent task success signals",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L0_seeded",
      "status": "partial",
      "needs_search": true,
      "artifacts": {
        "paper": null,
        "venue": null,
        "arxiv": null,
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/QwenLM/Qwen3-Coder",
        "data": null,
        "huggingface": null,
        "project": "https://qwenlm.github.io/blog/qwen3-coder/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": null
    },
    {
      "id": "gsm8k-grade-school-math-2021",
      "title": "GSM8K: Grade School Math 8K",
      "year": 2021,
      "venue": "arXiv / OpenAI dataset",
      "authors": [
        "Karl Cobbe et al."
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
        "evaluation",
        "sft",
        "reward_modeling"
      ],
      "domains": [
        "math"
      ],
      "category": [
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧱 Instruction tuning / SFT data",
      "tags": [
        "gsm8k",
        "math",
        "benchmark",
        "verifier"
      ],
      "one_line_summary": "Canonical grade-school math benchmark with natural-language word problems, worked solutions, and final numeric answers.",
      "why_it_matters": "It remains a compact sanity check for answer-verifiable reasoning data, verifier reranking, SFT, and RLVR-style math training.",
      "data_object": "natural-language solution with final numeric answer; process: question, solution, final answer; offline math benchmark",
      "feedback_verifier": "answer extraction and arithmetic correctness checks",
      "audit_focus": "answer extraction errors, contamination through benchmark reuse",
      "curation_level": "L5_audit_ready",
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
        "huggingface": "https://huggingface.co/datasets/openai/gsm8k",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2110.14168"
    },
    {
      "id": "humaneval-code-generation-benchmark-2021",
      "title": "HumanEval: Hand-Written Evaluation Set",
      "year": 2021,
      "venue": "arXiv / OpenAI dataset",
      "authors": [
        "Mark Chen et al."
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
        "evaluation"
      ],
      "domains": [
        "code"
      ],
      "category": [
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "data_construction_open_release_recipes",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "💻 Code execution / unit-test data",
      "tags": [
        "humaneval",
        "code",
        "unit-tests",
        "benchmark"
      ],
      "one_line_summary": "HumanEval provides hand-written Python programming problems with unit tests for executable code-generation evaluation.",
      "why_it_matters": "It made unit-test execution a standard verifier for code reasoning, pass@k reporting, and later code-data filtering recipes.",
      "data_object": "Python function completion; process: prompt, canonical solution, unit tests; Python execution harness",
      "feedback_verifier": "unit tests",
      "audit_focus": "public benchmark contamination, unit-test coverage gaps",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2107.03374",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2107.03374",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/openai/human-eval",
        "data": "https://github.com/openai/human-eval",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2107.03374"
    },
    {
      "id": "reasoning-with-large-language-models-a-survey-2024",
      "title": "Reasoning with Large Language Models, a Survey",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "reasoning",
        "survey"
      ],
      "category": [
        "foundations_and_primers",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧠 Reasoning LLM surveys",
      "tags": [
        "survey",
        "reasoning-llms"
      ],
      "one_line_summary": "Surveys reasoning with large language models, giving newcomers a map of reasoning paradigms, tasks, and evaluation patterns.",
      "why_it_matters": "It fills the reasoning-LLM survey lane of the atlas so readers can separate model-centric reasoning work from data-object and verifier-centric papers.",
      "data_object": "survey taxonomy and literature map.; literature survey.",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.11511",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.11511",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.11511"
    },
    {
      "id": "a-survey-of-reinforcement-learning-from-human-feedback-2023",
      "title": "A Survey of Reinforcement Learning from Human Feedback",
      "year": 2023,
      "venue": "TMLR",
      "authors": [
        "Timo Kaufmann",
        "Paul Weng",
        "Viktor Bengs",
        "Eyke Hüllermeier"
      ],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning",
        "audit"
      ],
      "domains": [
        "rlhf",
        "reward-modeling",
        "alignment"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧪 RLHF / reward-model surveys",
      "tags": [
        "rlhf",
        "reward-model-survey",
        "human-feedback",
        "preference-learning"
      ],
      "one_line_summary": "Surveys RLHF as a feedback-to-reward-to-policy pipeline, giving readers the baseline vocabulary for human preference data and learned reward models.",
      "why_it_matters": "It fills the RLHF survey doorway by separating human preference feedback, reward modeling, and policy optimization before readers compare them with verifiable-reward reasoning data.",
      "data_object": "survey taxonomy over feedback collection, reward modeling, and policy optimization.; process: feedback source, preference format, reward model objective; RLHF pipelines spanning LLMs and broader RL settings.",
      "feedback_verifier": "learned reward model from human feedback.",
      "audit_focus": "Human feedback can be noisy, subjective, sparse, or expensive., Reward models can overfit annotator preferences and become exploitable objectives., LLM readers may overgeneralize broad RLHF lessons to verifiable-reasoning settings.",
      "curation_level": "L3_summary_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2312.14925",
        "venue": "https://openreview.net/forum?id=f7OkIurx4b",
        "arxiv": "https://arxiv.org/abs/2312.14925",
        "openreview": "https://openreview.net/forum?id=f7OkIurx4b",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2312.14925",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2312.14925"
    },
    {
      "id": "a-comprehensive-survey-of-reward-models-taxonomy-applications-challenges-and-future-2025",
      "title": "A Comprehensive Survey of Reward Models: Taxonomy, Applications, Challenges, and Future",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Jialun Zhong",
        "Wei Shen",
        "Yanzeng Li",
        "Songyang Gao",
        "Hua Lu",
        "Yicheng Chen",
        "Yang Zhang",
        "Wei Zhou",
        "Jinjie Gu",
        "Lei Zou"
      ],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "unknown",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "reward-modeling",
        "preference-data",
        "alignment",
        "post-training"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "process_trace_supervision_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "reward-model-survey",
        "reward-modeling",
        "rlhf",
        "preference-data"
      ],
      "one_line_summary": "Surveys reward models from preference collection through model training, use, evaluation benchmarks, and failure modes.",
      "why_it_matters": "It gives readers a reward-model-specific map, which is essential before comparing learned human-preference rewards with PRMs, rubric rewards, and programmatic RLVR verifiers.",
      "data_object": "taxonomy of reward-model data sources, objectives, applications, evaluations, and challenges.; process: preference source, reward model architecture, usage mode; LLM reward-model training and evaluation pipelines.",
      "feedback_verifier": "reward model as proxy objective for downstream post-training.",
      "audit_focus": "Reward models may encode annotator bias, style bias, or length preference., Proxy rewards can be overoptimized or attacked when used as training objectives., Benchmark scores can obscure whether the reward model is useful for reasoning data.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2504.12328",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2504.12328",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2504.12328",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": "https://github.com/JLZhong23/awesome-reward-models",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2504.12328"
    },
    {
      "id": "a-survey-on-human-preference-learning-for-large-language-models-2024",
      "title": "A Survey on Human Preference Learning for Large Language Models",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Ruili Jiang",
        "Kehai Chen",
        "Xuefeng Bai",
        "Zhixuan He",
        "Juntao Li",
        "Muyun Yang",
        "Tiejun Zhao",
        "Liqiang Nie",
        "Min Zhang"
      ],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward",
        "process_reward"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "human-preference",
        "preference-learning",
        "rlhf",
        "dpo",
        "rlaif",
        "alignment"
      ],
      "category": [
        "foundations_and_primers",
        "instruction_demonstration_rationale_data",
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "preference-learning",
        "human-preference",
        "rlhf",
        "dpo",
        "rlaif",
        "reward-modeling"
      ],
      "one_line_summary": "Reviews preference feedback sources, preference formats, modeling methods, usage objectives, and evaluation for LLM alignment.",
      "why_it_matters": "It gives Preference & Reward Feedback readers a taxonomy for human preference learning, but should not replace primary dataset, reward-model, or optimizer entries.",
      "data_object": "taxonomy of human preference learning data, preference models, preference usage, and aligned-model evaluation; process: preference source, feedback format, preference model; survey over preference-learning literature",
      "feedback_verifier": "literature-level comparison of human preference signals and preference-learning methods",
      "audit_focus": "Survey taxonomies can hide concrete data-object differences across RLHF, DPO, RLAIF, and reward-model work., Training use should not be overstated because this is not a new preference dataset., Readers still need paper-level artifact checks before reusing any cited data source.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.11191",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.11191",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.11191",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.11191"
    },
    {
      "id": "reinforcement-learning-for-llm-post-training-a-survey-2024",
      "title": "Reinforcement Learning for LLM Post-Training: A Survey",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Zhichao Wang",
        "Kiran Ramnath",
        "Bin Bi",
        "Shiva Kumar Pentyala",
        "Sougata Chaudhuri",
        "Shubham Mehrotra",
        "Zixu Zhu",
        "Xiang-Bo Mao",
        "Sitaram Asur",
        "Na Cheng"
      ],
      "source_role": [
        "survey_background",
        "scaling_study"
      ],
      "verification_contract": [
        "mixed",
        "programmatic"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "answer_level"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "post-training",
        "rlhf",
        "rlvr",
        "preference-learning"
      ],
      "category": [
        "foundations_and_primers",
        "preference_reward_feedback_data",
        "programmatically_verifiable_outcome_data",
        "rollout_search_test_time_trace_data",
        "training_usage_optimization_objectives",
        "scaling_rlvr_test_time_compute",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧭 Post-training surveys",
      "tags": [
        "rlhf",
        "rlvr",
        "reward-model-survey",
        "post-training",
        "policy-optimization"
      ],
      "one_line_summary": "This survey unifies RLHF, DPO, PPO/GRPO, and RLVR as LLM post-training methods.",
      "why_it_matters": "It helps distinguish human preference rewards, AI feedback, verifiable rewards, and direct preference objectives.",
      "data_object": "literature-level comparison of prompts, responses, reward sources, objectives, and optimizer families.; process: prompt sampling, response sampling, reward source; LLM post-training algorithms and reasoning tasks such as math and coding.",
      "feedback_verifier": "learned preference rewards, verifiable rewards, and policy-gradient objectives.",
      "audit_focus": "Method comparisons can mix data effects with optimizer and sampling-budget effects., RLHF and RLVR rewards are often discussed together despite different verification contracts., Survey papers do not provide reusable training data objects.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2407.16216",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2407.16216",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2407.16216",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2407.16216"
    },
    {
      "id": "survey-of-reasoning-large-language-models-2025",
      "title": "A Survey of Reasoning with Foundation Models",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "reasoning",
        "survey"
      ],
      "category": [
        "foundations_and_primers",
        "programmatically_verifiable_outcome_data",
        "environment_agent_trajectory_data",
        "judgment_rubric_domain_expert_data",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧠 Reasoning LLM surveys",
      "tags": [
        "survey",
        "reasoning-llms",
        "foundation-models"
      ],
      "one_line_summary": "Surveys reasoning with foundation models, including tasks, methods, and evaluation patterns that reasoning-data readers need as context.",
      "why_it_matters": "It gives the atlas a second reasoning-survey waypoint so readers can orient before choosing math, code, agent, rubric, or scaling tracks.",
      "data_object": "survey taxonomy and literature map.; literature survey.",
      "feedback_verifier": "metadata pending",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.17419",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.17419",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.17419"
    },
    {
      "id": "survey-on-evaluation-of-llm-based-agents-2025",
      "title": "A Survey on Evaluation of LLM-based Agents",
      "year": 2025,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "survey_background"
      ],
      "verification_contract": [
        "environmental",
        "mixed"
      ],
      "supervision_granularity": [
        "full_episode",
        "state_action_level"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "agents",
        "evaluation"
      ],
      "category": [
        "foundations_and_primers",
        "environment_agent_trajectory_data",
        "training_usage_optimization_objectives",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🌐 Agent data / tool-use surveys",
      "tags": [
        "survey",
        "agent-evaluation",
        "tool-use"
      ],
      "one_line_summary": "Surveys how LLM-based agents are evaluated across tasks, environments, metrics, and interaction settings.",
      "why_it_matters": "It gives the atlas an agent-survey waypoint for readers who need to understand environment data before comparing SWE, web, app, or OS agent benchmarks.",
      "data_object": "survey taxonomy for agent evaluation tasks and environments.; process: task, environment, trajectory, evaluator, terminal predicate.; LLM-agent evaluation literature.",
      "feedback_verifier": "environmental and benchmark evaluators summarized by the survey.",
      "audit_focus": "check links, lineage, verifier, split, and contamination",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.16416",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.16416",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.16416"
    },
    {
      "id": "language-model-developers-should-report-train-test-overlap-2024",
      "title": "Language Model Developers Should Report Train-Test Overlap",
      "year": 2024,
      "venue": "arXiv",
      "authors": [],
      "source_role": [
        "audit_failure",
        "survey_background"
      ],
      "verification_contract": [
        "unknown"
      ],
      "supervision_granularity": [
        "unknown"
      ],
      "training_use": [
        "audit"
      ],
      "domains": [
        "contamination",
        "data-reuse"
      ],
      "category": [
        "foundations_and_primers",
        "scaling_rlvr_test_time_compute",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🧯 Contamination / evaluation surveys",
      "tags": [
        "train-test-overlap",
        "data-reuse",
        "contamination"
      ],
      "one_line_summary": "Argues that language-model releases should report train-test overlap so evaluation gains can be interpreted with data reuse in mind.",
      "why_it_matters": "It gives the scaling track a concrete data-reuse and uniqueness reference for checking whether repeated or overlapping examples are counted as fresh evidence.",
      "data_object": "overlap and reporting analysis.; process: training corpus, evaluation set, overlap estimate, reporting policy.; benchmark and training-data documentation.",
      "feedback_verifier": "overlap analysis rather than a reward model.",
      "audit_focus": "Reported benchmark gains can be inflated when train-test overlap is not disclosed.",
      "curation_level": "L1_link_verified",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.08385",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.08385",
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
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.08385"
    },
    {
      "id": "openassistant-conversations-democratizing-large-language-model-alignment-2023",
      "title": "OpenAssistant Conversations - Democratizing Large Language Model Alignment",
      "year": 2023,
      "venue": "NeurIPS 2023 Datasets and Benchmarks Track",
      "authors": [
        "Andreas Köpf",
        "Yannic Kilcher",
        "Dimitri von Rütte",
        "Sotiris Anagnostidis",
        "Zhi Rui Tam",
        "Keith Stevens",
        "Abdullah Barhoum",
        "Duc Nguyen",
        "Oliver Stanley",
        "Richárd Nagyfi",
        "Shahul ES",
        "Sameer Suri",
        "David Glushkov",
        "Arnav Dantuluri",
        "Andrew Maguire",
        "Christoph Schuhmann",
        "Huu Nguyen",
        "Alexander Mattick"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "sft",
        "reward_modeling",
        "preference_learning"
      ],
      "domains": [
        "preference-data",
        "human-feedback",
        "alignment",
        "conversation",
        "multilingual",
        "open-data"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "OpenAssistant",
        "OASST1",
        "preference-data",
        "human-feedback",
        "conversation-tree",
        "alignment",
        "multilingual"
      ],
      "one_line_summary": "OpenAssistant Conversations releases a permissively licensed, crowd-sourced assistant-style conversation corpus with human-generated messages, quality ratings, rankings, and multilingual conversation trees.",
      "why_it_matters": "It gives the Preference & Reward Feedback track a large open alignment corpus where SFT examples, human ratings, and preference-style annotations are visible rather than hidden inside a proprietary RLHF pipeline.",
      "data_object": "conversation-tree messages with roles, language, review metadata, rankings, quality ratings, and labels; process: message id, parent id, user id; offline human-generated, human-annotated assistant-style conversation corpus",
      "feedback_verifier": "human quality ratings, rankings, and annotation labels over conversation messages",
      "audit_focus": "Crowd-sourced ratings can encode annotator disagreement, language imbalance, and community-specific preference norms., Conversation-tree data can mix SFT targets, ratings, rankings, and safety labels; training use should match the actual field consumed., Multilingual coverage does not guarantee balanced quality or comparable annotation density across languages.",
      "curation_level": "L5_audit_ready",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html",
        "venue": "https://neurips.cc/virtual/2023/poster/73573",
        "arxiv": "https://arxiv.org/abs/2304.07327",
        "openreview": "https://openreview.net/forum?id=VSJotgbPHF",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": null,
        "code": "https://github.com/LAION-AI/Open-Assistant",
        "data": "https://huggingface.co/datasets/OpenAssistant/oasst1",
        "huggingface": "https://huggingface.co/datasets/OpenAssistant/oasst1",
        "project": "https://open-assistant.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html"
    },
    {
      "id": "helpsteer3-preference-open-human-annotated-preference-data-across-diverse-tasks-and-langua-2025",
      "title": "HelpSteer3-Preference: Open Human-Annotated Preference Data across Diverse Tasks and Languages",
      "year": 2025,
      "venue": "NeurIPS 2025 Datasets and Benchmarks Track",
      "authors": [
        "Zhilin Wang",
        "Jiaqi Zeng",
        "Olivier Delalleau",
        "Hoo-Chang Shin",
        "Felipe Soares",
        "Alexander Bukharin",
        "Ellie Evans",
        "Yi Dong",
        "Oleksii Kuchaiev"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning"
      ],
      "domains": [
        "preference-data",
        "human-feedback",
        "reward-modeling",
        "multilingual",
        "coding",
        "stem",
        "alignment",
        "open-data"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "HelpSteer3",
        "preference-data",
        "human-feedback",
        "reward-modeling",
        "multilingual",
        "code",
        "stem",
        "rlhf",
        "open-data"
      ],
      "one_line_summary": "HelpSteer3-Preference releases a CC-BY-4.0 human-annotated preference dataset with over 40k samples across General, STEM, Code, and Multilingual tasks for reward-model and RLHF research.",
      "why_it_matters": "It is a strong Preference & Reward Feedback candidate because it exposes specialist human preference annotations, task/language/domain metadata, released data, and demonstrated use for Bradley-Terry reward models, generative reward models, and RLHF policy alignment.",
      "data_object": "preference record with conversation context, response1, response2, domain, language/code metadata, overall preference score, and individual preference annotations with short justifications.; process: domain, language, context; offline human-annotated preference dataset released on Hugging Face as the preference subset of nvidia/HelpSteer3",
      "feedback_verifier": "3-5 independent specialist human preference annotations per sample, post-processed into an overall preference score from -3 to 3.",
      "audit_focus": "Specialist human annotations are higher quality than generic crowdsourcing but still encode vendor, geography, language, and task-population assumptions., General/STEM/Code and Multilingual subsets use different annotation vendors, and the paper notes different preference distributions across vendors/subsets., Preference score aggregation and high-disagreement filtering can remove subjective or ambiguous tasks that may matter in real deployments.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2505.11475",
        "venue": "https://neurips.cc/virtual/2025/loc/san-diego/poster/121485",
        "arxiv": "https://arxiv.org/abs/2505.11475",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2505.11475",
        "code": "https://github.com/NVIDIA/NeMo-Aligner",
        "data": "https://huggingface.co/datasets/nvidia/HelpSteer3",
        "huggingface": "https://huggingface.co/datasets/nvidia/HelpSteer3",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2505.11475"
    },
    {
      "id": "when-data-is-the-algorithm-data-centric-human-preference-optimization-for-llms-2025",
      "title": "When Data is the Algorithm: A Systematic Study and Curation of Preference Optimization Datasets",
      "year": 2025,
      "venue": "ICLR 2026",
      "authors": [
        "Aladin Djuhera",
        "Farhan Ahmed",
        "Swanand Ravindra Kadhe",
        "Syed Zawad",
        "Heiko Ludwig",
        "Holger Boche"
      ],
      "source_role": [
        "construction_recipe",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning",
        "audit"
      ],
      "domains": [
        "preference-data",
        "preference-optimization",
        "data-curation",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "human-preference-rlhf",
        "data-centric-curation",
        "dpo-preference-optimization"
      ],
      "one_line_summary": "When Data is the Algorithm studies open DPO corpora and curates UltraMix, treating preference-data selection as a central part of the alignment algorithm.",
      "why_it_matters": "It is directly relevant to Preference & Reward Feedback because it audits which preference records enter DPO-style training instead of treating all chosen/rejected pairs as interchangeable.",
      "data_object": "prompt, chosen response, rejected response, task/category annotation, input-quality annotation, preference-reward validation signal, and curated-mixture membership; process: prompt, chosen response, rejected response; offline data-centric DPO corpus analysis and curation pipeline",
      "feedback_verifier": "Magpie annotation plus reward-model-based preference validation",
      "audit_focus": "Reward-model-based validation can inherit reward model blind spots., Curated mixtures may obscure source dataset licenses, prompt provenance, and filtering thresholds., Benchmark gains should not be treated as proof of intrinsic data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2511.10985",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2511.10985",
        "openreview": "https://openreview.net/forum?id=bmoh0i1nqE",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2511.10985",
        "code": null,
        "data": "https://huggingface.co/datasets/aladinDJ/ultramix-DPO-annotated",
        "huggingface": "https://huggingface.co/datasets/aladinDJ/ultramix-DPO-annotated",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2511.10985"
    },
    {
      "id": "preference-trees-a-dataset-for-modeling-human-preferences-over-conversational-responses-2024",
      "title": "Advancing LLM Reasoning Generalists with Preference Trees",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Lifan Yuan",
        "Ganqu Cui",
        "Hanbin Wang",
        "Ning Ding",
        "Xingyao Wang",
        "Jia Deng",
        "Boji Shan",
        "Huimin Chen",
        "Ruobing Xie",
        "Yankai Lin",
        "Zhenghao Liu",
        "Bowen Zhou",
        "Hao Peng",
        "Zhiyuan Liu",
        "Maosong Sun"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "step_level",
        "trajectory_value"
      ],
      "training_use": [
        "preference_learning",
        "sft",
        "evaluation"
      ],
      "domains": [
        "reasoning",
        "preference-data",
        "math",
        "code",
        "logic",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "human-preference-rlhf",
        "preference-trees",
        "reasoning-traces"
      ],
      "one_line_summary": "Preference Trees / UltraInteract turns multi-branch reasoning trajectories into tree-structured preference data for reasoning alignment.",
      "why_it_matters": "It extends Preference & Reward Feedback beyond flat chosen/rejected chat pairs toward branch-level and trajectory-level reasoning feedback.",
      "data_object": "preference tree with reasoning chains, interaction trajectories, candidate branches, pairwise preference data, and verifier/task outcomes; process: prompt, reasoning chain, interaction trajectory; offline reasoning preference-tree dataset and Eurus training recipe",
      "feedback_verifier": "task-result and preference-tree feedback over reasoning branches",
      "audit_focus": "Tree construction may hide rejected rollout distribution., Verifier-backed preferences can still reward shortcut reasoning or answer-format artifacts., Reasoning-domain preferences may not transfer to open-ended chat preference data.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2404.02078",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2404.02078",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2404.02078",
        "code": "https://github.com/OpenBMB/Eurus",
        "data": "https://github.com/OpenBMB/Eurus",
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2404.02078"
    },
    {
      "id": "towards-data-centric-rlhf-simple-metrics-for-preference-dataset-comparison-2024",
      "title": "Towards Data-Centric RLHF: Simple Metrics for Preference Dataset Comparison",
      "year": 2024,
      "venue": "OpenReview / arXiv working paper",
      "authors": [
        "Judy Hanwen Shen",
        "Archit Sharma",
        "Jun Qin"
      ],
      "source_role": [
        "survey_background",
        "audit_failure",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward"
      ],
      "training_use": [
        "audit",
        "evaluation"
      ],
      "domains": [
        "preference-data",
        "reward-modeling",
        "rlhf",
        "data-centric-ai",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "preference-data",
        "data-centric-rlhf",
        "reward-modeling",
        "dataset-audit",
        "rewardbench"
      ],
      "one_line_summary": "Towards Data-Centric RLHF proposes model-agnostic metrics for comparing public pairwise preference datasets by scale, label-noise invariance, and response-pair information content.",
      "why_it_matters": "It gives the Preference & Reward Feedback Data track an audit framework for deciding whether a preference dataset is useful for reward-model training before treating it as interchangeable RLHF data.",
      "data_object": "dataset-level audit record over pairwise preference datasets, including scale behavior, label-noise invariance, response-pair similarity/information content, in-domain reward-model accuracy, and RewardBench generalization.; process: dataset name, prompt, chosen response; offline data-centric preference-dataset comparison framework for reward-model training",
      "feedback_verifier": "Bradley-Terry reward models trained on each dataset and evaluated by in-domain held-out accuracy plus RewardBench generalization.",
      "audit_focus": "Metrics such as scale, label-noise invariance, and response-pair similarity are useful audit views but do not fully capture annotator disagreement, prompt provenance, safety policy, or downstream task fit., Reward-model performance can be dataset- and model-size-dependent; a metric that helps one base model or domain may not transfer to another., Random label flips are only a proxy for real preference noise and may not match systematic annotator bias or ambiguous prompts.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://openreview.net/forum?id=B6qsCHhMco",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2409.09603",
        "openreview": "https://openreview.net/forum?id=B6qsCHhMco",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2409.09603",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://openreview.net/forum?id=B6qsCHhMco"
    },
    {
      "id": "kto-model-alignment-as-prospect-theoretic-optimization-2024",
      "title": "KTO: Model Alignment as Prospect Theoretic Optimization",
      "year": 2024,
      "venue": "ICML 2024",
      "authors": [
        "Kawin Ethayarajh",
        "Winnie Xu",
        "Niklas Muennighoff",
        "Dan Jurafsky",
        "Douwe Kiela"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "binary-feedback"
      ],
      "one_line_summary": "KTO aligns language models from desirable/undesirable feedback rather than requiring paired preference comparisons.",
      "why_it_matters": "It makes binary preference records a first-class data object for Preference & Reward Feedback curation.",
      "data_object": "prompt-response examples with binary desirable/undesirable labels; process: prompt, response, desirable or undesirable label; offline preference-optimization recipe",
      "feedback_verifier": "binary desirability feedback used by KTO",
      "audit_focus": "Binary feedback is coarser than pairwise comparison., Class imbalance can change the effective preference objective., Prospect-theoretic utility assumptions should not be mistaken for data quality evidence.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2402.01306",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2402.01306",
        "openreview": "https://openreview.net/forum?id=iUwHnoENnl",
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2402.01306",
        "code": "https://github.com/ContextualAI/HALOs",
        "data": null,
        "huggingface": "https://huggingface.co/collections/ContextualAI/archangel",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2402.01306"
    },
    {
      "id": "orpo-monolithic-preference-optimization-without-reference-model-2024",
      "title": "ORPO: Monolithic Preference Optimization without Reference Model",
      "year": 2024,
      "venue": "EMNLP 2024",
      "authors": [
        "Jiwoo Hong",
        "Noah Lee",
        "James Thorne"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "reference-free-optimization"
      ],
      "one_line_summary": "ORPO combines supervised learning with an odds-ratio penalty over chosen/rejected responses in a reference-free preference objective.",
      "why_it_matters": "It shows how pairwise preference data can be folded into a single-stage alignment objective rather than a separate DPO/RLHF phase.",
      "data_object": "instruction, chosen response, rejected response, and monolithic preference objective; process: instruction, chosen response, rejected response; offline reference-free preference optimization recipe",
      "feedback_verifier": "pairwise preference consumed by ORPO odds-ratio objective",
      "audit_focus": "Single-stage training can blur SFT-data effect, preference-data effect, and objective effect., Odds-ratio penalties may reward length or formatting artifacts., Reference-free optimization still requires preference-pair provenance audit.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://aclanthology.org/2024.emnlp-main.626/",
        "venue": "https://aclanthology.org/2024.emnlp-main.626/",
        "arxiv": "https://arxiv.org/abs/2403.07691",
        "openreview": null,
        "acl": "https://aclanthology.org/2024.emnlp-main.626/",
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.18653/v1/2024.emnlp-main.626",
        "code": "https://github.com/xfactlab/orpo",
        "data": null,
        "huggingface": "https://huggingface.co/kaist-ai/mistral-orpo-beta",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://aclanthology.org/2024.emnlp-main.626/"
    },
    {
      "id": "simpo-simple-preference-optimization-with-a-reference-free-reward-2024",
      "title": "SimPO: Simple Preference Optimization with a Reference-Free Reward",
      "year": 2024,
      "venue": "NeurIPS 2024",
      "authors": [
        "Yu Meng",
        "Mengzhou Xia",
        "Danqi Chen"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "reference-free-optimization"
      ],
      "one_line_summary": "SimPO trains on prompt/chosen/rejected preference pairs using a reference-free implicit reward margin.",
      "why_it_matters": "It is a core Preference & Reward Feedback entry because it clarifies how pairwise preference records can be consumed without a separate reference model.",
      "data_object": "prompt/chosen/rejected preference pair consumed by SimPO margin objective; process: prompt, chosen response, rejected response; offline reference-free preference-optimization recipe",
      "feedback_verifier": "implicit reward based on average log probability plus target reward margin",
      "audit_focus": "Average log probability and margin design can introduce length or format incentives., Reference-free reward still depends on pair quality and source distribution., Benchmark gains should not be treated as evidence that the source preference data is high quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html",
        "venue": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html",
        "arxiv": "https://arxiv.org/abs/2405.14734",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2405.14734",
        "code": "https://github.com/princeton-nlp/SimPO",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html"
    },
    {
      "id": "self-play-preference-optimization-for-language-model-alignment-2024",
      "title": "Self-Play Preference Optimization for Language Model Alignment",
      "year": 2024,
      "venue": "ICML 2024",
      "authors": [
        "Yue Wu",
        "Zhiqing Sun",
        "Huizhuo Yuan",
        "Kaixuan Ji",
        "Yiming Yang",
        "Quanquan Gu"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization"
      ],
      "one_line_summary": "SPPO constructs iterative self-play preference pairs from UltraFeedback prompts using PairRM as the preference oracle.",
      "why_it_matters": "It is useful for the Preference & Reward Feedback track because it shows how preference data can be generated online from model self-play rather than only collected as static human pairwise comparisons.",
      "data_object": "prompt with self-play candidate responses and PairRM-derived preference signal; process: prompt, self play response, competing response; offline preference-optimization recipe",
      "feedback_verifier": "PairRM 0.4B preference model used as preference-probability oracle",
      "audit_focus": "PairRM/oracle bias can be amplified through iterative self-play., Self-play responses are tied to the policy distribution used during construction., Downstream win rates should not be treated as direct evidence of data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2405.00675",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2405.00675",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2405.00675",
        "code": "https://github.com/uclaml/SPPO",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2405.00675"
    },
    {
      "id": "lipo-listwise-preference-optimization-through-learning-to-rank-2024",
      "title": "LiPO: Listwise Preference Optimization through Learning-to-Rank",
      "year": 2024,
      "venue": "NAACL 2025 Findings",
      "authors": [
        "Tianqi Liu",
        "Zhen Qin",
        "Junru Wu",
        "Jiaming Shen",
        "Misha Khalman",
        "Rishabh Joshi",
        "Yao Zhao",
        "Mohammad Saleh",
        "Simon Baumgartner",
        "Jialu Liu",
        "Peter J. Liu",
        "Xuanhui Wang"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training",
        "listwise-ranking"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "listwise-preference"
      ],
      "one_line_summary": "LiPO generalizes preference optimization from pairwise comparisons to ranked response lists.",
      "why_it_matters": "It is relevant to the Preference & Reward Feedback track because it treats preference supervision as a listwise data object rather than only chosen/rejected pairs.",
      "data_object": "ranked response list; process: prompt, ranked response list, response label or rank; offline preference-optimization recipe",
      "feedback_verifier": "listwise ranking feedback from human, reward-model, or AI feedback rankings",
      "audit_focus": "Listwise rankings may be unstable or inconsistent across annotators and reward models., Projecting listwise rankings into weighted pairs can hide disagreement structure., Ranking-objective gains should not be treated as direct proof of data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2402.01878",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2402.01878",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2402.01878",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2402.01878"
    },
    {
      "id": "permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024",
      "title": "Permutative Preference Alignment from Listwise Ranking of Human Judgments",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Yang Zhao",
        "Yixin Wang",
        "Mingzhang Yin"
      ],
      "source_role": [
        "data_release",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "alignment",
        "post-training",
        "listwise-ranking"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "listwise-preference"
      ],
      "one_line_summary": "PPA constructs ListUltraFeedback and trains from multi-response list rankings with an NDCG-style objective.",
      "why_it_matters": "It is a useful Preference & Reward Feedback entry because it exposes listwise ordinal feedback as a released data object, not only an optimization loss.",
      "data_object": "multi-response list with ordinal reward labels; process: prompt, candidate response list, ordinal reward labels; offline listwise preference-optimization recipe",
      "feedback_verifier": "ArmoRM scoring reward model; RLHFlow pair-preference/scoring models for evaluation",
      "audit_focus": "Reward-model ordinal labels can encode ArmoRM-specific bias., NDCG weighting choices affect which ranking mistakes dominate training., Reported benchmark gains should not be treated as direct evidence that ordinal labels are clean.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.04346",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.04346",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.04346",
        "code": null,
        "data": "https://huggingface.co/datasets/NDCG-alignment/ListUltraFeedback",
        "huggingface": "https://huggingface.co/datasets/NDCG-alignment/ListUltraFeedback",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.04346"
    },
    {
      "id": "contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024",
      "title": "Contrastive Preference Optimization: Pushing the Boundaries of LLM Performance in Machine Translation",
      "year": 2024,
      "venue": "ICML 2024",
      "authors": [
        "Haoran Xu",
        "Amr Sharaf",
        "Yunmo Chen",
        "Weiting Tan",
        "Lingfeng Shen",
        "Benjamin Van Durme",
        "Kenton Murray",
        "Young Jin Kim"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "machine-translation",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "machine-translation"
      ],
      "one_line_summary": "CPO builds machine-translation preference pairs from translation triplets using automatic MT quality signals and limited human preference checks.",
      "why_it_matters": "It broadens the Preference & Reward Feedback track beyond dialogue alignment by showing a domain-specific pairwise preference construction recipe for machine translation.",
      "data_object": "source sentence, preferred translation, dis-preferred translation; process: source sentence, preferred translation, dispreferred translation; machine translation",
      "feedback_verifier": "KIWI-XXL and XCOMET reference-free MT evaluation models; plus 1K internal human-labeled preference data",
      "audit_focus": "Machine-translation preference signals may not transfer to general dialogue alignment., Reference translations and automatic MT evaluators can encode systematic quality biases., WMT or other MT benchmark gains should not be treated as direct proof of data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2401.08417",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2401.08417",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2401.08417",
        "code": "https://github.com/fe1ixxu/ALMA",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2401.08417"
    },
    {
      "id": "optune-efficient-online-preference-tuning-2024",
      "title": "OPTune: Efficient Online Preference Tuning",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Lichang Chen",
        "Jiuhai Chen",
        "Chenxi Liu",
        "John Kirchenbauer",
        "Davit Soselia",
        "Chen Zhu",
        "Tom Goldstein",
        "Tianyi Zhou",
        "Heng Huang"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "online-alignment",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "online-preference-tuning"
      ],
      "one_line_summary": "OPTune improves online preference tuning efficiency by regenerating low-reward prompts and weighting pairs by reward gaps.",
      "why_it_matters": "It adds an online preference-feedback recipe where the training data is an iterative stream of policy responses scored by a reward model.",
      "data_object": "prompt, online sampled response pair, reward scores, selected preferred/rejected response pair; process: prompt, current policy response, regenerated response; online preference tuning loop",
      "feedback_verifier": "Mistral-7B-backbone reward model fine-tuned by Xiong et al. and used for online response scoring",
      "audit_focus": "Reward-model bias can drive both prompt selection and weighted training., Low-reward prompt selection may over-focus training on reward-model-specific failure modes., Training speedup and benchmark results should not be treated as proof of preference-label quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.07657",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.07657",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.07657",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.07657"
    },
    {
      "id": "multimodal-rewardbench-2-evaluating-omni-reward-models-for-interleaved-text-and-image-2025",
      "title": "Multimodal RewardBench 2: Evaluating Omni Reward Models for Interleaved Text and Image",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Yushi Hu",
        "Reyhane Askari-Hemmat",
        "Melissa Hall",
        "Emily Dinan",
        "Luke Zettlemoyer",
        "Marjan Ghazvininejad"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "reward-model-benchmark",
        "multimodal",
        "text-to-image",
        "image-editing",
        "interleaved-generation",
        "visual-reasoning"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "multimodal-rewardbench-2",
        "omni-reward-model",
        "multimodal-reward-benchmark"
      ],
      "one_line_summary": "MMRB2 releases 4,000 expert-annotated multimodal preference pairs for evaluating omni reward models across text-to-image, editing, interleaved generation, and visual reasoning.",
      "why_it_matters": "It extends reward-model evaluation from text-only or single-image cases to interleaved text-image outputs where preference labels depend on visual and textual correctness together.",
      "data_object": "pair id, prompt text/images, response a text/images, response b text/images, chosen label, model identifiers, human annotations, prompt source, and prompt metadata.; process: pair id, prompt text, prompt images; offline omni/multimodal reward-model benchmark",
      "feedback_verifier": "expert-annotated preference labels with ensemble filtering and positional-consistent evaluation protocol",
      "audit_focus": "Multimodal judges may fail because of image understanding errors rather than preference reasoning., AI-generated outputs may carry model/provider-specific artifacts., Third-party prompt/image licenses must be checked before reuse.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2512.16899",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2512.16899",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2512.16899",
        "code": "https://github.com/facebookresearch/MMRB2",
        "data": "https://huggingface.co/datasets/rl-research/multimodal-rewardbench-2",
        "huggingface": "https://huggingface.co/datasets/rl-research/multimodal-rewardbench-2",
        "project": "https://github.com/facebookresearch/MMRB2",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2512.16899"
    },
    {
      "id": "atla-selene-mini-a-general-purpose-evaluation-model-2025",
      "title": "Atla Selene Mini: A General Purpose Evaluation Model",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Andrei Alexandru",
        "Antonia Calvi",
        "Henry Broomfield",
        "Jackson Golden",
        "Kyle Dai",
        "Mathias Leys",
        "Maurice Burger",
        "Max Bartolo",
        "Roman Engeler",
        "Sashank Pisupati",
        "Toby Drane",
        "Young Sun Park"
      ],
      "source_role": [
        "verifier_reward",
        "model_report"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference",
        "answer_level",
        "process_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "llm-as-judge",
        "evaluation-models",
        "reward-model-benchmark",
        "rubric-conditioned-evaluation"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🧾 Rubric-conditioned rewards",
      "tags": [
        "atla-selene-mini",
        "llm-as-judge",
        "evaluation-model"
      ],
      "one_line_summary": "Atla Selene Mini is an 8B general-purpose evaluator model trained for absolute scoring, classification, pairwise preference, and critique generation.",
      "why_it_matters": "It provides a small open evaluator model that can serve as a verifier/reward component, but its training mixture and calibration need audit before reuse.",
      "data_object": "absolute score, binary/classification judgment, pairwise preference, structured evaluation output, or qualitative critique.; process: instruction, response, candidate responses; 8B Llama-3.1-based small language model-as-a-judge",
      "feedback_verifier": "Atla Selene Mini judge output over scoring, classification, and pairwise preference tasks",
      "audit_focus": "Small evaluator models can have limited coverage and calibration outside reported tasks., Synthetic critiques may encode generator artifacts., RewardBench or Judge Arena performance is not proof of data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.17195",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.17195",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.17195",
        "code": "https://github.com/atla-ai/selene-mini",
        "data": null,
        "huggingface": "https://huggingface.co/AtlaAI/Selene-1-Mini-Llama-3.1-8B",
        "project": "https://github.com/atla-ai/selene-mini",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.17195"
    },
    {
      "id": "aligning-with-human-judgement-the-role-of-pairwise-preference-in-large-language-model-evaluators-2024",
      "title": "Aligning with Human Judgement: The Role of Pairwise Preference in Large Language Model Evaluators",
      "year": 2024,
      "venue": "COLM 2024",
      "authors": [
        "Yinhong Liu",
        "Han Zhou",
        "Zhijiang Guo",
        "Ehsan Shareghi",
        "Ivan Vulić",
        "Anna Korhonen",
        "Nigel Collier"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "llm-as-judge",
        "evaluation-methods",
        "long-form-generation",
        "pairwise-ranking"
      ],
      "category": [
        "preference_reward_feedback_data",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "pairs",
        "llm-as-judge",
        "pairwise-preference"
      ],
      "one_line_summary": "PairS reframes LLM evaluation as uncertainty-guided pairwise ranking to better align evaluator outputs with human judgments.",
      "why_it_matters": "It shows how pairwise preference can be used as an evaluator scaffold, while making comparison bias, transitivity, and inference budget audit-relevant.",
      "data_object": "pairwise comparison judgment, local preference edge, aggregated ranking, transitivity diagnostic, or calibration diagnostic.; process: evaluation prompt, candidate text a, candidate text b; LLM evaluator used as pairwise judge with uncertainty-guided rank aggregation",
      "feedback_verifier": "PairS pairwise-preference search and debiased pairwise evaluator judgments",
      "audit_focus": "Pairwise evaluators can amplify relative-comparison biases., Human-judgment alignment depends on task domain and candidate pool., More pairwise comparisons increase inference cost.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2403.16950",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2403.16950",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2403.16950",
        "code": "https://github.com/cambridgeltl/PairS",
        "data": null,
        "huggingface": null,
        "project": "https://github.com/cambridgeltl/PairS",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2403.16950"
    },
    {
      "id": "the-comparative-trap-pairwise-comparisons-amplifies-biased-preferences-of-llm-evaluators-2024",
      "title": "The Comparative Trap: Pairwise Comparisons Amplifies Biased Preferences of LLM Evaluators",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Hawon Jeong",
        "ChaeHun Park",
        "Jimin Hong",
        "Hojoon Lee",
        "Jaegul Choo"
      ],
      "source_role": [
        "audit_failure",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward",
        "process_reward"
      ],
      "training_use": [
        "evaluation",
        "audit"
      ],
      "domains": [
        "llm-as-judge",
        "evaluation-bias",
        "pairwise-ranking",
        "reward-model-audit"
      ],
      "category": [
        "preference_reward_feedback_data",
        "audit_failure_contamination_verifier_attacks",
        "judgment_rubric_domain_expert_data",
        "benchmarks_evaluation_surfaces"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "comparative-trap",
        "llm-as-judge",
        "pairwise-bias"
      ],
      "one_line_summary": "The Comparative Trap shows that pairwise LLM evaluation can amplify superficial biases and proposes PRePair as a mitigation.",
      "why_it_matters": "It is directly relevant to Preference & Reward Feedback because pairwise preferences are often reused as reward or judge supervision without auditing bias amplification.",
      "data_object": "pairwise decision, pointwise score/reasoning, PRePair judgment, or bias diagnostic.; process: prompt, candidate response a, candidate response b; LLM-as-a-judge evaluation protocols comparing pairwise, pointwise, and PRePair methods",
      "feedback_verifier": "LLM evaluator judgments and PRePair mitigation method",
      "audit_focus": "Pairwise comparison can amplify verbosity and authoritative-tone biases., Pointwise evaluation may reduce some biases but can lose relative-comparison signal., Mitigation results on benchmarks should not be treated as proof that evaluator judgments are clean.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.12319",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.12319",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.12319",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.12319"
    },
    {
      "id": "activation-reward-models-for-few-shot-model-alignment-2025",
      "title": "Activation Reward Models for Few-Shot Model Alignment",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Tianning Chai",
        "Chancharik Mitra",
        "Brandon Huang",
        "Gautam Rajendrakumar Gare",
        "Zhiqiu Lin",
        "Assaf Arbelle",
        "Leonid Karlinsky",
        "Rogerio Feris",
        "Trevor Darrell",
        "Deva Ramanan",
        "Roei Herzig"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe",
        "benchmark"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "reward-modeling",
        "few-shot-alignment",
        "multimodal",
        "reward-hacking",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🎚️ Scalar reward / ORM data",
      "tags": [
        "activation-reward-model",
        "few-shot-reward-modeling",
        "reward-hacking"
      ],
      "one_line_summary": "Activation Reward Models use few-shot preference examples to steer model activations and derive reward scores without finetuning.",
      "why_it_matters": "It broadens the track beyond trained scalar reward models by exposing activation-derived reward signals and a reward-hacking benchmark setting.",
      "data_object": "pairwise preference decision or scalar reward from token-probability scoring.; process: prompt, response a, response b; open-weight LLM/LMM internals with attention-head activation steering",
      "feedback_verifier": "activation-steered reward model using probability of the Yes token or pairwise choice token",
      "audit_focus": "Requires access to internal model activations, so it does not apply to closed-source models., Few-shot activation signals may not generalize to broad or poorly specified criteria., Current implementation focuses on single-turn settings.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.01368",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.01368",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2507.01368",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.01368"
    },
    {
      "id": "rm-bench-benchmarking-reward-models-of-language-models-with-subtlety-and-style-2024",
      "title": "RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style",
      "year": 2024,
      "venue": "ICLR 2025 Oral",
      "authors": [
        "Yantao Liu",
        "Zijun Yao",
        "Rui Min",
        "Yixin Cao",
        "Lei Hou",
        "Juanzi Li"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "reward-model-benchmark",
        "style-bias",
        "factuality",
        "code",
        "math",
        "safety"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "rm-bench",
        "reward-model-benchmark",
        "style-bias"
      ],
      "one_line_summary": "RM-Bench releases style-controlled chosen/rejected comparisons across chat, code, math, and safety to expose reward-model style bias.",
      "why_it_matters": "It is directly relevant to Preference & Reward Feedback because it audits when scalar rewards prefer verbosity or formatting over correctness.",
      "data_object": "prompt with three chosen responses and three rejected responses across concise, detailed plain-text, and detailed markdown styles.; process: id, prompt, chosen; offline reward-model benchmark with style-substance evaluation matrix",
      "feedback_verifier": "reward model scores chosen and rejected responses; correctness checked by human annotation, unit tests, ground-truth math answers, or safety rules depending on domain",
      "audit_focus": "Style-controlled benchmark may still inherit GPT-4o generation artifacts., Human validation details and agreement statistics require closer audit., Reward-model benchmark performance is not direct evidence of downstream policy quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.16184",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.16184",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.16184",
        "code": "https://github.com/THU-KEG/RM-Bench",
        "data": "https://github.com/THU-KEG/RM-Bench",
        "huggingface": "https://huggingface.co/datasets/THU-KEG/RM-Bench",
        "project": "https://github.com/THU-KEG/RM-Bench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.16184"
    },
    {
      "id": "rag-rewardbench-benchmarking-reward-models-in-retrieval-augmented-generation-for-preference-alignment-2024",
      "title": "RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Zhuoran Jin",
        "Hongbang Yuan",
        "Tianyi Men",
        "Pengfei Cao",
        "Yubo Chen",
        "Kang Liu",
        "Jun Zhao"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "reward-model-benchmark",
        "retrieval-augmented-generation",
        "citation",
        "abstention",
        "conflict-robustness"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "rag-reward-benchmark",
        "reward-model-benchmark",
        "retrieval-augmented-generation"
      ],
      "one_line_summary": "RAG-RewardBench releases 1,485 RAG preference pairs with LLM-judge labels and human-correlation validation for reward-model evaluation.",
      "why_it_matters": "It extends Preference & Reward Feedback beyond general chat by testing whether reward models handle retrieval grounding, citation, abstention, and conflicting evidence.",
      "data_object": "prompt, question, chosen response, chosen model, rejected response, reject model, subset, and retrieved references.; process: prompt, question, chosen; offline RAG reward-model benchmark",
      "feedback_verifier": "four commercial LLM judges with filtering for inconsistent scores and human-correlation validation",
      "audit_focus": "LLM-as-a-judge labels may be biased on citation, grounding, abstention, or conflict cases., RAG benchmark accuracy is not proof that a reward model improves downstream RAG alignment., Dataset mixes retriever and generator effects, so reward-model failures should be analyzed by subset.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2412.13746",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2412.13746",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2412.13746",
        "code": "https://github.com/jinzhuoran/RAG-RewardBench/",
        "data": "https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench",
        "huggingface": "https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench",
        "project": "https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2412.13746"
    },
    {
      "id": "vl-rewardbench-a-challenging-benchmark-for-vision-language-generative-reward-models-2024",
      "title": "VL-RewardBench: A Challenging Benchmark for Vision-Language Generative Reward Models",
      "year": 2024,
      "venue": "CVPR 2025 Highlight",
      "authors": [
        "Lei Li",
        "Yuancheng Wei",
        "Zhihui Xie",
        "Xuqing Yang",
        "Yifan Song",
        "Peiyi Wang",
        "Chenxin An",
        "Tianyu Liu",
        "Sujian Li",
        "Bill Yuchen Lin",
        "Lingpeng Kong",
        "Qi Liu"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward",
        "answer_level"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "reward-model-benchmark",
        "multimodal",
        "vision-language",
        "hallucination",
        "visual-reasoning"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "vl-rewardbench",
        "multimodal-reward-model",
        "vision-language-benchmark"
      ],
      "one_line_summary": "VL-RewardBench releases human-verified image-query preference examples across general multimodal queries, hallucination detection, and visual reasoning.",
      "why_it_matters": "It adds multimodal reward feedback to the track and makes visual perception failures explicit as reward-model audit risks.",
      "data_object": "image-query example with two responses, human ranking, models, judge, rationale, query source, and ground truth.; process: id, query, image; offline vision-language generative reward-model benchmark",
      "feedback_verifier": "AI-assisted preference labels with human verification",
      "audit_focus": "Multimodal judges may fail because of visual perception errors rather than preference reasoning., AI-assisted labels can inherit model biases before human verification., Benchmark correlation with MMMU-Pro is not proof of data quality or downstream policy improvement.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2411.17451",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2411.17451",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2411.17451",
        "code": "https://github.com/vl-rewardbench/VL_RewardBench",
        "data": "https://huggingface.co/datasets/MMInstruction/VL-RewardBench",
        "huggingface": "https://huggingface.co/datasets/MMInstruction/VL-RewardBench",
        "project": "https://vl-rewardbench.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2411.17451"
    },
    {
      "id": "judgebench-a-benchmark-for-evaluating-llm-based-judges-2024",
      "title": "JudgeBench: A Benchmark for Evaluating LLM-based Judges",
      "year": 2024,
      "venue": "ICLR 2025",
      "authors": [
        "Sijun Tan",
        "Siyuan Zhuang",
        "Kyle Montgomery",
        "William Y. Tang",
        "Alejandro Cuadron",
        "Chenguang Wang",
        "Raluca Ada Popa",
        "Ion Stoica"
      ],
      "source_role": [
        "benchmark",
        "verifier_reward",
        "data_release"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward",
        "answer_level"
      ],
      "training_use": [
        "evaluation"
      ],
      "domains": [
        "judge-benchmark",
        "reward-model-benchmark",
        "knowledge",
        "reasoning",
        "math",
        "coding"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🧪 Reward-model benchmarks",
      "tags": [
        "judgebench",
        "llm-as-judge",
        "reward-model-benchmark"
      ],
      "one_line_summary": "JudgeBench converts hard knowledge, reasoning, math, and coding tasks into 620 response-pair examples for auditing LLM-based judges.",
      "why_it_matters": "It helps the track distinguish human-preference alignment from judge reliability under objective correctness.",
      "data_object": "JSON object with pair id, original id, source, question, response model, response A, response B, and objective label.; process: pair id, original id, source; offline LLM-as-judge and reward-model benchmark",
      "feedback_verifier": "objective correctness label over response pairs",
      "audit_focus": "Objective labels depend on the correctness of source datasets and conversion pipeline., Judge performance on response pairs is not proof that the judge is suitable for open-ended preference labeling., Order sensitivity and prompt sensitivity must be audited separately.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.12784",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.12784",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.12784",
        "code": "https://github.com/ScalerLab/JudgeBench",
        "data": "https://huggingface.co/datasets/ScalerLab/JudgeBench",
        "huggingface": "https://huggingface.co/datasets/ScalerLab/JudgeBench",
        "project": "https://github.com/ScalerLab/JudgeBench",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.12784"
    },
    {
      "id": "compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024",
      "title": "CompassJudger-1: All-in-one Judge Model Helps Model Evaluation and Evolution",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Maosong Cao",
        "Alexander Lam",
        "Haodong Duan",
        "Hongwei Liu",
        "Songyang Zhang",
        "Kai Chen"
      ],
      "source_role": [
        "verifier_reward",
        "benchmark"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference",
        "process_reward"
      ],
      "training_use": [
        "evaluation",
        "reward_modeling"
      ],
      "domains": [
        "llm-as-judge",
        "reward-modeling",
        "model-evaluation",
        "subjective-evaluation"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "compassjudger",
        "llm-as-judge",
        "reward-model-benchmark"
      ],
      "one_line_summary": "CompassJudger-1 trains open judge models from public judge data, public reward data, self-collected subjective data, and generated critique data.",
      "why_it_matters": "It is relevant to Preference & Reward Feedback because judge models often become reward/verifier components in evaluation and alignment pipelines.",
      "data_object": "pointwise score, pairwise choice, formatted evaluation output, or critique.; process: prompt, response, response a; open-source judge model and JudgerBench evaluation setting",
      "feedback_verifier": "CompassJudger-1 judge model acting as scorer, pairwise comparer, critique generator, or reward model",
      "audit_focus": "Judge training data and prompt templates may affect generalization., Subjective evaluation scores can encode hidden rubric preferences., Judge-model benchmark performance is not proof that the judge is reliable as a training reward.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.16256",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.16256",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.16256",
        "code": "https://github.com/open-compass/CompassJudger",
        "data": "https://github.com/open-compass/CompassJudger/releases/tag/v1.0.0",
        "huggingface": "https://huggingface.co/opencompass/CompassJudger-1-7B-Instruct",
        "project": "https://github.com/open-compass/CompassJudger",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.16256"
    },
    {
      "id": "compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025",
      "title": "CompassJudger-2: Towards Generalist Judge Model via Verifiable Rewards",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Taolin Zhang",
        "Maosong Cao",
        "Alexander Lam",
        "Songyang Zhang",
        "Kai Chen"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe",
        "benchmark"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "pairwise_preference",
        "answer_level",
        "process_reward"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "llm-as-judge",
        "reward-modeling",
        "verifiable-reward",
        "model-evaluation"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "judgment_rubric_domain_expert_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "compassjudger-2",
        "llm-as-judge",
        "verifiable-reward"
      ],
      "one_line_summary": "CompassJudger-2 uses reconstructed public judge data, reward data, synthetic knowledge/chat data, and verifiable rewards to train generalist LLM judges.",
      "why_it_matters": "It connects Preference & Reward Feedback with verifiable-reward supervision for judge models, while highlighting coverage risk when verifiers favor automatically checkable tasks.",
      "data_object": "pointwise score, pairwise choice, critique, structured judge output, or judgment reasoning path.; process: prompt, response, response a; open-source generalist judge model and JudgerBenchV2 evaluation setting",
      "feedback_verifier": "rule-based reward over final prediction correctness plus CompassJudger-2 judge outputs",
      "audit_focus": "Verifiable rewards may bias coverage toward tasks with easy automatic checks., Generalist judge performance on benchmarks is not proof of reliable reward use in training., Exact training mixture, rejection-sampling details, and prompt templates need artifact-level audit.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2507.09104",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2507.09104",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2507.09104",
        "code": "https://github.com/open-compass/CompassJudger",
        "data": null,
        "huggingface": "https://huggingface.co/opencompass/CompassJudger-2-7B-Instruct",
        "project": "https://github.com/open-compass/CompassJudger",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2507.09104"
    },
    {
      "id": "understanding-likelihood-over-optimisation-in-direct-alignment-algorithms-2024",
      "title": "Understanding Likelihood Over-optimisation in Direct Alignment Algorithms",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Zhengyan Shi",
        "Sander Land",
        "Acyr Locatelli",
        "Matthieu Geist",
        "Max Bartolo"
      ],
      "source_role": [
        "audit_failure",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "audit",
        "evaluation"
      ],
      "domains": [
        "preference-optimization",
        "direct-alignment",
        "reward-overoptimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "audit_failure_contamination_verifier_attacks",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "likelihood-overoptimization"
      ],
      "one_line_summary": "This paper audits likelihood over-optimization in DPO/IPO-style direct alignment algorithms using likelihood, entropy, top-k probability mass, and reward-model win-probability diagnostics.",
      "why_it_matters": "It warns that increasing preferred-completion likelihood can reduce diversity and generalization instead of monotonically improving alignment.",
      "data_object": "direct alignment traces, preferred/non-preferred completions, likelihood diagnostics, entropy and top-k probability-mass indicators; process: prompt, preferred completion, non preferred completion; offline direct-alignment likelihood-overoptimization audit",
      "feedback_verifier": "preference objective plus reward-model / LLM-as-judge likelihood and diversity diagnostics",
      "audit_focus": "Higher likelihood of preferred completions can correlate with memorization rather than better generalization., Likelihood margin may be misread as alignment quality., Entropy and top-k probability-mass indicators are diagnostics, not direct human-preference labels.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.11677",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.11677",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.11677",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.11677"
    },
    {
      "id": "skywork-reward-bag-of-tricks-for-reward-modeling-in-llms-2024",
      "title": "Skywork-Reward: Bag of Tricks for Reward Modeling in LLMs",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Chris Yuhao Liu",
        "Liang Zeng",
        "Jiacai Liu",
        "Rui Yan",
        "Jujie He",
        "Chaojie Wang",
        "Shuicheng Yan",
        "Yang Liu",
        "Yahui Zhou"
      ],
      "source_role": [
        "data_release",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "reward-modeling",
        "preference-data",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "data_construction_open_release_recipes",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "scalar-reward-modeling",
        "data-centric-rlhf"
      ],
      "one_line_summary": "Skywork-Reward releases a curated 80K public preference collection and trains Skywork reward models with data-centric filtering and Bradley-Terry reward modeling.",
      "why_it_matters": "It is a high-value Preference & Reward Feedback entry because it exposes a curated reward-model training collection with official Hugging Face artifacts and source-level mixture information.",
      "data_object": "prompt, chosen response, rejected response, source subset, annotator or judge type; process: prompt, chosen response, rejected response; offline reward-model training data collection",
      "feedback_verifier": "Bradley-Terry-style scalar reward model trained on curated pairwise preferences",
      "audit_focus": "RewardBench leaderboard performance should not be treated as proof that the preference pairs are clean., LLM-judged and human-labeled subsets have different bias profiles., Source-dataset licenses and filtering rules need subset-level audit.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.18451",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.18451",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.18451",
        "code": null,
        "data": "https://huggingface.co/collections/Skywork/skywork-reward-data-collection-66d7fda6a5098dc77035336d",
        "huggingface": "https://huggingface.co/collections/Skywork/skywork-reward-model-66d7fbdebae0e60d00a6b60d",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.18451"
    },
    {
      "id": "generative-reward-models-2024",
      "title": "Generative Reward Models",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Dakota Mahan",
        "Duy Van Phung",
        "Rafael Rafailov",
        "Chase Blagden",
        "Nathan Lile",
        "Louis Castricato",
        "Jan-Philipp Fränken",
        "Chelsea Finn",
        "Alon Albalak"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "process_reward",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "reward-modeling",
        "rlaif",
        "preference-data",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives",
        "data_construction_open_release_recipes"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "scalar-reward-modeling",
        "rlaif-synthetic-feedback"
      ],
      "one_line_summary": "Generative Reward Models trains LLMs to generate rationales and synthetic preference judgments, combining RLHF-style labels with RLAIF-style feedback.",
      "why_it_matters": "It expands the Preference & Reward Feedback track beyond scalar discriminative reward models by making generated critique/rationale text part of the reward-model data object.",
      "data_object": "prompt, candidate responses, generated reasoning trace, synthetic preference judgment or ranking; process: prompt, candidate response a, candidate response b; offline generative reward-model training and evaluation",
      "feedback_verifier": "GenRM generative preference judgment with self-generated reasoning traces",
      "audit_focus": "Synthetic preference labels can inherit judge-model bias., Generated rationales may be off-policy for the base model and fail to generalize., Majority-vote accuracy gains should not be treated as direct evidence of data quality.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2410.12832",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2410.12832",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2410.12832",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2410.12832"
    },
    {
      "id": "generative-verifiers-reward-modeling-as-next-token-prediction-2024",
      "title": "Generative Verifiers: Reward Modeling as Next-Token Prediction",
      "year": 2024,
      "venue": "ICLR 2025",
      "authors": [
        "Lunjun Zhang",
        "Arian Hosseini",
        "Hritik Bansal",
        "Mehran Kazemi",
        "Aviral Kumar",
        "Rishabh Agarwal"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "programmatic",
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "process_reward",
        "answer_level"
      ],
      "training_use": [
        "reward_modeling",
        "evaluation"
      ],
      "domains": [
        "reward-modeling",
        "verification",
        "math",
        "reasoning"
      ],
      "category": [
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "preference-reward-expansion-2024plus",
        "scalar-reward-modeling",
        "generative-verifier"
      ],
      "one_line_summary": "Generative Verifiers trains verifier models with next-token prediction over verification rationales and judgments for Best-of-N reasoning selection.",
      "why_it_matters": "It is relevant to Preference & Reward Feedback because it reframes reward modeling as generative verification rather than only scalar classification.",
      "data_object": "problem, candidate solution, generated verification rationale, correctness judgment / verifier output; process: problem, candidate solution, generated solution; best-of-N / verifier-guided reasoning evaluation",
      "feedback_verifier": "generative verifier trained as next-token prediction jointly on verification and solution generation",
      "audit_focus": "Synthetic verification rationales may contain errors., Prompt and output format can affect next-token verifier judgments., Best-of-N improvements are not proof that verifier labels are calibrated.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2408.15240",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2408.15240",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2408.15240",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2408.15240"
    },
    {
      "id": "sentence-level-reward-model-can-generalize-better-for-aligning-llm-from-human-preference-2025",
      "title": "Sentence-level Reward Model can Generalize Better for Aligning LLM from Human Preference",
      "year": 2025,
      "venue": "arXiv",
      "authors": [
        "Wenjie Qiu",
        "Yi-Chen Li",
        "Xuqin Zhang",
        "Tianyi Zhang",
        "Yihang Zhang",
        "Zongzhang Zhang",
        "Yang Yu"
      ],
      "source_role": [
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "step_level",
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "reward_modeling",
        "preference_learning"
      ],
      "domains": [
        "reward-modeling",
        "preference-data",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "process_trace_supervision_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "🎚️ Scalar reward / ORM data",
      "tags": [
        "preference-reward-expansion-2024plus",
        "scalar-reward-modeling",
        "sentence-level-reward"
      ],
      "one_line_summary": "Sentence-level Reward Model decomposes response-level preference learning into sentence-level reward estimates aggregated back into a Bradley-Terry response score.",
      "why_it_matters": "It adds an intermediate-granularity reward signal to the Preference & Reward Feedback track, between token-level rewards and whole-response scalar reward models.",
      "data_object": "prompt, response segmented into sentences, sentence-level reward cues, aggregated response-level preference score; process: prompt, response, sentence segments; offline reward-model training and downstream alignment",
      "feedback_verifier": "sentence-level reward model with response-level Bradley-Terry aggregation",
      "audit_focus": "Sentence-level credit assignment may not reflect causal contribution to final preference., Sentence segmentation choices can affect reward attribution., Response-level preference labels may be too coarse to validate individual sentence rewards.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2503.04793",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2503.04793",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2503.04793",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2503.04793"
    },
    {
      "id": "test-time-preference-optimization-on-the-fly-alignment-via-iterative-textual-feedback-2025",
      "title": "Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback",
      "year": 2025,
      "venue": "ICML 2025",
      "authors": [
        "Yafu Li",
        "Xuyang Hu",
        "Xiaoye Qu",
        "Linjie Li",
        "Yu Cheng"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "process_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "test_time_compute",
        "evaluation"
      ],
      "domains": [
        "preference-optimization",
        "test-time-alignment",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "test-time-alignment"
      ],
      "one_line_summary": "TPO converts reward-model scores into textual critiques and refines outputs at inference time without updating model parameters.",
      "why_it_matters": "It belongs in Preference & Reward Feedback as a test-time feedback recipe where reward signals become textual supervision rather than offline training examples.",
      "data_object": "query, sampled candidate responses, reward-model scores, textual loss/critique, textual gradient, refined response; process: query, sampled responses, reward model score; test-time inference loop without parameter updates",
      "feedback_verifier": "FsfairX-LLaMA3-RM-v0.1; Llama-3.1-Tulu-3-8B-RM for unaligned-model setting",
      "audit_focus": "Reward-model feedback can be overfit at inference time., Textual critiques may encode reward-model artifacts rather than human preference., Benchmark improvements should not be treated as data-quality proof.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2501.12895",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2501.12895",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2501.12895",
        "code": "https://github.com/yafuly/TPO",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2501.12895"
    },
    {
      "id": "re-po-robust-enhanced-policy-optimization-as-a-general-framework-for-llm-alignment-2025",
      "title": "RE-PO: Robust Enhanced Policy Optimization as a General Framework for LLM Alignment",
      "year": 2025,
      "venue": "ICLR 2026",
      "authors": [
        "Xiaoyang Cao",
        "Zelai Xu",
        "Mo Guang",
        "Kaiwen Long",
        "Michiel A. Bakker",
        "Yu Wang",
        "Chao Yu"
      ],
      "source_role": [
        "construction_recipe",
        "verifier_reward",
        "audit_failure"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "preference_learning",
        "audit"
      ],
      "domains": [
        "preference-optimization",
        "noisy-feedback",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "noisy-preference-feedback"
      ],
      "one_line_summary": "RE-PO robustifies preference optimization by inferring soft confidence weights for noisy preference labels through an EM-style loop.",
      "why_it_matters": "It gives the Preference & Reward Feedback track an explicit treatment of noisy preference labels instead of assuming all chosen/rejected pairs are equally reliable.",
      "data_object": "prompt, preferred response, dispreferred response, observed preference label, inferred label-confidence weight; process: prompt, chosen response, rejected response; offline noisy-preference optimization",
      "feedback_verifier": "EM-estimated label correctness and annotator reliability over observed preference labels",
      "audit_focus": "Latent clean-label assumptions may not match real annotator disagreement., Posterior confidence can be miscalibrated if the policy model is poorly calibrated., Synthetic noise robustness does not prove robustness to all human preference ambiguity.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2509.24159",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2509.24159",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2509.24159",
        "code": "https://github.com/XiaoyangCao1113/RE-PO",
        "data": null,
        "huggingface": null,
        "project": "https://repo-alignment.github.io/",
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2509.24159"
    },
    {
      "id": "how-well-can-preference-optimization-generalize-under-noisy-feedback-2025",
      "title": "How Well Can Preference Optimization Generalize Under Noisy Feedback?",
      "year": 2025,
      "venue": "TMLR 2026",
      "authors": [
        "Shawn Im",
        "Sharon Li"
      ],
      "source_role": [
        "audit_failure",
        "construction_recipe",
        "survey_background"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "pairwise_preference"
      ],
      "training_use": [
        "audit",
        "preference_learning"
      ],
      "domains": [
        "preference-optimization",
        "noisy-feedback",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "audit_failure_contamination_verifier_attacks",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "noisy-preference-feedback"
      ],
      "one_line_summary": "This paper studies how preference optimization generalizes when pairwise feedback is noisy through mislabeling or uncertainty.",
      "why_it_matters": "It gives Preference & Reward Feedback curators an audit lens for noisy labels instead of assuming preference pairs are clean.",
      "data_object": "prompt, preferred response, dispreferred response, noisy preference label, noise model; process: prompt, chosen response, rejected response; offline noisy-preference learning analysis",
      "feedback_verifier": "noisy preference label model covering mislabeling and uncertainty",
      "audit_focus": "Modeled noise may not fully capture real annotator disagreement or preference pluralism., Finite-step theoretical guarantees depend on assumptions about the preference distribution and noise process., Empirical validation should not be treated as a released preference dataset.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2510.01458",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2510.01458",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2510.01458",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2510.01458"
    },
    {
      "id": "scaling-laws-for-reward-model-overoptimization-in-direct-alignment-algorithms-2024",
      "title": "Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms",
      "year": 2024,
      "venue": "NeurIPS 2024",
      "authors": [
        "Rafael Rafailov",
        "Yaswanth Chittepu",
        "Ryan Park",
        "Harshit Sikchi",
        "Joey Hejna",
        "Bradley Knox",
        "Chelsea Finn",
        "Scott Niekum"
      ],
      "source_role": [
        "audit_failure",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required"
      ],
      "supervision_granularity": [
        "pairwise_preference",
        "scalar_reward"
      ],
      "training_use": [
        "audit",
        "evaluation"
      ],
      "domains": [
        "preference-optimization",
        "reward-overoptimization",
        "alignment",
        "post-training"
      ],
      "category": [
        "preference_reward_feedback_data",
        "audit_failure_contamination_verifier_attacks",
        "training_usage_optimization_objectives"
      ],
      "subfield": "⚖️ DPO / preference optimization",
      "tags": [
        "preference-reward-expansion-2024plus",
        "dpo-preference-optimization",
        "reward-overoptimization"
      ],
      "one_line_summary": "This paper audits reward-model overoptimization in direct alignment algorithms across KL budgets, objectives, datasets, and model scales.",
      "why_it_matters": "It shows that DPO-like direct preference objectives can still over-optimize proxy rewards even without a separately trained reward model.",
      "data_object": "prompt, preferred/dispreferred summary pair, direct-alignment training run, KL budget, proxy reward, GPT-4 win-rate diagnostic; process: prompt, chosen response, rejected response; offline direct-alignment overoptimization audit",
      "feedback_verifier": "proxy reward and GPT-4 win-rate diagnostics for reward overoptimization",
      "audit_focus": "GPT-4 win rate is a proxy for gold quality, not direct human ground truth., Reward overoptimization trends depend on KL budget, beta, model scale, and dataset., Audit results should not be used as evidence that the source preference data is clean.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2406.02900",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2406.02900",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2406.02900",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2406.02900"
    },
    {
      "id": "reward-shaping-to-mitigate-reward-hacking-in-rlhf-2025",
      "title": "Reward Shaping to Mitigate Reward Hacking in RLHF",
      "year": 2025,
      "venue": "ICML",
      "authors": [
        "Jiayi Fu",
        "Xuandong Zhao",
        "Chengyuan Yao",
        "Heng Wang",
        "Qi Han",
        "Yanghua Xiao"
      ],
      "source_role": [
        "audit_failure",
        "construction_recipe",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "answer_level",
        "pairwise_preference"
      ],
      "training_use": [
        "reward_modeling",
        "audit"
      ],
      "domains": [
        "rlhf",
        "reward-hacking",
        "reward-shaping",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "training_usage_optimization_objectives",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "reward-shaping",
        "reward-hacking",
        "rlhf"
      ],
      "one_line_summary": "This paper proposes PAR, a bounded centered reward-shaping method intended to reduce reward hacking in RLHF.",
      "why_it_matters": "It treats scalar reward design as an auditable data object rather than assuming reward-model scores are safe optimization targets.",
      "data_object": "prompt, response, proxy reward, reference reward, centered reward, shaped reward, win-rate or benchmark outcome.; process: prompt, response, proxy reward; PPO/GRPO-style RLHF reward optimization.",
      "feedback_verifier": "Preference As Reward (PAR), a sigmoid-shaped centered reward derived from reward-model preferences.",
      "audit_focus": "Reward shaping can introduce a new proxy objective., PAR still depends on the reward model's latent preference quality., DeepSeek-V3 judging is an evaluation proxy, not data-quality proof.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2502.18770",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2502.18770",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2502.18770",
        "code": "https://github.com/PorUna-byte/PAR",
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2502.18770"
    },
    {
      "id": "language-models-learn-to-mislead-humans-via-rlhf-2024",
      "title": "Language Models Learn to Mislead Humans via RLHF",
      "year": 2024,
      "venue": "arXiv",
      "authors": [
        "Jiaxin Wen",
        "Ruiqi Zhong",
        "Akbir Khan",
        "Ethan Perez",
        "Jacob Steinhardt",
        "Minlie Huang",
        "Samuel R. Bowman",
        "He He",
        "Shi Feng"
      ],
      "source_role": [
        "audit_failure",
        "verifier_reward"
      ],
      "verification_contract": [
        "judgment_required",
        "programmatic",
        "mixed"
      ],
      "supervision_granularity": [
        "answer_level",
        "scalar_reward",
        "pairwise_preference"
      ],
      "training_use": [
        "audit",
        "evaluation"
      ],
      "domains": [
        "rlhf",
        "reward-hacking",
        "human-evaluation",
        "persuasion",
        "qa",
        "programming"
      ],
      "category": [
        "preference_reward_feedback_data",
        "benchmarks_evaluation_surfaces",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "rlhf",
        "misleading-humans",
        "reward-hacking"
      ],
      "one_line_summary": "This paper shows that RLHF can make models more convincing to humans without making them more correct.",
      "why_it_matters": "It separates human approval from objective correctness, a core risk for preference/reward feedback data.",
      "data_object": "task prompt, model output, human confidence judgment, human approval label, gold correctness, and false-positive analysis.; process: prompt, model output, human confidence; time-constrained human evaluation of RLHF-trained model outputs.",
      "feedback_verifier": "human correctness judgments compared against gold labels and proxy RLHF rewards.",
      "audit_focus": "Human evaluation can be fooled by confident or persuasive wrong answers., Time limits and evaluator expertise can change conclusions., Human preference labels may reward misleading explanations.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2409.12822",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2409.12822",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2409.12822",
        "code": "https://github.com/Jiaxin-Wen/MisleadLM",
        "data": "https://github.com/Jiaxin-Wen/MisleadLM",
        "huggingface": "https://huggingface.co/jiaxin-wen/MisleadLM-code",
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2409.12822"
    },
    {
      "id": "feedback-loops-with-language-models-drive-in-context-reward-hacking-2024",
      "title": "Feedback Loops With Language Models Drive In-Context Reward Hacking",
      "year": 2024,
      "venue": "ICML 2024",
      "authors": [
        "Alexander Pan",
        "Erik Jones",
        "Meena Jagadeesan",
        "Jacob Steinhardt"
      ],
      "source_role": [
        "audit_failure",
        "verifier_reward",
        "construction_recipe"
      ],
      "verification_contract": [
        "judgment_required",
        "mixed"
      ],
      "supervision_granularity": [
        "scalar_reward",
        "full_episode"
      ],
      "training_use": [
        "audit",
        "evaluation"
      ],
      "domains": [
        "reward-hacking",
        "in-context-learning",
        "feedback-loops",
        "alignment"
      ],
      "category": [
        "preference_reward_feedback_data",
        "rollout_search_test_time_trace_data",
        "audit_failure_contamination_verifier_attacks"
      ],
      "subfield": "🤝 Human preference data / RLHF",
      "tags": [
        "reward-hacking",
        "feedback-loops",
        "in-context-learning"
      ],
      "one_line_summary": "This paper shows how repeated feedback loops can drive language models toward in-context reward hacking.",
      "why_it_matters": "It broadens preference/reward feedback from static labels to feedback dynamics that can be exploited at inference time.",
      "data_object": "initial context, model output, feedback outcome, updated context, subsequent model output, and side-effect metric.; process: context, response, feedback; in-context feedback-loop environment.",
      "feedback_verifier": "explicit or implicit feedback-loop reward signal.",
      "audit_focus": "In-context feedback can teach shortcut exploitation without weight updates., Static evaluations miss feedback effects., Environment-specific feedback rules may not generalize.",
      "curation_level": "L4_carded",
      "status": "verified",
      "needs_search": false,
      "artifacts": {
        "paper": "https://arxiv.org/abs/2402.06627",
        "venue": null,
        "arxiv": "https://arxiv.org/abs/2402.06627",
        "openreview": null,
        "acl": null,
        "pmlr": null,
        "cvf": null,
        "doi": "https://doi.org/10.48550/arXiv.2402.06627",
        "code": null,
        "data": null,
        "huggingface": null,
        "project": null,
        "bibtex": null,
        "paper_card_source": null
      },
      "primary_link": "https://arxiv.org/abs/2402.06627"
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
    }
  ],
  "counts": {
    "total_entries": 324,
    "verified_entries": 214,
    "paper_card_sources": 17,
    "data_releases": 55,
    "verifiers_rewards": 68,
    "agent_environments": 19,
    "scaling_studies": 23,
    "needs_search": 110
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
            "authors": [],
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
