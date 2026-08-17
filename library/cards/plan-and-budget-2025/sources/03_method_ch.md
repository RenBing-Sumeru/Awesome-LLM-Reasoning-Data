**输入。** 发布代码加载 MATH-500、本地抽样的 NaturalInstructions JSON 和 TravelPlanner validation 项；TravelPlanner 还携带 reference information，并需要另行下载数据库。预处理记录可含 `id`、`query`、`reference`、`answer`、`level`、`steps` 和 `credits`（官方仓库 `dataset/*_dataset.py`）。

**构造。** 预处理脚本先要求 LLM 生成 2 至 5 个有序子问题及 hints，并明确要求不要泄露内部 chain of thought；随后要求 LLM 返回 JSON 难度判断及总和为 100 的整数 credits（`dataset/break_down_question.py`）。论文报告默认 planner 为 LLaMA-3.3-70B-Instruct，但发布物没有固定生成每个已分解文件时使用的确切 endpoint/model。

**分配与推理。** planned-local-weighted 实现先归一化 credits，再与 constant/linear/polynomial/exponential/cosine 调度权重相乘，将 level budget 的份额向下取整，并把余数给最大加权份额。level-to-budget 表为 1→200、2→250、3→350、4→450、5→600。它把每个子问题和请求的 word limit 放进对目标模型的同一个 prompt；这只是提示引导，不是严格的每子问题 token 上限（`inference/_5_planned_local_weighted_model.py`）。仓库支持 DeepSeek-R1 distills、QwQ-32B、s1.1-32B、Llama-3.3-70B-Instruct、o3-mini 与 o4-mini 接口，而论文的报告比较矩阵较窄。

**评测/输出。** 每次本地运行写出每项的 `prediction`、prompt/completion/total tokens、`score` 和 `explanation`，随后汇总 score 与 completion tokens（`run/run_inf.py`）。MATH 使用 `math_verify`；NaturalInstructions 计算 ROUGE-L；TravelPlanner 先以第二个 LLM 重建 JSON，再调用其 evaluator。论文报告了五次运行的均值和标准差、分配调度以及 8,192-token 硬上限；但没有发布实际结果文件、完整 prompt/model 配置、重试记录或选中/拒绝 rollout 台账。
