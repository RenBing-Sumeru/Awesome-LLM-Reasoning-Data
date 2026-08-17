输入是来自 26 个公开学术基准的任务，并由 15 个单智能体和多智能体框架执行。Appendix F.2 指出主要 base model 是 GPT-4.1 与 Gemini 3 Flash，但具体模型随 agent/benchmark pair 而变化。采集过程记录任务输入、智能体消息、observation、中间 artifact 和终局答案，再在可用时用官方来源 evaluator 把运行划分为成功与自然失败；这两个来源分区的数量均未披露。

自然失败与成功轨迹承担不同角色。PhD 级 reviewer 检查抽样自然失败，识别最早决定性错误，把重复模式归并为六个 family 下的 18 种 mode，并建立各 agent/benchmark 的适用 profile。自然失败本身不进入基准；成功运行则作为 injection seed。针对选定且合理的错误模式，sampler 排除无效步骤并采用位置偏好，例如较早注入 planning error、在收集证据后注入 verification error；但精确分布、每个 seed 的尝试次数、retry、随机种子和阈值均为 unknown。

注入包含两次模型调用。身份未披露的 frontier model 读取任务、参考答案、seed context 和目标 mode，生成具体的自适应 injection prompt；原 base agent 在该步骤调用中接收 prompt 并产生错误 action。框架 replay 此前全部 action、替换这一个 action，再让原系统继续。静态事实性工具输出来自同步 SQLite cache，cache key 是规范化参数的 SHA-256。对于页面访问，只缓存 raw page content，二级 LLM summary 仍可变化。浏览器/代码状态通过新建 Playwright/code-executor instance 并 replay action 重建；异常或检测到的漂移会中止尝试。Appendix F.3 报告 Bing DOM rotation 占 `input_text` replay failure 的 89%。

筛选只保留被任务 evaluator 判为失败的注入后 continuation；额外过滤会移除 construction prompt 泄漏，以及注入前 context 已明显包含正确答案的案例。最终报告输出为 12,326 条失败轨迹，其中 51% 为文本、42% 为图像、7% 为视频，76% 为单智能体、24% 为多智能体。平均/最大长度为 7.5/50 步，每条轨迹平均 1,139 个词、每步 152 个词；多模态轨迹平均含 1.3 张图像。论文没有公开成功 seed、自然失败、失败的注入尝试、注入后成功、replay abort、被拒绝记录、精确规则或 row schema。

评测使用 all-at-once、step-by-step 或 binary-search protocol 提示 10 个 frontier model。默认设置在不提供参考答案的情况下展示完整轨迹，要求输出 Agent Name、Step Number、Error Mode 和简短理由；所有轨迹均适配模型原生 context window，无需截断。论文没有训练 optimizer。复现需要 12,326 条记录、来源任务 ID/版本、模型 snapshot、taxonomy profile、prompt、cache、环境 snapshot、evaluator 版本、过滤 ledger、预测文件和 subset manifest；除论文级描述外，这些当前均未公开。（论文 §§3–4；Tables 2–3；Appendices F、J、K。）
