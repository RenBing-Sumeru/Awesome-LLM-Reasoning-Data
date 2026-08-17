# Usefulness

- **Math SFT builder:** given solved math seeds, reuse the four transformation buckets to output instruction-rationale-answer records; compare at fixed tokens and stratify accuracy by transformation type.
- **Lineage auditor:** retain `type`, `original_question`, and `original_response` to measure semantic uniqueness, answer leakage, and source mixture; output a transformation audit before merging subsets.
- **Do not use when:** the task lacks stable answer constraints or teacher terms prohibit redistribution, because MetaMath's acceptance and public-release assumptions no longer hold.

