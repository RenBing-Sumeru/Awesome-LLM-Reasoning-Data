SuperGLUE 要回答的问题是：当 GLUE 已被强预训练模型刷到接近或超过非专家人类估计后，英语通用语言理解评测还能不能继续提供有区分度的单一指标。主要来源是 Wang 等人的论文《SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems》，2019 年 arXiv 公开，并发表于 NeurIPS 2019；官方站点是 super.gluebenchmark.com。

具体缺口是评测饱和。论文指出，当时 GLUE 排行榜已经不足以衡量后续 NLU 进展，因此 SuperGLUE 沿用 GLUE 的公共排行榜、私有测试集、评测服务器和聚合分数思路，但重新选择更难任务，并加入人类基线、诊断集、使用规则和工具支持。

它的对象不是训练方法，而是一次 benchmark submission：系统需要给 BoolQ、CommitmentBank、COPA、MultiRC、ReCoRD、RTE、WiC、WSC 八个主任务以及诊断集提交预测。验收契约是任务级自动评分，包括 accuracy、F1、exact match、macro-F1 和 MCC 类诊断指标；多指标任务先在任务内平均，再进入 SuperGLUE 总分。
