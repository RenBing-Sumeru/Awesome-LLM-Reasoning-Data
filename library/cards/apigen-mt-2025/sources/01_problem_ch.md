归档来源是 NeurIPS 2025 Datasets and Benchmarks Track 正式论文；arXiv:2504.03601 v4 是单独版本化的预印本，官方 APIGen-MT 项目页与 Hugging Face 页面则用于核验工件。论文解决的是工具使用数据中的具体缺口：单轮 function-calling 样本无法表示用户逐步透露信息、agent 在回复与 API 调用间切换，以及由可变 environment 的最终状态决定整段交互是否成功。

在 Retail 和 Airline 案例中，APIGen-MT 把交互形式化为包含用户输入、潜在 environment state、agent action、observation、transition 与 reward 的 POMDP。构造对象首先是任务蓝图，其中含用户意图、有序 ground-truth action、预期输出、状态变化和验证结果。Phase 2 再把已验证蓝图转换为模拟 human-agent-environment episode；只有最终状态效果与回复输出都和蓝图一致时才保留。这里的反馈契约是 full-episode mixed verification，而不只是函数调用语法检查。

公开对象比构造对象窄。`Salesforce/APIGen-MT-5k` 是 gated、采用 CC-BY-NC-4.0 的 5,000 条成功筛选数据，只包含一个 `train` split 和一个 128 MB JSON 文件。每行公开 `conversations`、`system` 与 `tools`：human message、结构化 `function_call` message、工具 `observation` 结果、assistant 文本、policy prompt 和 tool schema。它没有公开蓝图、ground-truth action/output、初始/reset 或最终 state、state diff、reward、verifier vote/log、attempt ID、terminal reason 或 replay manifest。

该工作属于 `environment_agent_trajectory_data`，因为可训练记录是有序的 state-action-observation 风格工具交互 transcript，接收判据又依赖可执行 environment。相邻边界必须明确：它没有发布版本固定的 environment package、失败轨迹语料、preference pair、process label、reward-model target 或 RL-ready replay interface。论文实际展示的训练方式是 assistant-token behavioral cloning，因此本卡只标注 `sft` 和 `agent_training`。

对 atlas 的价值在于把 API/policy context、任务蓝图、混合验证、模拟交互、成功筛选和 SFT 子集连成可审计链条。正式引用和公开数据工件已经核验，但 accepted metadata 仍保持 `L3_summary_ready`，因为代码、不可变 environment/version 绑定、逐行 lineage、replay metadata、完整训练混合、decontamination 与 license 协调仍未解决。
