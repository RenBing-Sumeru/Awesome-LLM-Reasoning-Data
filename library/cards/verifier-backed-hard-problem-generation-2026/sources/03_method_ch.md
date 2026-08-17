Qwen3-4B Setter 与 Solver 先做冷启动 SFT，再用 GRPO 类 RL 优化。对不定积分，SymPy 解析被积函数和候选原函数并检查导数等价；通用数学先拒绝格式错误、复制或退化输出，再要求 GPT-5.4 rubric 的所有字段通过。两个角色各用 8 个 rollout，10 个 Solver 样本估计局部难度，接受池随后去重并按难度过滤。
