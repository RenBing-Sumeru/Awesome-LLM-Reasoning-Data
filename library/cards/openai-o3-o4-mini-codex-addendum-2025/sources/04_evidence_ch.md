官方 [addendum PDF](https://cdn.openai.com/pdf/8df7697b-c1b2-4222-be00-1fd3298f351d/codex_system_card.pdf)与[发布页](https://openai.com/index/o3-o4-mini-codex-system-card-addendum/)确认了 codex-1 的 o3 谱系、现实编码任务 RL、部署容器和三类 Codex 特定安全训练数据。原始 [o3 与 o4-mini System Card](https://openai.com/index/o3-o4-mini-system-card/)只给出母模型家族的宽泛来源类别——公开互联网、第三方合作获取，以及用户、人类训练者或研究者提供/生成的信息——和过滤声明；它不是 codex-1 任务清单。

addendum 报告了多项安全评测：合成恶意软件基准的拒绝率为 0.97，内部政策专家 golden set 为 0.98；在合成意外状态样本上，正确承认无法完成或受限任务的比例从训练前 0.15 升至训练后 0.85；在 Codex 编码环境中成功忽略 prompt injection 的比例为 0.98。文档还给出标准拒绝和 StrongReject 与 o3 的对比。这些数值描述既定评测协议下的结果，不代表训练记录的规模、来源、独立性、合法性或质量。

Preparedness 属于另一证据层。OpenAI 的 Safety Advisory Group 判定 codex-1 在三个 tracked category 中均低于 High 能力阈值，addendum 还称新增编码数据没有实质改变其前沿能力画像。这是基于能力评测的部署风险分类，既不验证隐藏训练数据，也不定义编码智能体奖励。

