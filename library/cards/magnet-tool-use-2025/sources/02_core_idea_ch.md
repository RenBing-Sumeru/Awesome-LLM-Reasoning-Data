MAGNET 的贡献是将从图中得到的 function-signature path 转为多轮 query/reference-call 序列，再把该序列转为正、负 agent trajectory。函数是节点；有向边表示一个函数的输出与另一个函数的输入相关。Merge、Insert 和 Split 修改初始路径，分别覆盖短/嵌套依赖、长依赖以及函数/参数缺失情形。（论文 §3.3-3.4）

反馈契约是混合式的。第一，入选的 StableToolBench 函数先经模拟调用测试可执行性，并执行 reference call 来得到输出。第二，Gemini-1.5-pro-002 在看到正确的 reference-call hint 后生成正轨迹。第三，对每个实例，先收集 10 条 SFT 轨迹，再由 Gemini-1.5-pro-002 逐轮检查；若某动作被判定与参考不一致并赋予错误类型，它就成为误导性 hint，用来采样负轨迹。论文的关键词过滤还提供粗粒度的语法/执行信号。（论文 §3.4-3.6；附录 A）

该契约观察函数接口、reference-call 输出及 teacher 相对参考的错误判断；它不能证明完整自然语言轨迹是忠实、安全或最优的。最接近的基线从随机 API 生成调用/问题，或直接蒸馏 teacher trajectory。MAGNET 较窄的改变，是显式化依赖路径构造及由 hint 条件化的正/负轨迹生成。它是数据与环境构造配方，而非新的公开 verifier 或 benchmark。（论文 §2-3）
