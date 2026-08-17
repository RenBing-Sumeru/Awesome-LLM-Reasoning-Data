For post-training work, this is a compact RLVR recipe for testing whether a prompt-selection decision, rather than a large training corpus, is driving a reported gain. It supplies a candidate training record, answer-level reward contract, rollout scaffold, implementation, checkpoints, and evaluation scripts.

Safe reuse requires treating it as a controlled experiment rather than a general data-minimization prescription. Before transfer, audit the selected record's rights and source, pin the released revision and environment, inspect answer parsing and equivalence logic, separate format reward from outcome reward, and measure semantic overlap with every intended evaluation set.

For disclosure-ledger work, it is a useful contrast case: substantial code/data release can coexist with unresolved source provenance and contamination evidence.

