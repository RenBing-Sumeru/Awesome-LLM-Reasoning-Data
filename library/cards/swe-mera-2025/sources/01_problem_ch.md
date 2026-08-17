静态仓库修复基准会逐渐被模型记忆，也会脱离当前软件实践。SWE-MERA 通过持续挖掘近期公开 GitHub issues 与已合并 pull requests、构建可执行任务并按时间展示 leaderboard 结果来缓解这一问题。新鲜度能缩短暴露时间，但本身不能证明已去污染。

基准对象是一条仓库修复记录：仓库与实例 ID、问题描述及可选讨论 hints、base commit、贡献者参考 patch、test patch、FAIL_TO_PASS 和 PASS_TO_PASS 测试标识、环境镜像、构建/测试命令、timeout、日期和 metadata。被评测智能体在探索并编辑仓库后生成候选补丁；其动作—观察历史不是公开数据集的规范字段。

论文报告当时有 728 个样本，且 2025 年 1–6 月构造漏斗最终得到 528 个任务。固定的 Hugging Face 修订已大幅扩展：约 6.82k 行，包括 `dev` 10、`lite` 750、`full` 2,738 和 `multilang` 约 3.32k。它们是发布版本特定数量，不能与论文时期样本数互换。
