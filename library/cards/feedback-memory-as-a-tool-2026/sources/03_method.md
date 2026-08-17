1. **Collect rubric feedback:** A baseline agent produces outputs for forty-two scenarios, and evaluators return rubric scores and textual critiques.

2. **Distil reusable rules:** Recurring critiques are distilled into cross-instance guidelines, excluding details specific to one answer.

3. **Write tool memory:** Guidelines are stored in readable files that the agent can query, append, merge, or revise instead of a fixed context template.

4. **Reuse and update:** Later tasks retrieve relevant memory before answering, and new evaluation updates it; evaluator, memory budget, and update policy must be fixed.
