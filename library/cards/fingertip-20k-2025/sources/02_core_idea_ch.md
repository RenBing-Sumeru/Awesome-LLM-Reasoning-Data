核心贡献是一种纵向、用户条件化的移动端 episode 对象，用同一类数据支持两种预测：依据画像、历史与场景推断用户当前可能的 intent；或者依据当前 intent、手机状态、动作历史以及检索到的同用户示范预测下一步 GUI 动作。因此，同一条人类 episode 既可成为 SFT target，也构成 benchmark 输入与参照的来源（论文第 3–5 节）。

在 proactive suggestion 中，输入包括 user profile、时间、场景、最多 20 条历史 intent，以及 0–3 张初始 screenshot；输出是一句中文，点明 app 与期望最终效果。在 personalized execution 中，模型接收当前 intent、画像、screenshot、accessibility element、已执行动作历史，以及按 intent 相似度检索的一条同用户历史动作序列，然后在 live ADB loop 中逐步输出动作。存储的 `app/activity` 用于评测时启动 app，但不会提供给 agent（论文第 3.1–3.2、5.1 节、附录 A.7；官方脚本）。

反馈契约是 mixed。Suggestion 使用 `Sim1`——多语言句向量 cosine similarity 与 Levenshtein similarity 的均值——以及 DeepSeek-V3 对 intent 是否相同的二元判断 `SR1`。Execution 使用人工检查最终手机状态得到的成功率 `SR2`、超过人类示范长度 2.5 倍即自动失败的规则、动作序列个性化比值 `Sim2` 和 step ratio。这些信号分别观察语义相似、路径相似、预算约束或人工感知的终态，却没有提供可发布的 dense reward、自动逐步正确性或公开可执行的成功谓词。公开 proactive 脚本没有实现 `SR1`，execution 脚本也没有人工终态裁决器，并把 `success` 写成 0（论文第 5.1 节；官方脚本）。

与论文评测的通用 mobile-agent 系统相比——execution 实验包括 UI-TARS-1.5-7B——FingerTip 20K 改变的是数据与评测面，而不是提出新的 agent architecture：纵向用户身份、画像、时间/场景、历史 intent 与检索到的同用户行为成为显式输入。它代表的方向是个性化、主动式 mobile-agent data，而不是新的 Android 动作词表或自动验证环境。
