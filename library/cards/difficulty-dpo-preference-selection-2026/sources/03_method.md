The selector scores both answers with an aligned DPO policy and its SFT reference, computes the chosen-minus-rejected implicit reward gap, sorts all pairs in ascending order, and keeps a chosen percentile. The resulting subset can train a separate downstream model, rather than requiring the selector and target to share an architecture.

The paper uses LLaMA3-iterative-DPO-final and LLaMA3-SFT to score four sources, then trains Gemma-2-2B-it reward models or Tulu3-Llama3.1-8B-SFT with DPO. The main comparisons retain 10 percent of SHP, Skywork, UltraFeedback, or RLHFlow records.
