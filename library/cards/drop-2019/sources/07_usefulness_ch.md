可把 DROP 当作离散推理 QA 的紧凑 schema：保留 passage id、passage 文本、question、answer type、gold answer components、验证过的别名、split/version、prediction、归一化 prediction、EM 和 F1。它适合评估检索或推理 scaffold 是否真的改善段落内数值 QA。

对 atlas 来说，DROP 是 answer-level feedback 坐标，不是过程监督坐标。它帮助区分“由字符串/数字答案 scorer 验收”的任务，与“由执行引擎、形式化 checker 或人工 rubric 验收”的任务。
