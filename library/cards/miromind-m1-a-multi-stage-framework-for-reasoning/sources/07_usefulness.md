1. **Full reproduction:** Train sequentially on SFT-719K and RL-62K using the released configuration, fixing tokenizer, context lengths, rollout count, reward parser, and evaluation temperature.

2. **Stage-replacement experiments:** Keep the SFT model fixed and replace only RL data or the length curriculum, or hold the RL algorithm constant while comparing SFT trajectory filters.

3. **Long-reasoning efficiency:** Report accuracy, mean tokens, repetition, and truncation. Tasks without rule-verifiable answers need another judge and cannot reuse the reward unchanged.
