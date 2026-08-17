1. 输入：scenario 定义、split/version metadata、prompt template、model endpoint 或 checkpoint、解码设置和 metric 定义。
2. 执行：为每个 scenario 生成标准化请求，通过 model adapter 调用模型，并保存 completion 与 run metadata。
3. 评分：用 metric module 计算任务表现，以及 calibration、robustness、fairness、bias、toxicity、efficiency 等横向指标。
4. 报告：按 scenario、metric、model 和 scenario group 聚合，同时保留每次 run 的 provenance。
5. 输出：模型结果表、公开 code/config，以及持续更新的 HELM 页面。

反馈契约是各 metric 的 scoring code，不是单一 judge。复现必须固定 HELM release、scenario 列表、model 列表、prompt template、decoding 参数、metric implementation、API/model 版本和 leaderboard date。
