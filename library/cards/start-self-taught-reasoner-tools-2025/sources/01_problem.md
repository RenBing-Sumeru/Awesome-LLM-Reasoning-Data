The canonical source is the accepted **EMNLP 2025 Main Conference** paper, ACL Anthology ID `2025.emnlp-main.683`, pages 13512–13553. The Card follows the proceedings author order and uses the final 42-page paper, Appendices A–J, the Responsible NLP Checklist, the ACL venue record, and arXiv:2503.04625. The ACL record verifies the citation and paper license; it does not imply that the paper's training data, Python environment, code, or checkpoints were released.

START addresses a concrete mismatch in long-reasoning models: QwQ-32B-Preview and DeepSeek-R1-Distill-Qwen-32B can reason at length but often do not invoke a code interpreter when ordinary prompts ask them to use one. The paper asks first whether targeted text interventions can activate latent Python use without training, and then whether successful interventions can be turned into supervised tool-use trajectories for self-training.

The training object is not merely a problem-answer pair. A conceptual accepted record contains:

| Component | Intended content |
|---|---|
| task | A math or coding problem and its upstream source |
| pre-intervention behavior | Long reasoning and an initially correct or incorrect final answer |
| intervention | One paraphrased hint from six functional types, inserted after `Wait`, `Alternatively`, or reasoning termination |
| action and observation | Python code, interpreter output or error, and follow-up interpretation or debugging |
| post-intervention behavior | Continued reasoning and a new final answer |
| selection fields | Before/after correctness, execution validity, repetition status, and acceptance decision |

This schema is reconstructed from the method and examples; no machine-readable record schema or sample set is available. The principal selection signal is whether a hint changes an initially wrong solution into a successful one, supplemented by repeated sampling, repetition removal, and removal of incorrect code executions. The exact answer checker, code-test behavior, repetition detector, error handling, and Figure 1 `modify` stage are not disclosed.

The work belongs in **Data Construction and Open Release Recipes** because its main reusable contribution is a pipeline: hint design and paraphrasing → hint insertion → Python-interleaved trajectory generation → correctness and execution filtering → 10K `D_seed` → START-0 → a reported 40K `D_START` → full-parameter SFT. It is adjacent to Environment and Agent Trajectory Data because Python observations are part of each trajectory, but the environment is not released or replayable; one primary category is therefore sufficient.

It is not an RLVR recipe, a process-reward dataset, or an open data release. Correctness and execution are used to select SFT targets rather than as an optimization reward, no step labels or scalar rewards are published, and no official data, code, models, environment, logs, or project page were found.

The Card reaches `L4_chinese_review_ready` because the complete bilingual analysis is grounded in the accepted paper and checklist and the institutions are verified from the paper's first page. L4 denotes review material, not reuse readiness. Direct data or checkpoint reuse is blocked because the objects do not exist publicly, while reproduction is blocked by missing verifier, environment, sampling, filtering, modification, license, and release details.
