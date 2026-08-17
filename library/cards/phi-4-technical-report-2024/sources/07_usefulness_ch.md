对`frontier_reports_data_disclosure_ledger`而言，Phi-4的价值恰恰在于报告细节较强，但artifact边界仍是权重发布。读者可以核验官方报告、14B checkpoint、MIT许可证、6个safetensor shard、model card和后续data summary，却无法检查训练记录。这使“有文档”“已发布”和“可重放”的差别非常具体。

披露ledger应逐层记录。预训练层要保存来源类别、具名来源、版本、权利、收集日期、唯一记录数、tokenization、mixture weight、重复次数、直接使用还是种子使用、synthetic generator以及最终run归属；SFT层要增加渲染后对话、候选ID、generator与evaluator版本、原始分数、选择阈值、拒绝原因和token数；DPO层应保留提示、两个完整回答或token alternative、oracle/judge输入输出、pair理由、顺序、分数组成与阶段归属。

当存在可靠任务oracle与足够rollout预算时，Pivotal Token Search可作为研究设计复用。复现前应验证oracle误接受，估计成功率方差，测试近似单调假设，在小案例上与穷举搜索对比，并发布漏检token和拒绝pair统计。不能把终点验证推广到缺少可执行检查或answer key的领域。

报告也提供有用负面对照：synthetic-only mixture损害事实召回，严格指令遵循仍是弱项，n-gram去污染无法解决全部改写。这些观察支持混合来源组合、针对性instruction数据和语义重叠审计，而不是用模型分数为整个语料背书。

审计者应固定模型revision，核验权重和license文件，区分400B未加权源池与9.8T训练预算，独立加总两张DPO表，并把所有未披露generator、阈值、rollout预算、来源权利与记录数标为unknown。最终得到的是可比较的前沿披露，而不是重建出的开放配方。
