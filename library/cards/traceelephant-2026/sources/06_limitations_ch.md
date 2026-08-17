在方法层面，负责 agent 与决定性 step 标签是因果和反事实判断，并非程序可验证事实。共识前 alpha 为 0.72 和 0.64，说明存在实质歧义。数据只覆盖 Captain-Agent、Magentic-One 与 SWE-Agent，因此标签和归因结果未必能泛化到不同架构、隐藏状态系统或黑盒 agent。failure-only 数据也缺少成功对照，无法判断归因模型捕获的是失败专属证据，还是系统或 benchmark 身份。

发布存在具体的版本与 evaluator 风险。Hugging Face 在 2026-06-02 替换 `data.zip`，以修复 Captain-Agent 与 Magentic-One 的 `content` 和 `tool_calls`，却没有发布记录级 migration diff。GitHub 没有与论文对应的 release 或 tag。`evaluate.py` 判断实际 agent 或 step 字符串是否包含在预测中，而非要求 strict equality；因此，较短的正确字符串嵌在较长但错误的预测里也可能计为正确。这是根据发布代码得到的 curator inference 和可能的 false-positive 模式，并不是对 Tables 2-3 的实测修正。

精确回放仍受以下缺失信息阻碍：每次运行的模型、provider、prompt、seed、预算、任务 manifest 与 reset state；可变 web/API 服务及已记录的浏览器/搜索替换又带来环境漂移。数据仓库缺少正式 schema、datasheet、方法学 split manifest、checksums 文件、changelog 和 1 月至 6 月修复映射，也没有报告 decontamination audit。traces、annotations 与 metadata 标为 CC BY 4.0，但代码专属条款及其与公开 benchmark 数据、vendored 上游系统的兼容性仍需单独核验。完整 prompt 与工具日志在更广泛分发前也需要逐记录隐私检查。
