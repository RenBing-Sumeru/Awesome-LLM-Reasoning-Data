Dockerless 用学习型、仓库证据驱动的判断流程，替代后训练阶段反复运行仓库专属测试。输入 issue、golden patch 和 candidate patch 后，它先生成 2–4 个诊断问题；每个问题由一个并行的 ReAct 风格 sub-agent 通过只读 shell 搜索收集证据，证据定位到 tests、代码、文档或配置中的文件与行区间。最终 judge 读取 issue、两个 patch 和累积的问答证据，并输出 token `0` 或 `1`。

必须区分三层反馈。第一层是在仓库专属 Docker 环境中运行 held-out tests 得到的二值执行标签，它用于构建和评测 verifier。第二层是学习型最终 judge 基于仓库证据预测的二值 verdict；对两个 verdict logit 做 softmax 后得到 `[0,1]` 内的标量分数。第三层是下游 GRPO：对 `M=2` 次独立 verifier 调用中仍有效的分数求平均，再在 `G=8` 条 rollout 内做 group normalization。主 benchmark 评测最终又回到可执行 held-out tests。因此，学习型 verdict 或 dense reward 与程序化成功标签不是同一种对象。

这里的“environment-free”仅指下游训练时不使用仓库专属依赖与测试环境。OpenHands 仍在最小 Linux 镜像中执行 shell command 并编辑文件，Dockerless 的证据 sub-agent 也会执行只读搜索。此外，问题生成与最终判断都依赖 golden/reference patch，这显著限制了其在尚无已知正确解的新 issue 上的适用性。
