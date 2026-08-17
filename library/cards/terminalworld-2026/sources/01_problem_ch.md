TerminalWorld 于 2026-05-21 以 arXiv:2605.22535v1 提交。它处理一个具体的评测缺口：命令行智能体常在短小、人工整理的任务上测试，而公开终端 session 包含更长且不够标准化的工作，其环境、成功终态和测试并未预先打包。论文把这些录制转换为可执行任务，而不是把原始 shell transcript 当作 gold trajectory（论文第 1、3 节；附录 A）。

构建从 80,870 条公开 asciinema 录制开始，经筛选得到 9,492 个候选；其中 5,035 个环境能让清理后的参考解答以零退出码完成重放，最终有 1,530 个任务通过状态测试验证。发布还包含人工检查的 200-task `verified` 配置和 20-task `sample` 配置；Hugging Face 上三个配置都只有 test split。这些数字对应连续的构建门，而不是三个可互换的数据集规模（论文第 3.1–3.4、4.1–4.2 节；Hugging Face 官方 dataset card 与 manifest）。

每个发布任务都是可执行 bundle，包含 `task.toml`、`instruction.md`、`solution/`、`tests/` 和 `environment/`。当前顶层 manifest 记录 `task_id`、`instruction`、`artifact_path`、`requires_docker`、`terminal_domain`、`source_type`、`pii_status` 与 `license`。评测时，智能体接收指令与 Docker 终端，发出 shell action，观察终端响应和状态变化，最后只有程序化测试套件提供任务级成功信号。因此，发布对象是任务/环境/verifier package，不是带逐步正确性标签的论文评测轨迹语料。

这一边界使 TerminalWorld 属于 `environment_agent_trajectory_data`：环境状态转移与 terminal predicate 都是 reasoning-data contract 的组成部分。论文没有建立训练 recipe，也没有授权把参考解答转换为 SFT/RLVR target。附录 C.1 明确说明没有训练或微调任何模型，dataset card 也把用途界定为 evaluation。

本双语 Card 已具备用于筛选的 L4 内容深度，但 canonical metadata 保持已接受的 `L3_summary_ready`。论文快照、稳定 README 与当前 manifest 对类别数量分别给出 18、19、20；数据集许可证表面相互冲突；当前记录删除了论文所述 `source_url`；生产构建 recipe 与不可变冷重放也没有固定。这些未解决事实不支持证据层级升级。
