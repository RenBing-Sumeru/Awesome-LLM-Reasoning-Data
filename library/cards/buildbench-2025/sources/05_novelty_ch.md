prior-work baseline 是以 100-project CompileAgentBench 与 CompileAgent scaffold 为代表的 repository-compilation evaluation。container、shell-command execution、compiler-error feedback、web/document retrieval、retry loop 与 target check 都是既有组件；BuildBench 没有把其中任何一项变成新的 verifier class 或 training algorithm。

真正改变的是 benchmark construction 与 terminal contract 的可见度。作者从数百万 C/C++ GitHub repository 出发，采用明确的 automated filter，随机抽取 385 个 candidate，并由有 systems 背景的研究生逐个尝试 build。148 个可编译 task 与人工 target-executable name 配对。agent behavior 通过全新 container、可选 README/web retrieval、iterative command batch，以及三层 outcome measure 评估：unvalidated Completion、要求所有 target 的 Strict Success，以及要求至少一个 target 的 Flexible Success。

当前 release 还保留完整的 385-candidate compilability label pool，而非只暴露 148 个 positive evaluation task。这样可以检查一部分 selection failure，但 237 个 negative 中只有 126 个有 failure reason，successful/failed agent rollout 则完全没有公开。后来为所有 test row 增加 source commit hash 改善了 task pinning，但这是 release maintenance，不是 paper-time methodological contribution。

对 environment-agent data 研究而言，有用的方向信号是把 repository benchmark 视为 pinned task source、resettable environment、action/observation protocol、allowed mutation policy 与 terminal predicate 的组合。BuildBench 在概念上明确了其中大部分，也说明“process finished”弱于 target-aware verification；filename predicate 仍不能替代 functional test、semantic equivalence 或 security check。

因此，quality signal 应来自 task label 的具体性、人工构造、保留的 candidate failure 与明确 metric，而不是最高 model score。复用前必须检查与 CompileAgentBench 及其他 repository benchmark 的 instance overlap、model-corpus contamination、target-label error、binary functional behavior、allowed source change、environment/dependency lock、完整 failure retention、release-version mapping、license 与 sandbox security。
