输入是带有一个或多个标准答案的多跳问答样本；论文没有披露训练来源的确切混合比例。环境提供 Google 搜索、网页阅读器、受控 Python 执行器和 `submit_answer`。网页阅读器抓取 HTML，再让同一个语言模型回答页面相关问题。论文训练阶段通过 Google Site Search 和 Wikipedia 官方 API 将检索限制在 Wikipedia；论文评估改用 Google Web Search 与 Jina，而公开仓库的推理说明使用 Serper。这些环境相关，但并不相同。

冷启动构造在 reasoner 路径与 verifier 路径之间交替。verifier 结果包含 `CORRECT` 或 `INCORRECT` 判断，以及其工具增强证据路径；只有当该判断与标准答案相等性一致时才被接受，否则在预算 (K) 内重新采样 verifier。被接受的失败反馈会追加到历史，使 reasoner 可以再次尝试。因此，最终 SFT 序列可以保留先前失败与修复，但在 (n_{max}) 内始终未成功的样本不会进入数据。自回归 SFT 损失屏蔽 observation token。论文没有报告 (K)、(n_{max})、轨迹生成器身份、解码 temperature 或底层 prompt 来源混合。

在 SRRL 阶段，论文报告的 14B 运行以 Qwen2.5-14B 为基础并使用 verl。每一步采样 12 个 prompt，每个 prompt 生成 8 条候选轨迹，最多交互 30 轮；论文报告共训练 100 步，消耗 60 A800 GPU 小时。Figure 2 画出了最多 20 次答案提交，但没有披露数值阈值。优化采用带 DAPO clip-higher 的 GRPO；轨迹奖励把安全区/硬上限长度惩罚与 (r\alpha^T) 组合，其中 (r) 是任务得分，(T) 是提交次数。论文未报告 (\alpha)、长度阈值、随机 seed 和若干优化器设置。

当前官方发布把 SFT Parquet 仓库 `WebSeer-sft-dataset` 与含 train/test Parquet 的 RL 仓库 `WebSeer-dataset` 分开，并提供 `WebSeer-14b`。这一发布结构与用于评估方法的 benchmark 集合应明确区分。
