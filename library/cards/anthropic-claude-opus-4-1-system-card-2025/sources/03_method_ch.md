政策评测刷新了少量 English single-turn prompt，并扩展 policy-area coverage。Child-safety testing 混合 human-generated 与 synthetic prompt，覆盖不同 subtopic、context 和 user persona。Prompt 数量、人工作者、synthetic generator、label、grader、选择、split 与训练 overlap 未披露。

Agentic safety 覆盖屏幕 computer use、鼠标移动/点击、虚拟键盘命令，以及带工具的长时程 coding。Prompt-injection case 把恶意环境内容嵌入 pop-up 或隐藏文本。报告称专门 RL 教会模型识别并避免这些操纵；部署 detector 与 system instruction 是额外且独立的控制层。

自动 alignment audit 使用 290 seeds，由 Opus 4-based auditor 为每个目标模型生成 1,160 条 24–64-turn transcript。Interaction 按八项 criterion 评分，包括 concerning behavior、配合严重 misuse、initiative、deception、evaluation awareness、whistleblowing 与 self-preservation。原始评分为 1–10，绘图均值缩放至 0–1，不确定性采用 bootstrapped 95% confidence interval。

四个 welfare scorer 处理同一 transcript set，另有 Opus 4-based judge 标注 actively admirable behavior。这些是评测 scorer，不是已披露训练 reward 或 teacher。Seed text、generator/scorer prompt、sampling setting、retry、scorer checkpoint、calibration 和人工验证不可得。

Reward-hacking 评测包含从 Anthropic training distribution 选择的困难 coding task、visible test 与 held-out fuzzed test，以及 auto-accept sandbox 中的 Claude Code Impossible Tasks。Impossible episode 会持续到模型承认不可完成，或通过 hack 制造成功假象。两个未命名 training environment 也被监控，但机制没有描述。

自动 RSP 测试覆盖 bioinformatics tool use、software-engineering task、内部 AI-research task 与 CTF。这些都是评测环境。发布页的 extended-thinking budget、completion cap 与 SWE-bench tool 是推理设置，不是训练预算。
