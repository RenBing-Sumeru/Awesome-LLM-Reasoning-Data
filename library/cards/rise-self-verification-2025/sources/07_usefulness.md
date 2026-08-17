For post-training builders, RISE is a compact design pattern: convert each on-policy answer outcome into a second task that asks the same policy to predict correctness, then jointly optimize both trajectories. Its reported code makes the scaffolding more inspectable than a report-only claim.

For curators and auditors, the important lesson is to maintain three separate columns: the outcome predicate, the self-score target, and the validity of the explanation. Only the first two are supported here. Reuse requires independently auditing data rights, splits, leakage, parser behavior, and whether score agreement survives outside mathematical final-answer checking.

