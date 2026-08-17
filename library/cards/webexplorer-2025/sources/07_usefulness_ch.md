当前最稳妥的用途是把它当作构造与审计参考，而不是论文规模训练数据发布。数据构建者可以改造已披露的两阶段 recipe——先从 Wikipedia seed 探索，再做 5 轮线索删除/模糊化——但每条生成 QA 都应保留 source URL、page snapshot、答案验证、generator version、prompt revision 与被拒候选，并把难度与事实性、唯一性分别评估。

对 agent post-training，论文给出一个有用的实验分解：比较 QA-only 在线 RL 与正确轨迹 SFT，再测试 GRPO 和 progressive horizon 的增量作用。忠实 baseline 应保留约 13K SFT 与约 12K RL 的区别、每个 GRPO group 8 个 rollout、`0.2 * R_format + R_correct`，以及 64K/50→96K/75→128K/100 schedule；还应消融 format/correctness reward、programmatic 或 citation-grounded verifier、失败轨迹保留，以及固定 observation 与实时 observation。

在 verifier 设计上，该工作具体说明了不能把最终答案 LLM 判断直接称为环境成功谓词。审计者可按 exact match、等价改写、无证据但看似正确的回答、来源冲突和错误工具格式，对 DeepSeek-V3 判断分层；比较不同 judge version，并在训练前报告 false-positive/false-negative rate。BrowseComp exemplar 和评测 variant 需要逐记录 overlap 检查。

当前公开的 100 条 `id/query/answer` 适合在 HF 访问与许可条款下做 schema 检查、任务定性分析和小规模受控实验。公开模型与 inference/evaluation 代码可作为评测起点，前提是固定外部 API 和模型 revision；它们不足以复现数据生成、SFT、GRPO 或轨迹统计。

复用等级：**当前仅适合作为 reading/audit reference 与有限 QA 检查；完整训练复用在核验完成前阻塞**。若要晋升为 training-ready artifact，需要完整 QA/SFT/RL manifest、明确权利、teacher/judge 元数据、合成和训练代码、split/decontamination、被拒与失败样本、reward log 及 deterministic replay fixture。
