终局 verifier 不能证明 rationale 忠实性。答案正确的 completion 仍可能含有视觉、符号、算术或逻辑错误，Figure 6 表明这不是假设，而是实际观察。反过来，超出解析器接受形式的等价答案、ChartQA 容差边界、格式异常或环境执行不完整也可能造成 false negative。Self-refine target 只是答案正确的同伴 completion，因此可能用另一条碰巧答对但同样有缺陷的路径替换原有错误路径。

三候选 selector 的训练集合由构造保证至少含一个正例且标签有正有负，而推理时所有候选都可能错误。Selector 输出答案而不是校准后的正确性分数，也没有公开 threshold、abstention rule、uncertainty estimate 或独立参考答案访问。它可能利用答案频率、格式或生成器特定风格；论文未报告 adversarial-candidate、cross-generator、calibration 或 all-wrong-set 审计。

“Latest positive”和“latest negative”指迭代或列表顺序，而不是独立测得的 rationale 质量。候选展示顺序会随机打乱，但种子未公开。按任务、模型和迭代划分的正例、负例、异常、重复、超时、解析失败和派生记录数量均缺失，因此无法重建筛选产率与失败保留情况。其他原始候选可能存在于本地运行文件中，却没有作为公开 rejection ledger 保留下来。

官方 release 对数据复用并不完整。它为三个任务公开了 40,457 条 direct-QA 记录，以及每个 Qwen-VL 或 LLaVA-1.5 变体 2,800 条 GPT-CoT 热身记录，但没有冻结自生成 rollouts、终局标签、迭代/样本 ID、入选候选 ID、`D_REF`、`D_SEL`、最终混合训练文件、model checkpoints 或 run logs。主代码/数据只覆盖 TabMWP、ChartQA 和 CLEVR-Math；Qwen2-VL/GeoQA 位于独立仓库，MiniWob 和 M3CoT 没有同等完整的 artifact。

可复现性信息仍为 unknown：基础模型和 tokenizer 的精确 revision、生成/数据/顺序种子、四轮还是五轮的精确停止规则、immutable prompt/config bundle、任务级 hardware/runtime budget 和 checkpoint hash。主仓库与 companion repository 都没有不可变的 GitHub release 或 tag。人工 fidelity 研究也没有公开 rubric、annotator 数量、agreement、adjudication 和样本 ID。

论文报告了具名 dataset split，但没有 immutable row manifest、exact/near/semantic-overlap 检查和 pretraining-contamination 分析。论文为 CC BY 4.0，代码仓库声明 Apache-2.0，但没有覆盖上游数据集与图像、GPT-4o annotation 和生成 trace 的行级 license/attribution matrix。不能把仓库代码许可证视为重新分发所有训练记录的许可。证据范围仅限具名多模态 benchmark 和一个模拟 web environment，并未覆盖安全关键或对抗性的开放式推理。
