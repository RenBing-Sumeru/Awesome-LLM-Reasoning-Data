Prior detectors use corpus overlap, timestamps, or likelihood thresholds calibrated with external data. SrDetection instead compares a sample only with its own semantics-preserving variants, under both logits and output-only access. Its novelty is the threshold-free within-sample decision and controlled training testbed, not perplexity or code augmentation alone. Reuse requires checking semantic preservation and the target API's access mode.

This shifts calibration from a population-level reference to a matched local counterfactual.
It also makes the decision interpretable as a comparison among representations of one program.
