正确性依赖一个假设：扰动只改变目标 bias cue，而不改变答案质量。这个假设可能失败，尤其是涉及措辞、身份、reference 或 style 的微妙变化时。

该框架测的是 judge instability，不是部署场景中的真实社会伤害。Bias score 依赖源任务、扰动生成器、parser 规则、judge temperature、API 版本和聚合公式。闭源模型可能静默更新。公开 bias probes 也可能进入训练数据，从而削弱后续 fresh audit 的价值。
