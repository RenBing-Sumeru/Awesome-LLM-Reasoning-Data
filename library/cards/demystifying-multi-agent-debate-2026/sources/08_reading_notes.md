- Paper protocol: sample 10 candidates, greedily select five distinct answers, then run five agents for five turns.
- Separate 5K self-consistency-labelled SFT examples from 10K hard GRPO examples and test-time dialogues.
- Stage-2 rewards scale correctness 10, confidence 3, engagement 5, and wrong format -30.
- The engagement heuristic responds to observed reward hacking and can itself be gamed.
- Code and one example record are public; complete pools, traces, rewards, and adapters remain unavailable.

