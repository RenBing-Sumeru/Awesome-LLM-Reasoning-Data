论文指出，结构化、非自回归搜索的 GPU 效率低于简单生成，实际可用性可能不如暴力 majority voting。内部一致性会受到相关错误影响：冻结 VLM 可能过度自信、忽略 CoT cue，或产生缺乏多样性的 completion。报告中的 STEM+B 结果也说明总体增益不代表所有领域均有增益。以空输出或重复输出终止搜索只是启发式规则，不是任务正确性判定。

研究只使用一个大型冻结 VLM、单次运行和固定 iteration budget，也未广泛研究 hyperparameter 或 multi-agent 设置。模型 token probability、verbosity penalty、transition phrase、parser 行为与 early-exit 校准都可能改变搜索树。未确认的发布无法提供完整树、被拒 subquestion、节点分数、随机 seed、prompt 或软件环境。因此，该方法目前不能作为可回放轨迹数据集，benchmark 改善也不能证明中间推理忠实或高质量。
