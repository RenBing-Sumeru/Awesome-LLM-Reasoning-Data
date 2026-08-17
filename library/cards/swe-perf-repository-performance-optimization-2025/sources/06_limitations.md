1. **Performance noise:** Runtime depends on CPUs, caches, concurrent load, warmup, and dependency implementations, making small differences unstable. Evaluation must fix hardware and resources, repeat runs, and report uncertainty rather than one wall-clock measurement.

2. **Scale and ecosystem:** The 140 tasks come from only nine Python repositories and cover limited optimization and hardware types. They do not represent C++, GPUs, distributed systems, memory, or energy optimization.

3. **Target leakage and oracle setting:** Providing target functions greatly simplifies localization, while realistic descriptions may be back-translated from pull requests and contain clues. The dataset is entirely a test split, so repeated tuning contaminates it. Oracle and realistic settings should be reported separately, and the 140 tasks should not be used for training.
