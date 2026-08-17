本 Card 的一句话贡献是：GPT-5.1-Codex-Max 披露了一组规模有限但具体的编码代理后训练对象——合成恶意软件场景、prompt-injection 样例和冲突编辑 RL episode——以及多类不同的反馈契约，同时保留了复用所需记录和实现未公开这一边界。

核心机制是利用不同反馈面塑造行为。恶意软件响应受详细 policy 约束，并由内部专家整理的 golden set 检查；prompt-injection 行为通过 Instruction Hierarchy 风格数据训练，再以注入指令是否被忽略来测量；destructive-action RL 通过 user-model 编辑扰动 workspace，并奖励不回退行为。与训练披露分开的能力评测则采用可执行或判断式 predicate，包括 Playwright 测试、hidden unit test、CTF 完成、CVE 利用、Cyber Range 场景成功、分层 rubric、经生物安全专家验证的 o1-preview autograder、classifier 加人工作弊复核，以及外部专家判断。

这些反馈契约观察到的对象不同。Policy grader 可以观察响应是否合规，却不能证明底层 reasoning 忠实；测试可以观察指定终态，却可能漏掉未覆盖回归或 reward-hacking 策略；环境成功条件能观察任务完成，但依赖 harness fidelity；专家与模型 judge 可以按 rubric 评分，却带来校准和偏差风险。对保留编辑给予正向强化点明了目标结果，但没有披露如何检测保留、如何处理部分冲突，也没有说明该 reward 如何与其他 objective 交互。

它代表的方向是“可审计的前沿代理后训练披露”。Atlas 中最接近的对照是 *GPT-5 System Card*，后者提供更宽泛的来源与 router 信号类别；以及后续的 *GPT-5.3-Codex System Card*，后者重复了更窄的冲突编辑 RL 披露。GPT-5.1-Codex-Max 的区别在于同时点名三类安全数据干预、支持 compaction 的长程运行，以及较丰富的评测环境说明。关键边界不变：评测细节不能替代已发布训练语料或 reward 实现。
