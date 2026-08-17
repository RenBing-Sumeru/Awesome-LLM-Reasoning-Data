先前基线多是窄法律 NLP 数据集或职业考试式评测。LegalBench 改变的是构建模式：它做成协作任务库，由律师、法学教授、computational legal practitioners 和 legal impact labs 贡献他们认为 interesting 或 useful 的任务。

方向信号是 open, community-curated domain evaluation，并保留 task-level provenance。质量信号是公开仓库、Hugging Face release、task description、split convention，以及要求用户遵守各 dataset creator license 的显式许可说明。

不新的部分是很多 component task 来自既有数据集或常见 NLP 格式。复用前要检查哪些任务由旧 corpus 转换而来、哪些是新建、每个 license 允许什么、label 如何 normalize，以及所选子集是否过度偏向容易的 binary task。
