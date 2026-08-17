输入是 13 个作者策划任务及其公开 dataset 或 environment。Task YAML 绑定 task/dataset description、dataset config、task entrypoint、starter/submission instruction、baseline path 与 score、evaluator path 与 read-only flag、dependency、training-command timeout 和可选 memory path。论文没有发布 task candidate pool 或 rejection ledger。

reset 时，MLGym 启动 Docker 或 Podman 环境，提供非 root 的 `/home/agent/workspace`，安装或挂载任务 dependency、dataset、starter code、evaluator、GPU allocation 与基于 SWE-Agent 的 Agent-Computer Interface。论文运行所用 image digest manifest 不可获得；当前文档默认使用 `aigym/mlgym-agent:latest`。

scaffold 组合 task/dataset prompt 与 ACI documentation，再执行 single-command ReAct loop。每个模型生成 discussion/thought 和一条解析后的 shell/tool action。环境执行动作并返回 command output、当前 step/剩余 step 计数、open-file/working-directory state，以及调用 `validate` 后的 evaluator score。trajectory 记录 action、observation、response、state、thought、execution time、role-tagged history 与 run-level `info`。

论文实验在每个任务上评测 12 个模型，每个模型使用 4 个 seed。可配置模型使用 temperature 0.0、top-p 0.95；o1-preview 与 o3-mini 使用其 API 默认 temperature 1.0。每次运行在 50 次环境交互或 USD 4 API cost 时停止，以先到者为准；另有任务专属训练 timeout。论文报告所有有效中间 `validate` 中的 Best Attempt、4 次运行最终 submission 中的 Best Submission，以及跨任务 performance profile/AUP。

任务专属 Python evaluator 为 submission 评分。`validate` 暴露同一 test-set surface 但不终止；`submit` 评分并结束 episode。其他退出路径包括预算 autosubmission、skip/forfeit，以及 format、runtime、cost、context、permission 与 environment error。仓库保留当前网格中的 valid 和 invalid run，而不是只筛成功样本。

输出包括任务 artifact、`.traj` episode、配对 `results.json`、中间 score history、最终 metric dictionary、exit status 与 aggregate result。`run_replay.py` 抽取记录中的 assistant message content 作为 action，写入 replay JSONL，并以 `model_name=replay` 调用 runner。确定性 replay 仍需要固定 task/data/evaluator/dependency 版本、不可变 image digest、hardware/runtime 细节、seed 与环境 reset state。
