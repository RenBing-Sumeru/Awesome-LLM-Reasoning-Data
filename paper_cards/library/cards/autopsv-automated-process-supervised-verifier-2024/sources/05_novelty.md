AutoPSV trains an answer-level verifier and uses changes in its confidence across reasoning steps to generate process-level annotations automatically.

For rollout/search data, the key point is that multiple generated outputs and their intermediate steps become a candidate-selection surface: the verifier is used to choose better answers and to label reasoning progress without manual step labels.
