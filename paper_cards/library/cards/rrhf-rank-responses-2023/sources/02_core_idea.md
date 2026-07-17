RRHF treats ranking as the supervision object. It scores each candidate with the policy’s conditional log probability and penalizes disagreements between that score order and the feedback order.

The candidate set can mix self-samples, outputs from other models, and human answers. This makes response quality and ranking quality distinct resources: the training signal depends on both which alternatives are supplied and how they are ordered.
