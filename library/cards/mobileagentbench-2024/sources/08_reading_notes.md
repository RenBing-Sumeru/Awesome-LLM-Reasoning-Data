Read MobileAgentBench as a harness paper first and a score table second. The important object is the executable episode: instruction, reset state, observation channel, action trace, and validator result.

Do not collapse "easy to use" into "easy to compare." Ease of setup improves adoption, but score comparability still depends on exact emulator, apps, task data, action interface, prompts, and validator revision. Validator success, model final answer, and human-perceived task satisfaction should remain separate claims.

For downstream use, record unknowns instead of filling them in: license details, hidden/private split, live-service dependence, and exact app-state assumptions can determine whether the benchmark is suitable for redistribution, training, or only local evaluation.
