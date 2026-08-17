发布完整性是最主要的限制。公开 HF dataset 只有一个 4.8 GB JSON 文件和一个 24 字节、只声明 license 的 card。精确原始 trial 数、solver/source partitions、不可变 row ID、schema version、checksums 以及 train/validation/test splits 均未知。论文报告的 5,486 条是按 solver 统计的 planner 入选样本数，不能替代这些 manifest。当前训练配置虽提到 0.01 validation fraction，但没有发布 split manifest 来标识具体行。

最终训练产物无法核验。README 所链接的 searched results 与最终 SFT data 的 Drive 地址在 2026-07-25 返回 404，也没有发现训练好的 external 或 internalized planner checkpoints。HF 原始 trial 本身并不等于论文中的最终“解释—轨迹”或“解释—轨迹—推理—答案”tuple。重建这些对象需要目前未公开的选择状态与解释输出。

搜索谱系只被部分保留。已观察记录包含 trial、路径、对话、预测答案和二值分数，却没有明确的累积成功率表、保留与剪枝候选集合、剪枝原因、随机种子、逐路径重试/停止原因，以及 token、调用、延迟和费用预算。用于排除统一过易或过难问题的准确 filter 和被拒绝问题数量同样未知。

outcome scoring 可能过拟合 evaluator 与格式。MATH 使用 simple-eval，Game of 24 使用任务 checker，其他任务采用精确字符串匹配。附录 C 报告过一个由 Python 输出格式造成的日期理解失败。因此，一条路径可能因为适配 extractor 而排名较高，而非语义推理更强。Self-Verification 由同一 solver 生成，相关错误和自信的错误判断仍可能保留下来。

planner 标签以 solver 为条件。论文自身报告 GPT-4o-mini 与 Llama-3-70B-Instruct 的 CoT/PoT 选择分布不同；把一个 planner 用于另一个 solver 时，可能学到的是来源 solver 的能力边界，而不是通用问题结构。benchmark 与模型预训练污染、语义去重和重叠检查均未披露。

论文与当前代码在 evaluation 次数、温度、exploration stage 数量、SFT batch size 和 epochs 上存在漂移。已检查 workflow 的累积分数实现还可能统计非空结果对象，而把二值正确性另行记录。只有提供 tagged paper-exact implementation、配置谱系和作者说明后，才能主张精确复现。

HF metadata 为 dataset repository 声明了 MIT，但没有说明上游 MATH 与其他 benchmark 的权利，也没有说明模型生成对话衍生物的权利。GitHub repository 没有可识别的代码许可证。复用与再分发因此仍需单独审查权利；dataset metadata tag 不能解决所有上游和衍生权利问题。
