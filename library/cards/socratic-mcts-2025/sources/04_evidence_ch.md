在 InternVL2.5-78B 上，论文报告 Socratic-MCTS 的 MMMU-PRO 总体准确率为 0.537，Direct Answer 为 0.517；MMStar 为 0.711 对 0.692。在筛选后的 MathVista 英文多选子集上，报告为 0.782 对 0.740。MMMU-PRO 中最突出的变化是 Liberal Arts 提升 9 个百分点；STEM+B 则从 Direct Answer 的 0.507 变为 Socratic-MCTS 的 0.492。报告表格中，Least-To-Most 低于 direct 与 CoT。

这些结果说明，在所研究冻结 VLM 与 benchmark 上，该搜索配置可以改善总体答案选择，但不同领域效果不均。它们不能证明生成 subquestion 忠实、节点价值已校准或内部一致性是可靠 verifier。论文报告单次运行，也未进行广泛 hyperparameter tuning。ACL 正式论文、DOI、页码与引文已核实；未确认官方代码、数据或搜索日志 artifact。
