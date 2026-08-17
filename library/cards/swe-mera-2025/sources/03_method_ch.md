七阶段流水线先选择当年活跃、带开源许可、至少 10 stars 和 10 forks 的 Python 仓库；建立一个 closed issue 对一个 merged PR 的映射；下载 issue 标题、正文和评论；移除描述不足 25 字符的样本；保留同时修改源码与测试且源码文件少于 15 个的 PR；验证仓库构建；在 Docker 中执行任务；最后用 Qwen3-32B 做质量过滤。

对于 2025-01-01 至 2025-06-01 的参考漏斗，论文报告一对一映射后为 8.4k 仓库/55k issues，metadata 过滤后 8.2k/51k，patch 验证后 6.7k/30k，构建验证后 1.6k/9k，端到端执行后 668 仓库/1.6k issues，LLM 评估后为 279 仓库/528 tasks。构建验证安装项目和 pytest 工具，以 JSON report 运行 pytest，要求命令无错误且至少一个测试通过，并保存 Dockerfile 与 cache。

评测使用修改后的 Aider 工作流。每个 issue 最多进行 6 次独立尝试，每次最多 4 次针对 lint 或 test 输出的 reflection。`pass@1` 表示首次成功，`pass@6` 表示六次中任一次成功。参与者下载任务、运行智能体、用候选输出替换 `patch` 列，经 `swemera` 评测后提交。平台鼓励附轨迹链接但不强制；缺少轨迹时默认展示关联 GitHub PR。

Docker 是默认模式，也支持 local/Conda。`repotest` 会清理并重置到 base commit，使用行级镜像、构建/测试命令和 timeout。发布没有精确 OCI digest、依赖锁、网络策略或单一端到端重放 manifest；仓库、镜像、依赖和数据集修订需分别固定。
