R-Diverse 在 R-Zero 式循环中加入两项控制。Memory-Augmented Penalty（MAP）持久保存历史有效问题，并依据新问题与任一历史项的最大相似度、以及与整个记忆库的平均相似度施加惩罚；同一记忆库还向 Solver 提供历史问答对用于 replay。Skill-Aware Measurement（SAM）则改变比较空间：Qwen2.5-Coder-7B 把问题映射为规范化 Python `solver` function，Jina-Code-Embeddings-1.5B 再编码程序并计算余弦相似度。（论文 §3.2–§3.3。）

反馈契约仍然部分自指。每个问题产生五个 Solver 答案并按等价关系分组；若最大组占比为 `s`，Challenger uncertainty 为 `min(s, 1-s)`，在投票接近分裂时最高；最大组同时提供伪标签。Challenger reward 从 uncertainty 中扣除轮内与记忆感知的相似度惩罚；Solver response 是否匹配伪标签决定二元 reward。MAP 与 SAM 改变了课程难度和新颖性，却没有加入独立 truth verifier。

三类反馈角色必须分开理解：uncertainty 让题目贴近当前 Solver 能力边界，SAM/MAP 抑制求解过程重复，多数投票伪标签监督 Solver 答案。GPT-4o 用于答案复核以及论文中的多样性、课程分析；论文没有充分交代其训练时覆盖范围，不能据此把整个循环解释为外部验证流程。
