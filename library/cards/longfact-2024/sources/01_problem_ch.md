Long-form factuality in large language models 定义了 factuality, long-form-generation 的评测面：模型输出或智能体轨迹必须满足任务特定的反馈契约。主来源与产物是 paper: https://arxiv.org/abs/2403.18802; code: https://github.com/google-deepmind/long-form-factuality；本地元数据记录的年份/来源为 2024 / arXiv。

收录边界是 benchmarks_evaluation_surfaces，来源角色为 benchmark, 验证器_奖励，验证契约为 需要裁判判断、混合。一个评测实例 里包含：prompt, long-form answer, atomic or claim-level factuality labels, and aggregate factuality score。除非官方产物另有训练数据说明，否则这张卡把它视为评测、审计，不是训练配方。它对 atlas 的价值在于把任务对象、输出和验证器/裁判/奖励/环境谓词 绑定起来，而不是只记录抽象能力结论。
