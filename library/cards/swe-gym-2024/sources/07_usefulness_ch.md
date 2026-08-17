当研究问题是 agent improvement，而不仅是 benchmark reporting 时，SWE-Gym 很有用。它提供了从可执行软件任务到轨迹、fine-tuning data、verifier training 和下游 SWE-bench evaluation 的路径。

它尤其适合研究到底哪个组件带来增益：更好的环境覆盖、更强 scaffold、teacher trajectory、rejection sampling、learned verifier，还是更大的 inference budget。

对数据整理来说，SWE-Gym 是带可选过程 artifact 的仓库级 outcome supervision 示例。应分开记录每类发布对象：task environment、generated trajectory、trained agent、verifier 和 evaluation result。
