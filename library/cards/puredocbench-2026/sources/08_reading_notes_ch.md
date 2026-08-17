最重要的阅读边界是反馈契约：official scoring CLI compares predictions with GT structures using TextEdit, FormulaCDM, TableTEDS, ROEdit, per-track Overall, and Avg3 across clean, digital-degraded, and real-degraded tracks。不要把 aggregate 榜单 score 和 行级 验证器 evidence 混在一起，也不要把公开评测数据直接当作干净训练数据。

比较模型前先读 artifact/version notes。如果 benchmark 使用 裁判，要把 裁判 agreement 和 ground truth 分开；如果使用可执行检查，要把 checker acceptance 和更广义的语义正确分开。
