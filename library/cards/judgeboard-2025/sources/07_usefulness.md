Teams evaluating reasoning systems can feed an item and generated answer to several judge models, retain the gold label for meta-evaluation, and report overall plus Student-Wrong accuracy and Elo. The output is a failure-aware judge leaderboard; success requires correctly rejecting wrong answers, not only agreeing on easy positives.

Use MAJ when latency permits several independent profiles and human review of ties. Do not use the protocol as a replacement for gold labels, or transfer its public-benchmark rankings to domains whose correctness cannot be specified and audited.
