The primary oracle is incomplete by design. TensorBench has no independent hidden tests or human correctness review for new features. A passing feature patch shows consistency between the implementation, agent-authored tests, and inherited regression suite only on exercised cases. It does not establish feature completeness, and the reported pass rate can contain false positives.

The environment is narrow and partly mutable. All 199 tasks target one Scorch repository at five commits, so results do not establish transfer to other compilers or software domains. Exact benchmark-harness code, Docker digest, dependency locks, and provider-dated model snapshots were not accessible or fully disclosed in the verified artifacts. CLI package versions also changed across multi-day run windows.

Construction metadata is incomplete. An undisclosed LLM agent authored 198 descriptions; its model, scaffold, decoding, seeds, session count, candidate pool, rejection reasons, and acceptance yield are unknown. Author inspection is not an executable feasibility test. No train/dev/hidden split or empirical contamination audit is reported, and public tasks, tests, trajectories, and successful patches can enter future training corpora.

The audit has its own measurement error. Its two LLM judges inspect local diff/test evidence rather than functional correctness, use binding rules for model-matched agents, and achieve kappa 0.367 overall. It can miss subtle gaming and may disagree on borderline cases.

Finally, release availability is not equivalent to a paper claim. Appendix K says every run's prediction, trajectory, test output, report, and audit artifact is public, but the project-linked GitHub returned 404 and the accessible Hugging Face repository contains only the task dataset and lightweight grading files. Until the claimed directories, checksums, and licenses are verified, the trajectories are not safe for training reuse or exact replay.

