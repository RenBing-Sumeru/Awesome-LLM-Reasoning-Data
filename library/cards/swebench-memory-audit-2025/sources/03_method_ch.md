流程从静态 benchmark rows 开始。SWE-Bench-Verified 使用全部 500 个 issue。BeetleBox 使用 SWE-Bench-Verified 之外的五个 Python 仓库；第一作者人工剔除那些被认为过于模糊、无法让另一位开发者在不追问的情况下理解、复现并采取行动的 issue，每个仓库保留 100 条。SWE-rebench 使用 2025 年 1 月的 109 条和 2025 年 9 月的 50 条。公开转换代码映射仓库、instance、commit、issue 标题/正文和从补丁提取的 `updated_files`；但已提交的 SWE-rebench 配方硬编码为 1 月划分，9 月衍生集没有被完整固定。

提示构造有两个分支。issue-only 分支只发送 issue text，不提供仓库名、文件名、文件树或代码。file-structure 分支浅克隆仓库，尝试获取并检出 instance commit，排除 `.git` 和大于 1 MB 的文件，再序列化不含内容的相对路径。路径超过 500 个时，脚本使用未设种子的 `random.sample` 截断；commit 检出失败时会退回默认分支，因此名义上的 instance 特定路径上下文可能发生版本漂移。

公开循环对每个模型—样本—条件调用一次 Anthropic Messages API，并设定 `max_tokens=4000`。评测快照为 Claude 3.5 Sonnet `claude-3-5-sonnet-20240620` 和 Claude 3.7 Sonnet `claude-3-7-sonnet-20250219`。论文未披露 temperature、top-p、API/SDK 版本、总 token/成本或重复解码协议。`leak_test.py` 的默认第二模型却是 `claude-3-7-haiku-20240307`，因此复现论文时必须显式覆盖该默认值。

模型回答通过正则表达式、项目符号处理和 Python 列表式提取，转换为去重后的 `predicted_files`。解析器清理通常要求路径同时含点号和斜杠，因此 `setup.py` 这类有效根目录文件可能被丢弃。对每条样本，`metric.py` 将 `predicted_files` 与 gold `updated_files` 比较：预测包含全部 gold 路径时 complete coverage 为真，至少命中一个 gold 路径时 partial coverage 为真。这两个布尔标签附着于整个回答，而不是中间步骤。

输出包括公开数据集、原始或预测日志、gold 与预测路径、命中列表、覆盖率指标、仓库结构缓存和分析脚本。研究只将它们用于 evaluation 和 contamination audit；不存在 SFT、RLVR、preference learning、reward-model training、process supervision 或 agent training，也不存在交互式仓库 episode。

可复现重跑必须固定 OSF 文件版本、选定模型 ID、Anthropic client/API 版本、提示模板、benchmark 衍生集、仓库 commit、检出结果、路径列表种子、解析器代码和指标代码。OSF 节点没有依赖锁、容器、注册快照、发布清单，也缺少完整的 BeetleBox `vagueness_results.json`，因此精确重建仍受阻。
