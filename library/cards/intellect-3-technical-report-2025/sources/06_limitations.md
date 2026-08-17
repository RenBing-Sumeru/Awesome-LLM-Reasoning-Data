The exact SFT sources, per-environment RL mixture weights, prompt manifests, rollout counts, decoding settings, and run-time environment revisions are not fully disclosed in one frozen artifact. Decontamination procedures are also unclear. Asynchronous updates introduce policy lag, while environment-specific rewards remain vulnerable to incomplete tests, brittle parsers, or reward hacking.

Open-source infrastructure lowers reproduction barriers but does not eliminate the compute requirement or guarantee that mutable Hub environments match the versions used in the original run.
