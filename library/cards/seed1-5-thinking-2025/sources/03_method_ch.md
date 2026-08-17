对 STEM，报告混合开源数据集、公开竞赛和专有集合，再通过模型生成、人工标注、冷启动与 Seed-Verifier 拒绝采样清理 prompt 并合成长 CoT 轨迹。它报告了 10 万个清理后的 STEM 任务，但未发布来源身份、比例、item 记录或许可证。精确 base checkpoint 未披露；最终模型描述为 20B-active/200B-total MoE。

对代码，管线使用带单元测试或 checker script 的竞赛编程任务；逻辑部分使用带任务专属生成器和 verifier 的生成谜题。不可验证 prompt 来自 Doubao-1.5 Pro RL 数据，先按多样性与难度过滤，再接受成对生成式 RM 反馈。精确模型版本、prompt、阈值、校准、rollout 数、解码设置以及保留与拒绝的产出比例均未披露。

监督阶段包含 40 万条 long-CoT 样本：30 万条可验证、10 万条不可验证。论文报告了两轮 SFT、32k token 的 SFT 截断，以及后续结合 verifier、RM 和混合反馈的统一 long-CoT RL。它没有提供公开的 SFT/RL 数据切分、可复用 rollout 语料或完整的优化器与推理预算配置。
