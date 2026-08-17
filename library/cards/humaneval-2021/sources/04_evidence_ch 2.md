# 证据：为什么应该相信它？

- 主要证据：arXiv / OpenAI 以及 paper.yaml 中记录的官方链接。
- 规模信号：164 道手写 Python 函数补全题。
- 质量信号：该 benchmark 在 code-generation、unit-test-benchmark、program-synthesis 方向提供了可复用评测面，适合放入 atlas 作为基础坐标。
- 审计重点：题目来源、标注/答案来源、scorer 代码、公开/隐藏 split、license 和 leaderboard policy。
- 使用边界：公开题库很容易进入后续训练语料；报告高分时需要说明模型是否可能见过题目或相邻数据。
