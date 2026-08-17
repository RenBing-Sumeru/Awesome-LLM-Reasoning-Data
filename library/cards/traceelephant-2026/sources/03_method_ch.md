构造 pipeline 如下：

1. **输入。** 从 GAIA、AssistantBench 和 SWE-Bench Verified 选择公开任务；发布中没有单独给出执行前的精确 task-ID manifest。
2. **生成与收集。** Captain-Agent 和 Magentic-One 在 GAIA 与 AssistantBench 上运行，SWE-Agent 在 SWE-Bench Verified 上运行；每个 system-task 组合采用固定配置、重复试验和 temperature 0.3。OpenAI-compatible middleware 截获 LLM 请求 payload、响应、解码参数、agent 间内容和可观察工具交互。每次运行的精确 backend model、provider、seed、试验安排以及 step、token 或时间预算均为 unknown。
3. **预处理。** 通过 regex 提取 agent 名称并区分普通输出与工具输出，尽量保留原始 trace 内容，自动过滤本地路径与标识符，再人工检查轨迹。清洗排除项与记录级脱敏决定没有发布。
4. **结果筛选。** 对 380 次清洗后执行应用 GAIA 或 AssistantBench 官方答案，或 SWE-Bench Verified 测试的 pass/fail。最终保留 220 条失败：Captain-Agent/GAIA 为 73/126，Captain-Agent/AssistantBench 为 12/21，Magentic-One/GAIA 为 74/119，Magentic-One/AssistantBench 为 17/30，SWE-Agent/SWE-Bench Verified 为 44/84。
5. **专家标注。** 三名有经验的标注者依次完成独立标注、不确定案例的联合共识和交叉复核或重新标注三轮流程。他们依照考虑可恢复性的定义，标注负责 agent 与最早决定性步骤；最终标签要求一致同意。共识前 Krippendorff's alpha 在 agent 标签上为 0.72，在 step 标签上为 0.64。
6. **输出与用途。** 每条失败 episode 发布一份 `trace_metadata.json` 和一份 `step_records.json`，当前 ZIP 中两类文件各有 220 份。论文用这些记录评测 All-at-Once、Binary Search、Step-by-Step、Static Agentic 和 Dynamic Agentic 归因方法；没有用它训练 agent 或 reward model。

复现必须固定当前 Hugging Face revision `a78a57cdcdf74a080b1bec0f56f85228d86acbac`，以及 `data.zip` 的 LFS SHA-256 `8e5df3e402abfa6666ae1b656a5d516395134163774b5da1a3abae99cb83a582`。该 archive 在 2026-06-02 被替换，以修复 Captain-Agent 与 Magentic-One 的 `content` 和 `tool_calls`。代码核验于 GitHub commit `0ce8abb2855de9f454f27f6b0795a4b7e6c8d5fc`，但没有 release 或 tag 将其映射到论文版本。回放还依赖凭证、外部 LLM 与 web 服务、上游任务环境及已记录的替换：Captain-Agent 的搜索 API 被替换；Magentic-One 将 Playwright 改为 Patchright，并将 Bing 改为 DuckDuckGo。
