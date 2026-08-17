Use SimpleQA as a compact factuality, abstention, and calibration benchmark. It is strongest when a project needs to separate three behaviors: answering correctly, producing a contradicting factual claim, and declining to answer.

A reusable evaluation record should keep the full CSV row or stable row identifier, metadata topic, answer type, supporting URLs, reference answer, model answer, grader label, grader model, grader prompt, evaluator commit, parser rule, sampling policy, and aggregate metric policy. Reports should include correct, incorrect, and not-attempted rates before citing F-score.

For reasoning-data audits, SimpleQA is a useful answer-level feedback schema. It shows how a narrow short-answer surface can make a cheap judge contract usable, while still requiring contamination checks, source checks, grader-version pinning, and metric interpretation.
