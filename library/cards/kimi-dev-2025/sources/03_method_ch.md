Mid-training 从 Qwen2.5-72B-Base 开始。Natural-diff 样本把 issue 或 PR 文本与以 Python 为中心的 SEARCH/REPLACE patch 配对，并过滤含纯增删、超过 3 个 Python 文件或超过 5 个 edit block 的记录。PR commit pack 保留多步变更上下文，同时移除签名与 GitHub ID。

在精确定位阶段，Qwen2.5-72B-Instruct 先用 2,000 条 DeepSeek-R1 轨迹轻量 SFT，再生成定位推理；只有 modified-file set 完全匹配的样本才保留。另一部分 synthetic interaction 在无 shell 的条件下调用文件工具并接收模拟 observation。Partial localization 至少要包含一个正确文件，仍可能打开 false-positive 文件，并注入 reflection。这些是合成交互轨迹，而非真实仓库执行。

论文所述 pre-upsampling mixture 约含 50B natural-diff、20B PR commit-pack、10B localization-reasoning 与 10B synthetic-interaction token；两类 synthetic component 各上采样 4 倍后形成约 150B token exposure。训练采用 next-token prediction、batch 256、最大 32K，上线性 warmup 约 3B token，learning rate 从 2e-5 余弦衰减到 2e-6。

Cold-start SFT 使用 DeepSeek-R1 20250120 在 SWE-Gym 与 SWE-bench-extra 上生成的 BugFixer/TestWriter 轨迹。主 Agentless RL 使用 64K context、Kimi k1.5 的类 REINFORCE objective 与多 rollout 平均 reward baseline；初始 prompt pool 是 1,200 个 pass@16 大于 0 的任务，每 100 step 重采样 500 个此前 pass@16 为 0 的任务，并重新加入其中已变得可解的任务。

每个论文所述 RL iteration 含 5 个 training step，抽样 1,024 个 problem，每题生成 10 条 rollout，共 10,240 条；prompt pool 每 20 个 iteration 调整，后期 replay 最近的 positive example。独立的 agent adaptation 实验对论文所述 5,016 条公开 SWE-smith Claude 3.7 Sonnet 轨迹做 shuffle，并用嵌套子集把各类 prior 训练为 SWE-Agent。
