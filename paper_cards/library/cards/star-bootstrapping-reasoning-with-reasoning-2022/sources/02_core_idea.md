Iteratively generates rationales, filters them by answer correctness, and fine-tunes on the retained self-generated reasoning traces.

Generate rationales from a few demonstrations, check the resulting answers, rationalize failures with the known answer, retain successful traces, fine-tune, and repeat. The feedback contract is: dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.
