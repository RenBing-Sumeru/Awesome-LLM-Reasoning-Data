七页 addendum 在明确评测条件下提供模型专属安全数字。第 4 页表 3 报告 malware golden-set refusal score：GPT-5-Codex 为 1.00，codex-1 为 0.98；该集合由内部 policy 专家整理，但 item 数、uncertainty、rubric 及其与训练的独立性均未披露。第 4 页表 4 报告 coding prompt injection 的成功忽略率：GPT-5-Codex 与 codex-1 均为 0.98；攻击包括终止当前任务或植入后续步骤指令。论文没有披露评测数量或训练/评测 membership。

Production Benchmarks 与 StrongReject 是独立安全评测。第 2 页表 1 报告分类别 Production Benchmark 分数；在被描述为代表 production data 的会话上，GPT-5-Codex 从 harassment/threatening 的 0.719 到 sexual/exploitative 与 self-harm/intent 的 0.958。第 3 页表 2 报告四类 prompt 上 StrongReject robustness 为 0.992–0.997。这些是作者报告的安全分数，不是隐藏 SWE reward 或语料的证据。

发布页补充带条件的工程证据。SWE-bench Verified 在 GPT-5 发布时只能运行 477 题，修复基础设施后覆盖全部 500 题。Refactor suite 使用成熟 Python、Go 和 OCaml 仓库；其中一个 Gitea 示例改动 232 个文件和 3,541 行代码。测试期间，部分大型任务运行超过七小时，并不断迭代实现和测试失败。这些是评测与产品条件，不是训练 rollout 数或通用终止规则。

OpenAI 员工流量 telemetry 报告：按模型生成 token 排序的 bottom 10% turn 比 GPT-5 少用 93.7% token，top 10% 则在 reasoning、editing、testing 和 iteration 上耗时约两倍；token 数包含 non-user-visible reasoning 和 final output。采样时段、任务分布、原始 trace 和统计 uncertainty 不可用，因此这是 observational evidence，而不是受控数据或训练主张。

对于 code review，官方发布页说明评测使用热门开源仓库的近期 commit，并由经验丰富的软件工程师按正确性和重要性评价 review comment。页面称 GPT-5-Codex comment 更少出现不正确或不重要情况，但没有给出样本数、baseline 数值、代码仓库与 commit 列表、rubric、agreement、uncertainty 或原始 label。该评测没有点名 hidden unit test；后者属于后续 GPT-5.1/5.2-Codex 内部 PR 评测。

以上结果均为 OpenAI 直接报告。本 Card 的解释保持边界：这些数据证明指定评测面在所述条件下存在，但不能证明其 judge、test、prompt 或 metric 提供了训练 reward，也不能证明它们独立于任务语料。
