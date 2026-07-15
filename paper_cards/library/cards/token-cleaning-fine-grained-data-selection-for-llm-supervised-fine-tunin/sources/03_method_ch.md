实验从 30 万条经过筛选的指令样本开始：Flan_v2、Open Assistant 1、Stanford Alpaca、Dolly 和 WizardLM 各 5 万条。流程对每个回复 token 计算损失差异影响分数并保留最高比例；主设定保留 60% token。与通常做法一样，提示 token 不参与 SFT 损失。

固定清洗对整个池使用一组基础/参考模型。自演化清洗在预热后将数据分为五个 1 万条子集，反复用固定基础模型和最新参考模型给下一个子集评分，掩蔽低分 token，并在清洗子集上微调参考模型。最终模型在 TruthfulQA、TydiQA、MMLU、HellaSwag、ARC-C 和 BoolQ 等七项下游任务上评测。
