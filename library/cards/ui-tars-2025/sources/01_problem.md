GUI agents must ground language in screenshots, choose low-level actions, preserve long-horizon intent, recover from mistakes, and know when to finish or ask a user for help. UI-TARS addresses this as a native screenshot-to-thought-and-action model rather than a separate planner, OCR stack, and controller.

The work was released in 2025 as an arXiv preprint. Official paper: https://arxiv.org/abs/2501.12326

The report belongs in the data-disclosure ledger because it reconstructs a roughly 50B-token pipeline from perception data, normalized demonstrations, synthetic thoughts, online virtual-PC trajectories, human error correction, SFT, and DPO. This review did not verify a reusable corpus, model release, environment snapshot, or complete source-rights ledger.
