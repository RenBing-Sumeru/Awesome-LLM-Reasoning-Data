既有基线是只收集成功 agent demonstration：只要一条 episode 没有完成原始 WebArena 或 ToolBench goal，就会被丢弃，即使其中 action 已经实现了一个连贯 subgoal。Hindsight experience replay 提供了按已实现目标重标的更一般思想，LLM-as-judge pipeline 则提供 learned selection。AgentHER 把两者结合到自然语言 tool-agent episode，并把结果转换为显式监督与偏好记录。

变化发生在复用单元上。该方法不修复或重跑 failure，而是保留原始 thought-action-observation 序列，提取实际完成内容，写出新 goal，并用两个带 confidence 的 judge 与 severity weight 筛选 pair。随后提供三种下游视图：severity-weighted SFT、cross-goal DPO 与 ShareGPT。失败行为只有在目标得到已记录 observation 支持时，才成为该目标的正向示范。

具体方向信号是：数据构造可以把 failure retention 与 relabeling policy 当成 agent-training 基础设施的一等组成。论文的 cross-model judge ablation、confidence-filter ablation、human precision audit、false-negative audit、looping-failure slice 与 iterative redeployment 使 selection contract 可检查。它们是论文所述 procedure 的质量信号，不证明每个生成 pair 都正确，也不证明未发布 dataset 可复用。

非新内容包括 WebArena、ToolBench、gpt-3.5-turbo-0125 rollout、SFT、DPO、ShareGPT 格式、LoRA，以及 hindsight goal relabeling 的一般原则。论文没有提出新 environment、可执行的 relabeled-goal verifier、step-level supervision、replay system、RLVR objective、公开实验语料或 dataset license。

复用前必须把论文 recipe 与公开 implementation 视为两个独立 artifact。忠实实现需要分开的 gpt-4o-mini 与 Qwen2.5-72B-Instruct client，需要 second-judge acceptance 同时检查 `is_valid`，需要让 severity semantics 与论文一致，并在声称 full episode 时保留未截断 observation。还需要 raw 与 accepted/rejected data、不可变 split/replay manifest、精确 model/tool version、training/evaluation script 与 rights documentation。
