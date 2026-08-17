The report evaluates 17 embodied and 12 driving benchmarks, but their metrics range from accuracy and geometric scores to text overlap, external pipelines, and learned judges. This breadth is evidence of coverage, not one uniform verification contract.

For the cross-domain curriculum ablation, staged training reports 62.4 embodied average and 63.3 driving performance, versus 58.4 and 55.2 for joint non-staged training at approximately equal loss tokens. Exact tokens, runs, variance, seeds, and statistical tests are absent, so the result remains conditional on the paper setup.

In NAVSIM, Table 6 reports PDMS 86.5 for MiMo-Embodied, 87.4 after imitation learning, and 91.0 after IL plus DiffGRPO, with 796 input tokens. These are offline author-reported planner metrics; no reward implementation, environment revision, predictions, code, or derived checkpoint is available.

The proprietary trajectory experiment uses five front-camera frames at 2 Hz to predict three seconds of ego-coordinate motion and measures open-loop L2 error. It provides no dataset size, geography, dates, sensors, split, absolute results, privacy controls, or closed-loop evaluation.

The official evaluation suite is not fully self-contained. LingoQA loads a local text-classification model, thresholds its score at 0.5, and leaves the checkpoint path as `/path/to/your/Lingo-Judge-safetensors`. Therefore the exact judge and paper-score reproduction remain unresolved.
