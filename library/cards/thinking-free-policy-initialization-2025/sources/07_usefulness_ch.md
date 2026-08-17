对 rollout/search/test-time trace Track，TFPI 指出了 efficient-RLVR 轨迹应附带的字段：原始 prompt、完整渲染 chat template、ThinkingFree 变换、base 与 old-policy checkpoint、stage 与最大长度、全部八条响应、截断状态、token 数、二元 verifier 结果、组内 reward 统计、importance ratio、optimizer step，以及后续 thinking-mode 评测。TFPI 阶段样本必须与后续标准 RL 样本分开，因为二者条件分布不同。

官方脚本与 checkpoint 可支持初始化如何影响 rollout 长度、reward yield、收敛和跨域评测的受控研究。TFPI-EVA 用于评测复现，并不意味着训练轨迹已发布。整理者应保留失败与截断响应，而不是只把成功短答案当作数据产品；效率指标也必须与正确性和推理质量标签分离。
