The pipeline begins with known-answer math questions. It clusters sentence embeddings, selects representative anchors, generates candidate traces, and verifies final answers. Strategic brainstorming and reflection augment the verified traces before training.

The augmented set is partitioned into mini-batches. A dynamic validation module computes a quality score and compares it with a dataset-adaptive threshold; accepted records are used in SFT or DPO self-training. The paper analyzes twelve generated solutions per problem for diversity.
