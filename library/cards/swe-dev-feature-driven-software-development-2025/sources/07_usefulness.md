1. **Feature-development SFT:** Train agents on PRDs, incomplete repositories, and gold implementations to localize, edit, and implement features. Split by repository and compute Pass@1 with developer tests plus full regression suites.

2. **Test-reward RL:** Use relevant test pass rates as rewards in containers and preserve commands, logs, and failure types. Label compilation failures, timeouts, and assertion failures separately to prevent agents from exploiting infrastructure.

3. **Evaluate feature agents:** Use the 500-task easy/hard split to compare single agents, reasoning models, and multi-agent systems. For requirement clarification, architecture design, or non-Python systems, SWE-Dev covers only implementation and needs additional human or specification-based evaluation.
