GUI-360° 把真实 Office query pattern 转换为已执行的 Windows trajectory，以 GPT-4.1 驱动的 EvaAgent 验证完整 episode，同时保留成功与失败运行，并从同一批 interaction record 派生四类 step-level SFT-ready view。

构造机制从 help/tutorial material、online forum、Q&A/community site 与 search-engine query 开始。一个未披露的 LLM 把 query 匹配到 66 个手工实例化 template 之一——Word 30 个、Excel 30 个、PowerPoint 6 个——再将其具体化。五分类 LLM gate 会拒绝 `NONEXEC`、`CROSSAPP`、`VERCTRL`、`TPLMISS` 与 `INVALID` task。随后，TrajAgent 组合 master planner、execution agent、screenshot/accessibility perception、混合 GUI/MCP action 与 recorder；GPT-4o 执行第一次尝试，GPT-4.1 重试失败任务。

反馈契约包含两个不能互换的层次。采集阶段，EvaAgent 是 GPT-4.1 LLM-as-judge，它观察完整 trajectory、screenshot、accessibility data、action、thought 与 final application state，并保存 rationale、evidence、sub-score 与 binary completeness；论文报告它在 100 条抽样 trajectory 上与人工判断的一致率为 86%。发布 benchmark 使用的则是 programmatic step scorer，分别检查 point-in-box grounding、greedy IoU/text screen parsing，或 function/argument/status 的 exact action prediction。这些 scorer 只观察 logged label，不会在 live Office environment 中执行预测并观察后果。

四个 processed SFT-ready directory 分别是 action prediction、带 accessibility context 的 action prediction、grounding 与 screen parsing，均被描述为面向 Qwen2.5-VL-7B 的转换。前两类目标是 structured next action；grounding 根据 screenshot 与 current-step thought 预测 coordinate；screen parsing 输出带 name 和 box 的 actionable control。这些对象支持 `sft`、GUI `agent_training` 与静态 `evaluation`，但没有建立可复用 RL reward 或 `rlvr` contract。

Atlas 中最接近的对照包括 OS-Genesis、OpenCUA 与 AndroidControl。GUI-360° 的区别在于同时组合 Windows Office substrate、混合 GUI/API step schema、whole-trajectory LLM judgment、独立保留的 failure tree 与多种 derived static view。GUI agent、accessibility grounding、LLM judging 或 SFT 本身并非其单独创新点；贡献在于这一规模下集成的数据对象与发布管线。
