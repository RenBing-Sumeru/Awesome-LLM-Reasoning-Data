# 问题

数学 SFT 数据通常只增加解答数量而固定种子题，因此虽然扩大 response 体量，却不一定增加新的推理视角。这样会限制问题多样性，并使大量近似轨迹带来的收益趋于饱和。

MetaMath 同时自举记录两侧：GPT-3.5-Turbo 生成答案增强解答，以及改写、自验证和正反向问题，最终产出公开的 39.5 万条 MetaMathQA 供 SFT 使用。

**L4 事实：**一手来源：OpenReview `N8N0hgNDRt`；会议/日期：ICLR 2024；判断边界：中心对象是公开数学问题—rationale 记录，而非仅模型权重；Atlas 对象/评测：变换后的 GSM8K/MATH instruction + 分步答案，并以 SFT accuracy 评估；收录说明：`L4_carded`，仅一个 Track 01 分类。

