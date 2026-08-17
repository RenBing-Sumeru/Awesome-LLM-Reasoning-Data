对“环境与智能体轨迹数据”赛道，本工作提供实用的搜索 episode 审计 schema：保留 query、URL/snippet ranking、visited page snapshot、extracted evidence、intermediate prediction、contamination label、final answer 与 correctness。它支持 provenance check、event-aligned prediction 分析、retrieval policy 对比、detector benchmark 和 sandbox evaluation。

稳健 collection 应同时保留成功与失败：正确/错误/no-prediction turn、blocked/changed page、tool error、timeout、detector 未匹配 case 与 human override。还应固定 benchmark version/access policy、search/browser/model 版本、prompt、budget、seed、timestamp、page hash 或合法 snapshot、detector regex/threshold/judge prompt 及全部 final verifier 输出。

合适的 `training_use` 是 audit。用泄漏题目、答案或 detector target 训练后再报告同一 benchmark，会加剧 contamination。合理衍生用途包括用有许可且脱敏的 evidence 训练 provenance classifier、评测 retrieval filter，以及在 controlled corpus 与 private/dynamic held-out 问题上测试 policy。原始 live-web trace 不自动具备训练许可或隐私安全性。
