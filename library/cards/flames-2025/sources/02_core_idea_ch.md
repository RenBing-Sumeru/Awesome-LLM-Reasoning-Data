FLAMES 把多套异构数学数据配方放入共同实验 scaffold，再用比较结果定义一个由四类 agent 构成的 synthetic SFT mixture。

| 阶段 | 数据或决策对象 | 反馈契约 |
|---|---|---|
| 题目合成 | seed problem/solution 或 taxonomy → agent 中间对象 → 新题目 | 12 个 agent 之一的 prompt constraints；没有数学环境验证新题陈述 |
| 固定过滤 | 合成题目与 GSM8K/MATH 测试题 | exact-match deduplication；若合成题包含某测试题至少 95% 的 8-grams 则删除 |
| 实验性 solution control | 每题 3 条 Qwen2.5-Math-7B-Instruct solution | 三条全同或二取一 answer agreement、Qwen solvability judgment、InternLM2-7B-Reward ranking，或 first-solution selection |
| 最终 FLAMES 配方 | 保留题目与第一条 teacher solution | `First`；表 6 明确把 solution verification 写为 `None` |
| SFT 与选择 | problem-solution records 和十个 checkpoint | full-parameter next-token SFT；按 GSM8K/MATH 平均分选择 checkpoint |

因此反馈契约是 mixed。Exact matching 与 n-gram overlap 是程序化规则，但只检查重复/泄漏表面。Self-consistency、solvability 与 reward-model ranking 都是质量控制实验中的 learned-model judgment。最终数据配方为了覆盖率和较低生成成本，明确放弃独立解答验证。系统能观察格式、词面重叠、teacher agreement 和下游 benchmark 行为，却不能证明每道题都定义良好、每条 first solution 都在数学上正确。

最接近的既有配方包括 MetaMathQA/Paraphrasing、OpenMathInstruct-2/Few-Shot、OrcaMath/Suggester-Editor、MMIQC/IQC、ScaleQuest/QFT 以及 key-concept 方法。FLAMES 并未发明全部 agent；其关键变化是在统一 generator–teacher–student scaffold 下比较它们，加入 Taxonomy-Based Key Concepts 与 Distraction Insertion，再选择实测 mixture，而不是只扩展单个 agent。这代表 factorized data-pipeline evaluation 方向，但不能证明存在一种普适最优 mixture。
