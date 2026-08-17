既有工作基线是 AndroidControl：human mobile-UI demonstration 带 point target，benchmark 可能把单个标注 action 当作唯一有效选择。AndroidControl-Curated 没有提出这些上游 demonstration、Android task、三种指定 expert agent、GRPO 或 GUI-agent grounding 本身。

第一项具体变化是 feedback interface：exact-point matching 改为 UI-element box containment，使 evaluator 更接近 interaction intent，而非 pixel identity（论文 §2.1.1，p. 3）。第二项是 correction data object：consensus failure 触发 LLM proposal，其中包含 deficiency label、修订 task 或 ground truth、rationale 与 human verification；发布记录可以保留 revised history、alternative valid action、review result 及修订前后的 target（论文 §2.1.2，pp. 3–4；官方 `android_control_high_task-improved.json`）。

第三项变化是与 purified surface 绑定的训练用法。Magma-R1 post-training 使用 2,400 条选中 curated step，以 dense Gaussian grounding reward 和 action-balanced GRPO batch 替代只依赖 sparse terminal success（论文 §2.2，pp. 4–5）。这形成一个方向信号：benchmark purification、reward geometry 与 sampling policy 被视作耦合的数据工程选择。Table 2 的差值说明这些选择影响报告分数，而不是逐记录质量证书。

该工作主要整合 evaluation redesign、label repair、公开静态 release 与小规模 post-training recipe。复用前应对照论文公式与实际 scorer，找回 2.4K selection/split manifest，固定 Tables 1–2 所用 3B checkpoint，检查所有被拒绝和修订 case，并解决 code/data/screenshot license 与 live replay。完成这些检查前，最稳妥的定位是 evaluation 与 audit reference，而不是不受限制的训练数据。
