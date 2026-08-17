输入是 Similarweb top 100 与约 49K 个 Tranco URL；其中 4K 条记录先由 GPT-4o 生成 Google 查询以到达目标网站。包含暴力或露骨内容的网站会被过滤。Playwright 以最高 1980 × 1080 的 viewport 打开实时网站，并记录截图、原始与 set-of-mark 视图、HTML/无障碍树元素，以及 grounded 和自然语言动作。正文把四个角色的 backbone 称为 GPT-4o；Appendix B 在费用计算中称其为 GPT-4o-turbo，因此准确的带日期服务 snapshot 为 unknown。

可重建流程为：种子 URL → proposer 生成抽象任务与首个原子动作 → Playwright 执行动作 → refiner 根据当前页面和完整动作历史更新任务并给出下一动作 → 重复，直到 stop、步数边界或安全/可行性边界 → summarizer 从完整动作和截图历史生成高层最终任务 → task verifier 判断任务、动作、截图和最终页 Markdown → 丢弃不连贯、偏离意图或失败的 episode。遇到 CAPTCHA、登录或支付请求会终止；另有独立 prompt 检测 CAPTCHA。（论文 §3.2；Appendix D，Tables D.7–D.12。）

论文报告的采集运行使用 60 个并行进程，耗时 50 小时。Table 3 记录 175K 次原始尝试、94K 条接受轨迹、接受集平均 7.7 步、720K 张图像、830M tokens 与 33.3M 个网页元素。Appendix B 按 53.1% 成功率估算每次原始尝试 0.15 美元、每条接受轨迹 0.28 美元。temperature、seed、最大 horizon、采集时间戳、站点级流量、retry 和端到端运行清单均为 unknown。

训练还增加一层选择：从接受池抽取 40K 条，删除滚动动作超过两次的 episode，最终保留约 30K 条。这些状态—动作记录为 Phi-3.5-Vision 与 Qwen2-VL-7B 变体提供 SFT target；论文未报告 RL 目标。Appendix A 对 Mind2Web-Live 合成数据实验给出 batch size 64、2 个 epoch，Phi-3.5V 与 Qwen2-VL-7B 的 learning rate 分别为 4e-5 与 1e-5。官方仓库提供轨迹生成、训练和评测代码，但要求本地传入原始轨迹，并未提供原始语料、成员清单、页面快照或固定环境。精确重建还需补齐这些记录，以及浏览器、依赖、模型服务、locale/session 和网站版本。
