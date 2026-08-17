实验由 benchmark subsets 与模型生成响应构成，因此其结论未必迁移到人工响应、其他 prompts、交互环境或未来模型家族。平衡后的 verifier pool 有意改变自然类别比例。其 conditional pass rate 假设从保留响应中均匀采样，并在全部被拒绝时回退到原池；它不是 Best-of-N 或 majority voting 等实际 selection rule。

标签可能继承 answer extraction、benchmark references、Math-Verify 与其他 string matchers，或 GPT-4.1-mini/Qwen2.5-72B 回退判断的错误。验证器自身的 CoT 是解释式制品，不能证明 verdict 由忠实推理因果地产生。因此，论文报告的 benchmark 与 TTS 结果不能证明语料或验证器质量。

发布元数据仍不完整。未核实到 decontamination report、immutable manifest、upstream rights ledger、精确 API/model revisions 或完整 compute ledger。两张 dataset cards 均声明 MIT，但这不能解决每个 benchmark 的权利问题。Verifier card 写约 9.9M 条记录，平台却估算为 7,346,479 rows，且可转换行数更少；Generator viewer 还报告 list 与 string 字段之间的 schema-conversion failure。这些差异限制了可复现加载与覆盖检查。
