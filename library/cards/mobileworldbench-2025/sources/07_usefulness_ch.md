对`environment_agent_trajectory_data`而言，MobileWorldBench提供了一种研究单个transition的受控方式，而不把它误写为已发布episode。可复用row应绑定source dataset/split/transition ID、current与next image hash、自然语言action、reference change description或Yes/No target、generator身份/配置、candidate set、filter decision、judge model/prompt/parser及missing-image状态。这些字段可使MobileWorld与MobileWorldBench之间的state/action监督可审计。

用于SFT时，MobileWorld提供action-conditioned future-state description与QA target，可训练模型表述可能的GUI变化。已演示recipe对Qwen3-VL-8B-Instruct微调两个epoch。复用者应先恢复精确Parquet schema/count，核验source-image权利与许可，以不可变hash分隔benchmark/test transition，记录failed/no-change example，并测量annotator/judge相关性。这是transition-prediction SFT，不是完整agent-trajectory training。

用于evaluation时，应同时使用两种channel并保留各自契约。generation需报告accuracy、completeness、relevance、总分、judge版本、prompt/parser、retry policy与sampling配置；QA因Yes/No label不平衡，应报告总体与per-class accuracy。应排除或修复缺失两张图片的row；若复现论文，应显式配置`gpt-4o-2024-08-06`，不能接受脚本默认的`gpt-4o-mini`。

该静态benchmark可支持action representation、semantic versus visual prediction、judge stability与best-of-three filtering的ablation。AndroidWorld结果可提示使用预测next state开展downstream planning实验，但必须另行提供live environment、reset protocol、action executor与terminal success metric；MobileWorldBench本身不能测量这些性质。

当前复用分类是**仅限SFT与evaluation**。已核验发布不支持RL、reward-model training、完整agent-episode training或不受限再分发。缺少split hash、decontamination、failure-retention统计、精确manifest、artifact许可、privacy/consent review与judge固定，仍阻止更强复用声称。
