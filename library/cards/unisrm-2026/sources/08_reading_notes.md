1. **Position.** UniSRM turns multi-dimensional speech judging into one reasoning-aware reward model across four task types.
2. **Method.** Data construction and SFT establish structured `<think>/<answer>` outputs; RCR-GRPO is the quality-critical step because it supervises dimensions, not only the final choice.
3. **Artifact.** UniSRM-Data, UniSRM-Bench, checkpoints, and code are stated to be public, but verify the repository version, record count, and final license before training use.
4. **Evidence.** T3-Zh reaches 91.30% versus 81.42% without RCR-GRPO; this is internal-benchmark evidence, with SOMOS-Full external PCC only 0.2347.
5. **Decision.** Use for auditable speech-ranking prototypes; first audit human agreement on accents, overlap, and the target language before deployment.
