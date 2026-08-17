# 核心思想

MathInstruct 把广泛来源覆盖与两种可训练目标结合：自然语言 CoT 和可执行 Python PoT，使同一模型学习何时语言推理或计算更合适。记录是 instruction、带类型的 rationale 与最终答案，源答案和程序执行划定反馈边界，公开 SFT 示范使 Track 01 成为正确分类。

Google Scholar 引用数：583（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MAmmoTH%3A+Building+Math+Generalist+Models+through+Hybrid+Instruction+Tuning&author=Xiang+Yue&hl=en）

**开放数据集：**是  
**数据集名称：**MathInstruct  
**官方地址：**https://huggingface.co/datasets/TIGER-Lab/MathInstruct  
**规模：**来自 13 个数据集的 260k 条记录，其中六个 rationale 子集由作者新增  
**记录形式：**instruction、可选 input、output rationale/最终答案、来源和 CoT/PoT 类型  
**文件/存储格式：**Hugging Face 数据文件，采用类 Alpaca instruction 格式  
**领域/语言：**英文算术、代数、几何、微积分、定理问答、形式逻辑及相关数学  
**构造与过滤：**混合继承的人类/模型 rationale 和 GPT-4 CoT/PoT；可行时执行生成程序并与源答案核对  
**许可/访问约束：**公开，但各子集分别使用 MIT、Apache-2.0、CC-BY、CC-BY-NC，另有一个未列许可  
**预期用途：**SFT、蒸馏、混合推理评测与 mixture 审计

