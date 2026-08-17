已有基线包括单学科数学/科学 benchmark、多模态科学 benchmark、考试套件、OlympiadBench 和代码竞赛评测。OlympicArena 的变化在 benchmark 对象层：聚合七个学科的 62 个奥赛竞赛，保留图文模态，增加 13 种答案类型，并公开 validation/test split 语义，其中 test 答案隐藏。

方向信号是：奥赛级评测可以组织成多字段记录，能规则评分就 rule-based scoring，需要主观判断时用 model-based scoring，编程题用代码执行，并另外用过程级分析观察推理行为。质量信号来自标注流程、质量验证、去重、公开字段、评测脚本和泄漏检测。

不新之处包括 PDF OCR、按答案类型写 prompt、符号数学检查、LLM-as-judge、步骤评分和榜单提交。复用前要检查 CC-BY-NC-SA-4.0 数据许可、代码许可状态、隐藏 test 策略、源竞赛题权利、图片 URL 稳定性、标注忠实度、模型裁判漂移，以及是否把 validation 结果和正式 test 榜单结论混在一起。
