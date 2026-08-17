Correctness is environment-relative. A trace succeeds if the configured checker accepts it, but the same action sequence may fail under a different image, package version, database seed, permission setting, or timeout.

Interactive feedback can encourage brittle trial-and-error policies. The benchmark may not capture code maintainability, security, privacy, or the semantic quality of partial work unless those properties are encoded in the environment.

Public tasks and example traces can contaminate later training. Reusing traces as supervised or RL data requires checking licenses, whether failed actions should be preserved, and whether the feedback loop leaks hidden test behavior.
