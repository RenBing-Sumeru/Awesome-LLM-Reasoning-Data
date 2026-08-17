Terminal-Task-Gen 联合两种任务来源策略。Dataset adaptation 把已有的数学、代码与软件工程 prompt 包装进 Terminus 2 终端接口。Synthetic generation 要么把结构化 seed 改写为相邻的终端任务，要么组合通常三到五项 primitive skills，以定向覆盖终端专用能力。DeepSeek-V3.2 生成 synthetic tasks 以及全部 SFT trajectories；学生模型从 Qwen3-8B、Qwen3-14B 和 Qwen3-32B 初始化。

可复用的数据对象是完整终端 episode：它以 `conversations` 的 role/content 单元序列化，并附带较粗粒度的 `agent`、`model`、`model_provider`、`date`、`task`、`episode`、`run_id`、`trial_name` 与 `enable_thinking` 元数据；adapter 配置还公开 `source`。assistant 内容包括 analysis/plan 文本和 Terminus 2 action object，其中 `commands` 保存字面 `keystrokes` 与等待 `duration`；user 轮次承载当前屏幕或 `New Terminal Output`。最终产物依任务而异，可能是环境状态、文件、代码、patch 或报告，而不是统一的答案字符串。

公开的 Nemotron-Terminal-Corpus 恰有 366,154 条 train-only 记录：226,313 条 adapter 记录与 139,841 条 skill-based 记录，后者又分为 44,809 条 easy、89,343 条 medium 和 5,689 条 mixed。论文 Table 5 还包括 124,366 条 seed-based 轨迹，总计 490,520 条；目前没有已确认公开 artifact 包含这部分 seed-based stream。因此，发布物是论文研究混合的一个规模较大但不完整的投影，并非全部 490,520 条轨迹的可下载副本。
