本文的核心贡献，是用受控方式把一条成功智能体 episode 转化为失败 episode，并把首次被替换的 action 作为预期的决定性错误标签。对于一条成功 seed，流水线依据合理的错误模式选择可注入步骤；一个身份未披露的 frontier model 生成自适应 injection prompt，再把该 prompt 拼接到原 base-agent 调用中，由 base agent 以自身风格产生错误 action。随后系统继续运行同一智能体，并记录下游后果。只有当来源任务 evaluator 把新轨迹判为失败时，该轨迹才会保留。

Warm start 是关键机制。较早的注入流程可能从头 rerun，随机 action 会在预定注入点之前发生漂移，使因果归因变得含糊。Who&When Pro 在替换一个 action 前精确 replay 成功前缀。静态搜索、页面和图像调用由以 SHA-256 为键的 SQLite cache 提供；有状态浏览器和代码 action 则重新执行，并通过 fidelity check 中止发生漂移的尝试。在该构造下，恢复被替换的 action 就能回到已知成功 seed，因此产生该 action 的组件和坐标分别给出责任智能体与决定性步骤标签；18 种 taxonomy mode 中的一种给出错误类别标签。（论文 §3.3；Appendix F.3。）

反馈契约是 mixed 且附着于完整 episode。来源基准 evaluator 判断注入是否把成功转成失败；公开描述并未给出一个统一 evaluator 或 scalar reward。归因模型再与构造标签比较，指标包括仅用于多智能体轨迹的责任智能体准确率、精确决定性步骤准确率、错误模式 macro-F1，以及要求三者同时正确的 Joint 准确率。Evaluator 能观察终局任务成功与归因预测，但不能证明注入 action 对人类读者而言就是唯一语义根因。三位标注者的验证对这一缺口进行了部分审计：step、agent 与 error family 的多数通过率分别为 94%、90% 和 90%，另有 2% 被判定为没有清晰的决定性错误。

相对于 Who&When 的小规模专家标注纯文本集合和 AEGIS 风格的 reroll 注入，本文的方向价值并不只是轨迹更多，而是把多模态完整 episode、精确前缀 replay、干预条件标签以及 agent/step/mode 评测组合起来。最重要的未决问题，是这些标签和环境能否在受控单错误干预之外仍保持忠实；当前缺失的数据记录与 replay 工件使这一审计无法进行。
