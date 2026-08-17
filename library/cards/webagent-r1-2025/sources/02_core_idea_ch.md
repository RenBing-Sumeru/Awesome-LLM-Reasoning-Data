
该流水线由四个相互衔接的阶段组成。第一，用 9,460 条 program-solver 轨迹做行为克隆 SFT，使 instruction-tuned Qwen2.5-3B 或 Llama3.1-8B 策略先掌握基本 action 语法与网站技能，从而有机会得到非零奖励。第二，对每个 RL 任务启动多个浏览器实例；它们从同一页面出发，但分别维护包括 cookie 在内的上下文，当前策略异步生成一组成分不同的多轮 history。第三，dynamic context compression 用简化占位内容替换较早的完整 HTML observation，同时保留 action history，并随上下文变化调整 loss mask，以降低显存开销。第四，按任务得到的二元终局奖励在组内归一化，形成 multi-turn GRPO（M-GRPO）的相对 advantage。

反馈契约来自环境与程序规则，而不是 language-model judge。WebArena 根据最终回答或 Web 状态，用内置的 string match、URL match 或 program execution checker 返回成功或失败。该奖励监督完整 episode，并通过 action 输出上的 token-level 更新影响策略，但不会标注中间决策。与纯 BC 相比，策略会在自身当前的成功与失败上训练；与 DigiRL 或 WebRL 一类 off-policy 配方相比，WebAgent-R1 没有报告 replay buffer、轨迹筛选器或单独训练的 outcome reward model。测试时分析属于另一机制：它增加允许的环境交互次数，而不是只延长单轮回答，并测量 episode budget 对成功率的影响。
