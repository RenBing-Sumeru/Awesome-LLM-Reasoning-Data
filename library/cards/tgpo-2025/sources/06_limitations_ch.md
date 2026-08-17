state merge 是影响后续全部标签的启发式规则，而不是经过验证的 equivalence relation。标准化 URL、URL 变化后的 effective action sequence 与 image hash 可能错误合并外观相似但 hidden state、用户账户、购物车内容、时序或可用控件不同的页面，也可能漏合并语义等价页面。错误会传播到 conflict detection、cycle、shortest path、全部 process reward 与 chosen/rejected label。这是基于公开 merge rule 的 curator inference；论文没有提供 merge-quality evaluation。

action-accuracy component 依赖未披露的 VLM。其模型、revision、prompt、expected-interface-change 表示、calibration set、adjudication 与 error analysis 均为 unknown。false positive 或 false negative 在造成较大 reward gap 时可能被动态权重放大。format reward 可能奖励语法有效但无用的 action，cycle penalty 可能惩罚有意 revisit 或 recovery，shortest-path progress 也可能惩罚必要的验证、accessibility 或 safety step。这些是 curator inference；论文没有报告 reward attack 或 sensitivity study。

preference objective 的数值与 selection 行为尚不明确。论文没有披露 beta、pair 数量、tie rule、minimum gap、duplicate handling、balancing，或 `sigma(R_s)` 为零/极小时的 safeguard。alpha 只给出 2–5 范围，没有给出每个实验的固定值。optimizer、batch size、scheduler、sequence limit、seed、checkpoint selection 与前置 SFT recipe 同样为 unknown。

数据与评测 lineage 无法审计。没有 task ID 或 train/dev/test map 能证明 SFT、tree construction、preference optimization、model selection 与 final evaluation 之间不存在同任务或近重复任务复用。raw trajectory count、success/failure balance、dropped record、tree size、pair count 与逐记录 provenance 均缺失。因此，38.71% 和 26.95% 的冲突率无法追溯到公开记录。

精确 replay 被缺失 artifact 阻断：未核验到代码、task file、raw/processed trajectory、tree、verifier decision、chosen/rejected pair、model checkpoint、浏览器或 environment image、terminal-check 实现、配置或 release tag。Browser-use 与 SeeAct 版本、网站 snapshot、cookie、authentication、reset semantics 与 browser state 均为 unknown，而 live website 与 Taobao 会独立于方法发生漂移。

权利与隐私仍未解决。代码、数据、模型、环境和 C-WebShop license 均未核验；访问论文不等于获得 screenshot、DOM content、Taobao 任务、生成轨迹或 model output 的复用权。论文没有讨论 credential、personal-data handling、consent、terms of service 或 redaction。两个 stack 和总计 350 个报告任务也不能证明跨网站、agent、模型或时间的 robustness，confirmed artifact 中没有独立复现。
