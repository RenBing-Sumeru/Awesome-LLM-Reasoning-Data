典型流程是：先初始化任务环境，再让智能体读取当前状态，随后执行命令、点击、补丁、文件编辑、文档编辑或工具调用，并记录执行日志和中间状态。最后用仓库测试与人工验证规则判定任务是否成功。

输出包括轨迹、状态变化、动作记录、评分记录和复现实验所需文件。公开工件入口：项目页：https://openai.com/index/introducing-swe-bench-verified/；代码：https://github.com/SWE-bench/SWE-bench；数据：https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified；数据托管页：https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified。

复现时应固定发布版本、代码提交、运行镜像、任务划分、依赖版本、评测脚本和评测日期。
