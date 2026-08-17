规模主张可以直接核验。论文Table 1报告181项任务、17个应用、77.9%多应用任务和平均4.97条中间检查。固定`benchmark.json`恰有181行，L1/L2/L3/L4为39/80/50/12，并包含899条`intermediate_checks`，即899/181=4.9669。每项涉及1到5个应用的任务数为40/43/86/10/2，与77.9%多应用比例一致。该证据核实的是任务定义规模，不是已执行轨迹规模。

论文Table 2在screenshot、screenshot+accessibility-tree、Set-of-Marks或agent设置下评测专有多模态模型与GUI agents，并为四级任务固定15/25/40/20步上限。最佳aggregate result是screenshot+A11y下的Gemini-3-flash-preview：**S_int 50.32%**、**S_final 20.44%**；同一模态的L3成绩为38.63%中间分和14.00%最终分。这些作者报告值表明“有进度但未完成”的落差，并不表示一半任务完成。

论文进一步控制了“跨应用任务只是更长”这一混杂因素。在平均最少专家动作10.92与11.26的step-matched L1/L2子集上，`S_int`从**65.74%降至35.14%**，`S_final`从**46.15%降至14.29%**（论文§4.3）。该结果支持在此子集上把context switching和跨应用状态保持视为瓶颈，但具体子集ID未公开。

judge验证使用100条分层可行任务轨迹——L1 24条、L2 50条、L3 26条——覆盖518个checkpoint，并由两名人工标注者判断。Appendix Table 7报告checkpoint/final score的Pearson相关系数为**0.9108/0.8316**，checkpoint/final decision的Cohen’s κ为**0.8668/0.8271**，同时给出95%置信区间。这是样本级强一致性，不证明181项任务、所有模型、UI状态或后续Qwen服务版本都无误。

负面证据同样关键。Table 4显示可行多应用流程的first failure常较早出现；Table 3显示复杂度上升时失败轨迹效率更差。附录把judge分歧归因于被遮挡或短暂可见的状态。L4还暴露了reward设计问题：UiPath可能因频繁声明未完成而获得较高L4分，公开代码也会接受空/无action或通用FAIL，而不核验不可行原因。

artifact可用性并不对称。ACL、arXiv、官方代码、完整181行任务JSON、Apache-2.0许可证和OneDrive VM链接已在commit `fbccd464…`核验；任务文件Git blob为`adae53ec…`，SHA-256为`c894bbce…`。但仓库没有GitHub tag/release、不可变VM digest、完整论文运行轨迹、raw judge calls或统一result manifest。本Card没有独立复现实验分数。
