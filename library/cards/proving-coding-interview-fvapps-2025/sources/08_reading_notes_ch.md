1. **一句话定位：** FVAPPS 把 4,715 道 APPS 题转成 Lean 4 程序实现与证明任务，其中 1,083 条经质量控制。

2. **方法抓手：** Python/API 翻译、`#eval` 行为检查、theorem 生成、`sorry` 留空和 Lean 4.12.0 内核验收构成流程。

3. **数据抓手：** 每条可含题目、函数骨架、样例、proof obligation 和质量标记；完整集与 curated 子集需分开报告。

4. **证据锚点：** 100 个样本的 406 个 theorem 上，Sonnet 证明约 30%，Gemini 约 18%，表明 proof completion 仍难。

5. **复用决定：** 适合 verified program/proof 训练；最大风险是弱 theorem 与 `sorry` 作弊，必须做规格反例和内核扫描。
