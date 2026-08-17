最强证据来自官方 arXiv v3 报告。它支持 16T 预训练 token、300B annealing 阶段、30B 与 20B 上下文扩展阶段、300 万条 SFT、adaptive teacher 流程、deliberation 循环、约 20 万条人工偏好标注、超过 80 万条可执行代码样本、30 万条 Stage I RL 记录、16 万条 Stage II 指令、覆盖 16 个子主题且包含超过 30 个评分服务的奖励系统，以及 RL 温度 1.0。这些都是报告级披露，并非已发布记录清单。

腾讯官方 GitHub 仓库验证了项目页面，并镜像技术报告。核验时其根目录只有 `README.md`、`Hunyuan-Turbos_Report.pdf` 和 `Figures/`，没有训练代码、模型文件、数据集、配置文件或许可文件。因此，该仓库能证明引用与报告可获取，不能证明代码或权重已经发布。

腾讯经过验证的 Hugging Face 组织托管了公开 Space `tencent/hunyuan-turbos`。这个小型应用调用腾讯托管的 Hunyuan API。该 Space 是服务演示的运行证据，不是模型仓库：其中没有 Hunyuan-TurboS 参数分片、tokenizer 文件、模型卡或训练数据。腾讯云文档也把 `hunyuan-turbos-latest` 列为托管模型服务。服务可调用不应被描述为开放权重。

报告给出 LMSYS Chatbot Arena 结果、23 个自动化基准上的 77.9% 平均分，以及一个 6,000 提示的 token 效率评测。这些结果只能支持模型在所述评测条件下的行为结论，不能验证记录级来源、权利、推理有效性、judge 校准、沙箱可复现性、污染控制或未发布数据的质量。报告也没有提供能够把最终行为完整归因到每个 SFT、deliberation、奖励或 RL 组件的受控消融。
