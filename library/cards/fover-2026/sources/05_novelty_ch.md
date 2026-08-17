FoVer 的贡献是一种反馈与构造接口：把 Z3 和 Isabelle 从整题解答检查改造成局部步骤标注器，把标签包装成 PRM 对话，并检验形式任务监督能否迁移到非形式推理。这不同于人工标注 PRM 数据、为每个步骤采样多个 continuation 的 Monte Carlo rollout 标签，以及 stronger-LLM judging。

其组成部件本身并非新提出。FLDx2、GSM8K、MetaMathQA、Big-Math、Z3、Isabelle/HOL、Llama、Qwen、LLaMA-Factory、二元 PRM 和 Best-of-K 都早于该工作。新意在于把形式验证连接到可复用的过程监督，同时覆盖一阶逻辑与定理证明，并记录形式到非形式迁移及其失败案例。

关键边界是局部形式有效性。Isabelle wrapper 通过 `sorry` 假定非目标步骤成立；Z3 分支排除 `assump` 模式；Qwen 生成 Isabelle statement 还引入了未经验证的语义转换层。因此，FoVer 提供的是一种不同的程序化标签源，而不是人工复核、rollout 证据、语义 judge 或端到端 proof checking 的通用替代品。
