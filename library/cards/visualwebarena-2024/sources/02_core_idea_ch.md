一句话贡献：VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks 把一个任务包含自然语言目标、浏览器/页面状态、截图或视觉证据、可选 DOM/HTML 上下文、动作历史和最终任务成功条件。绑定到具体反馈契约，形成可复用对象。

核心机制：该基准在 WebArena 式真实网页任务上加入视觉依赖，覆盖 Classifieds、Shopping 和 Reddit-like 站点。反馈契约： execution-based tests 和视觉 grounding 任务指标，检查最终页面状态或答案是否满足任务。最接近的对比对象是：WebArena 式文本/浏览器任务和静态视觉问答。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
