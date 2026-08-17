一句话贡献：SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents 把一个任务包含挖掘出的 Python issue、仓库状态、安装 recipe、patch/test_patch、FAIL_TO_PASS/PASS_TO_PASS 测试、Docker image 元数据、质量标签和 split 身份。绑定到具体反馈契约，形成可复用对象。

核心机制：作者自动化 Python SWE agents 的任务挖掘、环境构建、质量标注和去污染评测。反馈契约：SWE-bench fork 在选定 SWE-rebench 数据集上运行 run_evaluation，使用安装 recipe、Docker images 和仓库测试。最接近的对比对象是：静态 SWE-bench 发布和手工整理的小规模新鲜基准。方向标签是 verifier-anchored software-agent evaluation。
