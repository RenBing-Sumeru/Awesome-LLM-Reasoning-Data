答案契约可能产生 false negative。反向构造问题更容易保证“给出的参考答案有效”，而不容易保证“所有有效答案都已被枚举”。trainer 会添加约束，并在他人找到另一个有效答案时修订题目，但论文明确不保证唯一性。单一参考答案的 LLM judge 仍可能拒绝替代答案；论文也未披露 grader checkpoint、解码设置、验证集、校准或敏感性分析。

当前 `browsecomp_eval.py` scorer 被一个具体标签处理错配阻塞：它返回 `correct: yes/no`，却与 `yes/no` 比较。仓库没有 BrowseComp unit test 捕获该缺陷，也没有 tagged evaluator release 或 dependency lock。当前 runner 的 `gpt-4.1-2025-04-14` grader 晚于 OpenAI 发布日期，不能假设等同于论文 grader。这些事实阻塞从当前参考代码直接复现；它们并不证明通过未披露评测路径得到的论文结果无效。

公开对象省略了 benchmark 试图施压的过程。论文实验中的模型响应、置信度记录、查询、工具调用、页面 observation、URL、引用、截图、时间戳、重试、成功路径、失败路径和 grader transcript 都没有发布。实时网页、搜索排名、访问政策、商业产品和页面内容会漂移，而发布不含网页 snapshot、浏览器 image、reset state、locale、timeout 或确定性回放 fixture。答案级 judge 无法评估引用支持、来源质量、浏览忠实度、持续性或过程效率。

反污染层能力有限。问题和答案明文经过可逆混淆，但公开 canary/password 与官方 decryptor 可以恢复它们。canary GUID 与“不转载样例”的请求在被遵守时可辅助过滤；论文没有报告发布后暴露度测量、训练语料重叠扫描、刷新版或隐藏 holdout，也没有移除保证。因此，公开发布会带来持续污染风险。

构造与发布 metadata 也不完整。对 118 道 Deep Research 零通过率题目复查后删除 21 道，使最终集合受一个未披露模型版本条件化，同时被删记录和原因没有发布。记录级事实来源、证据、trainer/validator 身份、日期、裁决和上游权利均缺失。仓库采用 MIT license 并据此标注 BrowseComp，但单独托管的 CSV 没有内嵌 data license 或 data card；这不能确立所有底层网页事实的权利。trainer 数量、人口统计、补偿、同意、PII 审查、伦理审查和隐私政策均为 unknown。

最后，Deep Research 曾用旨在教授 BrowseComp 类任务能力的数据训练。该披露不能证明公开的 1,266 行被用于训练，但确切训练重叠为 unknown。主评测的重试策略和预算为 unknown，测试时计算曲线也没有给出单位。这些缺口限制了在模型能力、浏览 scaffold、grader、数据构造和额外推理计算之间进行归因。
