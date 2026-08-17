输入包括购物用户指令、商品文档、sandbox/search 索引、模型/API 配置和工具定义。官方 README 列出 product、shop、voucher、web-search intent 的测试文件；设置需要解压 `resources/documents.jsonl.gz`、准备 key、运行 `init_env.sh`，再用 `run.sh` 做 rollout 和 evaluation。

构造流程是：采样真实商品、抽取商品字段、为四类 intent 模拟用户查询，并让智能体在支持商品搜索、商品详情查看、web search 和 terminate 的 sandbox 中运行。arXiv HTML 报告共有 3,310 条用户指令，其中 2,410 条训练、900 条测试；Knowledge intent 测试集 150 条，其余每个 intent 测试集 250 条。

输出是轨迹、工具调用、观测、最终答案/商品选择和分数。论文定义了约束级分数和总体指标，包括累计商品相关性均值和绝对成功率。训练复用方面，作者从 2,410 条指令生成 GPT-4.1 工具调用轨迹，拒绝非成功轨迹，把轨迹切成 5,552 个 step 样本做 SFT，并使用强化学习训练工具调用。复现时要固定仓库 commit、商品文档压缩包、搜索索引、intent 划分、评测器代码、模型/scaffold、外部 web-search provider 和 API 版本。
