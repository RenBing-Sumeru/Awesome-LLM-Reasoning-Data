论文报告 PSPA-Bench 包含 12,855 条 personalized instructions，覆盖 10 个场景、22 个 app 和 100 个 user personas，并评测 11 种 GUI-agent 方法。即时目标实验显示 GUI context 很关键：低复杂度下 LLM-Base 的 APR 为 0.002、PPR 为 0，而 +A11y 达到 APR 0.625、PPR 0.586。

最佳即时完成率仍然有限。Mobile-Agent E 在低复杂度下达到 APR 0.695、PPR 0.621；在高复杂度下为 APR 0.468、PPR 0.435，同时 CT 716.7、CPT 1.692。论文据此指出 personalization 强化了 accuracy-efficiency tradeoff。长期适应实验中，Mobile-Agent E 在中等复杂度下有 +6.72 APR、+3.68 PPR 这类正向 delta；没有持久记忆的方法提升很小或不稳定。

逐实例证据是 trace-to-TDG checklist：哪些 fixed / flexible unit instruction 被完成。论文用四个场景的 100 条 traces 和三名标注者做人类验证，inter-annotator Fleiss kappa 为 0.87；LLM alignment 相对人类标签的 overall accuracy 为 0.93、Cohen kappa 为 0.86。证据边界是：persona 是合成的，TDG 是人工构建的，指标依赖 LLM evaluator、app/runtime 稳定性和匿名 artifact 可用性。
