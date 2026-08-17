**1. 初始化任务专用策略。** Countdown 以 Llama-3.2-1B-Instruct 为基础，先在 500,000 条由启发式 DFS 和有界 BFS 生成的轨迹上进行两轮 SoS 初始化训练。代码自修复以 Qwen2.5-7B-Instruct 为基础，并使用从 APPS、CodeContests 和 TACO 汇集到 SYNTHETIC-1、且至少含一个参考解的 16,000 道题。

**2. 生成当前策略行为。** Countdown 每轮对 200,000 道题各采样一条轨迹，temperature 1.0、top-p 1.0、回复上限 4,096 token。代码每轮对每道题采样八个 episode，每个最多四轮，temperature 1.0、top-p 1.0、回复上限 16,384 token。代码的一轮包含完整推理与程序回复，下一条用户消息包含选出的公开测试结果和修复指令。

**3. 只在失败后加入特权引导。** Countdown 把最优路径解析为子目标节点；在连续失败点处，把一个已探索子节点改成下一个正确运算与算术状态，删除失效后缀，再继续采样。代码修复在指定轮次截断失败 episode，把参考程序加入下一条反馈消息，再重新生成后缀；后续增强轮次会把被引导的位置逐渐后移。

**4. 生成可训练视图。** Countdown 保留成功的改写轨迹。代码生成阶段使用真实参考程序，但保存的回复历史会在引导消息中替换为 `# REFERENCE CODE HERE`。论文说明 SFT 损失只作用于最后一次模型回复。这是有损变换：训练记录不再包含真实参考程序，因此复现和审计构造过程仍需保留遮蔽前生成视图及其 provenance。

**5. 验证、筛选并训练。** Countdown 的 `grade_search_path` 只有在合法轨迹到达目标数时返回 1，否则返回 0。代码生成阶段由公开测试决定是否继续修复，但仓库 reward function 会让候选程序执行任务附带的全部 ground-truth tests。两个 `main_data.py` 都只保留 `score > 0.0` 的记录，把 prompt 与回复历史映射成一条 `messages` 记录，并从 SFT 文件中删除其他生成字段。SFT 使用 AdamW、batch size 256、学习率 1e-5、cosine scheduler、weight decay 0.01、最大梯度范数 1.0，训练两个 epoch；“生成—SFT”共重复三轮。

**6. 可选地对 Countdown 做 PPO。** 一个动作是一整条文本化树操作，状态由问题和此前操作组成。论文使用 Monte Carlo return、移除 KL penalty，并报告两个训练 epoch、1,024 个 rollout、temperature 1.0、PPO clip 0.2、batch size 256、discount factor 1.0、actor 学习率 1e-6 和 critic 学习率 1e-5。终局奖励仍是二元信号。代码自修复因算力限制没有进行 PPO。

**7. 在明确边界下评测。** Countdown 使用 10,000 条已见目标和 10,000 条未见目标样本，并把回复 token 预算最高增加到 4,096。代码评测含 165 道 CodeContests 题，论文承认其为近分布；另有 408 道更新的 CodeForces 题，被描述为分布外；抽取出的程序在私有测试上执行。

**8. 固定官方发布的提供与缺失。** 仓库 commit `05d0c89b53f5a605b3140aecbbca853128f46f57` 以 Apache-2.0 提供下载、生成、筛选、SFT、PPO 和评测代码；论文报告训练使用四张 A100，推理使用一张 RTX 3090。未核验到 tag、GitHub release、训练 checkpoint、冻结 Guided-ReST rollout buffer、record manifest 或统一的上游数据许可证。复现时必须固定 commit、作者托管的输入数据版本、环境与执行沙箱、mask、split 和生成记录 ID。
