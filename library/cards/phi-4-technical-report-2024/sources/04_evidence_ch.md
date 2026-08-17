最强artifact证据来自官方模型仓库。它标为MIT，总量约29.3 GB，公开6个BF16 safetensor shard，以及配置、tokenizer、generation、license、model card和data summary文件。这能核验phi-4 checkpoint可下载，但不能核验训练数据发布，因为其中没有语料文件、SFT记录、DPO pair、候选回答或verifier日志。

官方模型卡报告14B dense decoder-only模型、16K context、9.8T训练token、1,920张H100-80G、21天训练、公开数据截至2024年6月，以及约8%多语言数据。后续官方data summary确认使用公开来源、商业许可协议、购得数据、合成数据和清洗流程，最新收集日期为2024年6月30日；但它不枚举来源或记录，并说明部分其他第三方信息因底层数据不可用而无法提供。

报告给出较具体的构造数量：约50个合成家族共约400B未加权源token，SFT使用约8B token，第一轮Pivotal Token Search DPO有250,297条示例，第二轮judge-guided DPO有841,842个pair，正文约写为850K。这些数字确立报告级规模，不等于唯一记录数、发布行数或进入9.8T-token训练的完整lineage。

后训练消融分别报告SFT后、Pivotal Token Search DPO后、只做第二轮DPO以及两轮DPO后的模型行为。例如GPQA依次为47.3、53.6、52.4和56.1，MATH依次为77.1、80.5、77.6和80.4。这些比较支持报告评测设置下的optimizer顺序，却不能认证训练记录的正确性、权利、多样性或污染状态。

2024年11月AMC评测晚于2024年6月收集截止，对排除模型直接接触这些特定竞赛题是有用的模型证据。不过，报告也承认n-gram去污染可能漏掉改写重叠。新鲜benchmark不能替代公开的全语料匹配与移除ledger。

报告自身也指出弱项：相较多项对照，SimpleQA、DROP和IFEval表现较弱，严格指令遵循并非合成生成重点。这些结果说明模型行为与配方取舍，不能证明更多合成数据或更高分数自动代表更高数据质量。
