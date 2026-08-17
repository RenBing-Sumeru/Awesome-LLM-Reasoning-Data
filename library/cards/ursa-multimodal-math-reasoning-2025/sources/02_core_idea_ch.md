URSA 结合两条不同的过程标签路线。Binary Error Locating（BEL）从某个解答前缀采样续写，以能得到正确答案的续写比例标注其潜力，并用二分搜索定位最早可能的错误。Misinterpretation Insertion（MIE）先从图像中提取数学信息，再在正确解答里改动一个易混淆的视觉条件，从注入点继续推理，并把后续步骤标为负例。

两者合并为 DualMath-1.1M，用于把 URSA-8B-RM 训练成二值逐步分类器。PS-GRPO 有意不把 PRM 标量值直接加到 RL 目标中。它以最终结果正确性为基础；但当正确 rollout 的 PRM 序列出现至少为 rho 的相邻步骤相对下降时给予惩罚。主设定 gamma=0.5、rho=0.3，根据最终正确性与下降检测赋予 1、1-gamma 或 0。

最接近的替代项是标量过程奖励 GRPO 变体、仅结果 GRPO、self-consistency 以及用于 Best-of-N 的结果奖励模型。URSA 的贡献在于这些组件的多模态组合，而不是证明采样续写价值或 PRM 下降等同于逻辑真值。
