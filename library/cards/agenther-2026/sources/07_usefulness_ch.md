对 `environment_agent_trajectory_data` 而言，AgentHER 是一套把失败 episode 保留为结构化数据、而不是直接删除的具体 recipe。构建者可以借鉴它对 original environment outcome、failure type/recoverability、observation-grounded achievement、hindsight goal、judge confidence、severity weight 与下游 serialization 的拆分。这种拆分让审计者可以定位：究竟哪个组件把 failure 转换成 training target。

证据只支持三类预期用途：对 hindsight-goal demonstration 做 SFT；对 hindsight-versus-original goal 记录做 preference learning/DPO；用生成的 episode text 做 agent fine-tuning。证据不支持 RLVR、reward-model training、process supervision，也不支持“公开仓库已提供 ready-to-train corpus”的说法。scalar severity 只用于缩放 supervised/preference loss，不是可执行 verifier reward。

对 dataset construction 研究，最有用的实验是改变 judge independence、confidence threshold、fallback policy、severity semantics 与 failure class，同时报告 accepted precision 和 rejected-set false negative。looping failure 应保留为独立 slice，因为论文发现它们的 recoverability、acceptance 与增益都更低。任何衍生 DPO pipeline 都必须明确支持 chosen 与 rejected 两侧 prompt 不同。

对 release engineering，本卡把该轨道的 replay 要求转换为清单：发布逐记录 raw、accepted 与 rejected trajectory；保留完整 observation；固定 task split 以及每个 environment、model、tool、prompt、tokenizer 与 trainer revision；公开可执行 reset/terminal predicate；发布 train/eval script 与 replay manifest；声明 dataset-specific rights；并把论文版本绑定到不可变 code/data release。

在这些 artifact 出现且 implementation mismatch 修复之前，当前复用等级只能是 method/reference。仓库可以帮助团队理解 package schema 与 offline relabeling logic，却不能复现报告的 cross-model experiment，也不能提供论文所述 training record。evaluation score 只能用于形成关于 recipe 的假设，不能认证 data quality。
