Structural checks can be satisfied while the reasoning content remains weak. PRP labels favor using a profile, while PQP labels use correctness/ROUGE; these proxies may not capture every subjective user preference. PRMU is trained as a sequence scorer, so it does not identify the exact incorrect step.

Learnable user embeddings make user-ID handling, new-user initialization, and split design important reproduction questions. This is an architectural audit question, not a claim that the paper experimentally fails on all unseen users. Model-generated traces and GPT-4o judging also create a dependence on the generator and judge.

No verified public code, tagged SFT dataset, PRP/PQP release, or model checkpoint is pinned here. Exact serialized schemas, licenses for newly constructed artifacts, and record-level decontamination details remain unknown. These gaps are listed in `needs` rather than filled with guessed links.

Primary-source locations: Sections 3.2–3.3, 4, and the paper's limitations; release gaps checked against the official abs page.
