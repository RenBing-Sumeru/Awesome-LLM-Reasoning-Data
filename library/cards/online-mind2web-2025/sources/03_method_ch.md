构建流程首先检查任务可执行性。对抽取的 650 个 Mind2Web 任务，策展者移除歧义、过时、失效或被强 CAPTCHA 阻断的案例，在必要时改写仍可求解的任务，并从 Mind2Web-Live 与新网站补充任务。最终 300 个任务由 167 个筛选任务、24 个改写任务、34 个 Mind2Web-Live 任务和 75 个新任务组成，覆盖 136 个网站和 12 个领域，其中含 14 个小众网站任务。后续替换任务时尽量保持网站与大致参考长度难度，因此任何运行清单都必须记录任务修订版本。

六类智能体生成实时 episode：SeeAct、Agent-E、Browser Use、Claude Computer Use 3.5、Claude Computer Use 3.7 与 Operator。开源智能体使用 Playwright，Claude Computer Use 使用本地 Chrome，Operator 使用远程浏览器。SeeAct、Agent-E 与 Browser Use 最多 25 步；Claude Computer Use 3.7 最多 50 步且关闭 thinking；Operator 的预算未披露。主比较从指定网站开始，并禁止 Google Search。不同智能体的视口与截图方式并不一致。

每条评测轨迹至少由 2 名人类标注者判断，分歧时由第三人裁决。WebJudge 提取关键点、评分截图相关性、保留得分至少为 3 的画面，再依据可见证据和事实动作预测成功。WebJudge-7B 在由 GPT-4o、GPT-4.1-mini、Claude 3.7 与 Qwen2.5-VL-72B 合成的相关性目标上微调 Qwen2.5-VL-7B。训练轨迹来自 SeeAct、Browser Use 与 Claude Computer Use 3.5；Agent-E、Claude Computer Use 3.7 与 Operator 留出。训练使用 4 张 H100 80GB、bfloat16、批量 256、序列长度 4096、5 个 epoch、学习率 5e-6、余弦衰减与 10% warmup。

仓库的 v2 schema 把每一步序列化为单一对象，避免 v1 平行动作、思维与截图数组可能发生的静默错位。不过，符合 schema 仍不足以保证复现：还必须保留任务修订、网页状态、浏览器与视口、账户/cookie/locale 状态、智能体和模型设置、重试、完整截图/动作包、标签来源及评测器修订。
