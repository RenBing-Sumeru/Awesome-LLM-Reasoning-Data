Meta Reinforcement Fine-Tuning（MRT）把一次回答中的连续尝试视为上下文内适应过程。它不要求每个 episode 本身都给出更优解，而是估计加入该 episode 后，另一个 meta-prover 得到正确答案的概率是否上升。该进展估计作为稠密奖励加到终局结果目标中，鼓励在不同预算下仍有用的探索与利用。
