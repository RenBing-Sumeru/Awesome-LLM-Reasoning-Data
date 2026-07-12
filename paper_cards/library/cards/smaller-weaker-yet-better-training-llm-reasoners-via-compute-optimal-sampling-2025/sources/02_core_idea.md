Shows that more samples from a weaker, cheaper generator can produce better filtered reasoning-training data under a fixed budget.

Gemma2-9B, Gemma2-27B, Gemini-1.5-Flash, or Gemini-1.5-Pro samples complete reasoning solutions. The feedback contract is: final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting. The terminal condition is: retain a sampled reasoning trace when its final answer matches the reference or is accepted by the designated judge.
