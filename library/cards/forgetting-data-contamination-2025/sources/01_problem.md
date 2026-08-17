Benchmark exposure is often treated as sufficient to invalidate an evaluation, although large-scale training may dilute a single observation. The missing quantity is how contamination interacts with model size, repetition, training-token scale, and the position of an example in the training stream.

The paper inserts benchmark questions into controlled pre-training data and measures the accuracy gap to a never-seen holdout. It then asks whether continued novel training and AdamW weight decay explain when the effect disappears, rather than using a black-box detector to infer provenance.
