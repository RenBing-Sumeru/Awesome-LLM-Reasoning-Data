SWE-World 用混合环境替换 agent episode 内部对 Docker 的依赖：文件系统导航/编辑由确定性沙箱处理，学习式 Software World Transition model（SWT）模拟执行反馈，学习式 Software World Reward model（SWR）模拟终局 test report 与 reward。Docker 并未从证据链中消失；它提供训练 SWT/SWR 的 target，也提供最终 SWE-bench Verified 正确性判定。（Paper Figure 1；§§4.1–4.2、6.1。）

这里的 feedback contract 是 mixed。`str_replace_editor` 类导航和编辑以确定性方式改变沙箱。对 `execute_bash` 类 action，SWT 观察 task context、initial analysis、隐藏的 gold patch、当前 agent patch、command 与相关代码，再预测 `stdout`、`stderr` 和 `exit_code`。提交时，SWR 还观察 F2P/P2P tests 与 final patch，生成 test report，并且只有在预测所有必需测试均通过时才输出 reward 1。SWT 可模仿可能的 command output，但 inference 时看不到真实执行；SWR 可估计终局成功，却不是 benchmark oracle。真实 Docker tests 仍是采集 labeler 与最终 evaluator。

构造流程还使用 reverse-reasoning distillation：Qwen3-235B-A22B-Thinking 在给定上下文与 Docker ground-truth output 的条件下生成 CoT，再由身份未披露的 LLM-as-a-judge 过滤无效或泄露输出的 rationale。这形成第二层反馈边界：CoT 可能改善预测，但它是以答案信号为条件生成的 post-hoc teacher artifact，而不是 Docker 如何执行 command 的忠实过程记录。

相较 R2E-Gym、SWE-Gym、SWE-rebench 和 Docker-backed SWE-agent training，本工作的方向变化是学习 transition 与 terminal-feedback interface，并将其用于 trajectory generation、SFT、RL 与 test-time selection。Atlas 中最接近的对照是 `swe-dev-2025` 与 `swe-mirror-2025`；SWE-World 的区别在于明确拆分 SWT/SWR，并直接展示学习式 reward 可被 hacking。
