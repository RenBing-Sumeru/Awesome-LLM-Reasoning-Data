在论文已披露的范围内，pipeline 可重建为以下步骤。

1. **任务来源与探索。** 从 Wikipedia 收集 seed entity。向身份未披露的 LLM 提供 1 个 seed 和 3 条 BrowseComp-en exemplar QA。在 ReAct scaffold 下，模型执行 search 与 browse、累积 observation，并合成含唯一 exact truth 的初始问题（论文 §2.2；附录 B.1）。完整 seed 清单、generator 身份、decoding 设置、source-page manifest 与停止分布均为 unknown。
2. **五轮问题演化。** 将第一阶段轨迹和 QA 输入第二个 prompt。最多进行 5 轮操作：删除冗余线索、模糊日期/地点/名称，或搜索替代表述，同时保持答案不变。作者报告最终约有 40K 条 QA（论文 §§2.3–2.4；附录 B.2）。未验证到对应发布代码或独立的答案唯一性 checker。
3. **Cold-start SFT。** 使用身份未披露的 commercial model 为困难 QA 生成轨迹，通过 rejection sampling 只保留正确轨迹。每条 ReAct 记录含由 `think` 标签包围的 reasoning、由 `tool_call` 标签包围的 search/browse action、由 `tool_response` 标签包围的 observation 与最终回答。约 13K 条样本用于训练 Qwen3-8B，训练 4 个 epoch，batch size 32，learning rate 1e-5（论文 §3.1、§4.1；附录 A）。候选数、正确性 checker、temperature、retry policy 与被拒轨迹均为 unknown。
4. **在线强化学习。** 直接使用约 12K 条合成 QA，不需要 demonstration trajectory；每个 GRPO group 生成 8 个 rollout，batch size 64，learning rate 1e-6。标量奖励为 `0.2 * R_format + R_correct`，其中 DeepSeek-V3 对照 ground-truth answer 判断正确性（论文 §3.2、§4.1）。judge 的精确 snapshot、prompt、输出尺度、GRPO 之外的 optimizer 细节、KL 设置、seed 与 checkpoint 均未披露。
5. **逐步扩展 horizon。** RL 期间把最大 response length/tool-call limit 从 64K/50 提升到 96K/75，最后到 128K/100（论文 §3.2）。论文没有披露各阶段切换样本数、总 token、硬件、wall-clock time 或 API 成本。
6. **实时工具底座。** Search 返回 Google top-10 结果的 title、URL、snippet；Browse 用 Jina 获取 URL 内容，再由 Gemini 2.5 Flash 回答页面特定 query（论文 §4.1；附录 C）。这些服务产生 observation，但不构成冻结且可重复回放的环境。

输出包括 WebExplorer-8B 和论文描述的 QA/轨迹 pipeline。官方仓库在 commit `3ca019e88a33898a9e526bedf5d64e791054acfe` 只发布 inference/evaluation 代码；官方数据 artifact 通过 GitHub 和 auto-gated Hugging Face dataset 提供相同的 100 条 `id/query/answer` 记录。若要复现，还必须取得完整 QA/SFT/RL manifest、teacher 与 judge snapshot、合成和训练代码、外部服务版本、observation cache、split/decontamination 日志及精确 Qwen3-8B revision。
