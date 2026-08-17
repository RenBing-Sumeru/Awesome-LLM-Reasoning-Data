本卡以 arXiv:2510.16252v2 为主对象。该版本于 2026 年 5 月 17 日修订、首次投稿于 2025 年，标题为“WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale”，共有 13 位作者。另有一个标题不同、仅列 8 位作者的早期版本，曾以海报形式发表于 NeurIPS 2025 的 Multi-Turn Interactions in Large Language Models Workshop。本卡关联二者，但不把不同标题和作者列表静默合并。

论文处理的是网页智能体后训练中的全栈瓶颈。浏览器侧环境可能提供噪声过多的 observation、执行不稳定的 action，并遗漏人类用于判断可交互性的线索；服务器侧则需要反复隔离和重置有状态应用，而传统 Docker 部署难以支撑 on-policy RL 所需的并行度。WebServ 把 DOM 派生的 observation/action 接口、感知网络活动的动作执行，以及采用块级 copy-on-write 的逐智能体 Incus 容器组合起来。

必须区分四种数据对象：第一，WebArena/WebArena-Lite 的任务与 evaluator；第二，Claude 4.5 Sonnet 生成的 SFT 启动轨迹；第三，Qwen3 策略在 GRPO 中生成的在线 RL rollout；第四，官方实际公开的 726 条经成功筛选的 Claude 消息序列，以及环境、evaluator 和训练代码。公开物不含失败 Claude session、原始 result 文件、Qwen RL rollout 日志或模型 checkpoint。

因此它适合纳入“环境与智能体轨迹数据”方向：WebServ 把 observation state、action execution、环境重置、verifier 输出和轨迹吞吐统一放进训练基础设施。同时，它也是一个清晰的发布审计案例——论文训练过程中产生的 rollout 规模，明显大于公开保留的轨迹数据范围。

