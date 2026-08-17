DBG estimates self-preference by subtracting a gold judge's preference for a model response from that model's own judging preference. Gold judgments aggregate GPT-4o-mini, Gemini-1.5-Flash, and DeepSeek-V3. The evaluation object is a prompt with paired outputs and a pairwise decision; the aggregate is the feedback reference. Code and data are released in the official repository.

It reports a residual bias signal, rather than equating a raw self win rate with bias.
Its interpretation therefore depends on the quality of the gold panel.
