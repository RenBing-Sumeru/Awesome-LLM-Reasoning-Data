以下数字均为作者报告值或来自官方发布，本卡未核验到独立复现。它们支持论文在既定数学设置下的数据与搜索流水线，但不能推出公开 trace 本身普遍具有高质量。

- **发布规模与标签条件。** 论文第 2.2 节报告：删除全失败提示组前有 280 万个 roll-in/roll-out pair，之后约为 250 万个。OpenR1-VM 官方 viewer 公开 44,509 个 train row，每行含 56 个 reward、roll-in token 序列、rollout token 序列、处理后答案和标签。这核验了序列化规模与分组结构，但标签正确性仍受限于 `math-verify` 的反馈契约。
- **1.5B generator、\(N=256\)。** 附录 C.1 表 2 报告，在 AIME-24/25 与 HMMT-24/25 四项基准上，使用 DeepSeek-VM-1.5B 的 VGS 平均正确率为 45.7%，多数投票为 39.7%。只看两项 2025 test set，表 1 报告 39.8% 对 31.6%。这些比较使用论文所述相同推理预算，但并未测量 token-level value 的精度或校准。
- **更强 generator 与分布偏移。** 表 2 报告：7B generator 在 \(N=128\) 时，VGS 平均 56.4%，多数投票 50.5%；14B generator 在 \(N=64\) 时为 61.0% 对 59.6%。14B 上差距缩小，与作者提出的限制一致：在固定 1.5B rollout policy 下训练的 value model 面对更强 generator 时可能发生分布外偏移。
- **效率。** 论文报告 VGS 平均回答长度为 11,219 token，DeepSeek-1.5B base response 为 12,793，降幅超过 12%（附录 C.7，图 15）。附录 H 估算 classifier overhead 为 1.5B generator FLOPs 的 0.024%。后一个数字是分析估算，未覆盖全部实际系统成本。
- **消融与负面证据。** AIME-24 扫描结果支持 4,096-token block 和 beam width 2；在较大预算下 DVTS 有帮助，随机选择 block 不如 value guidance（论文第 4 节，图 6–8）。一个被拒绝的定性 beam 含关键错误，却仍得到 0.337 的 value。前者说明 selector 会改变搜索，后者则表明该分数既不是证明，也不是对每条轨迹都可靠的校准保证。

公开仓库包含 value-model 训练与分块搜索代码，模型和两个数据集也可下载。但 benchmark 增益不能证明上游来源、被过滤记录的完整性、每个标签的正确性或缺失的丢弃搜索分支质量；这些仍是独立审计问题。
