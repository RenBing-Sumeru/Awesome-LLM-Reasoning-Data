1. **一句话定位：** Visual-ERM 训练一个直接比较目标图像与候选渲染图的生成式奖励模型。

2. **方法抓手：** 对代码或渲染结果施加可控扰动。将目标—候选图像交给强视觉模型或规则生成细粒度差异描述。

3. **数据抓手：** VC-RewardBench 的论文主 benchmark 含 1,335 个精心构造的 chart、table 与 SVG 实例。

4. **证据锚点：** 把 Visual-ERM 用于 Qwen3-VL-8B-Instruct 的 RL 后。

5. **复用决定：** 评测能够比较 target rendering 与 candidate rendering 的视觉 reward model。最大风险是视觉等价不保证代码可维护、可访问或语义正确。
