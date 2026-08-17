**方法与测量。** ECR 可能把可解析但实质错误的产物计为完成；TPR 的强度取决于各定制 test script 的覆盖度和阈值。附录中的仓库绕过、mock output、错误格式和调试输出重定向等失败展示了 verifier gaming 与 false positive 路径。反过来，脆弱依赖、缺失系统库、下载失败、timeout 或外部资源漂移，也可能让正确方案失败，造成环境驱动的 false negative。Alpha 引入人工质量评分和经济假设，不能与二值程序化 terminal predicate 等同。

**数据与发布。** 54 个任务组成单一公开评测集；没有报告 train/dev/test split、隐藏测试集、模型预训练 decontamination、benchmark-overlap audit 或 grader-secrecy policy。Prompt、输入、grader 和部分 ground truth 均公开，因而后续模型 contamination 和 evaluator adaptation 是实质风险。GitHub 只提供 43 个示例结果 JSONL，且未标明其 framework/model/run；完整的成功/失败结果集和 action-observation rollout 均未发布。Hugging Face snapshot 虽有 276 个文件、82.8 MB，却缺少独立 replay 所需的代码库、配置、ground truth、结果和 runner。

**Lineage、权利与安全。** 被审计的 benchmark commit 固定了复制进来的仓库树，却没有披露每个上游仓库的源 commit 或抓取日期。GitHub 没有 tag、命名 Release、根级 benchmark license、容器 digest、完整 package lock、checkpoint/data hash 清单、网络策略或 run manifest。HF 声明 CC BY-NC-SA 4.0，但这无法解决所复制仓库、多媒体输入、测试、二进制、模型或 helper asset 的异质权利。Dataset card 声称不含 PII 并排除敏感/私有材料，然而 item-level provenance、consent 和 redistribution rights 未公开。复现会执行第三方代码、安装依赖，并可能下载资源或访问网络，因此需要隔离和供应链控制。

**泛化。** 当前基准只覆盖 18 个选定 Python 仓库与 7 个应用领域，作者也指出领域范围较窄、reasoning model 评测不完整。所报硬件与 framework 配置未必可直接迁移，即使固定 benchmark SHA，在线资源仍会漂移。OpenHands event 数还可能超过配置的 `max_iterations`，因此很难仅从配置推断实际 interaction budget。这些限制不否定基准价值，但在 replay、lineage、许可、contamination 和 trajectory retention 问题解决前，它只适合 evaluation 与 audit。
