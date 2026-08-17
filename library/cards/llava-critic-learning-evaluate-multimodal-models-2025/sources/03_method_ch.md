1. **建立数据源：** 从多种视觉问答、推理、描述和生成评测任务中收集图像、请求与候选模型回答。

2. **生成或重组反馈：** 为不同任务设计评分或比较准则，并使用强 judge 生成分数、chosen/rejected 标签与自然语言评价理由。

3. **验证与筛选：** 执行规则检查、格式标准化和质量筛选，将 pointwise 与 pairwise 样本统一成 critic instruction records。

4. **训练与评测：** 在 LLaVA 架构上做 SFT 得到 LLaVA-Critic，再用其分数或偏好训练其他多模态 policy，并在 judge benchmark 上验证。
