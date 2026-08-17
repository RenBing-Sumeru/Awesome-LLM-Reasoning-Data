TFPI 只在三个 Qwen 系蒸馏或混合推理模型上评测，训练数据也仅为 Polaris-53K 数学 prompt；对其他架构、chat template、verifier 类型和不可程序验证领域的迁移仍未知。ThinkingFree 依赖 chat template 的起始与闭合 think 控制标记，因此不是与模型无关的“删除内部推理”。可见输出变短也不能证明隐藏计算或推理忠实性有所改善。

比较匹配的是论文报告的 accelerator hours，但短分阶段训练与长 direct RL 在硬件效率、序列利用率和 rollout mixture 上仍可能不同。比较数字时必须保留 benchmark 子集与多采样 pass@1 协议。所检查的官方仓库 commit 数量较少且页面无 tagged release，依赖和数据 revision 应固定。虽然已发布 checkpoint 与评测集，但成功/失败原始 rollout、reward log、prompt-level sampling 决策、所有继承数据集的许可证和去污染记录均未证实完整。
