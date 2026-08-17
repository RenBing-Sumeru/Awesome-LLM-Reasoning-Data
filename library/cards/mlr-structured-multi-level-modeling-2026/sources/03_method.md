1. **Collect trajectories:** Obtain full model reasoning and terminal labels from four mathematical, scientific, and rule-reasoning benchmarks.
2. **Segment paragraphs:** Split traces into paragraphs, decide whether adjacent chunks form one semantic step, and merge them.
3. **Annotate structure:** Generate a cognitive mode, subgoal, summary, local outcome, and source text for every step.
4. **Train at multiple levels:** A high-level model predicts modes and subgoals, while a lower-level model executes each step and is evaluated with terminal correctness and local structure.
