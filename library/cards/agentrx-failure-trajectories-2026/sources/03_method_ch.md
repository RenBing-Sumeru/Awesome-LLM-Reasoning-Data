1. 输入是工具或 agent schema、可选领域 policy、任务指令，以及带 step index 的失败轨迹。 
2. benchmark 构造先从三个领域抽取失败运行，人工标出所有失败事件，再从终止失败倒推，选出最早且未被恢复的关键失败步骤。 
3. AgentRx 诊断时先归一化日志，再从 schema/policy 合成全局约束，从轨迹前缀合成动态约束，对每一步适用的 guarded assertion 返回 SAT、VIOL 或 SKIP，并保存 evidence。 
4. 输出是 validation log、预测关键 step 和预测根因类别；程序谓词与 LLM 语义检查提供约束证据，LLM judge 负责最终归因。 
5. 复现必须固定轨迹来源、领域 policy、工具 schema、taxonomy、checker/judge 模型、prompt、调用预算，以及 Flash 私有轨迹或公开 tau-bench/Magentic 工件是否可取得。
