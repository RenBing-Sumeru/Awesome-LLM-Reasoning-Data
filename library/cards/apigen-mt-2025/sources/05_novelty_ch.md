既有基线是围绕单个用户请求与目标调用构造的 API/function-calling data。这类记录可以训练 tool schema adherence，却难以自然表示逐步信息披露、澄清、多步状态变化和对话中的恢复。APIGen 已提供相关 function-calling data，tau-bench 提供可执行 Retail/Airline 任务与 policy；APIGen-MT 并没有发明这些组件。

具体变化是把已验证任务蓝图作为 environment specification 与 conversation 之间的桥梁。在 user simulator 和 test agent 实现任务之前，蓝图先记录 intent、有序 ground-truth action、expected output 与 state effect。programmatic execution/policy check 和 LLM committee judgment 会修订这一对象；reverse task recombination 扩大多 action 复杂度；最终 state/output predicate 选择成功 episode。相较直接提示模型生成 transcript，这一流程更明确地区分了任务正确性和表面对话生成。

数据对象也从单个 function call 变为包含 human message、assistant text、function call、observation、policy context 和 tool schema 的 episode。反馈同时附着在 blueprint field 与完整 episode 上。然而，公开 5k 对象只暴露 transcript 侧字段，因此构造契约的新意没有作为可复用的逐行 supervision 被保留。

非新内容包括 API dependency graph、LLM 生成的 synthetic data、majority-vote model judging、Best-of-N sampling、self-critique、executable environment、behavioral cloning 与 tau-bench 本身。贡献在于把这些组件整合为 blueprint-to-simulation pipeline，并使用 reverse recombination 与 state/output success 进行多轮数据筛选。它没有建立新的 RL algorithm、reward model、preference interface、process verifier 或开放可重放 environment。

对 reasoning-data 研究而言，方向信号是 environment-grounded agent training data 需要两套 schema：丰富的 construction/audit record，以及紧凑的 model-facing transcript。APIGen-MT 在论文中展示前者的价值，却只以 5k 形式公开后者。因此复用前必须检查缺失的 blueprint-to-row lineage、失败尝试、verifier calibration、environment pin、mixture mapping 与 license constraint，不能把规模或模型分数当成充分的质量信号。

版本漂移本身也是 novelty audit 的一部分。最终 proceedings 报告 5 个 read API 与 13 个 write API，当前项目页则报告 15 个 read API 与 13 个 write API；公开发布有 5k 行，实验最高达到 8k，最终模型又使用更广的 mixture。这些差异必须保留为显式证据边界，不能为了叙事整洁而强行统一。
