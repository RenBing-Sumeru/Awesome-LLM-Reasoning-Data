SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents 回答的问题是：新鲜且去污染的软件智能体评测不能只靠手工静态基准；任务挖掘、安装和质量过滤都需要自动化。主来源是 https://arxiv.org/abs/2505.20411；公开状态为 NeurIPS 2025 / arXiv（2025）。

决策边界：它应作为自动 SWE 任务收集和评测 pipeline 收录，不是单一不可变 leaderboard set。可复用对象是：一个任务包含挖掘出的 Python issue、仓库状态、安装 recipe、patch/test_patch、FAIL_TO_PASS/PASS_TO_PASS 测试、Docker image 元数据、质量标签和 split 身份。它对 atlas 的价值在于对象和反馈契约可以一起审计。
