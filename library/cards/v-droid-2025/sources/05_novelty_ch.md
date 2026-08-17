数据侧最接近的基线是 AndroidControl/On the Effects of Data Scale，V-Droid 从该工作取得任务指令；它提供人类 Android 轨迹，并研究数据规模下的下一动作预测。Android in the Wild 是另一项公开任务来源。已有移动智能体也使用 accessibility tree、动作历史、LLM 规划与 benchmark 终止成功。相较这些基线，V-Droid 的具体改变不是新的环境，而是不同的反馈对象：在一个轨迹状态中，把一个正确动作与每个提取出的备选动作进行对比，并学习成可复用的标量打分接口。

第二项变化是人类—智能体构建闭环。纯人工标注的 9K 偏好对构成 cold start，训练首个 verifier；后续 verifier 轮次执行新任务，用熵优先筛选可能的错误，人类修复选中的区域，纠正后的轨迹再扩展下一轮训练集。采集、选择和 verifier 提升因此在 9K、27K、55K、110K 累计偏好对之间耦合。entropy signal 只是 triage heuristic，不是正确性标签，所以新意在于标注资源分配机制，而非保证自动标注会变得可靠。

第三项变化是针对恢复行为的显式过程训练。先执行错误动作制造错误状态，再用固定逆动作映射提出恢复动作，并从中抽样少量偏好对学习 reverse action。过量恢复数据会造成坍缩这一报告结果，使约 2.5% 的混合比例成为有实质意义的选择决策，而不只是扩大规模。它也给其他轨迹数据带来可复用的审计问题：纠错样本究竟提升恢复能力，还是只诱导一个高频 fallback 动作。

多项组件属于继承或工程整合，而不是新贡献：Android Accessibility Service、规则式候选提取、Llama-3.1-8B、Q-LoRA、logistic pairwise loss、vLLM prefix caching、GPT-4 working memory，以及 AndroidWorld/AndroidLab/MobileAgentBench。P3 也没有提供环境可验证 reward，更没有通过 RLVR 训练策略；它用逐步偏好训练 action verifier/reward model。

对 reasoning data 研究而言，方向信号来自清晰的“已执行轨迹状态—成对过程偏好—在线标量选择”映射，以及不确定性引导的标注闭环。在把它视为可复用开放配方前，研究者仍需获得 110K 记录，检查多个有效动作导致的 false negative，固定 HTML/XML serializer，复现 GPT-4 memory，对齐论文/代码/模型 revision，并澄清代码与数据权利。
