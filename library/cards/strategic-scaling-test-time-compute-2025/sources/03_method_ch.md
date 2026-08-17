输入包括问题集合 S、总生成预算 B、回答生成器、reward oracle r、每轮批量 K 和淘汰阈值 gamma。每轮为所有活跃问题生成 K 个新回答并评分，保留全部回答和当前最优候选；若某题的新最高分达到 gamma，就将其从活跃集合移除。预算耗尽或活跃集合为空时停止。coverage 判断保留回答中是否至少有一个正确答案，accuracy 判断最终最高分回答是否正确。默认成本单位是一条完整生成，扩展版本也可按 token 预算计费。

论文按 benchmark 使用不同的选择和停止方式。MATH-500 包含学习型 PRM、LLM judge 和 ground-truth 变体；AIME25 使用答案 self-consistency；LiveCodeBench 使用执行正确性。实验模型包括 Llama-3.2-1B-Instruct、Llama-3.1-8B-Instruct、DeepSeek-R1-Distill-Llama-8B、Qwen3-4B 和 Gemini-2.5-Flash-Lite。报告的平均预算通常为 4、8、16、32 次生成，Gemini 使用更小预算；生成 temperature 为 0.6，结果取四次随机运行平均，Qwen3-4B 的最大长度为 38,912 token。两阶段基线在 25%、50%、75% 的第一阶段预算比例中选择并报告最佳结果。

可复现轨迹应保留提示版本、模型与采样配置、每个回答、原始和归一化 oracle 结果、oracle 身份、答案等价规则、K、gamma、每题采样上限、活跃集合更新、token 计数、随机 seed 和最终选择。已接受元数据没有链接官方代码、分配历史数据或版本化实验日志，因此可执行一致性、准确 seed、发布许可证和轨迹完整性仍为 unknown。
