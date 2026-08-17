UltraChat 的主要贡献是把用户需求拆成**世界知识问答**、**创作与写作**、**基于现有材料的协助**三类，再为每一类生成带上下文的交互，从而扩展合成对话构造。与 WizardLM 这类演化单条指令的方法不同，它的监督对象是双方均由模型生成的完整多轮对话。教师模型提供训练目标，而不是独立的正确性反馈，因此质量依据来自构造控制、语料分析和下游评测。

Google Scholar 引用数：952（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Enhancing+Chat+Language+Models+by+Scaling+High-quality+Instructional+Conversations&author=Ning+Ding&hl=en）

开源数据：有。**UltraChat** 位于 https://github.com/thunlp/UltraChat，包含 1,468,352 段英文对话，平均每段 3.8 轮、1467.4 个 token。记录按三类需求组织，是用户与助手消息构成的多轮序列，并以可下载 JSON 文件发布，可用于聊天模型 SFT；论文没有提供事实标签或逐条验证器，再分发前需核对仓库当前的发布条款。
