正确性只相对于“被编码出来的形式化 theorem”成立。checker 接受 proof，说明形式化命题被证明了，不自动说明它完全忠实于原 Putnam 题意。形式化错误、库选择、类型编码、answer-factoring 方式都会改变任务。还有一个实际限制：核验到的官方来源里，arXiv v2 与当前项目/仓库的 formalization 总数口径不同。

当前官方页面显示的是公开 benchmark，没有核验到稳定 hidden split。作者要求不要公开 proof 以降低污染，但公开 theorem statement 和未来提交的 proof 仍可能进入训练语料。分数也不评价 proof 可读性、人类数学洞察，或对等价 theorem encoding 的鲁棒性。复用时要固定 license：Lean/Isabelle 为 Apache-2.0，Coq 为 MIT，informal Putnam statement 另有 MAA permission 背景。
