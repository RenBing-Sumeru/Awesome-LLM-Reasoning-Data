已披露流程如下：

1. **环境构造。** MiniMax 将公司任务/工作空间转换为数十万 RL 环境。超过 20 万个被称为真实软件环境，覆盖至少 13 种语言、full-stack 仓库、Web/Android/iOS/Windows 开发、review 与测试。金融、法律和社科专业人士定义办公要求与标准。来源清单和权利不可用。
2. **轨迹接口。** 任意 agent scaffold 通过 Forge 与 LLM、环境、奖励服务器交互。记录可含 prompt/response token ID、推理、XML/JSON 工具调用、工具结果、代码变更、浏览器轨迹和办公 artifact。Forge 的 gateway/data pool、rollout engine、train engine 交换 completion 与 outcome/process reward。
3. **扩展。** 异步调度显式权衡吞吐与样本 off-policyness；树结构样本合并据称带来约 40× 训练加速。合并语义、拓扑、陈旧策略限制、正确性检查、硬件和 rollout 数均未披露。
4. **CISPO 优化。** M2.5 延续面向 MoE RL 的 CISPO。公开公式对 token log-probability 项做长度归一化，并对 importance ratio 上限裁剪；advantage 是未来 performance 与 speed reward 之和减 baseline。Forge 还描述端到端过程质量监控。奖励定义、尺度、权重、单位、baseline、epsilon、KL、优化器、group size 和更新数未知。
5. **评测契约。** 软件使用仓库/任务测试；VIBE-Pro 结合交互和视觉检查；MEWC 比较重算后的表格单元格；办公任务使用专家和对交付物加轨迹的 pairwise LLM judge；搜索使用 WebExplorer/Playwright。这些评测 judge 并未被证明与 RL 奖励相同。
6. **发布模型。** 229B MoE 配置为 62 层、hidden size 3,072、48 attention head、8 KV head、256 local expert、每 token 选 8 个、词表 200,064、最大位置 196,608，带 multi-token prediction 和 block-FP8 metadata。预训练、SFT、active parameter 与 M2.1→M2.5 lineage 未披露。

推荐推理参数为 temperature 1.0、top-p 0.95、top-k 40。SWE-Bench Verified 平均每题消耗 3.52M token、22.8 分钟；Terminal Bench 2 允许 7,200 秒，BrowseComp 在超过最大上下文 30% 时清空历史。这些 harness policy 必须固定才能复现。
