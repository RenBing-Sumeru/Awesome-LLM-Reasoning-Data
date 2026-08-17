训练池分为三支。通用数据来自 RedPajama ArXiv、C4、Wikipedia，以及 AlgebraicStack 与 StarCoder 代码；数学语料使用 OpenWebMath；问题求解数据混合 NuminaMath、Lila 与专有记录。种子按完整性和推理步骤数筛选，但精确阈值、来源比例与 item manifest 均缺失。主实验多次写明数学语料为 14.7B token，Appendix A.1 却写成 13.7B，这一内部差异未解决。（论文 §2–§3；Appendix A.1、C。）

四种算子的语义并不相同。Response diversification 要求生成两个正确且不同的附加解，并在开头给出值为 `accept` 或 `refuse` 的 response 标签。Query expansion 创建两个新问题—解答对，并以 Accept/Refuse 和理由自检。Retrospective enhancement 把后续步骤插回更早推理以构造 `[back]` 重试轨迹，但完整 prompt、接受 parser 与过滤方法未公开。Tutorship 先采样弱模型尝试；强教师以值为 `correct` 或 `wrong` 的 check 标签开头；若尝试错误，再定位错误步骤、修正并继续求解。生成器、学生与教师 checkpoint、decoding、retry、parser 行为和逐方法 yield 均未知。（论文 §4；Appendix G。）

论文报告的输出规模为：response diversification 14,018,544 条/6.82B token，query expansion 24,459,192/4.78B，retrospective enhancement 14,707,792/5.04B，tutorship amplification 11,942,328/13.90B。每个实验臂都把对应输出加入 Base2 CPT 混合；不相等的 token 预算属于实验处理的一部分，因此无法只比较数据质量。

受控 CPT 使用 Llama2，最多 25,000 step，global batch 1024，context length 4096，训练/验证划分 95/5；学习率先 warm up 至 1e-4，再 cosine 衰减至 1e-5，并选择 validation loss 最低的 checkpoint。阶段对比把 7.2B 问题求解 token 放入 CPT 或 SFT，并增加 0.072B-token 的 1% SFT 控制 instruction following。SFT 使用 batch 256、三轮训练、1e-5 至 1e-6 cosine 衰减，并报告十个 checkpoint 中的最佳值。

最终 MathGPT-8B 从 Llama3-8B 开始，优先选择超过五个推理步骤的问题，使用 response diversification、query expansion，尤其是 tutorship amplification，并以 context length 8192 训练 25,000 个 CPT step。论文列出 39.6B 通用、46.7B 数学语料和 51.1B 问题求解/合成 token，并把总量概述为约 140B，其中 100B 与数学相关；model card 也重复 140B/100B 的说法。
