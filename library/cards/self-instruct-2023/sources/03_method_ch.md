1. **初始化任务池。** 输入 175 条人写任务，每条包含 instruction 与示例实例；它们提供最初的任务形式，并成为生成器的 in-context 示范。
2. **生成新指令。** 从已接受任务中采样八条放入 prompt，让 GPT-3 提出更多 instruction，产出候选任务描述；后续轮次会把机器生成任务重新混入 prompt，使任务池扩展到种子之外。
3. **过滤指令。** 删除格式错误的候选，并计算它与全部已接受 instruction 的 ROUGE-L 相似度；最大相似度超过 0.7 就拒绝，否则加入任务池。该规则只约束词汇多样性，不能证明语义新颖。
4. **生成并过滤实例。** 先判断 instruction 是否属于分类任务；一般任务先生成 input 再生成 output，分类任务采用 output-first 以避免集中到一个标签。随后删除重复 instruction、空字段和启发式判定的无效输出，得到“指令—输入—输出”记录。
5. **训练并评测。** 用保留的 82,439 条实例微调 vanilla GPT-3，在 SUPER-NATURALINSTRUCTIONS 和专家编写的新任务上评测。student 每条实例消费一个 target output；记录有效性依赖人工抽检，而不是统一 verifier。
