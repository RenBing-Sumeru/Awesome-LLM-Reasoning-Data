1. **一句话定位：**用 100K rubric-conditioned feedback 训练开放 13B 细粒度裁判。
2. **方法抓手：**instruction、response、reference、1–5 rubric 输入，先生成 feedback 再打分。
3. **数据抓手：**1K rubric、20K instruction、100K response-feedback 记录。
4. **证据锚点：**45 个 rubric 上与人工相关系数 0.897。
5. **复用决定：**是 rubric judge 数据的重要基础工作；最大风险是 GPT-4 教师偏差和 reference 依赖。
