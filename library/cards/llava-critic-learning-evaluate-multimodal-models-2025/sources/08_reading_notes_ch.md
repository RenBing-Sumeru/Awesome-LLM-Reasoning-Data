1. **一句话定位：** LLaVA-Critic 构建覆盖多任务、多准则的 critic instruction data。

2. **方法抓手：** 为不同任务设计评分或比较准则。执行规则检查、格式标准化和质量筛选。

3. **数据抓手：** LLaVA-Critic-113K 包含约 46K 幅图像和 113K 条 critic 指令实例。

4. **证据锚点：** LLaVA-Critic 在多项 LMM-as-a-Judge 评测上达到或超过 GPT 模型。

5. **复用决定：** 训练开源多模态 judge。最大风险是大量标签由强模型生成。
