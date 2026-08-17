本卡以2025年arXiv论文为规范来源，并辅以`paper.yaml`所固定版本的官方MobileWorld仓库、MobileWorld与mobileworldbench Hugging Face数据集，以及发布的Qwen3-VL-8B-Instruct-MobileWorld-SFT模型。论文区分两类产物：**MobileWorldBench**是离线evaluation benchmark，**MobileWorld**则是用于supervised fine-tuning的模型标注训练发布。

论文针对移动智能体推理中的一个窄组件：根据当前Android screenshot预测一个action的语义结果。原子记录是**单个state/action/next-state transition**，不是完整episode。Next-State-Generation把当前screenshot与自然语言action映射为预期UI变化的短描述；Next-State-QA询问关于下一状态的Yes/No事实。源记录来自Android Control与Android in the Wild的人类demonstration，但发布的benchmark不执行action，也不提供live device。

MobileWorldBench抽样250个generation transition和500个QA transition。发布仓库包含250个generation row与1,787个保留QA row。一条generation row引用的两张screenshot均缺失，因此检查到的官方benchmark-image snapshot中只有**249/250个generation row图像完整**。MobileWorld被描述为约1.4M个训练item——四舍五入的组成是543k QA pair与942k description——并以一个tar archive中的三个Parquet member分发。

本文只在transition层面属于`environment_agent_trajectory_data`：它序列化observation、action、预测的next-state semantics与反馈，但不提供完整action sequence、environment transition API、reset/replay契约或terminal success predicate。双语正文达到待人工审核的L4内容深度，canonical metadata保持`L3_summary_ready`；证据仅支持SFT与evaluation用途。
