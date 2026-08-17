对 environment-agent-trajectory track 而言，SPA-Bench 提供了具体 episode schema 与 verifier 分解。可复用 record 应绑定 task/source ID、language 与 app version、device 或 AVD image、account 与 external-state snapshot、observation representation、screenshot、action、log、completion signal、golden-step budget、rerun provenance、evaluator input/version/output、cost、time 与 side effect。当前 release 定义了许多字段，但未发布 episode instance。

对 benchmark evaluation，340 个 task row 与 40 个 cross-app JSON 可支持 task-coverage analysis、双语分层、difficulty review、app-order/subtask inspection 与 evaluator implementation audit。它们不能用于声称 training coverage、human demonstration availability 或 deterministic execution。GUI Odyssey-derived record 需要显式 attribution 与 overlap check。

混合 verifier 可形成 ablation 计划：在公开 human label 上比较 OCR-only、GPT-4o-only、action-hidden/action-visible、result-only/reasoned output、reverse-scan 与 terminal-frame check，以及 alternative-app-order acceptance。当前缺少这些 calibration label，因此复现需要新建 labeled audit set 并固定 judge endpoint。

更强 replay package 应发布合法 AVD/image digest、APK/app/account/device manifest、cycle 与 per-task reset log、external-state cleanup step、paper-run trajectory/result、failure/rerun ledger、evaluator response 与 checksum。physical-device task 需要单独 setup/restoration recipe，不能表示成可用 snapshot replay 的任务。

复用等级：可安全用于 evaluation design、task/evaluator inspection 与 audit。training use 被阻塞，因为没有支持的 split、trajectory corpus、training recipe、optimizer 或 checkpoint，且公开 task 暴露会污染 evaluation。任何 live execution 还必须解决 third-party 权利、PII/consent handling、隔离 credential、network control，以及防止 messaging、posting、account change 与 purchase 的安全措施。
