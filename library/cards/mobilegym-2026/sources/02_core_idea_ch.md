MobileGym 的核心改动，是让同一套结构化状态同时承担四个角色：任务初始化、精确重置/分叉、确定性结果检查和 reward 构造。应用界面由只读为主的 world data、每个环境独立的可变 runtime overlay 与 OS runtime state 组合而成。Agent 只能看到截图，benchmark 层则可读取和比较完整 JSON 状态（论文 §3.1–§3.2，图 2–3）。

一个 episode 从参数化自然语言模板和 state patch 开始；其行为是 17 类动作抽象中的序列，包括触控、输入、导航、等待、`COMPLETE` 和 `ABORT`，不同 agent adapter 可暴露模型原生的动作子集。Evaluator 通过 `check_goals()` 或 `get_answer()` 检查任务特定状态，查询任务使用带类型的 AnswerSheet 字段，初终状态全量比较用于发现 unexpected side effects，并输出 Success Rate、Progress Rate、False Complete、Unexpected Side Effects 与 Overdue Termination（论文 §4.2–§4.3；附录 C、F）。

这套反馈是程序化的，但并非全知。它只能观察模拟器状态和任务检查器覆盖的字段，无法证明真实应用后端行为、像素级 fidelity、未建模副作用或检查范围之外的语义正确性。论文所称的 “dense” reward 比二元成功信号更稠密，因为它使用已通过 goal checks 的比例；但论文与当前 `mobilegym_evaluator` 都是在 rollout 完成后依据 artifacts 计算。因此它是由终局子检查形成的 episode-level 标量，而不是每个动作时刻持续返回的中间奖励流（论文附录 G；官方 `mobilegym-rl/cookbooks/mobilegym/evaluator.py`）。

与 AndroidWorld/AndroidLab 的 emulator 基准和 MobileBench-OL 的真机评测相比，MobileGym 改变了运行 substrate：浏览器实例使 JSON 状态可低成本复制和检查。与 AppWorld 类 state-based verification 相比，它把这一思路用于截图驱动的移动交互，并将同一检查体系接入在线 GRPO。其方向性贡献是共享的环境/反馈接口，而不是新的 policy 架构或公开的专家轨迹数据集。
