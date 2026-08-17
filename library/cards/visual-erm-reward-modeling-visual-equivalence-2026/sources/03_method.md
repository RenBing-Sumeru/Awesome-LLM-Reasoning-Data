1. **Build the source pool:** Collect target images and executable code for structured-visual tasks, render references, and separate chart, table, and SVG domains.

2. **Generate or reorganize feedback:** Apply controlled perturbations to code or renderings to create local layout, content, style, and structural errors while retaining correct controls.

3. **Verify and filter:** Use strong vision models or rules to generate fine-grained target–candidate discrepancy descriptions, then apply automatic checks and human sampling to form training data and VC-RewardBench.

4. **Train and evaluate:** Train Visual-ERM to emit structured feedback and use its scores for RL, selection, and revision during test-time reflection.
