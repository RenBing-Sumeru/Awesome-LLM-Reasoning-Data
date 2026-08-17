1. **Build varied judge prompts.** GPT-4o rewrites a base pairwise-judge template by sampling roles, criteria, formats, and Chinese or English; the template, question, chosen answer, and rejected answer form the input.

2. **Generate and filter SFT judgments.** GPT-4o writes a chain-of-thought critique and `[[A]]`/`[[B]]` verdict. The answer order is swapped; only judgments that select the source-dataset preferred answer in both orders enter SFT. Chosen and rejected answers are length-balanced.

3. **Warm up the base judge.** Qwen2.5-32B-Base is trained with standard SFT on 20K filtered judge records plus limited proprietary non-judge dialogue data; the target is critique plus verdict.

4. **Construct difficult preference pairs.** For prompts rejected by the teacher filter, the SFT model samples six judgments. Rule-based correctness filtering separates chosen and rejected judgments.

5. **Enhance with DPO.** The SFT model is the DPO reference; DPO on 20K pairs is combined with an NLL term (`alpha=0.2`) to discourage over-optimization. Reproduction must fix the prompt sampler, source splits, GPT-4o version, random samples, and undisclosed proprietary dialogue data; its license is not stated in the paper.

SFT runs for two epochs with batch size 128 and maximum length 4,096; DPO runs for two epochs with batch size 32. Evaluation fixes temperature at 0 and top-p at 1. These budgets and random sources affect reproducibility.
