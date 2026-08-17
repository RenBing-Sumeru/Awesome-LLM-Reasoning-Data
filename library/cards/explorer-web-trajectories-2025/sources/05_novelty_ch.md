既有网页智能体数据工作通常从固定人工任务、只看首页的 self-instruct proposal、合成 grounding 样例或教程引导 replay 开始。Explorer 改变了构造顺序：低层动作先暴露真实页面 affordance，任务随之改写以保持与动作一致，执行结束后 summarizer 再恢复最终高层意图。任务创建、行为生成和环境 grounding 因而成为同一耦合过程。

新的数据操作是“持续变化的任务状态”。一条接受记录保留从抽象 proposal、动作条件下的多轮 refinement 到最终描述的路径，同时配有多模态页面状态和学习型成功决定。原始到接受的漏斗、60 进程/50 小时采集运行、成本模型，以及单独进行滚动过滤的 SFT 子集，使该配方比只报告最终轨迹数的工作更具操作性。

论文没有发明 Playwright、ReAct 式交互、set-of-mark 截图、GPT-4o 生成、LLM-as-a-judge 筛选、Phi-3.5-Vision/Qwen2-VL backbone 或 SFT。其规模与工程集成不应被表述为新的确定性 verifier 或完整开放数据发布。学习型 verifier 看到的是可见证据而非真实服务端状态，原始实时页面也没有被冻结。

对 atlas 而言，方向信号是 exploration-driven task synthesis：允许环境塑造 instruction，而不是在动作开始前就要求完整任务。复用该模式前，应检查任务改写是否形成 hindsight label、generator 与 verifier 误差是否相关、失败路径是否保留、页面内容是否有再分发权，以及逐条时间戳和快照能否支持 lineage 审计。81% 的人机一致率和缺失语料快照是核心边界，而不是附带细节。
