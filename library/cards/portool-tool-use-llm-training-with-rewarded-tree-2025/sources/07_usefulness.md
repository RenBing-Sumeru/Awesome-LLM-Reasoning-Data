**Supported training uses**

- Supervised fine-tuning is part of the reported warm start for 5 epochs, but the demonstrations and teacher are not released.
- Agent training is the primary use: PORTool applies 15 epochs of online RL over 8 shared-prefix branches in the executable 21-tool environment.
- The reward tree can guide research on terminal-to-step credit, failure-aware branch comparison, tool efficiency, and mixed local/global advantages.

**Not supported by the current release**

- Reconstructing SFT, offline RL, or imitation data requires licensed queries and complete successful, failed, and unable-to-answer trajectories with tool outputs, labels, rewards, and provenance.
- Replaying results requires the backend, frozen tool/data versions, time/location fixtures, SFT checkpoint, seeds, judge configuration, and all sampled branches.
- Training a standalone reward model is not evidenced: GPT-4o is used as a fixed terminal judge, and PORTool computes rewards for policy optimization rather than releasing or training a reward-model checkpoint.

Accordingly, `training_use` remains SFT and agent training. It does not imply a public SFT corpus, reusable offline tree dataset, or reward-model release.
