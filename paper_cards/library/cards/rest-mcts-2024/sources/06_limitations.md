search policy may overfit process reward artifacts. accepted traces can hide rejected rollout distribution. inference budget may be conflated with data quality.

Reproduction also depends on split policy (released PRM data exposes train/validation/test splits on Hugging Face, but per-experiment task splits need checking.), decontamination (unknown), and license provenance (Hugging Face PRM data card reports apache-2.0; project website is CC BY-SA 4.0; code license should be checked before reuse.).
