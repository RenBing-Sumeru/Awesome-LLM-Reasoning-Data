MathGenie 反转常见增强方向：它不直接扰动问题并寄望新题仍可解，而是迭代改变已知解答，再训练模型把受约束解答回译成匹配题目。另一个求解与验证模型生成代码集成解答和可执行验证推理，只有被接受的题解对进入发布。因此可审计目标同时包含求解示范和显式模型判断轨迹。

Google Scholar 引用数：116（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MathGenie%3A+Generating+Synthetic+Data+with+Question+Back-translation+for+Enhancing+Mathematical+Reasoning+of+LLMs&author=Zimu+Lu&hl=en）

开放状态：公开且无需申请。数据集名称为 MathGenieData。官方地址见元数据。规模：八万一千条代码集成解答、三万条验证推理和十七万条增强题解，总计约二十八万一千条。记录使用系统、用户和助手嵌套消息，内容项分为文本、代码和执行。存储为一个约八百一十兆字节的公开文件。领域包括英文数学、自然语言推理、Python 和执行反馈。构造包括迭代增强解答、回译题目、生成代码解答、拒绝答案不一致和验证筛选。数据与代码采用 Apache-2.0，但来源、教师输出和基础模型条款仍需审核。适用于数学监督微调、代码推理、验证推理训练、合成与执行审计。
