The central audit pipeline begins with 290 deliberately extreme seed instructions. A Claude Opus 4-based auditor expands them into 1,160 simulated interactions for each target model—Claude Sonnet 4, Claude Opus 4, and Claude Opus 4.1—with each interaction lasting 24–64 turns. The target model produces the audited responses and actions.

Model-based scoring then measures eight alignment criteria. Four additional scorers evaluate welfare-related attributes on the same transcripts, and an Opus 4-based judge identifies admirable behavior. This produces a scalable comparative audit, but the same model family participates in generation and judgment, creating correlated-style and preference risks.

On the training side, the addendum explicitly names harmlessness training for computer-use and agentic-coding misuse and specialized reinforcement-learning training against environmental prompt injection. It does not disclose the attacks, rollout distribution, reward, verifier, algorithm, or ablation against deployment detectors.

The addendum also reports reward-hacking monitoring in two unnamed training environments. These outcomes are post-training behavior audit signals; the environments, task records, rewards, sample sizes, classifiers, and calibration are not released.
