The technical report gives internal multi-policy accuracies of 46.3% for gpt-oss-safeguard-120b and 43.6% for gpt-oss-safeguard-20b, compared with 32.5% and 32.1% for the corresponding gpt-oss models. On the reported OpenAI Moderation (2022) evaluation, both safeguard models score 82.9% F1; their reported ToxicChat F1 scores are 79.3% and 79.9%, respectively.

These figures demonstrate performance under the report's evaluation setups, not the completeness or auditability of the underlying training. OpenAI explicitly notes that the multilingual and chat safety evaluations do not directly assess classification under a provided policy. Internal policy sets, golden labels, LLM graders, policy revisions, and most evaluation artifacts are not released.

