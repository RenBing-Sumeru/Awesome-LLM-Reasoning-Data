构造证据分为三层。对人工平衡选择的 100 个 issue，LM 的高质量/可镜像筛选器达到 84.3% precision 与 86.0% recall（表 2）。对四种语言各人工选择 100 个候选，端到端镜像总体成功率为 46.0%：Python 68.0%、JavaScript 52.0%、Go 36.0%、Rust 28.0%。其中 compile 或 syntax error 分别占 2.0%、6.0%、28.0% 和 36.0%，说明流程产出率并非语言中立（表 3）。

三名标注者将上述研究中成功生成的 184 个任务与其源 issue 和 pull request 对照审计。177 个取得多数标签的任务中，115 个为高一致性、41 个为中等一致性，合计 156/177，即 88.1%；另有 21 个不一致、7 个没有多数结论。这是语义迁移的直接证据，但它是对 184 个选定任务的审计，不能直接代表全部 60,671 个保留实例（表 4）。

最终任务包括：31 个仓库的 46,820 个 Python 实例、6 个仓库的 7,183 个 Rust 实例、2 个仓库的 4,056 个 Go 实例，以及 1 个仓库的 2,612 个 JavaScript 实例，共计 40 个仓库、60,671 个任务（表 5）。表 1 报告环境存储约 100 GB。这些数字支持“分摊环境成本”的判断，但不能证明每个生成问题都真实、独立、可合法复用或没有污染。

在报告的 12,456 条 episode SFT 混合上，SWE-Mirror-LM-7B 在 SWE-bench Verified 达到 22.8%，对应 Qwen2.5-Coder-Instruct-7B base 为 1.0%；32B 模型达到 52.2%，base 为 6.2%。在 Multi-SWE-Bench-Flash 上，两者分别为 6.33% 与 21.33%（表 6）。主评测使用温度 0、经 YaRN 扩展的 131,072 token 上下文和最多 100 轮交互。这些是 OpenHands/MOpenHands scaffold 下的作者报告 resolve rate，并非独立复现。

在 4,096 条 SWE-Mirror 轨迹的消融中，32B Error Masking 为 35.6%，Response Only 为 33.6%，Error Pruning 为 29.2%，未训练 base 为 6.2%（图 2）。使用 512 条非 Python 轨迹时，7B 模型在仅含 Python 的 SWE-bench Verified 上分别达到 Go 训练 10.2%、Rust 训练 11.3%、JavaScript 训练 9.4%，base 为 1.0%（表 7）。这些比较在给定预算内支持训练效用主张，但没有把镜像质量与 teacher、scaffold、上下文或混合来源轨迹的影响完全分离。
