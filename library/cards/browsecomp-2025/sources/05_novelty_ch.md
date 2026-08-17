既有浏览 benchmark 常采用较直接的问题、固定检索语料、导航目标或环境特定 terminal predicate。SimpleQA 提供简短事实问答，Humanity's Last Exam 则提供公开 harness 所沿用的 query 与 grader prompt 形式。BrowseComp 改变的是任务构造：人类 trainer 从带答案的事实种子出发，收集多个有区分力的属性，将其反向写成问题，再刻意筛选出模型、普通 Google 搜索和部分人类无法解决的题目。

最终对象把 1,266 个公开答案目标与实时网页挑战、校准 prompt、LLM answer judge 和重复采样分析结合起来。它不要求统一浏览器实现，也能观察持续搜索难度、答案级不确定性和测试时计算回报。对 reasoning-data 研究最有方向价值的，是它明确区分公开任务/答案表与私有或模型特定的搜索过程。

简答式 QA、LLM-as-a-judge 评分、置信度诱导、重复采样、majority voting、best-of-N 或网页搜索本身都不是新组件。该工作也没有提出可回放环境、证据/引用评分、浏览器动作 schema 或公开轨迹数据集。1,266 行规模和性能表本身不能作为数据质量证据。

复用前应检查单一答案裁决、论文 grader 身份、当前 scorer 修复、实时网页版本漂移、canary 处理、污染暴露、数据集特定权利以及成功/失败轨迹缺失。BrowseComp-Plus 只能作为后续的独立记录阅读；其固定语料、qrels 和证据文档不得归因于原版 BrowseComp。
