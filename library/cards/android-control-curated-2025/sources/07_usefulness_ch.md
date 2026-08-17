对 `benchmarks_evaluation_surfaces` 而言，本卡提供一套具体 audit recipe：比较 point、Curated-Box 与 corrected-label scoring，分别记录 action parser 和 grounding 的结果，并说明 success 指静态 step predicate 还是 live terminal condition。Table 2 可作为受控比较，但 benchmark delta 不能自动解释为 data quality 证据。

对 `environment_agent_trajectory_data` 而言，可复用单元是静态 step record：screenshot、instruction/task、先前 action history、action target、geometry/text target、correction field、alternative valid action 与 provenance。研究者可以用五种发布视图分析 GUI grounding、action normalization、ambiguity、label repair、alternative-action recall 及 scorer false positive/negative。若未补充固定 Android environment、state reset、app version、observation/action log 和 terminal predicate，就不应把它称为 replayable full episode。

Purification sequence 可作为数据构造 baseline：consensus-failure mining、deficiency classification、task/label revision proposal、human verification 与 correction provenance 保留。Magma-R1 recipe 可用于 dense distance reward 和 action-balanced sampling 的 agent-training ablation，但重建需要 2.4K ID、GRPO config、训练/评测隔离及精确 3B checkpoint。

复用等级：固定文件与 scorer 后，可用于 evaluation 与 audit reference；在 license clarification、overlap/split disclosure、correction provenance 与 checkpoint mapping 完成前，training reuse 仍受阻。当前不宜声称可不受限制地训练复用或具备 live-environment reproducibility。
