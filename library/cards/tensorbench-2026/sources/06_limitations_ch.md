首要限制是 oracle 按设计就不完整。TensorBench 没有用于新功能的独立 hidden tests 或人工正确性审核。功能补丁通过只说明实现、智能体自写测试和继承回归套件在实际执行样例上彼此一致，并不证明功能完整，因此报告的通过率可能包含 false positive。

环境范围狭窄且部分可变。全部 199 个任务只针对 5 个 commit 的同一 Scorch 仓库，结果不能证明迁移到其他编译器或软件领域。已核验 artifact 中无法访问或完整确认精确 benchmark harness、Docker digest、dependency lock 和带日期的 provider model snapshot；CLI 包版本在多日运行窗口内也发生过变化。

构造元数据不完整。一个未披露的 LLM 智能体编写了 198 个描述，但其模型、scaffold、解码、seed、session 数、候选池、拒绝理由和接受率未知。作者检查并不是可执行可行性测试。论文没有报告 train/dev/hidden split 或实证污染审计；公开任务、测试、trajectory 和成功补丁都可能进入未来训练语料。

审计本身也存在测量误差。两个 LLM judge 只检查局部 diff/test 证据，而不判断功能正确性；对与 judge 同模型家族的智能体使用 binding rule，整体 kappa 仅 0.367。它可能遗漏细微投机，也会在边界案例上不一致。

最后，论文声称发布不等于 artifact 已可访问。附录 K 称每次运行的 prediction、trajectory、测试输出、report 和 audit artifact 都已公开，但项目链接的 GitHub 返回 404，可访问的 Hugging Face 仓库仅包含任务数据和轻量评分文件。在这些目录、checksum 和许可证被核验前，不能把轨迹视为可安全训练复用或可精确 replay。

