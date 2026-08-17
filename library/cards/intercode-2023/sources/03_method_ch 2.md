典型流程是：先初始化任务环境，再让智能体读取当前状态，随后执行命令、点击、补丁、文件编辑、文档编辑或工具调用，并记录执行日志和中间状态。最后用执行反馈、测试和环境特定评分判定任务是否成功。

输出包括轨迹、状态变化、动作记录、评分记录和复现实验所需文件。公开工件入口：论文：https://arxiv.org/abs/2306.14898；项目页：https://intercode-benchmark.github.io/；代码：https://github.com/princeton-nlp/intercode；数据：https://intercode-benchmark.github.io/。

复现时应固定发布版本、代码提交、运行镜像、任务划分、依赖版本、评测脚本和评测日期。
