# 方法

1. **准备种子。**输入：GSM8K 与 MATH 训练题、rationale 和最终答案。操作：把每条规范化为原始 `(question, rationale, answer)` 记录。输出与进入下一步：种子进入回答和问题增强。检查/停止规则：只使用官方训练 split。
2. **增强答案。**输入：每条种子、few-shot CoT prompts 和 GPT-3.5-Turbo。操作：采样多条分步解答并抽取最终答案。输出与进入下一步：接受的 rationale 进入 `D_AnsAug`。检查/停止规则：只保留答案与参考相同的路径。
3. **自举问题。**输入：种子和变换 prompts。操作：构造 Rephrasing、Self-Verification 与正反向（FOBAR）变体，再生成分步目标。输出与进入下一步：`D_rephrase`、`D_SV`、`D_FOBAR` 保留变换类型与原始记录谱系。检查/停止规则：已知量和答案约束有效性，格式错误变体被删除。
4. **合并并训练。**输入：155k 答案增强、130k 改写、55k 自验证和 55k FOBAR 记录。操作：合并 240k GSM8K 派生与 155k MATH 派生样本，序列化成 instruction/output，并对 LLaMA-2 7B/13B/70B 做 causal-LM SFT。输出与进入下一步：MetaMathQA 与 MetaMath checkpoints。检查/停止规则：GSM8K/MATH 精确答案评测和变换消融决定效用；不加入 RL 阶段。

**复现字段：**应核验官方 OpenReview 论文、MetaMathQA 数据、Apache-2.0 仓库、变换 prompts 和训练脚本。必须固定教师版本、prompt 模板、采样种子、数据 revision 和答案 parser；精确教师调用/token 成本与语义重复阈值未报告。

