以下数字均为作者报告，尚未被独立replay。在50步上限下对全部133项任务评测时，最佳报告配置为Opus 4.6 vision+XML：严格pass总计51.9%，其中single-app为81.5%、multi-app为36.7%、memory/personalization为54.3%。这些分数描述特定环境与judge条件下的模型行为，不能证明任务正确、数据质量高或模型可安全部署到真实设备（论文表3）。

作者在128条Opus 4.6 vision+XML轨迹上把judge与人类比较：任务级一致率89%、Cohen's kappa 0.77、F1 0.86；rubric级准确率86%、kappa 0.69、F1 0.90。对1,094条被判断criterion，共有148处分歧，其中79个false positive、69个false negative。semantic/report类criterion误差最高，约13%-16%；任务级偏差方向还随类别变化，judge倾向于过度接受single-app、过度拒绝multi-app样本（附录J，表10、13-14）。

MCP消融固定Qwen3.5 35B、全部133项任务、judge和50步预算。把GUI-only交互替换为结构化逐应用MCP tool后，严格pass从12.8%升至24.8%，mean rubric score从0.33升至0.683。该结果只支持“工具接口在同一评测契约下会改变结果”，不能用于判断训练数据质量，也不能证明direct persistence-layer tool等同于可部署的手机交互（第4.3节与附录E）。

失败分析覆盖五种前沿vision+XML配置的全部422次失败：51%耗尽预算、26%放弃、23%过早停止。Qwen vision+XML有119次失败，其中60次被标记为极端action loop。这证明作者内部保留并分析过失败，却不能证明raw failure已公开。官方项目只展示16条精选Opus 4.6 vision+XML轨迹，仓库还忽略`results/`和`artifacts/`；因此外部仍无法完成episode级独立审计。
