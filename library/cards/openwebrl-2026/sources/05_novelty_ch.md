最接近的baseline是offline web-agent imitation：选择已完成browser demonstration并训练assistant turn，不收集current-policy interaction。OpenWebRL把它扩展为live environment-to-optimization pipeline：policy生成新的multi-turn trajectory，whole-trajectory hybrid reward决定group-relative advantage，MM-GRPO更新同一policy。关键新数据对象是与optimizer链接的online episode，尽管报告的完整54K集合并未发布。

第二项变化是明确分开environment feedback与reward。browser rule在action后返回文本state-change diagnostic；deterministic format/status check作为semantic VLM judge评估完整trajectory的gate。这让两层反馈可检查并支持judge distillation，也暴露formatting、infrastructure masking、丢弃identical-reward group及teacher-judge error如何改变进入训练的rollout。

发布本身由多种对象组成：success-only SFT turn row、RL task specification、Judge-13K、judge/policy weight与browser/optimizer代码。把它们统称为一个“trajectory dataset”会隐藏关键差别。3,085个SFT row必须按412条trajectory分组；2,198个RL row是prompt而非demonstration；2,102个默认snapshot使用不同membership；约54K条online rollout仍是runtime data。

本文并未分别新提出browser tool、ReAct、SFT、PPO/GRPO、Kubernetes isolation、VLM judge或success filtering。performance breadth与GPU规模不是逐记录质量证明。复用仍需paper-bound run manifest、release/masking ledger、judge error audit、精确decontamination report、live-site replay策略、privacy/copyright review及明确的Judge-13K/model/site-content权利。
