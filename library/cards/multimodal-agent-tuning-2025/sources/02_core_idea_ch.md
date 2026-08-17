该工作的贡献是一个面向多模态工具使用 SFT 的闭环构造流程：GPT-4o mini 创建任务与非图像文件，由 GPT-4o-mini ReAct controller 生成 thought/code/observation 轨迹，再由同一模型家族提供两级筛选判断，之后进行 VLM trajectory tuning。

数据表面是 episode，而不是 prompt-answer pair。其行为是在可选文件 `F` 与查询 `Q` 条件下，由 thought `T`、代码 action `C` 和对应 observation `O` 组成的序列；最终答案 `A` 结束 episode，但不进入训练 loss。因此，监督附着于 state-action 行为和完整 episode 的接收决策。发布中没有独立 step label、scalar reward、preference pair 或 verifier target。

Feedback contract 是 mixed。Python 执行提供环境证据：工具调用必须运行并产生 observation。query-file judge 判断文件是否相关、信息是否充分、任务能否用现有工具求解；trajectory judge 判断工具选择、参数、推理、observation 和最终答案是否一致。两者都没有独立答案 oracle，而且都使用与生成阶段相同的 GPT-4o mini。它们能观察序列化任务与执行结果，却不能确认来源权利、识别所有语义幻觉，也无法暴露与 teacher 共享的错误。

论文中最接近的 baseline 方向是 prompt-engineered LLM/VLM 工具 agent，包括图 1 中与 T3-Agent 对比的 GPT-4-driven agent，以及依赖人工模板、只覆盖一两个工具短任务的 VLM-agent 数据。GTA 与 GAIA 是 evaluation surface，不是 MM-Traj 记录的替代品。真正变化是规模化合成匹配的多模态文件和更长的可执行轨迹，再训练开放 VLM controller，而不是让 proprietary LLM controller 继续依赖 in-context example。

方向性结论不是“两个 judge 就能保证数据正确”，而是多模态 agent 数据可以围绕可执行 action 与 observation-conditioned continuation 来组织。同样重要的审计结论是：query、文件、rollout policy 和两个 judge 都依赖同一个 proprietary model，会耦合失败模式，并把隐藏的 judge 偏好变成未记录的 selection objective。
