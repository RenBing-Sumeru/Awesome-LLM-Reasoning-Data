# 核心思想

UltraInteract 不再把推理示范视为孤立答案，而把它表示成偏好树中的一个分支：答案或执行的客观检查决定哪些模型动作成为 SFT 目标，失败分支则可先接收环境观察与批评再重新尝试。主要对象是可训练的正确动作或轨迹，筛选边界是基于标准答案的正确性；配套的正负偏好对并不会把本 Card 的中心分类变成偏好优化。

Google Scholar 引用数：216（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Advancing+LLM+Reasoning+Generalists+with+Preference+Trees&author=Lifan+Yuan&hl=en）

开源数据：有  
数据集名称：`UltraInteract_sft`，另有配套偏好数据 `UltraInteract_pair`  
官方地址：https://huggingface.co/datasets/openbmb/UltraInteract_sft  
规模：当前 SFT 文件有 288,579 条记录，当前偏好文件有 219,522 条记录；论文报告 85,918 条源指令、286,979 个正确答案和 219,819 个偏好对  
记录形式：SFT 记录包含任务、源数据集、指令、回答、编号和父编号；偏好记录还包含交互轨迹以及选中与拒绝动作  
文件与存储格式：每个发布各有一个公开 Parquet 训练文件；2026-07-14 已实际读取 SFT 的字段结构和一条记录  
领域与语言：英文数学、面向 Python 的代码、逻辑推理、表格推理和工具辅助问答  
构造与过滤：模型生成思维链或代码动作，由标准答案和执行结果筛出正确动作；环境反馈与 GPT-4 批评扩展失败分支，再用语法和去污染规则删除无效记录  
许可与访问限制：两个 Hugging Face 发布均公开、无需审批并标注 MIT；上游组成数据仍受各自条款约束  
预期用途：从正确动作或轨迹进行推理 SFT，利用分支对开展偏好学习与奖励建模，以及审计数据谱系
