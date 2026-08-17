DSBench 的一句话贡献是：构造一个更接近真实 data-science workflow 的 agent benchmark，覆盖长上下文、多模态任务背景、大文件、多表结构和端到端建模。核心机制是把完整任务指令和数据工件交给 agent，让它产出答案或提交文件，再用任务特定 evaluator 评分。

相对 DS-1000 式代码补全或小型表格 QA，DSBench 把评测面改成对外部文件进行分析和建模的 agentic workflow。反馈契约是混合的：data analysis 用脚本和答案判定步骤计算正确性，data modeling 按每个 competition 的指标（如 accuracy）算分。方向标签是 realistic data-science agent benchmark。
