- Read quantities by stage: >10B image-text pairs is an initial pool, while 220M OCR images, 40M grounding annotations, >140M GUI QA pairs, and 50M instruction samples describe different constructed subsets.

- Long-CoT SFT has explicit think/answer/box formatting and cleaning rules, but no public record count, generator manifest, or trace release.

- RLCS combines offline multi-model pass@k plus expert labels with online rollout outcomes; exact domain ratios, bins, `k`, and curriculum histories are missing.

- The reward system is domain-specific and partly open-sourced, yet most signals validate final outputs; the report itself warns that correct answers can contain wrong reasoning.

- Benchmark improvements and cross-domain transfer are model-utility evidence, not proof that hidden data are licensed, uncontaminated, or reproducible.

- Keep release classes separate: MIT model weights and Apache-2.0 reward/inference code are public; training corpora, long-CoT/RL records, reward-model weights, full training code, and lineage ledgers are not.

