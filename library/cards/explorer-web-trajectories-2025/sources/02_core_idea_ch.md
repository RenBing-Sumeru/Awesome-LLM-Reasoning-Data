Explorer 的贡献是一条自底向上的四角色合成循环，它把实时交互同时转化为有环境依据的任务和成功 demonstration。proposer 读取首页截图与无障碍树，生成抽象任务并执行第一步；refiner 在选择下一步动作的同时更新任务，使其与累计历史保持一致；summarizer 把完整动作/截图历史转换成不复述操作过程的高层意图；verifier 最后接受或拒绝该 episode。

有效训练对象不只是最终任务—动作对，而是含页面 observation、两种动作表示、变化中的意图、最终摘要和保留状态的有序状态—动作 episode。Appendix D 的动作词表包括 click、type、select、向上/向下 scroll 与 stop。论文报告 53K 个唯一初始 proposal，经探索形成 94K 条最终任务描述，其中 81K 条唯一；这些是描述级计数，并非独立正确性保证。（论文 Table 9 与 Appendix D。）

反馈契约是基于环境证据的学习型判断。GPT-4o task verifier 接收最终任务描述、动作历史、全轨迹截图与最终页面 Markdown，并预测成功或失败。它能查看可见轨迹证据，但不能直接观察隐藏服务端状态、独立证明交易或内容修改确已发生，也不能定位第一处错误步骤。其输出用于筛选完整 episode，不是标量 reward 或步骤标签。

相较于静态 self-instruct 任务生成、Synatra 的间接知识 demonstration、AgentTrek 的教程引导 replay，以及同期在 WebArena sandbox 中的探索方法，Explorer 的关键变化是在大量实时网站上执行时改写任务，再总结 agent 实际完成了什么。Playwright、set-of-mark 输入、GPT-4o 角色、SFT 和 LLM-as-a-judge 都是已有组件。因此，同一模型同时参与生成与验证，既是机制，也带来相关误差风险。（论文 §§2–3 与 Appendix F。）
