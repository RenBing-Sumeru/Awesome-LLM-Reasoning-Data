训练环境作为一个集合仍是专有的。报告提供构造流程与聚合规模，却没有开放 repository/commit 清单、Docker image、任务记录、测试、网页快照、WKG dump、生成问题、拒绝日志或环境版本 hash。“Docker 构建准确率超过 90%”是基础设施统计，不证明任务有效、语义正确或能抵抗 reward hacking。网页 grounded terminal 任务还把构造 agent 用作第一轮 evaluator，存在相关错误风险。

Reward 定义不完整。Reasoning RL 使用领域专用 judge/evaluation system 的 binary result，但身份、prompt、校准和 false-positive rate 不可得。Agentic RL 在系统层披露 group-relative trajectory reward，却没有发布每个任务的 reward 公式或服务。General RL 的规则、ORM 与 GRM 均未命名。可执行测试能减少部分任务的歧义，但不等于所有反馈都是程序化且可信的。

Benchmark 重用与污染是主要风险。公开代码库、issue、PR、代码托管快照和网页可能与 SWE-bench、Terminal-Bench、BrowseComp、MCP-Atlas 或相关任务相交。报告没有给出全局训练/评测成员账本、repository/commit holdout、solution overlap 分析、时间 cutoff 或 memorization test。修正后的 Terminal-Bench 发布物只用于评测，不能解决训练重叠问题。

谱系只到阶段级，而非记录级。论文描述了宽泛来源如何经过 mid-training、SFT、多个 RL 阶段与蒸馏，但没有不可变链条把 source URL 或 commit 连接到构造环境、轨迹、TITO token、loss mask、judge output、过滤决策、training batch 与 checkpoint。

报告没有披露专门的安全训练阶段、拒答/有害性数据集、red-team 协议、安全 benchmark 套件或事故分析。这是证据缺口，不是“没有做安全工作”的证明。General correctness 与 emotional-intelligence RL 不应被重新命名为 safety alignment。

最后，评测和部署工件不能被用来夸大训练披露。OpenHands、Terminus-2、Claude Code、MCP-Atlas、CC-Bench-V2 是评测 scaffold；vLLM、SGLang、Transformers、KTransformers、xLLM 用于服务已发布模型。两类工件都不能复现私有训练环境、reward、数据或生产 launch 配置。
