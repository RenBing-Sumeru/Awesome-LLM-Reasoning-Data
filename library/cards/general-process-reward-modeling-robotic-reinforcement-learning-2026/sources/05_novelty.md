Compared with task-specific handcrafted rewards, Robo-Dopamine unifies state transitions and progress labels across tasks and preserves negative progress.

The substantive change is therefore not a generic SFT, DPO, BCE, or RL objective, but the construction of task goals, state transitions, actions, progress scores, and negative transitions as a learnable and auditable data object. By storing feedback evidence that would otherwise remain hidden in scripts or environment execution, the work allows later studies to replace labelers, filters, or negative-example sources independently.
