既有桌面智能体基准已经提供 virtual machine、screenshot/action loop、应用任务和终局检查。WeaveBench 并非分别首次引入 GUI 控制、shell 工具、容器化桌面、专家任务编写、LLM judge 或 success-rate 报告。

第一项具体变化是任务准入对象。P1 排除可把 GUI 或 CLI 替代掉的任务，P2 要求多个交错阶段，P3 要求相互关联的跨应用状态。C1-C4 再把公开工作流 sourcing 与自包含封装、blind review 和三个智能体 pilot revision 连接起来。这样可在任务构造时审计混合接口依赖与长时程结构，而不是事后附加标签。

第二项变化是反馈接口。judge 不只检查最终文件，而会主动跨完整轨迹、交付物、截图、文件、日志、shell 检查和隐藏 anchors 获取证据；在压缩为标量之前，保留 clause、artifact、dimension 与 shortcut 证据。outcome-only ablation 为访问轨迹提供了质量信号，而作者 failure taxonomy 中 35.2% 的 E5 reward hacking 占比说明 shortcut audit 具有实际相关性；两项结果都不能验证 judge 本身。

对 reasoning-data 研究而言，方向信号来自联合 episode contract：source provenance、任务包、冻结状态、混合动作与 observation、完整轨迹、artifact 证据、hack 判断、scalar reward 和 terminal threshold 可作为一条 lineage 检查。这支持研究监督附着于何处，以及把完整 episode 压缩为 outcome 时会丢失什么。114 个任务、8 个领域、23 个子类和多个 runtime 增加的是广度；规模与 benchmark score 不是 novelty 或数据质量证据。

复用前仍需核实精确的 machine-readable provenance index、对应论文表格的 GitHub commit、协调后的 judge identity 与 threshold、固定的 prompt/runtime 版本、完整成功与失败轨迹 manifest、judge calibration、split/decontamination policy 和 component-level rights。缺少这些检查时，具体新意仍是 evaluation design 与 audit surface，而不是经过验证的 post-training corpus。
