**输入。** 候选 Python 仓库来自 GitHub 与已有人工验证的环境 benchmark。论文使用至少 10 stars、超过 1,000 commits、超过 10 个 closed issues 的筛选条件。专业标注员尝试按原始说明完成配置，剔除 README 本身有错或依赖不完整的仓库。各来源占比、标注员人数、操作时间预算和被拒仓库清单均未披露。

**生成与采集。** Claude-4-Sonnet 与 Gemini 2.5 Pro 对原始 README 做最小修改，起初每份恰好注入两个错误。生成结果包含错误类型、自然语言描述、候选修复与金标答案。类别为：E1 依赖安装、E2 命令/语法、E4 路径或缺失文件、E6 逻辑顺序、E7 版本兼容、E8 其他。两种模型的任务分配、temperature、seed、retry 和 decoding 参数均为 unknown。

**执行验证与筛选。** GPT-4.1-mini 为 Ubuntu 22.04/Miniconda 生成严格遵循 README 的 Bash 脚本，并在 Docker 中执行。只有错误说明确实造成失败、修复后能够通过受影响步骤时，该注入才会保留。随后 GPT-4.1-mini 检查错误是否有 README 依据、是否有效、类型是否正确、金标修复是否成立，人工再复核留下的样本。作者报告 LLM 与人工一致率为 98.5%，但没有披露样本量、adjudication 流程、一致率公式或 confusion matrix。流程从 1,772 份双错误 README 中保留 1,230 份有效版本，再对错误集合拆分和合并，形成不同 level 的任务。

**发布输出。** 核验 commit 含 4,201 行主 JSONL、4,201 个逐任务 JSON、4,201 份对应 README 与 9,471 个 error object。主任务行只有 `readme`、`repo_name`、`level`、`errors`，没有逐条 repository URL、revision、Dockerfile、split、trajectory、result 或 environment snapshot。revision 单独保存在 329 行 manifest 中，所以复用者必须规范化名称后才能建立 task-to-revision 关系。被测 agent 输出检测错误 JSON 与修正后的 shell 脚本；当前 `AnalysisResult` schema 还保存 raw output 与 token usage，但这些 processing field 不是环境 trajectory。

**Verifier 与评测。** 过程评分把错误类型 precision/recall/F1 与 LLM judge 的描述/修复 accuracy 结合。核验代码使用硬编码的综合 match score `>0.5`：类型精确匹配贡献 0.6，描述相似度贡献 `0.3 × confidence`，修复相似度贡献 `0.1 × confidence`。公开 evaluator 默认 `gpt-4o-mini`、temperature 0.1、最多 500 个输出 token，而论文写的是 GPT-4.1-mini；配置中的 0.7 similarity threshold 没有在核验路径中执行，该路径直接采信 judge boolean。Terminal Pass@1 要求构建成功、测试正确执行、进程正常退出。端到端执行实现无法从当前 snapshot 获得，因为 `Evaluation/Execution` 是 gitlink `99729fb0454fb5ef3d031a7b62cb7532fe8fc114`，仓库没有相应 `.gitmodules` mapping。

**环境、预算与复用。** 公开 Dockerfile 以 Ubuntu 22.04 为基础，通过在线 endpoint 安装 Python standalone build、Miniconda 25.3.1-1、Poetry、uv、pipenv、Pyright、Node 20、jq 和构建工具。仓库默认值包括 API timeout 120 秒、environment timeout 300 秒、Bash timeout 60 秒、最多 5 次 iteration、3 次 retry，以及仅用于可选 sampling 的 seed；这些并未被证实是论文实验设置。公开发布只支持 evaluation。复现者必须固定 commit `86ab7858613b85f4a8316f3cda3c83086b8cf7c2`、补齐缺失 executor、锁定 image/package/network/cache/reset 行为，并保留每个 script、observation、test log、verdict 和 run ID。
