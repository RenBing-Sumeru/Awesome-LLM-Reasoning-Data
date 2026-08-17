对于 Preference and Reward Feedback Data 赛道，V-STaR 是 synthetic preference construction 的清晰样例：binary programmatic outcome 被转换为 correct-versus-incorrect pair，DPO 训练 full-solution verifier，其原生 deployment signal 是 sequence likelihood。它帮助读者区分 human preference、terminal label、DPO pair、ORM score 与 Best-of-k selection score。

对于 Data Construction and Open Release Recipes 赛道，two-buffer lineage 是最主要的可复用经验。正确轨迹改善 generator，接受和拒绝的轨迹共同改善 verifier，后续 generator 轮次则刷新 error distribution。这一配方可指导所有具有可靠 terminal predicate 的 self-training 实验，包括 mathematics、code、formal proof 或受约束的 tool task。

负责任的复用需要重建缺失的 audit layer。应固定 source dataset 与 base checkpoint，保存 query ID、generation seed、iteration ID、raw outcome、execution error 和 pair provenance；测量 label error 与 pair imbalance；对 verifier score 做 normalization 和 calibration；并在 verifier 训练时未见过的 generator 上测试 false positive、false negative 与 gaming。untrusted code 必须在有文档的 sandbox 中运行。

该方法不应被重新标成 process supervision 或 RLVR。它使用 SFT 训练 generator，使用 offline DPO 训练 verifier，并在测试时用 verifier ranking。把它扩展到 policy optimization 或 open-ended feedback，需要新的 reward contract 与新证据。
