For `rollout_search_test_time_trace_data`, Search-o1 is a reference design for tool-augmented trace capture. Log the prompt and split, policy checkpoint, every reasoning segment, query, ranked result ID, retrieval timestamp, page revision/hash, raw page, refinement prompt/analysis/output, tool error, fallback, final answer, and metric. Keep raw evidence distinct from derived text.

A training adaptation could study query policy, evidence compression, failure recovery, or outcome-conditioned selection. Before reuse, pin the search/crawler stack, audit document rights, add span-level attribution and factuality checks, preserve unsuccessful searches, and avoid labeling every intermediate step as good merely because the final answer is correct.

