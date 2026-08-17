附录 Table 3 给出了最清楚的规模账本。在 4,655 条原始轨迹中，2,476 条形成标注 pair：coding 为 2,170 -> 1,288，math 为 1,185 -> 630，agentic 为 1,300 -> 558。论文报告的测试数分别是 147、63、56，合计 266。这些是论文计数，不是已核验的发布计数；直接检查固定 commit 的官方 parquet 得到 127 条而非 147 条 coding-test 记录、127 个唯一 `question_ID`，以及七个顶层字段均无 null。

在 handcrafted Who&When 上，Table 1 报告 AgenTracer 在论文 `w/ G` / `w/o G` 条件下的 agent accuracy 为 69.10/63.82，step accuracy 为 20.68/20.68。在 automated Who&When 上，对应 agent accuracy 为 69.62/63.73，step accuracy 为 42.86/37.30。这些作者报告结果只评测 benchmark 设置下的归因，不能独立验证构建标签或公开发布。

Table 2 提供任务族证据。在 Agentic 子集上，AgenTracer 的 step accuracy 为 36.17/35.55，Qwen3-8B 为 13.49/15.31，条件同样是 `w/ G` / `w/o G`；在 Math 上，AgenTracer 报告 57.63/57.63。该比较支持训练后的 tracer 在这些已报告归因测试中优于 base model，但不能隔离 corpus 规模、DeepSeek-R1 标签、reward shape 或 GRPO 各自的贡献，因为公开 artifact 无法重放相应 ablation。

在下游使用上，第 5.3 节与 Figure 3 连续三轮注入 AgenTracer feedback。正文报告 OWL+GAIA 提升 4.8 个点、MaAS+MATH-500 提升 14.21 个点，并用 GPT-4.1 实例化 Self-Refine 与 CRITIC baseline。这说明归因反馈能在作者设置下改善所测系统，不能说明完整反馈 corpus 或 agent-training release 已经公开。

所有性能数字均由作者报告，artifact 审计没有独立复现。最强的独立可核验证据是 artifact 形状与缺口：一个 127 行 parquet、部分 MetaGPT pipeline、三个 repository commit、没有 tag 或 release、没有 root license，也未确认完整数据、模型权重或 RL script。
