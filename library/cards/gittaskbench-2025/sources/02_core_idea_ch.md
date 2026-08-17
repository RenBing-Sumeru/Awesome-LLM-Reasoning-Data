GitTaskBench 的核心贡献是一组规模不大但类型异质的代码仓库绑定任务：智能体需要经历仓库理解、代码修改、环境配置和执行，最后由可执行检查器对终态产物判定是否成功。

核心对象分为两层。任务层提供 `task_id`、任务描述、prompt、仓库名称/路径/URL 与理解指引、工作子目录和输入文件；评测层提供输出目录、test script、可选 ground truth 与参数，并在 JSONL 中记录 `Process`、`Result`、`TimePoint` 和 `comments`。在被审计的 GitHub commit 上，公开树包含 54 个 query、54 个任务配置、54 个主任务 test script 和 18 个打包的 `code_base` 项目。这些 artifact 定义了评测表面，却不记录产出答案所经历的 shell 命令、文件编辑、observation 或内部推理序列。

反馈契约有意分为两级。`Process` 对应 Execution Completion Rate（ECR）：要求输出存在、非空且可被 test script 解析。`Result` 对应 Task Pass Rate（TPR）：任务特定函数还必须通过功能、完整性、相似度或质量阈值。程序化 terminal success 是最后一条 grader 记录满足 `Result=true`；`Process=true` 只说明产生了可消费的输出。Alpha 是另一个 mixed score，组合二值执行成功、估算市场价值、API 成本和 5 名评分者给出的人工质量分。因此，grader 能观察最终输出和执行结果，却不能证明完整交互路径的隐含质量，也无法覆盖测试未编码的行为。

与以 issue 和 patch 为中心的基准相比，GitTaskBench 把输出表面扩展到多模态真实任务产物，并把自主环境配置/执行纳入任务。Atlas 中最接近的对照是 PaperBench：两者都把长时程智能体工作与可执行环境、终态评测绑定；但 PaperBench 用分层 rubric 评测论文复现，GitTaskBench 则把 54 个操作型任务与 18 个已有仓库和定制输出 grader 绑定。其方向信号是带显式 terminal predicate 的环境中介评测，并不是一种新发布的训练轨迹格式。
