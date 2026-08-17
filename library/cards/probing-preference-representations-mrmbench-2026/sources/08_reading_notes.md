1. **One-sentence position:** The paper introduces a multidimensional probing framework and MRMBench, decomposing preference capability into harmlessness, helpfulness, correctness, coherence, complexity, and verbosity, with easier binary probes and harder ternary judgments of reward representations.

2. **Method takeaway:** Construct easy binary and hard ternary tasks for each dimension while controlling other attributes so probes target the intended representation rather than overall quality. Attach lightweight probes to RM hidden representations or outputs and measure separability across dimensions, layers, and models.

3. **Data takeaway:** MRMBench contains roughly 167K instances organized around six preference dimensions, drawing on existing safety and quality-feedback data and derived contrastive examples.

4. **Evidence anchor:** Multidimensional probing has Pearson correlation above 0.8 with downstream PPO performance, indicating that dimension-level representations explain some outcomes better than a single benchmark total.

5. **Reuse decision:** Diagnose RM strengths and weaknesses across six attributes rather than comparing only one total. The main risk is that the six dimensions are not orthogonal; verbosity, complexity, and helpfulness can remain confounded, and probe separability does not prove causal use.
