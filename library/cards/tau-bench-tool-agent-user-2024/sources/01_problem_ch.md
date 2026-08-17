tau-bench 问的是：语言智能体在同时面对用户模拟器和会改变后端状态的工具时，能否遵守领域政策并完成真实业务目标。主来源是 2024 年 arXiv 论文 https://arxiv.org/abs/2406.12045，官方项目页和 Sierra Research GitHub 仓库提供 artifact。

它的收录边界是 full-episode tool-agent-user evaluation。一个任务包含隐藏用户目标、领域 policy、初始数据库、tool/API schema、多轮对话、工具调用、最终数据库状态，有时还包含必须出现在回复中的字符串。它不是静态 function-calling benchmark，也不是单轮客服 QA。对 atlas 的价值在于反馈契约清楚：episode 结束后，用最终世界状态和必要回复内容判断任务是否成功。
