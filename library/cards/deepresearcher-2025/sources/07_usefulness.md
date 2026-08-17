For `rollout_search_test_time_trace_data`, log prompt source/split, policy revision, think/action tokens, query, ranked result IDs, URL/page revision, extracted observation, Reading-Agent/Synthesis output, cache hit, retry/error state, tool-call budget, terminal answer, format validity, F1, and all sibling rollouts. This supports audits of exploration, evidence loss, cache coupling, and reward hacking.

The release is also a useful boundary case: reproducible code, processed prompt inputs, and a trained checkpoint are confirmed; a reusable original trajectory corpus is not. Reusers should pin commits and Parquet checksums, snapshot web/environment services, audit component rights, and add citation or evidence-grounding rewards for long-form research tasks.

