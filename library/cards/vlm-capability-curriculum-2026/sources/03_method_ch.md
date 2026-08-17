**Stage 1——感知。** 流程从 DOCCI 图像及细粒度 caption 开始。Qwen2.5-72B 把 caption 转换成四选一感知题。只有当 Qwen2.5-VL-7B 与 Qwen2.5-VL-32B 都在看图时答错、但在读取 caption 时答对，该题才进入二者筛选结果的交集。托管制品包含 3,360 条记录，并引用 14,847 张降采样 DOCCI 图像。Caption 是构造输入，但不在已记录的发布行 schema 中。

**Stage 2——文本推理。** 发布数据重新分发 13,181 道 ORZ-Math-13k 文本题。这些记录使用相同的目标答案、重复预测、正确性和 pass-rate 字段，但没有图像输入。

**Stage 3——视觉推理。** 托管发布包含 16,195 条记录：Math PUMA 6,696 条、GeoQA170K 6,499 条、CLEVR-Math 2,000 条、ArxivQA 1,000 条。论文方法部分还列出 DocVQA，但发布的 16,195 条混合数据在 Hugging Face 卡片中没有 DocVQA。因此，本卡以四源托管清单描述实际发布对象，并把 DocVQA 记录为待解决的论文与发布 lineage 差异。

**难度记录与排序。** Qwen3-VL-8B-Instruct 在 temperature 1.0 下为每道题生成 16 个答案。发布数据只存抽取后的最终答案、逐答案布尔正确性及其均值。Pass rate 以 1/16 为步长离散化，并依赖该模型与采样策略。二维课程先固定感知到文本再到视觉的能力顺序，然后在每个阶段内部让高 pass-rate 样本先于低 pass-rate 样本。

**RLVR 框架与验证器。** EasyR1 使用 GRPO，每个输入生成五个 on-policy 响应。发布的 reward 会抽取 boxed final answer，用 MathRuler 判断答案等价性，检查推理段与 boxed answer 所要求的格式，并按 0.9 与 0.1 权重组合准确率和格式分数。这是答案与格式验证器，不是视觉 grounding 或过程验证器。发布的 Qwen3 launcher 在 Stage 1 和 Stage 3 打开 vision encoder，在 Stage 2 冻结它。

**预算。** 论文报告最大 response length 为 2,048 tokens，附录 Table 6 列出的最大 prompt length 也是 2,048。三个阶段分别训练 90、375、465 steps，与 merged baseline 的 930 个总 steps 相同。Qwen3 launcher 在三个阶段分别指定 16、15、15 epochs。代码仓库 quickstart 估计在八张 H200 上复现分阶段 Qwen3-VL-8B 约需 24 GPU-hours。Pass-rate 生成的随机种子与若干采样控制参数，以及 RLVR rollout temperature，均未披露。
