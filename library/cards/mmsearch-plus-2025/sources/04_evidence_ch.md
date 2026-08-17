以下性能数字均为作者报告，尚未在固定搜索环境中独立复现。在311项任务上，o3无需搜索时为15.1%，full rollout为36.0%，full rollout加SoM为37.6%。Gemini加入SoM后从23.8%升至27.7%。Qwen出现负结果：image-search设置为13.5%，full rollout反而降至6.1%。这些结果说明检索与定位接口会改变结果，但不能证明数据质量、provenance fidelity或轨迹可复用性（论文表1）。

论文分析了23项easy任务：o3在image-only输入下答对，却在full rollout下答错。抽样的10条轨迹中，有9条从未调用image search。Qwen在311项任务中的45项上产生421次无效image-search call。这些观察定位了tool-policy和action-format故障，但抽样与聚合报告不能替代对每次action、observation、error、retry和final judge record的完整发布（第4节与第5.1节）。

对Gemini full rollout错误，作者把51.1%标为“未找到相关信息”，11.5%标为hallucination。该taxonomy为每个错误只分配一个dominant label，因此无法测量bad query、search drift、Gemini summary信息损失、错误视觉定位与answer-judge错误等原因的重叠。完整带标签episode语料并未发布（第5.2节、图6）。

作者报告GPT-4o答案判断与人工检查完全一致，并称初步GPT-4o/Gemini判断一致。然而，validation sample size、raw label、disagreement、judge prompt/setting及可选rule-based实现均未披露。该证据支持在作者设置下使用报告accuracy metric，但不能说明judge对所有acceptable answer均已校准，也不能说明它验证了step provenance。
