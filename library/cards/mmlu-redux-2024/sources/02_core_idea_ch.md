一句话贡献：MMLU-Redux 把 MMLU 中疑似噪声样本人工复标题化，变成可检查的缺陷记录。核心机制是抽样 MMLU 测试题，重新标注，分类错误类型，并以 MMLU-Redux 形式发布修正或审计记录。

评测面不只是模型 accuracy，而是 benchmark instance 的质量。决定性反馈契约是论文标注协议下的人工复核；在分析模型分数影响时，再结合原始答案键 scorer。

最近对比对象是 MMLU、MMLU-Pro 和 benchmark-cleaning 研究。方向标签是 benchmark-quality audit：被验证的主对象是题目行，而不是模型输出。
