1. **Construct visual tasks:** Sample image–question instances from several visual QA and reasoning datasets while preserving answer evidence.
2. **Generate CoS trajectories:** Ask models to output sequential stages such as perception, relation identification, and reasoning.
3. **Create fine-grained rewards:** Combine a step judge with final-answer verification to assign correctness or quality scores to each step.
4. **Filter and train:** Remove inconsistent trajectories, package about 300K CoS records, and train step reward models for reranking and RL.
