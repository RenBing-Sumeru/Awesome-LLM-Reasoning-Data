WebSailor 的核心思想是分两阶段教授困难网页导航：先围绕成功 expert action 重构紧凑 reasoning，再用在线 agentic RL 超越直接模仿。SailorFog-QA 从网页事实驱动的 random-walk graph 中采样非线性 subgraph，并模糊精确名称、日期和数量，以提高任务不确定性。轨迹管线把 expert 的有效行为与其风格化 reasoning 分离：保留 action 与 observation，由第二个 LLM 为每个已选 action 写入简短理由（论文 §3）。

数据对象是完整 ReAct episode：question 与 answer、交替的 `think`、`tool_call`、`tool_response`，以及 terminal `answer`。Search 每个 query 返回十条标题、snippet 和 URL；Visit 通过 Jina 取回网页，再由 Qwen-2.5-72B 按目标摘要。Observation token 在 context 中可见，但在 supervised loss 和 policy loss 中都被 mask（论文 §2、§4；Appendix A.1–A.3）。

反馈契约是 mixed。DUPO 使用 `0.1 * R_format + 0.9 * R_answer`：format component 以程序检查 tag 与 ReAct 顺序，未披露的 LLM judge 判定答案正确性。它能观察序列化合规和 terminal equivalence，却不能直接证明中间网页主张有证据、搜索路径最简，或重构 thought 忠实反映 expert 的因果决策过程。

相对于 WebDancer 的 trajectory-centric RFT/RL recipe，WebSailor 把 task source 改为刻意制造高不确定性的 graph，围绕成功 action–observation trace 重构简洁 thought，并用 DUPO 对非零方差 group 做 batch 内复制，代替更慢的顺序补 batch。相对于 WebSailor-V2，本论文是第一阶段管线；不能用后续工作反向填补 WebSailor-v1 未披露的数据与 reward 细节。
