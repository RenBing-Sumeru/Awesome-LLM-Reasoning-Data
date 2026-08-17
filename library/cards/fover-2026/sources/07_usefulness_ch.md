对 **Data Construction & Open Release Recipes** track 而言，FoVer 是把确定性或半确定性工具结果转换为可复用过程监督的具体模式，但复用需要满足若干条件。

- **PRM 训练：**可用对齐的步骤标签与对话字段训练二元 process reward model，但必须固定具体数据 revision，并说明训练损失使用全部步骤还是只使用平衡后的最后步骤。
- **Verifier 比较：**在相同轨迹上比较局部形式检查、端到端 proof acceptance、rollout 标签与语义 LLM judge；工具错误应与逻辑 false 标签分开保存。
- **构造研究：**扩展到其他 formal system 之前，应定义语法接收规则、目标步骤上下文、依赖语义、timeout 策略与结构化失败 taxonomy。
- **评测与 test-time compute：**训练后的 PRM 可为步骤序列打分并排序候选解答，但每个领域和聚合规则都需要重新验证迁移效果；这些分数不是 ground-truth benchmark 标签。
- **发布审计：**应公开形式化 pair、全部生成尝试、过滤决策、verifier 版本与 command、proof log、timeout、最终 mixture manifest、上游 revision 和许可记录。

复用等级：适合作为参考配方；完成版本与语义忠实度检查后，可有条件用于 PRM 训练；经领域特定验证后，可用于 Best-of-K 实验；不适合作为自动干净的评测集，也不能作为“每道 informal source problem 都被正确形式化”的证据。
