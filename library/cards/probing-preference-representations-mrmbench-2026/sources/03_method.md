1. **Build the source pool:** Extract responses and annotations mappable to six attributes from preference resources such as PKU-SafeRLHF and HelpSteer.

2. **Generate or reorganize feedback:** Construct easy binary and hard ternary tasks for each dimension while controlling other attributes so probes target the intended representation rather than overall quality.

3. **Verify and filter:** Attach lightweight probes to RM hidden representations or outputs and measure separability across dimensions, layers, and models.

4. **Train and evaluate:** Compare probe scores with RewardBench, AlpacaEval, and downstream PPO performance and test probe-guided reward selection or augmentation.
