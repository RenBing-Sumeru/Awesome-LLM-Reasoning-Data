1. 输入：带候选项的生物科研题目、类别元数据，以及论文片段、补充材料、图、表、protocol 修改、数据库事实或生物序列等任务证据。
2. 构造：论文报告 LitQA2、SuppQA、FigQA、TableQA、ProtocolQA、CloningScenarios 等多为人工生成，SeqQA 和 DbQA 使用程序生成流程。
3. 输出：benchmark item 保留题面和答案键；模型评测记录模型回答和任务级分数。
4. 反馈：通过条件是模型答案与官方 target 在作者评测设置下匹配；论文报告 human coverage，但运行时关键反馈仍是 release 中的评分契约。
5. 复现：需要固定 Hugging Face revision、public/private 分区、2024-08-19 FigQA 更新、2025-02-18 SeqQA 更新、prompt scaffold、answer parser 和是否允许工具使用。

这张卡只把它作为 evaluation-only benchmark。若把题目用作训练、reward 或过滤数据，必须额外审计污染、canary 过滤和 private-test claim 是否仍成立。
