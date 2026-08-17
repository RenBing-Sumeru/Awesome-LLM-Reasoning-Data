1. **Construct user profiles:** Combine goals, baseline mileage, dates, available days, and safety conditions into 100 planning requests.

2. **Parse soft intent:** An LLM extracts target events, preferences, and negotiable requirements into structured variables.

3. **Solve hard constraints:** A deterministic solver schedules multi-week training and checks load progression, recovery, pace, and rest.

4. **Score and fall back:** Any hard-rule violation is a safety failure; infeasible requests return conflicts and request revision. Reproduction must fix the rule set, units, solver, LLM version, and profile split.
