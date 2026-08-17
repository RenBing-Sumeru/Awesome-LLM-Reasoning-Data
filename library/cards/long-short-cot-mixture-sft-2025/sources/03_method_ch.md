**输入 → 改写。** 从论文所称的 1,000 条 s1K-1.1 长轨迹及答案出发，它们据称由 DeepSeek-R1 蒸馏而来。对每条可用的问题与 thought process，Qwen2.5-72B-Instruct 接收附录 A.1 的约束 prompt 并写出缩短后的 thought process。论文报告有 16 个输入超过 rewriter 的上下文限制，因此剩余 984 条短示例。rewriter 的具体 revision、解码参数、重试、随机种子和原始输出均为 unknown。

**混合 → SFT 回答。** 将 1,000 条原长示例和 984 条短示例完全随机合并。公开数据集唯一的 train split 展示 `system`、`instruction`、`input` 和 `output`；`output` 序列化由 think 标记包围的轨迹与答案。长示例配 detailed-thinking 指令，短示例配 brief-thinking 指令。公开发布没有不可变映射来标识某条短样本的长轨迹父项。（论文 §2.2-2.3、3.1；附录 B；官方数据集 viewer）

**训练 → 推理。** 用 LlamaFactory 在 16 张 A800 GPU 上微调 Qwen2.5-32B-Instruct。公开设置为 cutoff length 4,096、learning rate 1e-5、cosine schedule、warmup ratio 0.05、bf16、AdamW 和 weight decay 1e-4；未列出的设置采用框架默认值。作者调整 epoch 数，使 mixture 与 s1.1 基线看到相同数量的训练示例，但未给出确切 epoch。推理时，以附录 A.4 的 balanced-thinking 指令替换 detailed/brief 表述。这是 SFT 加 prompting，不是 RL、搜索或 verifier 引导的选择循环。（论文 §3.1；附录 C）

**复现所需 artifact。** 忠实重建需要上游 s1K-1.1 revision 与 prompt 来源、准确的 rewriter checkpoint 与实际执行的 prompt、解码和重试设置、来源到短轨迹的成对关系与排除 ID、混合顺序/随机种子、完整 SFT 配置、评测 prompt、答案抽取和解码设置。论文均未发布。所链接的 GitHub 仓库目前是标有 under development 的项目页模板，不能构成可复现实现的证据。
