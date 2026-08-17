arXiv 摘要报告该工作复标了 5,700 道题，并估计 MMLU 中 6.49% 的问题含有错误；论文还报告修正基准会改变模型评测，这是逐行 benchmark 缺陷会影响 aggregate leaderboard claim 的核心证据。

artifact 证据是官方 Hugging Face MMLU-Redux 2.0 数据集。逐行决定性证据是附在具体 MMLU item 上的标注决定，例如修正答案、歧义题或缺陷题标签。

证据边界：6.49% 估计依赖抽样框、标注协议、taxonomy 和被审计的 MMLU 版本。它不能直接推广到所有静态基准或所有未来 MMLU 派生包，除非另做逐行审计。
