JI2S 先在 Alpaca 的随机 5% 预热子集上对目标模型进行四个周期的 LoRA 微调，并保留中间参数状态。在每个状态，它提取所有 Alpaca 候选和 LIMA 参考例子在 LoRA 参数空间的梯度特征，再将特征随机投影到 8,192 维以降低成本。一阶项聚合候选更新与代理测试梯度的关系，二阶项则通过代理海森矩阵聚合候选记录的成对交互。

作者跨训练步骤求和这些估计，并以权重 lambda 结合边际和联合项，选择分数最低的前 K 条记录。主设置在约 52K 条 Alpaca 指令—回答对中取 lambda=0.1、K=1,000。最终 LoRA 监督微调在 Open LLM Benchmarks、MT-Bench 和 GPT-4 成对评测上评估 LLaMA2-7B、Mistral-7B 和 LLaMA2-13B，并与完整 Alpaca、LIMA、AlpaGasus 和 DEITA 比较。论文称代码可用，但当前官方主要来源未提供可核验的仓库地址，因此本卡不会虚构链接。
