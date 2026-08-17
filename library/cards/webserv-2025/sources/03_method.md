The end-to-end pipeline has five auditable stages.

1. **Task and environment setup.** WebArena Shopping, Shopping Admin/CMS, and GitLab tasks are mapped to self-hosted applications. The Incus manager clones a stopped base container, launches it, checks health, routes browser traffic through a host-rewriting proxy, and deletes the clone after the episode. The exact base images and immutable snapshots are not released.

2. **Observation and action construction.** JavaScript and Playwright derive the compact DOM observation described in Appendix A. Appendix B defines element interactions, form input, navigation, tab operations, and explicit termination. Each assistant turn calls one step_browser tool; the next tool message carries the page observation.

3. **SFT bootstrap.** The paper states that Claude 4.5 Sonnet trajectories train each Qwen model for three epochs before RL. The repository’s conversion script reads source result.json and session.json pairs and keeps a session only when result.success is true, score is strictly positive, and at least one reasoning block exists. It converts the conversation into messages/tools form and intentionally omits the source result and score.

4. **On-policy GRPO.** The paper reports 200 rollouts per step, 12 samples per prompt, rollout batch 16, training batch 12, oversampling batch 32, temperature 1.0, and maximum response length 4096. Training uses dynamic sampling that requires nonzero reward standard deviation. Results are reported at step 99 for Qwen3-4B and Qwen3-30B-A3B.

5. **Reward and logging.** The runtime task score multiplies applicable string, URL, and HTML checks; string checks may include configured LLM fuzzy matching. The rollout reward adds a flat -0.05 if any malformed tool call or browser exception occurred. Code can save debug rollout objects, but no paper-run Qwen rollout logs are present in the public mirror.

The public SFT data is physically split into two byte parts totaling 133,351,959 bytes. Concatenation yields 726 valid JSONL records. Because part 01 begins inside a record, these are byte parts rather than independently parseable JSONL shards.

