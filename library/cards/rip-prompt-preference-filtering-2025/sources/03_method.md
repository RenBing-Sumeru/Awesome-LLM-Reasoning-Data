For a preference pair, RIP scores the rejected response and the chosen-versus-rejected reward gap. Prompts whose response behavior indicates weak integrity are filtered before DPO, while retained prompts can be paired with model-generated responses and reward-model annotations.

Self-RIP first uses RIP-curated prompts as few-shot examples to generate new instructions, then applies RIP again to the generated prompts. The paper reports DPO experiments on WildChat and HelpSteer2 as well as synthetic instruction data.
