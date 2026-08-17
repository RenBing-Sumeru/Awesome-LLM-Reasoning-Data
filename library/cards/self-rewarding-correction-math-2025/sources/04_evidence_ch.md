artifact证据具体但不完整。官方最终数据集在Hub revision `8229771661afc5ffb4b1306fbdd7ea76bc03b7b8`下报告31,990条train记录,字段为`gt`和`conversations`,且每行有3条消息。官方仓库链接了最终集、16,333行raw示例、40,000行SFT提示集和turn-level中间物。这能核验选择后数据与流程示例确实存在,但不能提供完整的候选到决策lineage,也不能证明论文分区可重建。对官方代码快照的语法检查还会在`infer_math/process_prompt_turn1.py`的多余引号处失败,因此已发布脚本只能证明预期阶段,不能视作无需修改即可执行的构建。

对Qwen2.5-Math-7B-base,表3报告self-rewarding IFT在MATH500上的最终准确率为77.2,正确性排序DPO后为78.6,正确性reward PPO后为80.2;OlympiadBench对应为39.4、40.1和43.4;Minerva Math对应为28.7、34.6和38.4。intrinsic self-correction基线在三个benchmark上的最终准确率分别为51.4、18.1和8.4。这些比较支持论文设置下训练出的控制策略,不证明每条公开记录都正确或可安全复用。

自评仍然不对称。表4中,self-rewarding IFT在MATH500上识别正确/错误答案的准确率为93.0/47.7,在OlympiadBench上为89.6/45.9,在Minerva Math上为91.7/36.1。选出的PPO和DPO checkpoint会改变这些分类别错误,而不是消除它们。因此,即使聚合最终准确率提高,模型仍可能对错误答案过早终止。

论文还区分了数据利用率与reward效应。DPO只能为40%到60%的提示构造pair,而PPO可在所有采样轨迹上使用绝对正确性。在独立Llama研究的固定test-time预算下,IFT加M-DPO系统用26.4条平均采样回答取得42.8%的MATH准确率,独立采样用64条回答取得40.4%。Llama实验和Llama-3.1-70B-it蒸馏消融扩展了模型证据,但其格式与数据规模不同于公开31,990行Qwen示例。

reward设计消融提供了重要负面结果:一种修改后的PPO reward被策略利用,表现为故意生成错误初答再纠正。这直接说明看似合理的多轮reward可能形成shortcut,但不能据此推定公开SFT记录已经审计过所有verifier或策略捷径。

任何报告的benchmark都不能独自确立数据质量。实验没有解决精确/近重复/语义去污染、符号parser误判、上游许可证、逐记录provenance、拒绝候选覆盖或checkpoint与论文表格对应关系。
