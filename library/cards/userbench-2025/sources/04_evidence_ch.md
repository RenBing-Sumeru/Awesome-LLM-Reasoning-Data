规模证据必须区分 scenario 与序列化 variant。论文 Table 2 报告 2,651 个 train 和 471 个 test scenario，其中 test 为 118 easy、201 medium、152 hard，train 为 666、1,130、855。对发布 Parquet 的完整核验与之吻合：single-choice 与 multi-choice variant 各自包含相同的 3,122 个唯一 task ID，按 2,651/471 划分且 ID 零重叠。两个 variant 合计 6,244 行，但把它们当成唯一 task 会让 benchmark 数量翻倍。Section 3.5 却写成 417 个 test point；当前 release 与 Table 2 支持 471，因此卡片保留 417 为未解决的论文内部冲突，而不是静默改正。

论文还使用三种不同的规模描述。Introduction 声称提出 4K+ scenario；Figure 1 与 Section 3.5 称随机组合可支持 10K+ possible scenario；核验后的公开 release 只有 3,122 个唯一 ID。10K+ 描述构造容量，不是发布规模；4K+ 标题数字也没有与 release 调和。这些数量是 recipe 与 packaging 的证据，不是语义正确性或数据质量证据。

在论文 single-choice 设置下，Table 3 中 GPT-4o 的 score 为 0.329、valid-search rate 为 82.48%、valid-action rate 为 27.82%、active preference elicitation 为 24.06%。作者还报告所有被测模型都不会主动获取 31% 的偏好。Section 5 进一步报告：增加 turn 不能稳定改善表现，pass-k 提高最大值却不提高平均值；定性失败包括过早猜测、重复或偏题对话，以及丢失 aspect state。这些是 GPT-4o simulator/judge、最多 20 turn、temperature 0 与指定模型条件下的作者报告单次运行结果，未被独立复现，不能认证 task label、judge 有效性或训练价值。

仓库证据确认 evaluator 为混合类型。search 与 clarification 决策调用 GPT-4o prompt，option-ID reward 与 termination 则由代码实现。论文 Figure 8 的 judge type 编号是 1=available preference、2=unavailable、3=vague、4=normal；公开 prompt/code 使用 1=normal、2=available、3=unavailable、4=vague，且 commit 检查表明该映射从首个公开仓库 commit 起就存在。这是实质性 documentation drift，因为照抄 figure 实现可能错误路由分类结果。

发布检查也给出直接负面证据。默认 passive elicitation 使用未设 seed 的 `random.choice`；一条官方 task record 明确写道两个 restaurant option 的 cost level 相同、两者均可选择，却只把 R8 标为 `best_id`，使另一个 correct choice 只能得到 0.8 而非 1.0。没有找到完整 run archive、raw judge response、dropped-run ledger、独立 verifier 校准、外部 overlap audit 或覆盖 3,122 个任务的完整语义标签审计。因此 benchmark score 只测量该 evaluator 下的 agent，不能证明发布任务或 reward 是高质量训练数据。
