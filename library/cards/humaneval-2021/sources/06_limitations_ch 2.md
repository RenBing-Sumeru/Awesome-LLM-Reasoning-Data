# 局限：弱点或隐藏假设是什么？

- 公开 benchmark 可能已经进入模型训练数据，尤其是发布时间早、使用频率高的集合。
- 分数会受 prompt format、few-shot 示例、解码预算、scorer 版本、answer normalization 和隐藏/公开 split 影响。
- 数据量虽重要，但规模不能替代质量；小规模诊断集适合定位失败，大规模集合也可能包含噪声或捷径。
- 若把该 benchmark 的题目、答案或解释用于训练，需要重新评估 license、泄漏和评测污染。
