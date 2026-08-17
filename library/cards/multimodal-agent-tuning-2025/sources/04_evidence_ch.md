以下性能主张均由作者报告，尚未独立复现。最直接的 selection ablation 对比了不使用与同时使用两个 verifier 的训练数据：GTA accuracy 从 50.00 升至 52.56，GAIA 从 13.33 升至 15.15（论文第 4.3 节，表 5）。这说明筛选配置影响了下游分数，但没有测量 judge precision、逐条正确性或来源质量。

Scaling ablation 在论文所述训练 recipe 下改变 MM-Traj 规模：6K、12K、20K 条记录分别得到 43.59、48.08、52.56 的 GTA accuracy，报告训练时间为 276、532、946 分钟，memory 为 214 GB（附录 B.1，表 8）。这支持单一设置下的数据量趋势，但 subset ID、sampling seed、唯一性与独立 rerun 均缺失。

在人类研究中，30 名程序员各评 20 个从保留组与过滤组盲混的 example。表格给出的保留/过滤 task score 为 8.32/6.36，trajectory score 为 8.67/6.38（论文第 4.3 节；附录 A.1，表 6）。然而，相邻附录正文又写成 7.96/6.30 和 8.64/6.24。缺少 600 份 rating、分配、agreement statistic 与更正报告时，该研究无法校准任一 judge 的 false accept 与 false reject。

发布审计提供了另一类证据。在固定 HF revision 上，JSON 恰有 21,168 条记录且 ID 唯一；14,558 行的 `image` 是 dictionary，6,610 行是 string，这种异构性使声明的 viewer schema 失败。远程 ZIP 有 19,307 个普通文件，而论文把 23.5K candidate 经过筛选后的结果概括为约 20K 个任务、15K 个文件。这些数字使用不同单位，没有 manifest 就无法对齐。

因此，benchmark gain 不能证明 MM-Traj 已正确授权、经过独立核验、完成去污染、发布完整或能够安全执行。证据支持的更窄结论是：论文展示了可执行且经 judge 筛选的多模态轨迹能够训练 VLM 工具 controller；在所述设置下，其 ablation 把筛选与更多保留记录同更高的 GTA/GAIA 报告分数联系起来。
