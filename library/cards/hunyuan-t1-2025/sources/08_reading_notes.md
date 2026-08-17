- Read the [official release](https://tencent.github.io/llm.hunyuan.T1/README_EN.html) as a disclosure document: 96.7% is an RL compute share, not a sample, token, or rollout count.
- Keep the two feedback stages separate: unspecified ground-truth feedback for reasoning RL, then T1-preview self-reward plus a reward model for preference alignment.
- Treat curriculum, replay, and policy reset as named scaffolds; difficulty buckets, context schedule, replay policy, reset cadence, and RL objective are unknown.
- Use the [official GitHub repository](https://github.com/Tencent/llm.hunyuan.T1) and [Hugging Face Space](https://huggingface.co/spaces/tencent/Hunyuan-T1) to verify the release/demo boundary, not as evidence of open weights, data, or training code.
- Consult the later [Hunyuan-TurboS report](https://arxiv.org/abs/2505.15431) for related-family context only; do not transfer its 16T pre-training, 3M SFT, GRPO, or verifier details to Hunyuan-T1 without an explicit binding.

