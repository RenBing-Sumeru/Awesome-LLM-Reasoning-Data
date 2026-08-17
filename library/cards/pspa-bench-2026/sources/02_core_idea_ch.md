一句话贡献：PSPA-Bench 把个性化手机使用转成 TDG 驱动的 benchmark，用合成 persona 生成个性化指令，并用过程级指标评测 GUI agent 的即时任务表现和长期适应能力。

核心机制是把每个移动端任务拆成有向无环图中的 unit instruction。fixed node 表示与用户无关的通用步骤，例如打开 app；flexible node 表示偏好敏感选择，例如商品类别、价格区间、路线或饮食偏好。模板保留 fixed backbone，再用用户画像和随时间变化的偏好权重填充 flexible slot。

反馈契约是 trace-to-TDG alignment。APR 统计选中路径上完成的 unit instruction 比例，PPR 统计完成的 flexible node 比例，CT 是完成时间，CPT 是基于 token 的任务成本；长期指标用经验积累前后的 delta 表示。最接近的比较对象是 SPA-Bench、AndroidWorld、MobileAgentBench 和通用 GUI-agent benchmark，但 PSPA-Bench 增加了 personalization、persona evolution 和 TDG process metrics。
