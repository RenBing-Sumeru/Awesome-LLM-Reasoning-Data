- Read Section 3 for the seven-stage collection funnel, Qwen3-32B quality filter, Docker execution, and paper-era 528/728 counts; treat current HF counts as a later release.

- Inspect the verifier, not only the schema: pinned repotest applies both patches but sets `solved` from PASS_TO_PASS alone, leaving FAIL_TO_PASS unenforced.

- Separate task artifacts from trajectories. Commits, patches, tests, commands, images, and timeouts are public; complete success/failure agent action histories and intermediate artifacts are optional and noncanonical.

- For audit, pin all revisions, reconcile four splits, test contamination and equivalent patches, enforce container replay, and review upstream rights, PII, malware, network, secret, and sandbox controls.
