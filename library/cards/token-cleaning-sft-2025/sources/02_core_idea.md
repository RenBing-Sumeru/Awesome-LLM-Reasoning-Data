The training object is a masked instruction-response target, not a newly written reasoning corpus. The original examples remain available, but different subsets of their target tokens are allowed to contribute to the supervised-fine-tuning loss.

The paper estimates the influence of each token on model updates and uses that estimate as a cleaning signal. This changes data consumption inside a record: the method can retain an example's useful content while suppressing tokens judged unlikely to help the intended model update.
