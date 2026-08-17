# 方法

1. **选择来源覆盖。**输入：公开数学 rationale 数据及其许可。操作：选择覆盖不同领域与难度的 13 个来源。输出与进入下一步：含题目、答案、已有 rationale 的来源账本进入增强。检查/停止规则：只保留可用训练记录，许可仍按子集处理。
2. **补齐 rationale。**输入：缺少目标 CoT 或 PoT 的题目和 GPT-4。操作：让教师为六个新增组写自然语言推导或 Python 程序。输出与进入下一步：候选混合示范与继承记录合并。检查/停止规则：删除格式错误输出，未验证 CoT 仍按来源质量标记。
3. **核验程序并序列化。**输入：生成 PoT 与人工参考答案。操作：执行 Python、把结果与标注比较、过滤不一致项，并把所有子集转成类 Alpaca instruction/output。输出与进入下一步：260k MathInstruct 记录进入 SFT。检查/停止规则：执行结果不匹配时拒绝生成程序。
4. **训练并评估。**输入：MathInstruct 和 LLaMA/LLaMA-2 或 CodeLLaMA 7B–70B。操作：做三轮 causal-LM SFT；推理时先尝试 PoT，代码不可执行则回退 CoT。输出与进入下一步：MAmmoTH checkpoints 和九项数据集分数。检查/停止规则：固定答案 grader 判分；论文未使用 RL 阶段。

**复现字段：**应核验官方数据 revision、项目页、仓库、来源许可表、训练脚本、Python 环境和 checkpoints。必须固定来源版本、GPT-4 版本、prompts、执行 sandbox、随机种子和答案 parser；教师采样参数、完整调用成本与统一语义去污染阈值未知。

