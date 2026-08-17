Vision-language models usually default to linear chain-of-thought reasoning, even though some visual problems are better solved with branching tree structures or graph-like aggregation. This mismatch can reduce reasoning accuracy and produce unnecessarily long outputs, increasing inference cost.

STELAR-VISION therefore studies whether a VLM can learn to select a suitable reasoning topology for each problem. It combines synthetic chain, tree, and graph reasoning data with supervised and preference-based post-training, while separately encouraging shorter correct responses.
