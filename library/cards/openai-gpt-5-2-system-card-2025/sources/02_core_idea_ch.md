核心贡献是 disclosure delta，而不是第二份泛化 GPT-5 摘要。实际支持的训练信号仅有家族级 reasoning RL 与 GPT-5.2 Thinking integrations 的目的级 cyber-safety training；其 prompt、label、reward、verifier、权重、calibration 与 optimization 未知。

评测 scoring 独立且更丰富：policy grader 与 `not_unsafe`、LLM grader/classifier、example-specific 与 hierarchical rubric、reasoning-based CoT monitor、人类专家、人工复核、secret flag、hidden unit test、pass/fail、pass@1/pass@12 和 medal threshold。System protection、年龄保护、监控、执法与 Preparedness mitigation 属于第三层部署防护，不能归因于模型训练。

因此，最可复用的数据对象是审计记录：prompt/environment state、response/internal CoT、tool/action、final artifact、grader/monitor result、sampling stratum 与 environment outcome。它不是已发布数据集。相对 GPT-5 Card，新增价值是明确 overlap、窄范围 held-out 声明、生产采样、可执行 agent predicate 与后续 monitorability 审计。
