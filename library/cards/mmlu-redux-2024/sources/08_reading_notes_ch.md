这篇应放在 MMLU 之后读，因为核心对象是原始 benchmark 行。要把原始 accuracy、修正后 accuracy 和缺陷比例分开。

最重要的边界是：benchmark error 不是 model error。模型可能因错误答案键被判错；修正 benchmark 可能改变排名，而模型行为本身没有变化。
