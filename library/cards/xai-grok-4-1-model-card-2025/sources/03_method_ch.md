**数据与训练。** 模型卡命名了四类预训练来源、标准去重/分类、定向中期训练，以及基于人类反馈、可验证奖励和模型评分器的 SFT/RL（模型卡 §3.1）。它没有指明 prompt source、model checkpoint、数据量、mixture、teacher、sampling protocol、optimizer、reward mix 或 split。

**安全训练路径。** xAI 称训练了对 benign/harmful query 的恰当回复 demonstration。input filter 拒绝 bioweapon、chemical-weapon、self-harm、CSAM 等类别请求；filter 以混合 synthetic/production data 训练，并由 Grok 生成 adversarial attack（模型卡 §2.1.1）。这是 filter training 的证据，不是 production data 进入基座模型或一般后训练集的证据。

**评估路径。** 内部多语 refusal set 由独立模型打分；AgentHarm 衡量恶意 agentic task，AgentDojo 衡量 prompt injection。input-filter 测试使用内部受限 chem/bio 集，jailbreak 测试使用内部 template。Thinking 与 Non-Thinking 使用 production system-message instruction；dual-use capability 测试移除 safeguards（模型卡 §2）。这些均未公开 prompt、label、grader version、tool setup、instance ID、system-message instruction 文本、filter version 或 log。

**公告路径。** xAI 报告沿用 Grok 4 的大规模 RL infrastructure，以 agentic reasoning reward model 处理 non-verifiable signal，并在 11 月 1–14 日 silent rollout 中连续盲测 live traffic pairwise evaluation。它还在分层抽样的 production information-seeking query 上评估 hallucination。来源没有说这些 traffic record 训练了 Grok 4.1，也没披露 consent、retention、数据分离或聚合。
