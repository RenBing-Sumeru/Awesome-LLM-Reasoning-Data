- Boxed标签一致性不等于rationale验证。即便一条链输出所有期望标签，其解释仍可能错误、事后附会、无关或不忠实。

- PRM800K/MATH前缀和人工标签自身可能存在歧义与标注错误。发布物没有提供争议步骤的裁决置信度或替代标签。

- 尽管前缀结果大致平衡，步骤标签仍有92.3%为正。前缀F1、标量分数和搜索排序处于不同粒度，不应被视为可互换的质量指标。

- 数据集只有一个1,000行train split，省略上游PRM800K行ID、教师seed、四候选组ID、原始拒绝链、拒绝原因以及可确定性连接源版本的join。

- PRM800K/MATH衍生训练提示与ProcessBench、MATH-500、AIME 2024、GPQA-Diamond和LiveCodeBench评估之间的精确、近重复与语义去污染均为unknown。

- Hugging Face数据仓已加入MIT LICENSE，但版权方占位符尚未填写，且该声明不能证明其覆盖PRM800K/MATH衍生输入与QwQ输出或与上游条款兼容。代码许可证与逐记录上游权利ledger仍不可用。

- 生成式分数可能过度自信并聚集在0或1附近。论文没有建立跨领域、候选生成器、模型版本或验证计算预算变化的校准结论。

- 自回归验证可能过早承诺。论文报告step-label interference：早期错误判断会使后续步骤更可能得到同样的负判断。

- 验证链增加明显延迟，并可能循环、overthink或结束时没有可解析标签。微调减少但没有消除这些失败，parallel/sequential scaling也可能平台化。

- 论文分析65K process-filtered和128K outcome-filtered扩展，但它们未被核验为公开1K发布的一部分。更多数学数据改善部分域内曲线，却降低部分域外结果。

- 若干采样、优化、搜索和环境细节缺失或渲染不完整，包括数据生成temperature、seed、部分learning rate与LoRA设置以及完整运行manifest。

- 结果使用选定任务子集与生成器。下游benchmark提升不能证明逐条批评正确、数据质量、许可证完备、去污染安全或可作为可靠RL reward。
