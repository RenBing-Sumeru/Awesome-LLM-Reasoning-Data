For `frontier_reports_data_disclosure_ledger`, Qwen3-VL is a useful schema for separating SFT records, Long-CoT traces, teacher responses, on-policy sequences/logits, verifiable RL rollouts, judge-scored outputs, and targeted failure prompts. It can guide disclosure checklists and controlled reproductions with independently licensed data.

A reusable release would pin source/revision/license, prompt, response mode, context length, teacher/policy checkpoint, all 16 rollouts, parser/verifier/judge result, pass-rate filter, reward vector/weights, rejection reason, optimizer stage, and target checkpoint. Until those artifacts exist, use the report to understand design choices, not as a claim that training data are available. Report benchmark results only as model evaluation.

