1. 选择样本。从基础与伪 RLVR 的 Qwen2.5-Math-7B checkpoint 中，将“先错后对”题标为泄漏候选；稳定题和 LiveMathBench 充当对照。

2. 检测宏观信号。跨 checkpoint 跟踪全文及答案 token 困惑度，再以部分提示补全检验答案字符串是否被检索而非推理。

3. 定位电路。对泄漏/稳定激活做 Path Patching，检查逐层 Logit Lens 和反事实 MLP JSD，并拟合 NDE 轨迹；合并输出为 L18–20 的 Functional Anchor 与 L21+ 的 Structural Adapter。

4. 检验因果。重置或保留选中层；按 key 激活与答案 token 重叠为每层选十个 MLP 神经元，再在推理时缩放其 key。Layer-19 probe 只对可疑提示触发抑制。

复现须有公开分析代码、精确 Qwen checkpoint 和上游 RLVR 数据/准备流程；论文未发布新数据集，也未发布宣布中的 OLMo、LLaMA、Qwen3 checkpoint。

其中真正决定接受与否的检查是 probe 是否越过由负对照第 99 百分位校准的阈值；未触发的样本保持原输出。该设计避免把所有正确答案一概压制，并把干预限定为可回放的离线反事实测试。
