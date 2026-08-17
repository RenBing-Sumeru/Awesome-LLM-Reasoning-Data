Keep three labels separate: mined edit record, fine-tuning training item, and benchmark evaluation result. AgentPack supplies the first two; HumanEvalFix and CanItEdit provide the downstream executable evidence.

Also keep snapshot versions separate. The arXiv v2 paper reports 1.8M edits through October 7, 2025, while the Hugging Face dataset card visible during verification reports a 1.3M-commit mid-August snapshot. Pin the exact dataset revision before quoting scale or training results.
