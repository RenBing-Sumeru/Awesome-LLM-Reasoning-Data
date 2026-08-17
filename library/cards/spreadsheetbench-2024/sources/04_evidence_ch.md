可信证据首先来自公开 benchmark 本身的规模和难度。论文报告 912 条 instruction、2,729 个 test case、3,917 个 sheet、2,019 个 single-sheet file 和 710 个 multi-sheet file；同时包含多表、非标准关系表、格式线索和大文件等真实 spreadsheet 复杂性。

实验结果显示模型与人类差距明显。官方实验中，GPT-4o single-round overall 为 18.35% soft / 15.02% hard，GPT-4o multi-round 为 16.96% / 13.27%，GPT-3.5 在多轮反馈下提升到 7.09% / 5.37%；human performance 为 71.33% soft / 62.00% hard。Copilot in Excel 只在 5% 子集、每题一个 test case 的人工设置下评测，不能直接等同全量 benchmark。结论可信但有边界：这些数字依赖官方 evaluator、运行环境、产品子集抽样和公开任务版本。
