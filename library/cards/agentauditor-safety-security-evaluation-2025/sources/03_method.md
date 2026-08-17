1. **Scenario and risk definition:** The authors organize common agent applications and safety/security threats into a coverage framework of 29 scenarios and 15 risk categories.
2. **Trajectory collection:** Each record preserves the user goal, intermediate agent behavior, tool operations, and outcomes so annotators can determine how risk accumulates over a long trajectory.
3. **Expert annotation:** Each record is assigned a risk type and final judgment; policy-boundary cases receive separate strict and lenient decisions.
4. **Experiential memory construction:** An LLM extracts structured semantic features from historical records and generates associated evaluation-reasoning experiences.
5. **Retrieval-based judging:** For a new case, the system retrieves similar experiences in multiple stages according to scenario, risk, and behavior, then produces a decision and explanation.
