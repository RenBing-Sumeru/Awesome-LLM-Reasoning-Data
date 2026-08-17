接受标签同时存在噪声与循环性。GPT-4o 参与提出任务、改写任务、总结和判断，相关盲点可能穿过全部阶段。100 条样本的审计同时记录误接受（归一化矩阵中的 0.14）与误拒绝（0.05），但论文没有公开全部原始 verifier 输出，也没有按网站、任务类型、长度或安全边界做分层误差分析。只保留成功样本还会删除校准筛选器、研究恢复或构建偏好数据所需的失败与 near miss。

作者的定性失败分析包括 refinement 阶段 grounding error、网站无响应、summarization hallucination、登录/媒体/机器人检测等技术障碍，以及达到步数上限但任务未完成。verifier 还可能把可见最终页证据误当作真实完成，因为隐藏服务端状态与副作用不在其观察内。Curator inference：模型可能利用 generator 与 judge 共享的风格规律，而没有学到稳健任务完成。

实时页面会漂移、消失、个性化、改变布局并触发 bot defense。若缺少带时间戳的页面快照、浏览器/依赖版本、viewport、locale、cookie/session 状态、网络日志与准确 prompt/model snapshot，仅凭 URL 无法重放记录。Mind2Web-Live 主表还排除了 21 条不可访问任务，并对三次运行取最大值，因此可访问性波动与报告政策都会影响比较。

发布范围不完整。没有核实到官方不可变 94K 快照、原始 175K 池、40K sample、最终约 30K 训练集、成员映射、拒绝 episode、checksum 或语料专属 license。temperature、seed、最大采集 horizon、站点级数量、去污染、来源去重和训练/评测重叠均为 unknown。MIT 仓库许可覆盖代码，ACL 的 CC BY 4.0 覆盖论文文本；两者都不能确立截图、HTML、无障碍树、任务文本或第三方页面内容的再分发权。

论文称执行时不使用个人信息，agent 遇到 CAPTCHA/登录/支付会停止，并对部分轨迹监测访问政策合规性。但项目没有公开全语料隐私/脱敏审计、站点级 terms/robots 清单、consent 记录或请求速率日志。这些是缺失披露，不等于作者一定没有执行相关控制。
