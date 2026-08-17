1. **Construct four task records.** Pair open-source TTS outputs and recordings; reuse QualiSpeech for seven-aspect quality; create scenario and dialogue hard negatives from ESD, DailyTalk, GPT-4.1, and TTS systems.
2. **Create structured supervision.** Gemini-2.0-Flash or Gemini-2.5-Pro supplies dimension scores, explanations, and pairwise choices. The authors split data into SFT, GRPO, and benchmark partitions and retain RL/benchmark items matching majority human preference.
3. **Fine-tune the judge.** Qwen2.5-Omni-7B-thinker maps text/audio inputs to `<think>` dimension scores and short explanations followed by `<answer>`; SFT maximizes likelihood of the whole structured target.
4. **Optimize reasoning consistency.** GRPO samples multiple outputs. Format failure receives -1, answer accuracy is rewarded, and RCR compares each predicted dimension relation or score with the gold target; KL regularization anchors the SFT policy.

Reproduction requires the repository revision, source datasets, prompts, model versions, human-verification protocol, split files, and GRPO rollout count/weights; several training hyperparameters are only in the appendix.
