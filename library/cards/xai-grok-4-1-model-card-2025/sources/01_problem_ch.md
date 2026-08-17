一手来源是 xAI 于 2025 年 11 月 17 日发布的六页 Grok 4.1 Model Card，并结合 xAI 的发布公告阅读。本 Card 关注这些官方材料对后训练、安全与部署实际披露了什么，而不是把闭源模型的能力主张当作可复用数据证据。

Grok 4.1 有 Thinking 与 Non-Thinking 配置。模型卡称二者均使用 production system-message instruction 评估，并以 input filter 等安全措施部署。公告另称 xAI 使用大规模 RL infrastructure 及生产流量评估。这些是前沿披露台账的重要证据，却不是公开构造配方。

该卡属于 frontier-reports disclosure 类别。它的对象是对封闭管线的报告级说明：宽泛来源类别、训练阶段、反馈类别、安全缓解与评测面。它不发布训练记录、reward/verifier schema、filter model、system-message instruction 文本、agent trajectory 或可复现环境。

决策边界很重要：安全 benchmark 分数和生产 A/B 式评估说明的是所述配置下的行为；它们并不能建立数据 provenance、生产数据是否用于训练、权利、标签质量或训练数据发布。
