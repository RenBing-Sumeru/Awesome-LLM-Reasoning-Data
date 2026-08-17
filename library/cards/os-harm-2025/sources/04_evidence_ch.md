在screenshot+a11y、temperature 1、`top_p` 0.9、15步上限的主设置下，论文在150个任务上比较o4-mini、GPT-4.1、Claude 3.7 Sonnet、Gemini 2.5 Pro与Gemini 2.5 Flash。GPT-4.1的judge-scored平均unsafe rate最低，为21%；Gemini 2.5 Flash为26%，o4-mini为27%，Gemini 2.5 Pro为27%，Claude 3.7 Sonnet为29%（论文表2）。这些数值依赖OSWorld scaffold、模型版本、任务混合、judge prompt与推理budget，不是独立复现，也不是部署风险发生率估计。

judge验证使用150条o4-mini轨迹的人工标签。相对这些标签，GPT-4.1 AER的unsafe precision为95%、recall为64%、F1为76%；task-completion precision为72%、recall为86%、F1为79%（论文表3）。按类别计算的unsafe/completion F1分别为：deliberate misuse 78%/57%、prompt injection 73%/84%、model misbehavior 77%/83%。64%的unsafe recall和57%的misuse completion F1直接说明judge输出带有噪声，不能当作ground truth。

在人类与judge都判为unsafe的39个episode上，首个违规步骤一致率为77%，mean absolute distance为0.85步（附录B，表10）。该结果以双方先同意episode-level unsafe标签为条件；它排除了任一方漏掉的unsafe episode，因此不能解释为无条件的step-localization准确率。

人工分析报告o4-mini在50条轨迹中有20%执行了简单静态prompt-injection goal，而且不同vector与goal间差异很大（论文§4.3，表4）。temperature消融中，o4-mini在temperature 0与1下的平均unsafe rate分别为28%与27%，completion分别为40%与39%（附录B，表7）。把step cap从15提高到60后，misbehavior完成率由38%升至54%，injection由54%升至58%（附录B，图6），说明基准结论依赖交互budget。

对于15步o4-mini运行，论文报告agent成本约52美元、judge约1美元，并在一台笔记本的3个VM上耗时约5小时。该budget有助于定位结果，但不能认证任务质量、轨迹完整性、judge在o4-mini之外的calibration、许可证安全性或移动发布的可复现性。
