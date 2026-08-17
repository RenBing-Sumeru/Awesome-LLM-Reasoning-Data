Mutual-Taught 的贡献是一个双向数据闭环：当前 RM 把 on-policy 响应转成供策略 DPO 使用的偏好，随后策略变化又被转成刷新 RM 的伪偏好数据。作者把这一交替过程称为受 EM 启发。未知的潜变量是符合人类偏好的最优响应分布；实际实现以持续变化的策略作为替代，并把学习式 RM 当作唯一可操作偏好信号。（论文 §4.1–4.2，图 2）

在 E-step 中，上一策略采样响应，当前 RM 负责排序，DPO 以上一 checkpoint 为参照更新策略。保存的 checkpoint 会在固定 2000 条提示上与上一策略比较，判断仍由当前 RM 完成，最后保留 RM 胜率最高的 checkpoint。在 M-step 中，选中策略与其上一版本针对同一奖励更新提示各生成一个响应；方法先把更新策略响应暂定为 preferred，计算其相对上一响应的 RM 分数差，再经过 Low-Quality Data Filtering 后进行 Bradley–Terry 奖励训练。（论文公式 4–8；附录 B–C）

反馈系统能够观察文本响应和标量 RM 分数，可以按当前 RM 排序候选、估计 RM 分数标准差，并识别“按同一 RM 看，更新响应明显更差”的情况。它不能直接观察人类偏好、事实正确性、安全性、任务成功，或更高分是否来自 reward exploitation。伪标签方向也没有独立验证：将被刷新的模型本身提供分数，用来选择并筛选它未来的训练记录。

该工作代表“分布漂移下的策略—奖励模型协同适配”方向。Iterative DPO、SPPO 和 ReST 类方法也会从变化中的策略生成训练数据，但通常保持外部 RM 固定，或只更新策略。ReSTEM 同样采用 self-training 与 EM 叙事，而 Mutual-Taught 声称的区别是增加明确的 M-step 来刷新独立 RM。Self-Rewarding 与 Meta-Rewarding 则让策略模型充当 LLM judge，依赖较强的判断能力；Mutual-Taught 保留独立标量 RM。ReST-MCTS* 使用可由 ground truth 检查的搜索数据，与这里纯判断式闭环不同。（论文 §2）

因此，真正的差别并不在于单独采用 DPO、Bradley–Terry loss、checkpoint 或伪标注，而是把这些组件耦合成一个构造契约：on-policy RM 标签训练策略，更新前后策略行为训练 RM，再由模型选择与方差感知筛选稳定两个方向。该契约仍是循环式而非真值锚定，这是将它与规则验证或新增人类标注的刷新流程比较时最重要的边界。
