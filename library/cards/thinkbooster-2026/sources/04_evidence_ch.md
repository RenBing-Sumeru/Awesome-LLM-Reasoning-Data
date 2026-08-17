**论文证明了什么。** 实验使用 Qwen2.5-Math-7B-Instruct、Qwen3-8B 和 GPT-OSS-120B，在五个数学任务、GPQA-Diamond、HumanEval+、MBPP+ 与 KernelBench 上比较多种测试时策略和 scorer family。结果支持的是条件性结论：策略与 selector 的效果会随领域、模型、访问级别和推理预算变化。PRM selection 在已测试数学设置上最强，但在代码上并非稳定最优；作者把这一现象合理联系到“用数学训练 PRM 代理 coding PRM”，而不确定性信号在这些代码实验中迁移更好。

Beam search 提供了归因警告。它可能消耗远多于 offline Best-of-N 或 self-consistency 的计算，却仍表现更差；但 PRM-guided beam search 又在部分报告设置上达到最高数学绝对结果。因此，证据表述必须考虑预算：更高最终分数本身不能证明搜索更高效、selector 更好，也不能证明所得轨迹数据质量更高。

**实现核验了什么。** 官方仓库核验了模块化 generator backend、strategy/scorer 配置、benchmark evaluator、Hydra 组合、可恢复本地输出、可选 W&B、OpenAI-compatible gateway，以及 debugger event/tree schema。策略元数据构建与调试器转换代码表明，候选、分数、选中索引、token 计数、延迟、配置和选择理由可以被捕获。两个缓存调试器示例在具体运行上展示这些字段，而不只是文字说明。

**发布物提供了什么。** 代码仓库以 MIT 许可证公开，package 通过 PyPI 分发，格式化 benchmark surface 由官方 `test-time-compute` Hugging Face organization 链接。审计时该组织有 13 个公开 dataset repository，范围大于论文的九项任务。代表性 dataset viewer 暴露的是 benchmark 行，而不是论文生成的候选池。仓库跟踪的 debugger cache 大小为 861,328 bytes，恰好含两个 Claude Sonnet 4 数学演示，每例预算 8，各有五种策略运行。

**什么缺失。** 没有任何被跟踪的论文运行语料包含历史 prompt、全部轨迹、事后步骤边界、候选池、scorer 输入/输出、选中索引、被剪枝路径、解析后的 Hydra snapshot、config hash、W&B export 或支撑图表的逐样本结果。除 debugger cache 外，输出与日志格式均被仓库忽略。论文与 README 报告 ReProbe 结果，但审计提交中除了 README 提及外，没有可识别的专用 ReProbe scorer/config 实现。

因此，现有证据支持开放工具包、测试时扩展研究、运行时捕获 schema 和两个产品演示轨迹。它不支持“论文运行搜索语料已发布”“selector 分数是过程真值”“benchmark 增益证明轨迹数据质量”或“生成输出具有完整复用权利清单”等更强主张。
