Outcome rewards are sparse, while conventional DPO sees response-level pairs and misses the branching evidence inside search. This work asks whether MCTS look-ahead can collect on-policy alternatives and translate instance-level success into granular preferences.

The reusable object is reasoning prompt; partial state; candidate next steps sharing a parent; search visit/value; rollout outcome; step self-evaluation; chosen/rejected pair; policy iteration; inference budget. On-policy MCTS converts outcome validation and self-evaluation into step-level preference pairs for iterative DPO.
