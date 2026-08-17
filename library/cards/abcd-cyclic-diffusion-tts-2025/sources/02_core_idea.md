ABCD treats a diffusion trajectory as a search object, not a one-way sampler. Bi-directional cycles can send a candidate back to an earlier noisy state and refine it again, while an exploration–exploitation mechanism controls which candidates receive this extra budget.

Adaptive thinking time supplies the stopping decision. The key record is therefore the evolving diffusion state together with its branch and termination choices, rather than only the final decoded sample.
