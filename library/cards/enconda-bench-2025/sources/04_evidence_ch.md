论文报告了两种相互关联但不可等同的评测表面。Table 3 中，Repo2Run + Claude-4 的错误类型 F1 为 60.6、描述 accuracy 为 52.2、修复 accuracy 为 47.3、Pass@1 为 22.9；OpenHands + DeepSeek-V3 的对应结果为 58.7、51.9、33.8 和 9.1。这些数字是作者在论文 agent/model 配置下报告的结果；核验的公开 snapshot 不含独立复现所需的完整 executor 与实验日志。

分数差异只支持一个有边界的结论：agent 对安装错误的识别或描述通常强于满足 terminal predicate 的可执行修复。论文案例分析记录了 error overprediction、过度使用 E8 “other”、遗漏跨仓库路径错误、诊断正确却无法定位命令、没有修完多错误 README 的全部问题、最终脚本未采用自己提出的修复，以及引入新错误。Figure 7 还显示，更多输出 token 往往改善 description accuracy，却不稳定改善 Pass@1。这既不能证明发布数据天然高质量，也不能证明增加 token 就能可靠解决环境配置。

发布规模可由官方 artifact 独立计数。对 commit `86ab7858613b85f4a8316f3cda3c83086b8cf7c2` 的全量解析得到 4,201 行主 JSONL 与恰好 9,471 个 error object。目录树含 4,201 个 JSON 注释和 4,201 份 README：3,216 份 Markdown、978 份 RST、6 份 AsciiDoc、1 份 Org。level 分布为 level0 48、level1 2,072、level2 1,222、level3 94、level4 234、level5 100、level6 173、level7 80、level8 80、level9 38、level10 60；错误分布为 E1 1,969、E2 2,607、E4 1,491、E6 1,602、E7 1,490、E8 312。

同一轮核验也暴露出尚未解释的 drift。论文报告 323 个仓库，主 JSONL 中却有 320 个不同 `repo_name`，展开目录有 321 个仓库目录，`repo_info.jsonl` 有 329 条 repository/revision 记录。论文描述 level 1-10，而发布中有 48 条 level0。E8 的 312 与论文一致，但当前 E1/E2 计数不符合论文对五类标准错误均“around 1,600”的近似描述。仓库没有 tag、release、changelog 或 manifest 解释这些对应关系。因此证据支持“公开 4,201 个任务、9,471 个错误”这一 release boundary，但不支持默认认定 paper、repository、level 和 version 统计彼此完全等价。
