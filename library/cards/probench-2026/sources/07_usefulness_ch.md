对`environment_agent_trajectory_data`而言，ProBench是process-aware evaluation设计参考，不是可下载trajectory来源。可辩护的episode record应保留task/language/type、app/device/version/account状态、screenshot、parsed action、raw a11y tree、converter或summarizer output、completion signal、step/early-stop reason、final image、judge prompt/response/model、human validation与reset evidence。

对`benchmarks_evaluation_surfaces`而言，149项State与68项Process任务展示如何比较final-state-only judgment和path-sensitive terminal judgment。evaluator audit应针对sorting、filtering、location selection、repeated action、缺失a11y node、误导resource ID、screenshot变化及alternative valid path构造positive/negative fixture，再按语言、task type和app分别报告false-positive/negative slice。

Process Provider机制可指导新evaluator实现。Structure Description Converter提供可检查programmatic action evidence；MLLM-based Summarizer可覆盖a11y难以表示的operation。其output应作为带provenance与uncertainty的证据保留，除非另经人工验证，否则不能作为gold process label。

由于尚未确认官方package，复现需要重新实现。未来发布应固定task、app/device snapshot、account、locale/network/time、parser、prompt、Gemini API snapshot、seed/retry、自动reset、per-run output及rights/privacy控制。人工清除history不足以保证reset。

当前支持用途是**仅限evaluation**。已核验artifact不支持SFT、RLVR、agent training、reward-model training、process supervision或trajectory reuse。在code/task/trajectory与license发布前，ProBench最适合作为benchmark-design与verifier-audit参考。
