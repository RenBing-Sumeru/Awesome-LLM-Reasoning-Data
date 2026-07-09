<!-- entry_id: openassistant-conversations-democratizing-large-language-model-alignment-2023 -->
<!-- card_type: releases -->
# OpenAssistant Conversations - Democratizing Large Language Model Alignment

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openassistant-conversations-democratizing-large-language-model-alignment-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openassistant-conversations-democratizing-large-language-model-alignment-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openassistant-conversations-democratizing-large-language-model-alignment-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, data_construction_open_release_recipes
> Links: [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html) - [NeurIPS poster](https://neurips.cc/virtual/2023/poster/73573) - [OpenReview](https://openreview.net/forum?id=VSJotgbPHF) - [arXiv](https://arxiv.org/abs/2304.07327) - [Project](https://open-assistant.io/) - [Code](https://github.com/LAION-AI/Open-Assistant) - [Data](https://huggingface.co/datasets/OpenAssistant/oasst1)

## TL;DR
OpenAssistant Conversations releases a crowd-sourced assistant conversation corpus with human-written messages, conversation trees, ratings, rankings, labels, and multilingual metadata for alignment research.

## 1. What is this work?
This is a NeurIPS 2023 Datasets and Benchmarks paper from LAION / OpenAssistant. It documents OASST1, an open assistant-style alignment dataset collected through a public crowd-sourcing platform.

The work is relevant here because it releases both instruction-following conversation data and human feedback metadata. It is not a verified reasoning benchmark, and its ratings or rankings should not be treated as automatic correctness labels.

## 2. What data object does it expose?
The exposed object is a conversation-tree dataset. Each message is linked through parent-child relations and includes metadata such as:

- `message_id`,
- `parent_id`,
- `user_id`,
- `created_date`,
- `text`,
- `role`,
- `lang`,
- `review_count`,
- `review_result`,
- `deleted`,
- `rank`,
- `synthetic`,
- `model_name`,
- `detoxify`,
- `message_tree_id`,
- `tree_state`,
- emoji reactions,
- labels.

The terminal condition is not programmatic correctness. It is a mixture of human reviews, labels, rankings, deletion status, and tree state.

## 3. What is the verifier / reward / judge / environment?
The verifier is crowd-sourced human judgment from OpenAssistant contributors. The feedback includes review results, quality labels, ranking signals, and tree-readiness metadata.

The supervision granularity is mainly answer-level or message-level. Some ranking fields can support preference construction, but any chosen/rejected pair should be derived with an explicit rule rather than assumed.

## 4. How is the data constructed?
The paper describes a public platform where volunteers wrote user prompts, assistant messages, and reviews. Conversation trees were built by expanding messages and collecting additional replies or feedback.

The released artifact includes multilingual data, role labels, review status, deletion flags, ranking metadata, toxicity scores, and tree state. Filtering and export decisions should be verified against the paper, repository, and dataset card before reuse.

Unknown or not fully specified from the official public sources used here: exact prompt/task distribution, annotator expertise and demographics, detailed inter-annotator consistency, and detailed decontamination against downstream benchmarks.

## 5. How can it enter post-training?
The dataset can support supervised fine-tuning over assistant messages and reward-model or preference-learning experiments when the feedback fields are converted into a documented preference object.

It should not be described as process supervision, executable verification, or proof of reasoning quality. Benchmark results from models trained on OASST1 are not by themselves data-quality proof.

## 6. What should readers audit?
Before reuse, readers should audit:

- the exact Hugging Face dataset revision and split,
- the semantics of `review_result`, `rank`, labels, `deleted`, and `tree_state`,
- whether deleted or non-export-ready messages are excluded,
- language balance and domain/task balance,
- PII, toxicity, and unsafe-content filtering,
- overlap with downstream evaluation sets,
- license compatibility,
- the rule used to turn rankings or labels into preference pairs.

## 7. What is missing or risky?
Main risks:

- crowd-sourced ratings can mix incompatible norms and levels of expertise,
- language and task distributions may be uneven,
- toxicity metadata is not a complete safety verifier,
- public conversation data can overlap with evaluation or later training corpora,
- fields such as rank, review result, labels, and tree state have different meanings and should not be collapsed blindly,
- annotator demographics and consistency are not fully exposed in the dataset object.

These risks should be preserved in downstream metadata instead of hidden behind a generic "human feedback" label.

## 8. Why it matters for post-training reasoning data
OpenAssistant Conversations is an important open artifact because it exposes an alignment-data pipeline that is usually proprietary: assistant messages, conversation trees, human review signals, and preference-like metadata are all available for inspection.

For this catalog, it anchors the open-release side of the Preference & Reward Feedback Data track while also showing where instruction data and feedback data can blur.

## 9. Links and citation
- Paper: https://proceedings.neurips.cc/paper_files/paper/2023/hash/949f0f8f32267d297c2d4e3ee10a2e7e-Abstract-Datasets_and_Benchmarks.html
- NeurIPS poster: https://neurips.cc/virtual/2023/poster/73573
- OpenReview: https://openreview.net/forum?id=VSJotgbPHF
- arXiv: https://arxiv.org/abs/2304.07327
- Project: https://open-assistant.io/
- Code: https://github.com/LAION-AI/Open-Assistant
- Data: https://huggingface.co/datasets/OpenAssistant/oasst1

```bibtex
@inproceedings{kopf2023openassistant,
  title = {OpenAssistant Conversations - Democratizing Large Language Model Alignment},
  author = {Kopf, Andreas and Kilcher, Yannic and von Rütte, Dimitri and Anagnostidis, Sotiris and Tam, Zhi Rui and Stevens, Keith and Barhoum, Abdullah and Nguyen, Duc and Stanley, Oliver and Nagyfi, Richárd and ES, Shahul and Suri, Sameer and Glushkov, David and Dantuluri, Arnav and Maguire, Andrew and Schuhmann, Christoph and Nguyen, Huu and Mattick, Alexander},
  booktitle = {Advances in Neural Information Processing Systems 36},
  year = {2023}
}
```
