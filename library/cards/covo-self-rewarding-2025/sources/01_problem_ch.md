NeurIPS 官方 proceedings 将本文列入 NeurIPS 2025 Main Conference Track；arXiv 记录的首次提交日期为 2025 年 6 月 10 日。CoVo 针对的是推理后训练中的一个具体瓶颈：强化学习通常需要正确性标签、可执行检查器、reward model 或 judge，但许多推理题并没有可靠的外部 verifier。论文由此考察：policy 能否从自己采样出的多条推理路径的几何结构中产生可用学习信号。（论文 §1；NeurIPS proceedings）

对每个 prompt，当前 policy 生成 16 条完整轨迹。每条轨迹被分成中间状态，再由同一 policy 估计从各状态继续到该组不同最终答案的可能性。实际训练对象不是带标签证明，也不是经正确性验证的答案，而是在线产生的 prompt、policy 轨迹、答案分组、状态到答案距离矩阵、轨迹统计量、标量奖励与归一化 advantage。监督先以答案组奖励附着到完整轨迹，再转成 Reinforce++ 的归一化 advantage，而不是逐步正确性标签。（论文 §2–§3；Appendix C）

这一边界不能混淆：CoVo 估计的是内部一致性与路径稳定性，不能证明答案真实正确；Math-Verify 只出现在 benchmark 评估环节。本卡属于 **Data Construction & Open-Release Recipes**，因为论文与代码给出了从 prompt、rollout、reward 到 policy 更新的流水线；同时属于 **Preference / Reward / Feedback Data**，因为可复用对象是一套程序化标量反馈契约。它不属于经外部 verifier 验证的 RLVR 数据。公开 Hugging Face 资源是 prompt/reference-answer JSONL 文件，并未发布论文训练中的轨迹、距离矩阵、分组奖励、过滤提示或 policy checkpoint。双语 Card 已达到 `L4_chinese_review_ready`，但 `partial` 发布状态仍阻止其被视为可直接训练复用的发布。
