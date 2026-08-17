报告描述了两个 packed SFT 阶段：204,800 个样本使用 294,912-token packed sequence；随后 19,200 个样本使用 515,000-token sequence，并加入最长 512K 的长上下文数据。披露的组件包括 GPT-OSS-120B 中等努力度 reasoning 样本；保留 45K 的安全混合数据及策略条件化合成回答；来自经商业许可清理的约 21.7K OpenResearcher 子集的搜索轨迹；约 370K 终端对话；经 LLM judge 过滤的科学数据；以及分别为 1.2M Python、1.0M C++14 和 1.3M Python 工具调用 trace 的代码组件。这些都是组件级披露，不是完整的逐条混合 manifest。

统一 RLVR 覆盖终端使用、办公/生产力、软件工程、搜索、工具调用、数学、代码、STEM、安全、聊天、指令遵循、长上下文 QA、reasoning 和结构化输出。它使用异步 GRPO，batch 为 8,192、每样本 16 次 rollout，最大生成长度从 48K 增至 64K。MOPD 每 batch 使用 1,024 个 prompt、每个 prompt 一次 rollout、最大生成长度 192K，由相应专门教师提供稠密信号，并运行两轮。

过滤规则有部分具体说明：OpenResearcher 按商业许可清理；安全反向翻译采用 0.8 的语义相似度阈值，每种语言约移除 10–15%；报告还点名了 LLM-judge 过滤、代码 rejection sampling、严格代码去重和部分 benchmark 去污染。完整 prompt、教师路由、来源分配、过滤覆盖范围、产出比例、环境 pin，以及原始 trajectory/reward 日志仍为 unknown 或仅部分发布。

