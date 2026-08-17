Table 1 报告，在六个 in-domain 任务上取平均，Qwen-VL 使用 R3V 达到 64.37，而 STaR 为 59.28，GPT-distilled training 为 48.47；LLaVA-1.5 分别为 59.03、55.81 和 45.24。这些是作者报告的下游模型结果，本身不能证明单条保留 rationale 正确、多样、具有清晰许可证或可复用。

Table 3 的组件消融报告：完整配方的 Qwen-VL 平均分为 64.37，去掉 self-refine 为 62.50，去掉 self-select 为 60.78，去掉 iterative training 为 60.64。这支持受测设置下的组合配方，但没有隔离出所选正例或负例的数据质量因果效应。尤其是，“latest” 规则只是顺序启发式，不是独立的 rationale 质量分数。

在 out-of-domain test-time selection 中，Table 2 报告给 R3V 加入三样本选择后，Qwen-VL 在 MMMU 上从 35.63 升至 38.48，在 MathVista 上从 35.10 升至 35.80，在 VCR 上从 50.23 升至 51.78。Figures 4 和 5 将 selection 与 Test@1、majority voting 比较，并显示候选集合增大后提升最终趋于平台。论文未列出精确 token、FLOP、latency、hardware 和每个数据点的候选预算，因此该 scaling 结果应视为方法证据，而不是经过归一化的计算效率结论。

Table 4 提供了有价值的负结果：LLaVA 的 STaR+DPO 平均分为 55.90，与 STaR 的 55.81 几乎不变，并低于 R3V 的 59.03。这支持作者对其 noisy-CoT DPO 设置的观察，但不能推广成“偏好学习无效”的一般结论。

最关键的审计证据来自论文的 rationale-fidelity 研究。作者对每个任务随机抽取 100 条答案正确的 Qwen-VL 样本进行人工分类，但依任务不同，多模态样本中只有 8% 到 70% 被判断为 fully correct CoT。论文展示了最终答案正确却伴随视觉感知、符号、计算和推理错误的案例。这直接证明 gold-answer verifier 会在 rationale 层面产生 false positive。论文未公开完整 rubric、annotator 数量、inter-annotator agreement、adjudication 流程和样本记录 ID。

Artifact 检查验证了官方 NAACL 论文、DOI、arXiv 记录、主代码/数据仓库，以及官方 Qwen2-VL companion，也验证了 40,457 条 direct-QA 记录和每个基础模型变体 2,800 条热身记录。检查中未发现 immutable release 或 tag、冻结的生成 rollout 池、逐轮正负样本账本、派生 `D_REF`/`D_SEL` 文件、最终 mixture、checkpoint 或 replay log。因此，引用与配方证据较强，但派生数据完整性仍是 partial。
