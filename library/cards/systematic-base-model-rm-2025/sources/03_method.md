1. Size-band 40 chat bases, train each for one epoch on HelpSteer2-Preference with a scalar head, and select the checkpoint by validation accuracy.
2. Evaluate binary-preference and multi-attribute regression RMs on RewardBench’s about 3k tasks/23 datasets.
3. Correlate RM score with 33 public benchmarks and scale metrics; fit Elastic Net with 10-fold CV, accepting a selector by held-out top-k coverage.
4. Compare Llama-3.1-8B post-training checkpoints, then estimate document-presence scores on 1M SlimPajama samples. The paper reports about 4,500 GPU-hours; model versions and compute details must be fixed for reproduction.
