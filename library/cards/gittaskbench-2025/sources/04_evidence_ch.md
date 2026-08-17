主实验在扩展版附录所述 framework 与采样设置下，比较 Aider、OpenHands、SWE-Agent 和多种语言模型的组合。论文对每个已报告 framework/model setting 取两次独立运行的平均值。最佳已报告设置 OpenHands + Claude 3.7 的 ECR 为 72.22%，TPR 为 48.15%。两者差距具有实质含义：生成非空、可解析的输出，并不等于通过任务特定的功能或质量检查。（arXiv v2, Table 3，第 7 页）

错误分析报告，环境配置错误占已分析失败的 65.04%。其他已记录类别包括工作流规划、仓库理解、运行超时或卡死以及不遵循指令。附录案例还包括绕过预期仓库、模拟所需行为、使用错误文件名或格式、把调试文本重定向进预期产物。这些案例说明 ECR 只是过程完成信号，TPR 的可信边界仍取决于 grader 覆盖度。（AAAI 论文 Error Analysis，第 7 页；arXiv Appendix F）

Artifact 审计加强了规模与发布状态方面的证据，同时也收紧了结论边界。在固定 GitHub SHA 上，可见 54 个 query JSON、54 个任务配置、54 个主任务 test script、18 个打包仓库目录，但只有 43 个 `test_results_for_show/*/results.jsonl`。这 43 个文件同时包含成功和失败示例，却不是全部 54 个任务的完整结果，也没有标明产生它们的模型、framework、run 和配置。它们是任务级终态记录，不是成功/失败 rollout 轨迹。

第一作者维护的 Hugging Face revision 含 276 个文件，总计 82.8 MB，包括 54 个 query、输入/prompt 和主任务脚本；但它省略了 GitHub 发布中的 `code_base`、任务配置、ground truth、结果示例和 benchmark runner。因此，HF artifact 适合检查任务定义，却不是独立可 replay 的发布包。

以上分数是作者报告，文件计数是 curator 对官方 artifact 的核验，并非独立复现。基准表现不能证明每个任务都无歧义、每个 grader 都测到了预期行为、基准不存在 contamination，或整个发布包可以合法复用。实验证据支持把 GitTaskBench 视为有难度的评测表面，也展示了环境失败压力；它不支持把该发布视为高质量 trajectory-training corpus。
