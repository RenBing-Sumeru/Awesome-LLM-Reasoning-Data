The prior comparison points are uniform CoT depth, iterative InftyThink, and majority voting over whole answers. SCALE changes the allocation unit to a sub-problem and releases the chosen decomposition, scores, and per-step traces. Unlike a fixed budget, its threshold controls which steps enter deliberate reasoning.

The contribution is not a new external verifier: both outline selection and difficulty are self-evaluated. Nor are LIMOPro problems or answer matching newly introduced. The distinctive object is a selected, threshold-routed process trace with context propagation. The release makes this interface inspectable, but its missing candidate and route logs mean that the mechanism cannot be causally isolated from the generator and filter.

For reasoning-data work, it demonstrates that a trace schema should separate source answer, generated final answer, process score, route choice, compute accounting, and terminal verification. SCALE exposes some but not all of these fields.
