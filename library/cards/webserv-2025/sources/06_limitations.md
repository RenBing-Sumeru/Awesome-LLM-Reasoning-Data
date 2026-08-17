**Release completeness.** The public mirror contains 726 Claude SFT records, not the paper’s Qwen on-policy rollout stream. Failed and zero-score Claude sessions are explicitly filtered out. Original result/session directories, per-record scores, task IDs, terminal states, RL logs, checkpoints, and model weights are absent.

**Trajectory completeness.** The conversion code selects successful source sessions, but the released schema drops success and score. Only 303 of 726 records end with an explicit terminate action; 423 end with another browser action and no subsequent observation. The records are useful for SFT, but they are not a self-verifying labeled success/failure corpus.

**Data packaging.** README names data/sft_training.jsonl, while the actual release provides two byte parts. The second begins mid-record, so normal shard-wise JSONL loading fails unless the files are concatenated in order. No checksum manifest or dataset card documents this.

**Environment replay.** Incus/WebArena images, stopped base-container snapshots, ZFS/Btrfs and OS versions, browser revision, proxy configuration, credentials setup, and reset fixtures are not pinned as an immutable bundle. Network-aware waiting improves reliability but cannot guarantee semantic stability under background traffic or timers.

**Verifier risk.** String, URL, and HTML checks may encode incomplete rubrics. LLM fuzzy and unachievable-task matching introduce model-version and prompt sensitivity. Multiplying components makes one failure zero the task score, while a single flat format penalty does not distinguish one error from many.

**Split and contamination.** SFT, RL, and evaluation all use named WebArena task families, yet exact task-ID manifests, overlap checks, deduplication, and decontamination are unknown. Training gains therefore cannot be audited for task/template leakage.

**Rights and versioning.** The repository’s MIT file clearly covers software and associated documentation but does not separately establish terms for WebArena-derived observations or Claude-generated traces. The anonymous release lacks a public source identity and immutable commit. The workshop and arXiv v2 differ in title/authors, and the arXiv abstract page’s 55.5% conflicts with 57.3% in the v2 PDF.

**Paper-stated scope.** Text observations omit spatial layout, the work targets environment design rather than algorithmic advances, and large-scale live production-site evaluation is not conducted.

