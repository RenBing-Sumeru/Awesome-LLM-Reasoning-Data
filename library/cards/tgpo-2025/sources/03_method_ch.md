输入包括覆盖 136 个真实网站的 300 个 Online-Mind2Web 任务，以及从 Taobao 自建的 50 个中文电商 C-WebShop 任务。在论文报告系统中，Online-Mind2Web 使用 Browser-use 与 Qwen3-14B，C-WebShop 使用 SeeAct 与 Qwen2.5-VL-72B。精确 task ID、任务 split、网站 snapshot、模型 revision、浏览器版本和任务权利均为 unknown。

采集阶段对每个任务执行多次，以获得终止成功与失败轨迹。每个 episode 在概念上包含 user instruction、screenshot 或 DOM state、click/type/scroll 等 action、transition 和 terminal label。generator checkpoint、每任务执行次数、解码参数、step/time cap、reset/session policy、raw count 与 retention rule 均未披露。

tree construction 阶段把同一任务的线性 episode 合并为唯一 state node 与 action edge。候选 state 必须共享保留 essential parameter 的标准化 URL，并且 URL 变化后的 effective action sequence 相同，或 image hash 完全一致。随后使用该树回溯中间进展、识别纠正行为和检测冗余循环。URL canonicalization、effective action 定义、image-hash 算法和 merge-quality evaluation 均不可用。

feedback 阶段为每条 branch 计算四项信号：shortest-path subgoal progress；检测到 cycle 时为 `-1`；未披露 VLM 判断预期 UI 修改有效时为 `+1`；action format 有效时为 `+1`。总奖励为 `R_acc + R_format + R_red + alpha*R_subgoal`，alpha 只报告在 2–5 范围内。goal-node 构造、每个实验的 alpha、VLM 身份与 prompt、expected-change 表示、action grammar 和 terminal success predicate 均未披露。

selection 阶段按 cumulative branch reward 对同一 node 上的分歧 action 排序，形成 chosen/rejected pair。动态因子 `|r_w-r_l| / sigma(R_s)` 在相对 reference policy 的 DPO 风格目标中提高高差异决策点的权重。论文没有说明 tie resolution、minimum gap、duplicate removal、branch balancing、pair 数量，或 node 内方差为零/极小时的数值处理。

optimization 与 evaluation 阶段中，TGPO 和 DPO 都从 SFT-trained model 开始。所有对比优化方法训练 2 epochs，使用 8 张 H20 GPU，learning rate 为 `1e-5`。batch size、optimizer、beta、scheduler、sequence length、random seed、checkpoint selection 和 SFT recipe 均为 unknown。论文把派生 pair 用于 preference learning 与 agent training，并在两个任务池上进行 evaluation；它没有发布可训练 dataset。

完整流程因此是：task -> repeated web episode -> heuristic state merge -> trajectory tree -> 四项 process-reward component -> cumulative branch ranking -> 加权 node-level chosen/rejected pair -> SFT-initialized preference update -> task evaluation。复现需要当前缺失的代码、raw/processed data、模型 revision/checkpoint、不可变浏览器 environment、split manifest、verifier configuration、license 和完整训练配置。
