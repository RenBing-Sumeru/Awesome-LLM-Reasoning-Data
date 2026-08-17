
该方法把动态规划表示在一个 monolithic LLM 内部，而不是分别建立 planner、router 与 actor 网络。概念上，decision policy 决定是否重新规划，planning policy 写出新的自然语言 plan，acting policy 输出下一条 command；实际运行时，三者都编码在同一个输出字符串中。BALROG 在字符串含 plan block 时识别一次规划，把该 plan 带入后续 context；无论是否规划，它都会抽取 action 并在环境中执行。决策边界依赖状态：只有当新 plan 对未来 task value 的预期提升超过 token 成本以及 plan drift 或不稳定重规划的隐含风险时，才应生成新 plan。

训练分为两个阶段。Synthetic SFT 让 Llama-3.1-8B-Instruct 接触同时含 planning step 和 non-planning step 的轨迹，使可选 plan emission 预先进入其行为分布。PPO 再用 Crafter task reward 联合优化 decision/plan/action policy。核心反馈契约是 environmental 且跨 episode 关联的，而不是文本 plan verifier：有效 plan 应带来更高的后续 achievement，过度或不一致的重规划则可能降低同一 return。论文在消融中测试每 token -0.001 和 -0.005 的 planning penalty；但对 invalid action、过长 response 和频繁 planning 的显式 shaping 曾使智能体完全回避规划，因此主设置移除了这些 shaping。
