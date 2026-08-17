证据支持的 pipeline 如下：

1. **筛选文档。** 论文称 candidate 是托管于 arXiv、发表于 2023 年 5 月至 2024 年 10 月、经过 peer review 且 OpenReview 分数高于 weak accept 的论文，并具有密集 derivation language。“assume”“derive”“proof”等 marker 出现超过 5 次，会被认为更可能合格。Candidate 数量、精确 venue、source URL/version、该 heuristic 之外的 threshold 与 rejected manifest 均未报告。
2. **抽取表达式。** 轻量 multimodal model 阅读文档，识别重要 numbered/displayed formula、theorem、lemma 与 corollary，去除 exact LaTeX duplicate，并输出 typed JSONL expression。由于 OCR 会产生不完整 formula-box extraction，作者改用 MLLM。当前代码使用 Gemini file/PDF input，temperature 为 0.0。
3. **起草问题。** Query Draft 阅读整篇论文与每个 expression，定位 prerequisite formula、setting 与 symbol definition，并为每个 expression 至少生成一道 derivation/proof question；问题必须展开完整 dependency，不能只写 equation number。报告的 production model 是 GPT-o1-Pro；Appendix B 说明其通过 web UI 使用，因为没有 PDF API，论文被转换为 screenshot 后逐步上传。
4. **检索来源答案。** Answer Retriever 阅读完整文档，查找首次出现位置以及相关 appendix/section，跳过没有答案的 expression，并抽取完整 derivation 而非自行发明。Prompt 要求保留原意、纳入被引用公式并记录 evidence location。报告的 production model 同样是 GPT-o1-Pro。
5. **补充上下文并精炼。** Context Collector 恢复理解答案所需的 definition、premise 与 cited expression；Question Refiner 把这些 evidence 融入问题，使求解者不需要源文档。当前公开脚本使用 `gemini-2.0-flash-exp`，context collection temperature 为 0.05，refinement 为 0.0；这些代码默认值不是人工 GPT-o1-Pro 运行的忠实规格。
6. **过滤答案类型。** 公开代码中的 Answer Filter 让 `deepseek-chat` 把 `question`/`whole_label` pair 分类为 derivation/proof 或 definition/reference，并保留前者。论文没有报告 classifier validation、false-accept/reject rate 或逐阶段 survivor count。
7. **进行专家筛选。** 熟悉来源文档的 human mathematician 检查 2,000 条生成 pair，依据 reasoning type、clarity、correctness 与 density 接受、拒绝或修订，形成 top-100。论文报告每篇约 30 条 pair、专家处理约 15 分钟，但 expert/document 数量与 assignment/adjudication protocol 为 unknown。
8. **打包变体。** 发布 100 条 `paper`/`question`/`whole_label` row，随机切分为 73/27，再派生四选一文件。代码树不含 split 或 distractor-generation pipeline；空 blank file 也没有真正实现所宣传的 fill-blank format。

资源报告不完整。作者称 GPT-o1-Pro 一个月订阅约 USD 200，prompt engineering 约 3 周，每篇论文的 multi-agent processing 约 20 分钟；失败有时需要 2–3 次尝试。总 candidate-paper 数、token/call budget、expert hour 与 compute 均为 unknown。

Repository 暴露单个 agent script、拼写为 `pipline.py` 的 orchestrator、cleaning/evaluation utility 与最终数据，却没有 environment lockfile、source PDF、run configuration、raw/intermediate output、2,000-item pool、expert history 或 model revision。`generate_v1.py` 还包含硬编码 Google credential-like string；本卡不复现该内容。`train/` 目录只有图片而非 training code，README 中的“typical” Axolotl command 是示例，不是实验 manifest。
