论文从 4,655 条原始轨迹开始：coding 2,170 条、mathematical 1,185 条、general-agentic 1,300 条，由 MetaGPT、AutoGen、Smolagents、AgentPrune、AFlow 与 OWL-Workforce 生成。第 5.1 节列出 MBPP+、KodCode、Blackjack、GAIA、MATH、GSM8K，附录 Table 3 又额外列出 HotpotQA；公开文件没有 record-level 的任务/framework provenance，因此无法消解“六个还是七个 benchmark 名称”的不一致。

构建流水线是 `benchmark task -> framework rollout -> 成功/失败轨迹 -> DeepSeek-R1 纠正或变异提案 -> 环境回放 -> 二元结果翻转过滤 -> 责任智能体/决定性步骤 pair`。失败分支按步骤顺序测试候选纠正，保留最早回放成功者；成功分支随机采样 `K` 个注入点，保留第一个回放失败的变异。作者报告 coding 1,288 对、math 630 对、agentic 558 对，共 2,476 对，随后按 9:1 划分，测试集共 266 条（附录 Table 3）。`K`、随机种子、重试规则、回放尝试次数、多因歧义处理与逐来源产率均为 unknown。

AgenTracer-8B 从 Qwen3-8B 开始，在 `verl` 上用 online GRPO 优化。论文报告 batch size 32、每条数据八个候选 rollout、learning rate `1e-6`、八张 H100 80GB GPU、不使用 KL term，并动态减小 clipping bound。严格 format gate 要求 think/answer tag 和 `agentID | stepID`；格式错误时 reward 为零。否则 reward 由精确责任智能体正确率和 sigma 为 1 的 Gaussian 步骤距离项按 0.5/0.5 混合（论文第 4.2、5.1 节）。总训练步数、序列/context 长度、采样 temperature、Qwen3 确切 revision、tokenizer、seed bundle、checkpoint 与 API/计算成本均未披露。

公开 artifact 不是训练 corpus。在 commit `bc6bcd94c2e18f62d6712ca70ba268f6684b894f`，`tracertraj-code-test.parquet` 有 127 条唯一记录，七个顶层字段均无 null；history 长度为 2—151，合计 2,642 个 item，且该子集中的 role 全为 `assistant`。论文却报告 147 条 coding-test 记录。公开行还缺少来源 framework/version、构建分支、纠正/变异、回放轨迹、终局输出、split、seed 与 keep/drop reason。

仓库将公开代码描述为最小 MetaGPT coding pipeline。可执行环境需要 Python、Node.js/pnpm、editable MetaGPT、EvalPlus/KodCode 资源、API key 与本地任务 workspace。KodCode evaluation 已实现，generic 或 MBPP+ evaluation 路径不完整或近似 placeholder；论文中的另外五个 framework 均未公开。复现时必须固定已审计 commit、外部模型/API snapshot、framework/evaluator 版本、reset 语义、tool state、任务 snapshot 与依赖，但发布包没有提供论文规模 replay manifest。
