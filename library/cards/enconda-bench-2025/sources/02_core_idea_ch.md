EnConda-Bench 把经过最小化破坏的仓库安装说明变成双层可评分任务：既检查 agent 是否诊断出注入错误并提出修复，也检查最终脚本是否真正完成仓库配置与测试。

构建流程从经过筛选、原始安装说明已由人工检查的 Python 仓库开始。Claude-4-Sonnet 与 Gemini 2.5 Pro 对 README 做最小改动，并附上错误类型、错误描述、候选修复和金标答案。GPT-4.1-mini 生成严格遵循 README 的安装脚本并参与过滤：错误版本必须阻断执行，修复后则必须能够越过受影响步骤；自动检查之后还有人工复核。公开对象是错误 README、逐错误金标元数据，以及另行维护的仓库/revision 上下文。

反馈契约是 mixed verifier。错误类型用 precision、recall 与 F1 比较类别集合；错误描述与修复建议的语义正确性由 LLM judge 判断；terminal predicate 则依赖环境执行，只有生成脚本成功构建环境、正确运行测试且进程正常退出才算通过。它能观测类别一致性、语义对应关系和最终可执行结果，但无法还原未发布的 command-observation 历史，也不能证明修复在未来 package 状态下仍安全可复现，或证明每个中间诊断都直接导致最终成功。

与论文讨论的 EnvBench、INSTALLAMATIC、ExecutionAgent 和 SetupBench 等环境配置 benchmark 相比，EnConda-Bench 的方向性变化是把错误定位/修复语义与端到端执行共同纳入评分，而不是只看一个最终 outcome。在 Atlas 中最适合一起阅读的是 SetupAgent/SWE-bench 与 BuildBench：三者都把仓库任务连接到环境 predicate，但 EnConda-Bench 以 4,201 个任务规模发布了合成 README 错误注释。它对该类别的价值来自反馈接口与审计边界，不能据此把公开任务行重新解释为完整 trajectory。
