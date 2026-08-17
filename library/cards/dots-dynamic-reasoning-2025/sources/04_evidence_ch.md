论文给出了具体的数据构造说明，而不只是汇报汇总准确率。附录 A 将论文搜索配置固定为 \(K=2\)、\(N_{\text{eval}}=4\)、\(N_1=8\)、\(N_2=3\) 和 \(T=0.4\)。这些设置意味着，每个完整搜索问题在解释生成和可变 Self-Verification 重试之前，需要 80 次候选轨迹执行。同一附录还报告三个 solver 分别得到 1,722、1,624 与 2,140 条入选 planner 样本，总计 5,486 条。

实验支持在所研究模型与 benchmark 范围内进行 solver 条件化和难度条件化路由。表 7 报告 GPT-4o-mini 与 Llama-3-70B-Instruct 选择了不同的 CoT/PoT 分布。图 3 显示，更高难度的 MATH level 与更长的平均轨迹相关。表 9 报告 internalized DOTS 的平均输出 token 数为 409.1，而 CoT、LTM 与 Self-Refine 分别为 263.6、436.4 与 527.6。这些结果说明 learned planner 会改变计算分配，但不能证明所选 trace 具有内在更高质量，或能迁移到未见过的 solver。

artifact 检查加强了数据发布证据。在 Hugging Face revision `d6de3b157227150740d38c38e92ffd1803c3d42a` 上，dataset repository 包含一个 4,800,046,236 字节的 LFS JSON 文件和一个只声明 license 的极简 card。对文件前 65,536 字节进行 range inspection 后，观察到了记录中的 `meta info` 与 `trial result` 结构、完整 role/content 对话、动作轨迹、预测答案，以及 `score: 1` 和 `score: 0` 两类 trial。这验证了公开 artifact 中存在成功和失败的原始 rollout 证据，而不只是最终入选答案。

发布层面的证据仍不完整。HF viewer 无法抽取 features，dataset card 和 manifest 也没有给出精确记录数、稳定 splits、solver partition、checksums 或 schema version。仓库 README 指向一个包含 searched results 与最终 SFT data 的 Google Drive 地址，但该地址在 2026-07-25 检查时返回 HTTP 404。因此，论文中的 5,486 不能当作 4.8 GB 原始文件的行数，原始文件也不能等同于已核验的最终 SFT 发布。

这些结果来自作者报告；accepted evidence 中没有独立复现记录。进一步说，代码与论文配置存在差异，所以 benchmark 表格不能用来认证已检查仓库是参数完全一致的实现。本 Card 最强的证据是论文定义的搜索契约与实际观察到的原始 trial schema。性能结果只说明论文所报告的系统，不证明发布完整性、许可证清晰度、去污染或训练数据质量。
