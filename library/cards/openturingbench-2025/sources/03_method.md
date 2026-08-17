1. Collect a source corpus. Start from human-written HuffPost news and generate counterpart texts with seven open instruction models; labels identify human or generator authorship.

2. Define stress tests. Partition data into in-domain E0, temperature, scale, self-rewrite, and human-machine-mixing variants E1–E4, plus essay-domain E5 and unseen-generator E6 tests.

3. Train OTBDetector. Encode long texts with Longformer, form anchor-positive-negative triplets by authorship label, and optimize triplet loss so same-author examples cluster while different labels separate.

4. Attribute at inference. Pre-compute class centroids from train embeddings and assign a query to its nearest cosine-similarity centroid; the label is the detector decision.

5. Compare fairly. Train every detector only on the benchmark train split, fine-tune model-based baselines for ten epochs, and report weighted precision, recall, and F1 on each test task. Reproduction requires the released split, generator versions, preprocessing, and task configuration; license details should be checked on the dataset page.
