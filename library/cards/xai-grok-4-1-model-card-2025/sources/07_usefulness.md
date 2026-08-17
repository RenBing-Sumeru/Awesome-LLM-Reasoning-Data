For the assigned frontier-disclosure category, use this as a **reading and audit reference only**, not training-data reuse. It separates what is named—source classes, training stages, feedback families, filter training, reward models, deployment configuration, benchmarks, and live evaluation—from missing record-level evidence.

For comparisons, keep distinct columns for pretraining sources, main-model post-training, filter training, internal/public evaluation, safeguard configuration, live-traffic evaluation, and released artifacts. Do not collapse production data used for filter training or evaluation into evidence of general model training. Do not treat “verifiable rewards” or “model-based graders” as reusable reward data without specifications.

For safety interpretation, preserve conditions: Table 1 is under mitigations; Table 4 removes safeguards; some tests are internal/model graded. Reproduction needs prompt/filter/system versions, graders, task instances, tools, aggregation, samples, and logs.

Reuse class: blocked pending verification for training data, reward models, filters, and implementation; suitable only for disclosure analysis and configuration-aware evaluation reading.
