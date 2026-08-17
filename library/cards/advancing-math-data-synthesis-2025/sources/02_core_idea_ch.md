论文把数学数据研究中经常混在一起的两个选择分开：对问题—解答种子施加什么变换，以及生成 token 由哪个训练阶段消费。作者报告从 NuminaMath、Lila 与专有数据收集 2500 万条问题求解记录，并选取其中 1400 万条作为增强种子；来源比例和 seed ID 未发布。（Appendix A.1。）

Response diversification 为同一问题生成两个替代解。Query expansion 把原问题转成陈述，生成两个新问题及其解答并进行自检。Retrospective enhancement 把后续步骤插回更早推理，并用 `[back]` 标记重试，形成一条人工回溯轨迹。Tutorship amplification 先采样弱学生解答，再让更强教师输出 `correct`；若错误，则定位错误步骤、修正并继续完成解答。（论文 §4；Appendix G。）

这些对象的反馈契约不同。Response 与 query 合成使用模型自己发出的 accept/refuse 或正确性标签；tutorship 使用另一个模型的判断和局部纠错；retrospective 方法没有披露独立 verifier。论文随后比较问题求解记录分配到 CPT 或 SFT 的效果。公开的 MathGPT-8B 权重是最终模型 artifact，不是 2500 万来源记录、1400 万种子、四类合成记录或拒绝候选的发布。
