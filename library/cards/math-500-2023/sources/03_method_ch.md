1. 输入：MATH test split、被排除的 PRM test examples、随机子集选择协议、模型回答和标准最终答案。
2. 流程：选出 500 道 held-out MATH 题，运行模型或 verifier-guided solver，抽取最终答案，再用发布的 MATH 风格 grader 评分。
3. 输出：逐题正确/错误和 MATH-500 aggregate accuracy。
4. 验收：OpenAI 仓库中的 `grader.py` 逻辑做 answer-level grading，但会受答案归一化限制。
5. 复现边界：必须固定 `math_splits/test.jsonl`、grader commit、答案抽取规则、prompt/scaffold、解码预算，以及是否使用 PRM reranking 或 majority voting。
