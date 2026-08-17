TerminalWorld 的核心贡献，是把一段公开终端 demonstration 转化为可执行评测契约：目标导向指令、清理后的 Bash 参考解答、重建的 Docker 环境，以及检查最终持久状态的 state-based test。原始 transcript 为构建提供行为证据，但被评测智能体可以采用不同的有效路径（论文第 3.2–3.4、5.4 节）。

必须区分构建对象与评测 episode。发布对象保存任务规格、参考解答、环境 artifact 和 verifier；新的评测 episode 则包含指令、环境状态、智能体 shell command、stdout/stderr 等 observation、产生的状态变化，以及终态 resolved/failure outcome。该发布没有为每条 command 附加正确性，也没有在顶层 manifest 中发布论文评测的完整成功与失败轨迹。

反馈契约同时具有 environmental 与 programmatic 属性。Docker 执行提供状态转移，任务专属测试套件在 episode 结束后观察持久的前后置条件和 artifact。任务准入采用三路敏感性检查：完整参考解答必须通过全部测试（`AllPassing`），no-op 必须使全部测试失败（`Nop`），每个截断或消融的 partial solution 必须至少导致一个测试失败（`Partial`）。更早的环境门要求参考重放以零退出码完成，但这只是必要条件，不是最终正确性 predicate（论文第 3.3–3.4 节）。

只要达到被测试的终态，verifier 可以接受行为上不同的 command sequence；论文报告的人类与智能体 command-set overlap 中位数为 21.4%，与此一致。但它不能认证未测试副作用、测试遗漏的语义要求、不存在 verifier gaming，或所有替代有效终态都等价。`Verified` 表示 4 位有经验作者人工复核了 200 个选定任务的标签正确性；论文脚注明确指出，这不等于形式化证明测试完整刻画了任务语义（论文第 4.2 节与第 1 节脚注）。

论文层面最接近的对照是 Terminal-Bench。TerminalWorld 的变化在于任务来源与构建表面：从公开真实终端录制派生任务，打包可重现环境，并用 reference/no-op/partial 行为验证生成测试。Docker 任务、程序化测试与终端智能体评测本身都不是分别首次出现；方向信号在于把 provenance、环境重建、outcome verifier 与重放风险明确绑定。
