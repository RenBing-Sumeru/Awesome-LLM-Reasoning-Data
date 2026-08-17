一句话贡献：MMLU-Pro 提供一个更难、更干净、10 选项的 MMLU 后继基准，包含 14 个领域、12,032 道题。核心机制是从 MMLU 风格来源出发，删除或过滤弱题，扩展干扰项数量，并在标准 prompt/评分设置下评测模型。

评测面仍是 answer-level 多选题。反馈契约是用发布的答案键做确定性选项匹配；它不评价推理轨迹，也不裁决开放式解释。

最近对比对象是原始 MMLU、C-Eval、CMMLU 和其他宽覆盖静态推理基准。方向标签是 robustness-oriented benchmark refresh：保留 MMLU 的低成本评分优势，同时降低饱和和选项捷径。
