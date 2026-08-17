论文与已检查 artifact 支持按下列步骤重建流程。

1. **汇集 candidate pool。** 从 16 个来源精确收集 59,029 道题，主要是 NuminaMATH（30,660）与 MATH（11,999），另含 OlympicArena（4,250）、OmniMath（4,238）、AGIEval（2,385）以及更小的科学、代码、逻辑、填字和定量推理来源。新来源包括 182 道 Stanford Statistics PhD qualifying-exam probability question 和论文计数中的 23 道 s1-teaser。
2. **去污染与去重。** 移除和 MATH500、GPQA Diamond、AIME24 有 word-level 8-gram overlap 的题目，再去除 exact-question duplicate。已检查代码还加入 LiveCodeBench test question 与跨来源 overlap filtering。removed ID、matched n-gram 与 review decision 未发布。
3. **生成 teacher trace。** 每题调用一次 Google Gemini 2.0 Flash Thinking Experimental，保存 thinking part 与 answer。论文引用 `gemini-2.0-flash-thinking-exp-1219`；代码调用无版本 alias，且未固定 temperature、top-p、seed、retry ledger 或 API snapshot。
4. **应用 quality filter。** API/trace failure 使 59,029 降至 54,116；针对 ASCII art、缺失 image reference 和编号不一致的字符串 heuristic 再使 54,116 降至 51,581。
5. **探测难度。** 让 Qwen2.5-7B-Instruct 与 Qwen2.5-32B-Instruct 尝试每道剩余题目。Claude 3.5 Sonnet 对照 reference solution 判断每次 attempt。只要任一模型被判正确，就移除该题，剩下 24,496。
6. **固定高质量样本。** 选定 384 条 judged-correct AIME/GPQA generation，以及 Gemini trace 超过 5,600 个 Qwen-tokenizer token 的 judged-correct MATH generation。
7. **标注多样性并采样。** Claude 分配 MSC 风格 domain。论文算法均匀采样一个可用 domain，再在其中按 `2^-rank` 权重采样，偏向长 trace，直到得到 1,000 个唯一 item。公开 notebook 则只在前 700 条均匀选 domain，后 300 条改用 AIME/GPQA-derived distribution，并且没有设置 NumPy seed。
8. **tokenize 并训练。** 渲染 think/answer delimiter，对 question mask loss，在 reasoning 与 answer 上训练五轮/315 steps。设置为 global batch 16、bf16、AdamW `β1=0.9`、`β2=0.95`、learning rate `1e-5`、5% warmup 后 cosine decay、weight decay `1e-4`、maximum length 32,768。训练据报告在 16 张 H100 上耗时 26 分钟，约 7 H100 GPU-hours。
9. **可选地在推理期应用 budget forcing。** 达到最大预算时附加 end-of-thinking delimiter，并可附加 `Final Answer:`。要延长思考，则抑制 delimiter，并在模型尝试停止时附加 `Wait`。这只改变 decoding，不会修改 s1K 或 SFT objective。

多处漂移阻止 paper-exact reconstruction。公开 generated full pool 有 58,986 行，比 59,029 行 raw pool 少 43 行。`qfq/train` 与 `qfq/train_featurized` 可读，但 feature column 拼写与 notebook 预期不同。notebook 依赖未认证不可访问的 `qfq/geminiall`，采样过程与 Algorithm 1 不同，也没有 seed。复用必须固定 repository commit `77272c6e925d610257a50b520bad15330b513389` 及各 artifact revision。
