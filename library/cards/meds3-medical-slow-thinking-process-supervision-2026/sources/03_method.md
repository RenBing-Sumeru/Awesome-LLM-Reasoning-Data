1. **Step 1.** Sample 8,000 curriculum-selected questions from five medical domains and 16 public datasets, retaining reference answers and rule-checkable output formats.
2. **Step 2.** Use a small policy model to run MCTS, preserving each reasoning prefix, candidate continuation, visit statistics, and terminal verification result.
3. **Step 3.** Continue rollouts from tree nodes and derive soft dual-sided supervision from node values and value dynamics; steps that reduce value receive explicit penalties.
4. **Step 4.** Rank and filter self-explored trajectories, removing unverifiable or low-quality paths and producing records for reinforcement fine-tuning, preference learning, and PRM training.
5. **Step 5.** Update the policy and PRM and repeat exploration; optimization is secondary to the node-level data and supervision pipeline.
