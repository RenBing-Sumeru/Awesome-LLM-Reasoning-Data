1. **Explicate geometric constraints:** Recover implicit collinearity, non-degeneracy, point-order, and region conditions so the task can be expressed in native Mathlib.

2. **Anchor configurations:** Construct stable point, line, circle, and coordinate configurations to prevent degenerate assignments from making the theorem trivial.

3. **Map to Lean statements:** Map objects, assumptions, and conclusions to Mathlib definitions and lemmas, generate theorem statements, and compile them under a fixed version.

4. **Iteratively repair and prove:** Use Lean diagnostics to fix types and assumptions; for the Omni subset, generate a one-pass proof and record whether the Lean kernel accepts it.
