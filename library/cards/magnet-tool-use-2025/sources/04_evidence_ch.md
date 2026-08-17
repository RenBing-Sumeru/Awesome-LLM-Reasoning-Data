- **训练集规模。** 报告的 SFT 集含 20,000 条 single-turn、7,800 条 multi-turn、6,200 条 irrelevance 实例（合计 34,000）。mDPO 集分别含 1,556、2,250、750 个对（合计 4,556）。报告的 multi-turn 样本中，SFT 平均为 4.71 轮/15.13 次调用，mDPO 为 5.22 轮/14.98 次调用。这描述的是未发布语料，而非可独立检查的数据包。（Table 1）
- **BFCL-v3 结果。** Magnet-14B-mDPO 报告 overall 68.01、multi-turn 37.88；Qwen2.5-Coder-14B-Instruct 为 overall 51.88、multi-turn 5.38。Magnet-14B-SFT 为 66.83/33.38，故该表中的 mDPO 增加 1.18 个 overall 点与 4.50 个 multi-turn 点。这些比较是作者报告的评测结果，不是所有生成轨迹都正确的证据。（Table 2）
- **ToolQuery 结果。** 在 60 个 ToolQuery 样例上，论文报告 Magnet-14B-mDPO 的 success/progress 为 73.3/78.7，Qwen-Coder-14B-Instruct 为 51.7/68.7，Gemini-1.5-pro-002 为 68.3/74.6。作者称 ToolQuery 函数未见于训练；未找到能独立审计该断言的逐项发布物。（Table 3；§4.3）
- **组件消融。** Table 4 中，从 Magnet-14B-SFT 去除正向 context distillation 后，overall/multi-turn 从 66.83/33.38 变为 60.26/18.88；从 Magnet-14B-mDPO 去除负向 context distillation 后，68.01/37.88 变为 67.35/36.25。这些是论文内消融，不能校准 teacher judge 的错误，也不能衡量每个偏好对的质量。（Table 4）
- **污染证据范围狭窄。** 附录 C 报告 BFCL-v3 basic multi-turn 样例的 exact FSP match 为 0.3%，其他 BFCL-v3 multi-turn 类别为 0%，2-gram overlap 为 5.3%。这不是完整的跨 benchmark、逐 query 或发布级的污染审计。（附录 C）

未找到独立复现、已发布轨迹检查或可执行环境回放。
