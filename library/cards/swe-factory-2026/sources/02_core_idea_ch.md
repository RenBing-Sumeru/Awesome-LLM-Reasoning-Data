SWE-Factory 自动完成从真实 issue 与 merged pull request 到可执行 coding-agent task 的转换：恢复缺失的 binary test resource，由四个代理构建并调试环境，并且仅在 gold-patch fail-to-pass 检查成功时接收任务。

SWE-Builder 的四个角色职责分离。Repository Explorer 检索 setup 与 testing context；Environment Manager 编写 Dockerfile；Test Manager 编写 evaluation script；Test Analyst 构建 image、启动 container、运行评测，并返回执行证据用于迭代修正。成功的 Dockerfile/script pair 进入 memory pool，后续任务检索同仓库最接近的历史 version。该 memory 保存的是配方，而不是不可变 built image。

反馈契约同时具有环境性与程序性。Evaluation script 应用 test patch，捕获测试命令状态并输出 `OMNIGRIL_EXIT_CODE`。只有相关测试在 gold patch 前返回非零、应用 gold patch 后返回零时，任务才有效；缺少 marker 视为错误。该机制能观察执行状态，却不能识别失败语义：crash、dependency error、timeout 或 assertion failure 都可能是非零。Gold-patch validation 还具有 label-aware 特征，因此错误的 issue/PR linkage、test 或 gold patch 可能进入接收结果。

相对于 SWE-bench 风格的人工环境构建和 SWE-Gym 的半人工仓库配置，本文的具体变化是自动生成环境配方并使用标准化 exit-code parser。Binary-resource recovery、多代理角色分工、execution feedback 与同仓库/version memory 被集成到构建闭环。Unit test、Docker、gold patch 与 SFT 并非新组件；贡献在于将它们自动化并封装为一条表面可复现、实际仍为部分发布的数据生命周期。
