AgentTrek 通过三个相连阶段把 tutorial-like web page 转成 supervised agent behavior：大规模 tutorial discovery 与 standardization、live website 上的 guided execution，以及基于 VLM 的 success filtering。Tutorial 提供 goal 与 procedural hint；BrowserGym 提供 interaction substrate；GPT-4o-2024-08-06 执行 replay；另一套 prompt 下的 GPT-4o evaluator 给出 acceptance decision。

预期对象是 environment-grounded episode，而不是独立 rationale。每个 paper-level instance 把 task specification 与连续 observation、reasoning、grounded browser action 和 native trace 结合起来。Feedback contract 是 mixed：action 在真实 browser 中执行，但 acceptance 需要 judgment。Evaluator 可以观察 task 与 reasoning/action history，却没有 deterministic ground-truth website state，其 prompt 还允许某些 partial completion。

成功 episode 转换为 text 与 vision supervision。Qwen2-VL 使用 10,000 条 trajectory fine-tune，Qwen2.5 7B/32B text agent 使用 6,000 条。HF 页面只发布 turn-level text example，因此没有暴露完整 episode object、selection boundary 或 subset-to-checkpoint lineage。

Atlas 中最接近的对照是 `learn-by-interact-2025`。两者都把 tutorial/documentation resource 转成 environment interaction data，并使用 judgment filter。Learn-by-interact 对任意 contiguous subtrajectory 进行 backward instruction construction，且没有公开 corpus；AgentTrek 按 tutorial 的 stated expected result 执行 standardized task，并公开 text-turn dataset 与 checkpoint，但没有发布论文的完整 multimodal trajectory 或 failed replay。
