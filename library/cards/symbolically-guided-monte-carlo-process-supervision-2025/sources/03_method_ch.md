可重建的流水线如下：

1. **输入。** 从训练问题中随机抽取 1,003 条 FOLIO、1,000 条 FOLIOv2 和 300 条 LogicAsker。样本 manifest 与随机种子未发布。one-shot prompt 规定 Symbolic ReAct 格式和一阶逻辑式操作。
2. **种子轨迹与前缀 rollout。** Llama3.3-70B-Instruct 和 Qwen2.5-72B-Instruct 生成 Symbolic ReAct 轨迹。对每个中间前缀采样 10 个续写；至少一个续写以 ground truth 标签结束时记为 `+1`，否则记为 `-1`。仓库发布文件包含 1,505 条 `input` 记录，步骤数组 `value` 与符号数组 `label` 对齐，总计 12,448 个步骤（论文 §3.2、§4、Appendix A）。
3. **PRM。** 在这些硬标签上微调带二分类头的 Qwen2.5-7B-Instruct。论文报告的设置为 10 个 epoch、batch size 8、学习率 \(5\times10^{-7}\)、最大序列长度 2,048、`adamw_torch_fused`，并按开发集准确率选择 checkpoint。PRM checkpoint 和校准结果未发布。
4. **第二阶段生成。** Llama3.1-8B-Instruct 和 Qwen2.5-7B-Instruct 为全部训练问题生成符号候选轨迹。论文实验中的每题候选数、temperature、top-p、随机种子及模型分配未知。Monte Carlo 标注约消耗 250 个 AMD MI300X GPU-hour，后续采样约耗时 42 小时（Appendix A）。
5. **筛选与输出。** SFT 只保留全部步骤 PRM 概率高于 0.5 且最终答案匹配 ground truth 的轨迹，发布 15,412 条记录。DPO 将逐步正类概率相乘作为整条轨迹的分数，当高低候选分差超过 0.25 时组成一对，发布 21,472 对。论文契约中的乘积未做长度归一化。
6. **训练与评测。** 被保留的 response 用于 full SFT，偏好对用于 DPO。评测覆盖 FOLIO、论文构造的 900 条 LogicAsker 子集（train/development/test 各 300 条），以及三个 claim verification 数据集。两个 Hugging Face 衍生数据都只提供 train split，论文未报告去污染流程。

端到端复现不仅需要固定模型版本，还需要修复代码。`generate_intermediate_react.py` 和 `generate_trajectory_samples_vllm.py` 引用了未定义的 `args.data_path`，并指向不存在的 `prompts/LogiAsker_react_example.txt` 拼写；`dpo_training.py` 引用了未定义的 `args.model_name`。仓库默认的 5 次采样、temperature 1.0 和 Qwen3-32B 也不是论文使用的 10 次续写、70B/72B PRM 标注设置。因此，复现者必须冻结论文配置，补充第二阶段缺失的 decoding 参数，修复这些入口，并记录原始候选、分数、source ID 和软件版本。
