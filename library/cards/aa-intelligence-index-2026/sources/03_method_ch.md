输入是模型在各个组件评测上的输出。官方 v4.1 套件包括 GDPval-AA v2、tau3-Banking、Terminal-Bench v2.1、SciCode、AA-LCR、AA-Omniscience、Humanity's Last Exam、GPQA Diamond 和 CritPt。

流程是：按公开测试设置运行各组件，用组件自己的验证器或评分器打分，聚合重复实验结果，再按权重计算 Intelligence Index。输出包括组件分数、类别分数和最终指数。

复现前必须固定方法版本、基准快照、重复次数、提示词、模型 API 日期、温度、输出长度限制、工具访问权限、评审模型/等价性检查模型版本和排行榜日期。
