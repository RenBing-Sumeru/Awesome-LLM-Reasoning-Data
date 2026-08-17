每个 agent 在有向 communication graph 中，根据任务与全部 predecessor message 采样自己的 role message。如果 terminal reward 超过符号阈值 `epsilon`，SiriuS 会把所有参与角色的消息加入各自 good-trajectory library。随后分别用标准 SFT 更新各 role policy，之后的迭代可以用更新后的系统重新 rollout，构建新的 library。

失败的 QA episode 采用更窄的路径。SiriuS 选择一个 role，把任务、该角色原始回答和正确答案交给外部 critic，请其给出 actionable feedback。该角色根据原始回答与 feedback regenerate；生成结果再被 rephrase，以去除对错误或 critique 的显式引用；之后重跑全部 successor。只有最终解析答案转为正确时，selected role 与 downstream role 的新消息才被接纳。未修复的失败不产生 SFT target。

最接近的 **data-loop predecessor** 是 STaR：二者都从模型生成的成功解答中 bootstrap supervised reasoning data。STaR 是 single-agent；SiriuS 则把成功拆成 role-conditioned record，并在修复一个角色后 replay 下游 agent。这一区别是 SiriuS 对本 track 的主要价值，同时它也继承了 STaR 的风险：terminal success 可能接纳幸运或有缺陷的 reasoning。

最接近的 **interaction-only comparator** 是 training-free Prompt Multi-Agent System，论文中记作 CoMM/COMM。它让多个 agent 协作，但不会把轨迹转成独立微调的 role library。Single-Agent 是结构上的下界对照：它完全移除 role decomposition 与 multi-agent communication。

TextGrad 与 DSPy/MIPROv2 是最接近的 **optimization-object comparator**。TextGrad 通过反传 natural-language feedback 优化各 agent prompt，DSPy 则联合搜索 instruction 与 few-shot example；SiriuS 改为在筛选后的 role output 上做 SFT，从而改变 model policy。因此，相对 TextGrad 或 DSPy 的提升不能单独归因于“数据更好”，因为 trainable object、execution reliability 与 provider fine-tuning path 也同时改变。

Actor-Critic 是论文中的另一种 feedback contract，并不等同于 problem-solving selector。学习型 Judgment agent 可以接受或拒绝 Actor，拒绝后由 Critic 给出 textual feedback。competitive setting 则使用 game-state transition 与确定性 role utility，而非 answer equality。这些变体解释了 `verification_contract: mixed`：框架同时使用 programmatic terminal check、learned judgment、textual critique 与 scalar environmental utility。
