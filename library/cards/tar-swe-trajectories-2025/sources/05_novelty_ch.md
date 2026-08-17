既有基线通常是对单个软件修复 agent 做终止评测：benchmark 记录生成补丁是否通过测试或被确认正确，但这个标量 outcome 隐藏了推理、工具调用、observation、重试和被忽略反馈的序列。agent-log viewer 可以展示交互，从历史轨迹学习的方法可以执行优化，但二者本身都没有提供一套用于比较三种异构软件工程 agent 的统一实证编码方案。

本文把研究对象从最终补丁 outcome 改为有序 thought-action-result episode。它统一 RepairAgent、AutoCodeRover V1 与 OpenHands CodeAct 日志，建立共享的八类 action 词表，比较固定 action 4-gram，并对约 14,000 个组件 pair open-code 五类相邻关系。每个 agent 约保留 30 条失败和 10 条成功，使适应失败与忽略反馈成为一等分析对象。

反馈接口也被显式拆分：environment observation 与 terminal success 分开，二者又与 action 类型、语义一致性的人工判断分开。对 reasoning-data 研究而言，这一划分可避免把 test-passing 标签暗中当成 step supervision，也避免把人工关系标签描述成 environment reward。

非新内容包括三种 agent、Defects4J 与 SWE-bench Lite 任务、原始终止 evaluator、tool-use log 和一般 qualitative coding。研究没有提出新 policy、可重放 environment、新 benchmark split、reward model 或经过验证的 training recipe。其具体新意是把跨 agent 的实证表示与标注方法用于成功和失败轨迹。

该工作给出的方向信号是 terminal reward 以下的可审计性：未来发布可以保留 state/action/observation 字段，标记反馈是否被吸收，并诊断重复无效循环。但在复用前，仍需验证 parser 输出是否匹配 raw logs、episode 清单是否与每张分析表一致、关系标签是否可靠，以及发布能否被固定和 replay。规模与获奖信息不能替代这些检查。
