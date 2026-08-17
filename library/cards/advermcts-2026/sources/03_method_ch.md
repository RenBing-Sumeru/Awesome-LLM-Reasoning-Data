对每道题，方法按以下流程运行。

1. 根据题目描述和可见公开测试初始化持久化 Solver MCTS。扩展节点是局部 chain-of-thought 延续，rollout 生成完整 Python 程序。
2. 在公开测试上执行每个程序。公开测试通过率提供 Solver 的内在奖励。只有通过全部公开测试与截至当时所有对抗测试的程序，才能进入共享代码池。
3. 运行以当前代码池为条件的持久化 Attacker MCTS。Attacker 节点表示测试策略。divergence-driven multi-sample test synthesis 批量生成候选输入，在所有池内程序上执行，并选择输出分歧最大的输入。
4. 将分歧输入、题目规格与竞争输出送给同主干 LLM output Arbiter。若 Arbiter 认为测试含糊或无效，则丢弃；否则把 Arbiter 给出的期望输出保留为对抗测试。
5. 将被接纳的输入—输出对加入逐题动态测试记忆，重新检查代码池准入，对未通过该测试的 Solver 节点施加惩罚，然后继续交替搜索。
6. 结束时先按公开测试通过率、再按全部保留对抗测试的通过率分层排序程序。隐藏测试只用于报告 Pass@1。

主实验从 APPS Introductory、Interview、Competition 与 TACO Easy、Medium、Hard 六个划分各抽取 100 题，共 600 题，每题最多提供五个可见公开测试。主要设置为 16 次 Solver rollout、2 次 Attacker rollout、最大树宽 3、Solver UCB 系数 4、惩罚值 0.1。论文评测 Qwen3-4B-Instruct-2507 与 Qwen3-8B，并用 DeepSeek-V3.2 671B 做主干扩展实验。论文说明使用 vLLM，但没有完整披露硬件、token、墙钟时间或美元成本契约。

官方仓库 README 推荐 `--rollout 16 --attacker_rollout 2`。在核验提交 `f45427800a32dc6966429bc4f7baf61df5c6a15f` 中，驱动程序默认值包括树宽 3、代码池大小 2、分歧阈值 0.2、每批五个候选测试以及随机种子 0；实现对测试输入采样使用温度 0.7，对 Arbiter 调用使用 0.0。部分 class-level fallback 与命令行默认值不同，因此复现时应直接记录命令行配置，不能只从某个源文件重建。论文没有给出算法中每个符号的数值，精确论文版本配置仍有部分 unknown。

发布的执行器结合了 11 秒进程内 alarm、15 秒父进程监控、10 MB 捕获输出上限、4 GiB 地址/数据/栈限制，以及对部分破坏性操作和进程操作的拦截。这些措施提高可靠性，但仓库没有提供容器、namespace、seccomp 或有文档说明的网络隔离，不能把它当成执行任意不可信程序的安全沙箱。
