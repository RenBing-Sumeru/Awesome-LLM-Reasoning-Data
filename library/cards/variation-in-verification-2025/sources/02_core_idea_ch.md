研究把 true-positive rate（接受正确响应）与 true-negative rate（拒绝错误响应）分开，并沿三条轴测量二者：题目难度、生成器的生成能力和验证器的生成能力。难度由多个生成器的平均 pass rate 估计；同一批模型直接解题的 pass rate 作为生成能力代理。

其 TTS 分析先让验证器过滤采样候选，再报告 conditional pass rate，即保留响应中的正确比例；如果全部被拒绝，则回退到原生成器 pass rate。该指标表示从保留池均匀抽取一个响应时的期望准确率，不是 Best-of-N selection。

开放数据使该设计可以审计。`LLMVerify-Generator` 保存 candidate CoTs 与 response labels，`LLMVerify-Verifier` 保存 verifier CoTs 与 verdicts；两者通过 `(model, dataset_source, dataset_idx, response_idx)` 连接。
