证据主要来自对比实验：SeeAct 在 Mind2Web 衍生的离线设置中评测多模态网页动作选择，并引入能在真实网站上运行 agent 的在线设置。论文报告的关键信号是：当有人类或近似 oracle 的 grounding 时，GPT-4V 展现出较强的高层任务潜力；但自动 grounding 仍是明显瓶颈。这个 planning 与 grounding 的拆分，是本卡最重要的实证结论。

官方 GitHub 仓库和项目页很关键，因为它们暴露了实现和运行面，而不仅是论文描述。Hugging Face 的 Multimodal-Mind2Web artifact 也重要，因为它提供可检查的截图和多模态网页记录。不过，除非记录精确 revision、split、prompt、action space、模型访问方式和 live-site 日期，否则这些结果不能当作稳定 leaderboard 使用。
