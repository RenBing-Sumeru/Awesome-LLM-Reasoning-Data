核心贡献是 Anchor–Adapter 的捷径检索解释：Qwen2.5-Math 中层 MLP 的 L18–20 是触发记忆答案的 Functional Anchor，L21+ 则重组残差流的 Structural Adapter。答案困惑度下降而提示侧连贯性变差的 Perplexity Paradox 是宏观信号。

作者公开的是分析代码而非新数据集；训练数据与 RLVR 准备依赖早期 Spurious Rewards 仓库，额外比较 checkpoint 仅宣布未来发布。

该卡把“泄漏依赖的成功”定义为可被定位电路的选择性抑制所移除，而干净对照不受影响。反馈契约不是奖励正确性，而是用 Layer-19 泄漏 probe 决定是否进入反事实干预；这使污染风险成为可审计输出，而非仅凭分数猜测。

它的比较对象是只报告 RLVR 分数的黑箱研究，强调机制复核。
