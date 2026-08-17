完整集、PB500 与 Verified artifacts 都是 test-only benchmark split。论文未定义训练用途，发布中又包含 gold patches；若把这些数据用于训练而不另建并披露协议，就会污染后续评测。官方未发布成功或失败的 agent trajectory corpus。

污染问题仍未解决。构造过程排除了 SWE-bench 已出现的仓库，但所有任务都来自公开 GitHub 历史，可能已进入模型预训练。论文没有报告时间 cutoff、近重复搜索、语义重叠分析或模型特定污染测试。

replay 是最终状态重跑，而非 episode replay。新 container 从 base commit 开始，再应用 test patch 与 candidate patch。GHCR tag v1.1 提高了可复现性，但缺少镜像 digest、依赖快照、网络/随机状态和 dataset-revision 清单。unit tests 也无法覆盖 maintainability、style、security，以及采用意外结构但语义正确的方案。

release metadata 已发生漂移。当前 Verified artifact 有 382 行（69/100/113/100），但复用的 card 文案仍写 394，GitHub 更新也含过时中间数量。仓库没有正式 Release。dataset/code cards 声明 MIT，源仓库按条件采用宽松许可，但 code、issue/PR prose、贡献者内容、LLM annotations 与 container dependencies 的逐条权利未统一核对。

公开 issue/PR 文本可能包含个人数据或 secrets，官方未记录专门的 consent、redaction、removal 或 retention 流程。harness 会在 Docker 中运行第三方仓库代码，但官方文档未说明网络隔离、least privilege、资源上限或恶意测试防护。
