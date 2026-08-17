Evol-Instruct 把指令难度和广度变成显式构造变量：每条接纳记录都连接种子、演化操作、演化后指令和教师回答。与 Self-Instruct 相比，它追求可控复杂度，而不只是生成更多相似难度样本；与 UltraChat 相比，它产出单条指令—回答，而不是带上下文的对话。OpenAI 模型同时编写演化请求和回答，规则检查负责过滤畸形演化，但没有独立验证器保证回答或推理正确。

Google Scholar 引用数：1736（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=WizardLM%3A+Empowering+large+pre-trained+language+models+to+follow+complex+instructions&author=Can+Xu&hl=en）

开源数据：有。**Evol-Instruct / WizardLM 指令数据**位于 https://github.com/nlpxucan/WizardLM，包含论文相关的 JSON 指令—回答文件，可用于 SFT。论文从 52K 条 Alpaca 指令构造 250K 条演化候选，并在配置匹配的 LLaMA-13B 实验中随机使用 70K 条；记录包含演化指令和教师输出，完整审计还需保留种子和操作来源链。仓库后来发布过其他版本，训练或再分发前必须固定具体文件、数量、格式和许可证。
