权威论文来源是 ACL Anthology 收录的 Findings of ACL 2025 正式版本，共 24 页（第 6300–6323 页，2025 年 7 月），包含附录 A–F。官方项目页和 `OSU-NLP-Group/Explorer` 仓库指向同一工作与相同机构。仓库公开了生成、训练和评测代码，但没有给出轨迹语料的不可变下载入口。

Explorer 处理一个具体的数据构造问题：人工编写网页 demonstration 成本高；若任务只依据首页或模型记忆提出，又可能漏掉网站深层页面才出现的动作与约束。论文让 agent 在实时页面探索时逐步定义正在执行的任务，使任务意图与实际行为共同产生，而不是事后配对。

这里的数据对象是多模态实时网页 episode：种子 URL、持续变化的任务描述、grounded 与自然语言动作、截图与 set-of-mark 视图、HTML/无障碍树状态、最终高层任务描述，以及 episode 级 verifier 决定。论文报告 175K 次原始尝试与 94K 条 verifier 接受 episode；另从中抽取 40K 条，再经滚动次数过滤得到约 30K 条用于报告的 SFT 实验。这几组数据不能混为一谈。

该工作属于 `data_construction_open_release_recipes`，因为主要可复用贡献是从种子、轨迹到筛选的流水线，以及成本、规模和选择证据。它不是可重置网页环境、程序化验证数据集或完整开放语料。双语 Card 已达到 `L4_chinese_review_ready`，但发布状态仍为 `partial`：官方来源和代码已核验，论文描述的训练记录、split 清单、内容权利和 replay 基底仍不可得。（论文 §§1–4、Table 3、Appendix A；官方仓库 README。）
