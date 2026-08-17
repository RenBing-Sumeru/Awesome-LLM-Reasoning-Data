1. **合成多样问题。** 通过 prefill、GPT-4o 扩展测评 seed、代码转问题、文档 prompt、七模型 Magpie 生成和既有合成集，得到十二个 subset。
2. **去重并打标签。** 用 all-mpnet-base-v2 嵌入问题，删除 subset 内近重复项，再分类 Python 任务质量，只保留目标算法与函数生成记录。
3. **生成可执行三元组。** GPT-4o-0513 同时编写答案与单元测试，随后用 pytest 执行并测量分支覆盖；只有成功且达到 100% 分支覆盖的组合才可进入下一步。
4. **为高难题增加预算。** 每次都从头生成新的答案与测试，最多十次，不复用可能错误的旧测试。只要至少一组通过就保留问题，并按通过率标注难度；十次全部失败才删除，最终得到 279K 条原始格式三元组。
5. **转换格式并构造 SFT。** 把通过验证的任务改写成 completion 或 online-judge 格式，使论文 V1 达到 447K 条。DeepSeek-R1 每题生成三份回答，配套测试选择通过的 CoT/代码对话，公开发布同时保留 incorrect 与 caution split。
6. **训练并评测。** 用 50K 或 18K 条 hard 记录对 Qwen2.5-Coder-32B-Instruct 做 SFT，并在 10K 条三元组上用全测试通过的二元 reward 运行 GRPO；评测 HumanEval(+)、MBPP(+)、BigCodeBench 与 LiveCodeBench。

复现应固定每个 seed/来源 revision、generator prompt 与模型、嵌入阈值、执行镜像、覆盖率工具、每次试验结果、style 转换和 benchmark 相似度。
