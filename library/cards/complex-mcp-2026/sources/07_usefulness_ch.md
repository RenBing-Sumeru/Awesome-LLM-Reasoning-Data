对于 `environment_agent_trajectory_data`，ComplexMCP 最适合作为明确版本的 evaluation 与 audit substrate。研究者可把 task query 和带 seed 的 initial state 连接到 tool selection、JSON argument、response 或 transient error、mutable state transition、final target diff、collateral change、completion、misbehavior 与 binary success，从而在 tool retrieval、state inspection、planning、execution、recovery 和 evaluator mismatch 之间定位失败来源。

其构造 pipeline 是一套具体 benchmark recipe：填充合成 application graph，编写不含工具提示且结果确定的跨应用任务，制作可执行参考路径，通过人工验收 gate，并同时保存 reference interaction 与 target state。更完善的实现还应保留 rejected candidate、显式 rubric decision、annotator metadata、逐条 provenance、不可变 task/evaluator manifest 与完整 model run。

该反馈契约适合 verifier 研究。研究者可以扰动必需状态和无关状态，为 fuzzy content matching 构造 semantic-equivalence case，测试每条 excluded-key path，注入每种 tool status，并把自动判定与盲评 human label 对照。含 prompt injection 的 LightTalk history 可组成 security slice。这些用途应报告 false-positive 与 false-negative rate，而不能假设确定性代码必然正确。

发布的 47 条 gold/reference trajectory 可用于 schema inspection、task understanding、evaluator unit test 和论文关联复现尝试。它们不能被描述为完整 success/failure corpus、preference pair、process-supervision label 或通用 SFT/RL data。独立 data/model-output rights、split/decontamination control、完整 rollout 与 replay manifest 均缺失。

安全复用等级是**仅限 evaluation 与 audit**，与 accepted `training_use` 一致。使用已检查 release 时应固定 commit `617e963bd838bee5793a39e6b34165b79535828f`，并说明它是 current-main audit freeze，而不是 paper-era lock。benchmark score 只用于在论文契约下比较配置，不能认证 data quality。
