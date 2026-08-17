在论文层面，构造证据可以相互对应：初始流程通过 6,100/7,500 题；四个恢复模型单独增加 9.7、14.9、15.2 和 15.7 个百分点；合并后增加 16.1 个百分点，达到 97.4%。在 DeepSeek-V3 失败集上训练 2,000 步时，predicate-aware reward 把覆盖率提高 9.7 个百分点，binary reward 为 7.8。这些数字描述论文中的生成运行，不代表当前公开发布的规模或逐条质量。

消融结果说明被测 pipeline 同时依赖分阶段 predicates 和 answer-type prompts：完整系统在 MATH-500 上的 verified accuracy 为 68.2%，取消分阶段 predicate generation 后为 41.6%，去掉 answer-type list 后为 26.3%。相同配置的 SFT 对照报告 Prolog-MATH 为 36.8%，原始 MATH CoTs 为 33.2%。两类 benchmark 结果都不能验证每个公开程序，也不能把全部收益归因于数据质量。

最重要的负面证据来自人工审计。100 个两阶段程序中有 96 个被判断为数学上正确或合理；100 个 Qwen2.5-3B GRPO 程序中有 90 个逻辑正确。Appendix G 展示了一例两阶段程序：错误假设末三位数字的构成却得到正确答案；另一例 GRPO 程序只考虑 2004 的因子 167，却偶然返回正确指数 12。终态等价与语义健全之间因此存在可测差距。

官方制品公开了 pipeline、SFT、GRPO、reward 与 verifier 代码，以及一个可访问的 6,093 行 Hugging Face split。它们也暴露出复现漂移：standalone generation script 使用字符串包含匹配，而非论文描述的改造符号 checker；若干脚本仍要求用户自行提供路径、endpoint 或 checkpoint。
