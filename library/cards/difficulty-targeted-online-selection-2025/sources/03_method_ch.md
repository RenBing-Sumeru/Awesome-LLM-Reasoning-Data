每两个训练步，从256个参考问题各生成8次rollout估计自适应难度。冻结的Qwen2.5-Math-1.5B-Instruct嵌入骨干和相似度注意力预测其余问题。采样概率正比于exp(-|difficulty-0.5|/tau)，tau=1e-3。每批512组，一半新鲜、一半重放；FIFO容量为256或512。Math-Verify提供二元奖励。
