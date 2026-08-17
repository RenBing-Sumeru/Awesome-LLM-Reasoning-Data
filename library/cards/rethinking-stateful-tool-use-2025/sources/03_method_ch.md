**构造。** 作者选择 SGD 与 MultiWOZ，利用其多轮工具行为及 domain/intent/slot 标注。Python “setting shift” 脚本把除 utterance 外的标注转换为 action/App/API/argument 标签。研究者人工收集 50 个影视角色配置，以姓名、性别、MBTI、语言、情感和交互属性约束系统回复改写；用户 utterance 不变。改写模型及样本验收流程未知。

**环境。** 作者用 Python 人工实现 App/API 并加入自然语言 schema；唯一的来源 lookup 输出组成确定性数据库，正确性准则是相同输入返回相同输出。状态属性追踪 App、API 与历史结果，但 reset、序列化、事务 rollback、并发和环境版本流程未公开。

**规模与划分。** Table 2 报告训练集含 20 Apps、45 APIs、16,142 dialogues、329,964 turns、85,191 calls；评测集含 15 Apps、30 APIs、900 dialogues、15,568 turns、4,274 calls。两侧 multi-App dialogues 为 10,739/360，roles 为 50/16。划分来源和 overlap 控制未知；正文“约 33k turns”与表中 329,964 个训练 turns 冲突。

**评测。** 工具创建给完整 schema 和一个示例，再用全部 test calls 执行生成的 Python：需创建 32 APIs，平均/最少测试用例为 363/93。其余任务分别预测 action、App/API、参数及回复。13 个模型以 temperature/top-p 0.1 运行；reflection、token/tool budget、seed、retry、完整 rollout retention 和端到端 terminal predicate 均未报告。
