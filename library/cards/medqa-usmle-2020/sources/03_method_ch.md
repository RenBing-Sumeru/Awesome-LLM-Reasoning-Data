1. 输入：医学考试题、选项、官方答案 key、语言/来源元数据，以及 release 中可选的教材或解释资源。
2. 流程：收集考试题，规范化为 benchmark 记录，按语言和来源划分子集，提供 split 文件，并用选项匹配评估模型输出。
3. 输出：包含题干、选项和 gold answer 的题目记录；模型评测输出是指定 split 下的 accuracy。
4. 反馈：程序化选择题 scorer 将预测选项与 gold answer 比对。它不验证临床安全性，也不验证自由文本医学推理过程。
5. 复现边界：需要固定 GitHub commit/release、语言子集、split 文件、答案归一化、prompt/scaffold，以及是否使用辅助教材/上下文资源。
