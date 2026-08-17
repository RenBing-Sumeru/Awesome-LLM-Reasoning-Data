Deep-research agent 的常见评测协议是：给定问题、开放网络 Search/Visit 工具，并允许模型多轮综合证据。公共 benchmark 使这一协议变得脆弱，因为同一个网络可能直接包含基准名称、完整测试题，甚至题目与答案的配对。检索便可能把原本的推理任务替换为 benchmark artifact 查找，同时仍生成正确且带 citation 的回答。

论文把这种现象称为 Search-Time Contamination（STC），并区分三种 step-level event。Benchmark Metadata Leakage（BML）指 Search 返回可疑的数据托管、考试或 benchmark URL；Question-Context Leakage（QCL）指 Visit 内容复现精确或高度特异的问题上下文，但没有答案；Explicit Answer Leakage（EAL）要求内容把精确问题 fingerprint 与 ground-truth answer 配对出现。一条 trajectory 可含多种 STC，并从弱 URL 信号升级为直接答案暴露。

因此核心数据对象是带 provenance 的搜索 episode：benchmark question/label、reasoning、Search query、URL/snippet 排名、Visit URL 与 page content/summary、intermediate prediction、逐轮 leakage label 和 final answer/correctness。审计覆盖六个医学/临床 benchmark 的 6,803 个问题；它是 evaluation audit，不是训练语料或受控污染注入实验。
