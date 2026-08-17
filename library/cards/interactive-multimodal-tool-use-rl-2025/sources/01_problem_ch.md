本卡的主要来源是2025年9月17日首次提交的arXiv:2509.14480 v1。OpenReview官方记录写明“Submitted to ICLR 2026”，但不能据此认定论文已被接收或收入proceedings。论文关注的问题是：当二元终局结果过于稀疏，无法指出交互中哪一轮导致成功或失败时，如何训练工具使用policy；用户回复为语音而非文本时，这一问题同样存在（论文§1、§2.2；OpenReview记录）。

实验载体是从tau-bench派生的零售sandbox。一个在线episode写作`tau=(x1,e1,...,xT,eT)`：agent token序列包含推理与tool call，environment序列包含工具结果或模拟用户回复；多模态episode还包含speech token或placeholder。user simulator发出`##STOP##`或交互达到30轮时，rollout终止。约3,000个合成零售任务分别提供user simulator指令与ground-truth tool call（论文§2.2、§4.1；附录“Training Data”）。

该工作属于`environment_agent_trajectory_data`，因为可训练对象是能够改变环境状态的可执行episode，而不是静态答案。它没有声称发布preference dataset，也不解决一般多模态感知；语音仅用于工具使用工作流中的用户轮次。依据论文全文与附录，本卡正文已具备L4人工审阅所需内容，但论文承诺的sandbox、任务、rollout与checkpoint未找到已发布的论文专属artifact，因此直接训练复用仍然blocked。
