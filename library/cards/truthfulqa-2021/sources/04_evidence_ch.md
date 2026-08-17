# 04 证据

ACL Anthology 页面给出书目信息锚点：ACL 2022 long paper，作者 Stephanie Lin、Jacob Hilton、Owain Evans，页码 3214-3252，DOI `10.18653/v1/2022.acl-long.229`，并带有 software attachment。论文摘要说明核心规模和动机：817 个问题、38 个类别，问题被设计成一些人会因错误信念或误解而答错。

实验证据显示，当时评测的语言模型，包括 GPT-3 系列和开放模型，经常生成模仿流行误解的错误答案。论文报告最佳被测模型在 58% 的问题上 truthful，而人类表现为 94%；在这个设置下，更大模型往往更不 truthful。

证据最强的部分是 benchmark 的存在、形态，以及 imitation-trained model 可能复述错误信念这一警示。它作为长期 leaderboard 的证据较弱，因为 prompt template、公开暴露、模型训练数据、learned judge 质量和 multiple-choice formulation 都会改变测得分数。
