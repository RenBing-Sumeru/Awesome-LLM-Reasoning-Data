1. 输入：竞赛题目列表、agent/model config、competition-rule config、Hydro problemset、可选本地资源数据集和 provider API 设置。
2. 流程：部署 Hydro 与 USACOArena addon，启动 arena API 和 UI，运行 `scripts/run_competition.py`，让 agent 在 credit accounting 下生成代码并调用本地测试，再导出报告和 metric timeline。
3. 输出：competition id、日志、提交、judge outcomes、final intelligence report、metric timeline 和 budget/cost traces。
4. 反馈：Hydro tests 和 arena API 给 pass/fail 或分数；耗时、token 生成和本地测试都会扣 credit。
5. 复现需固定 Hydro 版本/addon、problemset zip、本地资源数据、config 文件、API 模型版本、预算规则、硬件/runtime 和发布日期。
