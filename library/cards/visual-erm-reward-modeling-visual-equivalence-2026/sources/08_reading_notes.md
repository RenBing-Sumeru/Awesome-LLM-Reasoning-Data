1. **One-sentence position:** Visual-ERM trains a generative reward model that directly compares a target image with a candidate rendering and outputs discrepancy category, location, severity, and explanation.

2. **Method takeaway:** Apply controlled perturbations to code or renderings to create local layout, content, style, and structural errors while retaining correct controls. Use strong vision models or rules to generate fine-grained target–candidate discrepancy descriptions, then apply automatic checks and human sampling to form training data and VC-RewardBench.

3. **Data takeaway:** The main VC-RewardBench reported in the paper contains 1,335 carefully constructed chart, table, and SVG cases.

4. **Evidence anchor:** Using Visual-ERM for RL with Qwen3-VL-8B-Instruct improves chart-to-code by 8.4 points and table and SVG parsing by 2.7 and 4.1 points on average.

5. **Reuse decision:** Evaluate visual RMs that compare target and candidate renderings. The main risk is that visual equivalence does not ensure maintainable, accessible, or semantically correct code; executable and task-specific checks remain necessary.
