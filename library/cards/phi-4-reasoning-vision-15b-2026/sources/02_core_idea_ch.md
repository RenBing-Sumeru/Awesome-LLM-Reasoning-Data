Phi-4-reasoning-vision-15B 通过中融合 MLP 将 Phi-4-Reasoning 语言基座与 SigLIP-2 视觉编码器结合。Microsoft 报告约 200B 多模态训练 token 和三个阶段：MLP 图文对齐、全模型单图 instruction tuning、长上下文/多图/负责 AI 专项训练。报告给出的各阶段样本/token 总量分别为 2.0M/1.4B、62.8M/188.5B 和 3.2M/12B。

模型使用混合数据进行 SFT。推理样本含 think 控制 token、思维链和最终答案；直接回答样本以 nothink 控制 token 开始。推理数据约占混合数据的 20%。数据构造将经过过滤和修复的公开数据与 Microsoft 内部数据、定向采购数据结合，再加入重写的 caption/answer 和程序化图文转换。发布并未提供这些记录、精确混合比例或完整质量控制栈。
