正确性只和 seed program 与答案匹配规则一样可靠。生成 variant 可能存在视觉歧义、渲染差异，或者严格 parser 漏掉数学等价答案。worst-case accuracy 对采样 variant 的数量和分布敏感。

仓库 badge 标注 MIT license，但 seed questions 包含已有数据集和公共资源材料，因此下游复用还要单独审计数据层 license。公开 sample data 可能污染未来 VLM 训练；除非控制生成 seed 和 program set，动态生成题并不自动等于 hidden benchmark。
