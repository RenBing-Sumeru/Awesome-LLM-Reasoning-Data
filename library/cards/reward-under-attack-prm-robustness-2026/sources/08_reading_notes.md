1. Positioning: PRM-BiasBench uses static perturbations, adversarial optimization, and full reinforcement-learning attacks to create specialized feedback for failures that general adversarial PRM auditing evaluation misses.

2. Method handle: collect tasks and candidates, generate feedback, verify boundary cases, and organize by capability; label review is the decisive quality control.

3. Data handle: thousands of controlled perturbation pairs with attack types, correctness labels, and PRM scores, with records centered on inputs, candidates, evaluation evidence, and feedback labels.

4. Evidence anchor: RL produces PRM scores above 0.9 while true accuracy remains below 4%, with conclusions bounded by model, candidate, and judge configurations.

5. Reuse decision: best suited to auditing PRM robustness and reward hacking before deployment; contamination, false positives, and distributional stability must be checked.
