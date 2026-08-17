ClawBench 问的是 AI 网页智能体能否在真实生产网站上完成日常在线任务。主来源是 2026 年 arXiv 论文 “ClawBench: Can AI Agents Complete Everyday Online Tasks?”，项目页在 arXiv 备注中列为 `https://claw-bench.com`。

边界是：它是真实网页智能体基准，不是静态网页沙箱，不是移动端界面基准，也不是训练配方。评测表面是生产平台上的任务回合，包括用户目标、所需文档/字段、浏览器轨迹和最终提交拦截。

它重要是因为很多网页智能体基准用离线副本避免真实副作用；ClawBench 测更难的真实网站设置，同时试图阻断最终真实提交。
