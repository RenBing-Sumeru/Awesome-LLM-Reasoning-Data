应把 Grok 4.1 看作部分披露台账。模型卡称预训练使用公开互联网数据、第三方产生的数据、用户/承包商数据及内部生成数据；经过过滤和定向中期训练后，后训练将 SFT 和基于人类反馈、可验证奖励、模型评分器的 RL 结合起来（模型卡 §3.1）。

公告补充一项不同主张：为了优化风格、人格、有用性和对齐，xAI 让前沿 agentic reasoning model 作为 non-verifiable signal 的 reward model。它没有指明这些模型，也没有给出 reward-record contract。内部 refusal evaluation 所描述的一条记录是违反政策的单轮 prompt、模型 response 和另一模型的 assist/refuse grade（模型卡 §2.1.2）。

因此，反馈在不同层观察不同对象：refusal 的最终行为、input-filter false negative、benchmark answer、以及模型/人类偏好式评估。两份来源均未建立 step-level verification、训练奖励规格、evaluator calibration、source-to-reward lineage 或已发布 corpus。

本地最接近比较是 Grok 4 model card：二者都有宽泛来源与反馈披露。Grok 4.1 新增了 production-traffic silent rollout 和 non-verifiable agentic-reasoner reward-model 主张，但其数据治理和训练合约同样未知。
