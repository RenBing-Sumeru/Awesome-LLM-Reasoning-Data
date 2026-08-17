最主要的发布限制是 data object 不匹配。论文讨论 process-level trajectory，Appendix C 也描述生成成功和失败 trajectory，但核验发布只提供任务与金标修复元数据，不含结构化 state-action-observation episode。当前 processing record 中的 prompt/model output 字段不能替代 command、observation、filesystem delta、retry、patch、test、stdout/stderr 和 terminal verdict；成功与失败的论文实验 run 无法逐项审计。

execution contract 不是 self-contained。核验 snapshot 的 `Evaluation/Execution` 是 gitlink `99729fb0454fb5ef3d031a7b62cb7532fe8fc114`，且没有 `.gitmodules` mapping。仓库默认使用 local environment、关闭 testing、开启 safe mode，而论文的 terminal evaluation 要求 Docker 与测试执行。论文也未披露实验时的数值 timeout、partial credit、reset 或 replay 语义。因此，重建 Pass@1 必须依赖 snapshot 之外、尚未核验的集成。

过程分数继承 judge 与 matching 的失效模式。论文写 GPT-4.1-mini，公开代码却默认 `gpt-4o-mini`；配置声明的 0.7 similarity threshold 未在核验 evaluator 中应用。硬编码综合阈值 `>0.5` 把主要权重给了类型精确匹配，类型的 set scoring 又会折叠同一类别的多个错误。LLM 的 prompt sensitivity 和 API drift 会改变语义 accuracy。依赖在线 package 状态而通过的脚本，仍可能不安全、不可复现，或在 predicate 不可见的方面语义错误。

发布 lineage 存在可见 version drift：论文 323 个仓库，对应公开 JSONL 的 320 个名称、目录树的 321 个仓库目录、manifest 的 329 条 revision；论文 level 1-10，对应发布中的 48 个 level0 task；error distribution 也没有完整调和。发布没有 train/dev/test 或 hidden split，没有 model-corpus decontamination audit，也没有逐条 source-overlap manifest。公开 README 与金标修复可能已进入模型训练语料；commit pinning 不等于 decontamination。

环境 replay 与 security 也缺乏关键约束。`ubuntu:22.04` 未固定 digest，pyenv clone 未固定 commit，recipe 中的 Miniconda installer 没有发布 checksum，apt/PyPI/conda/GitHub 资源仍是在线状态；package/channel lock、cache state、egress policy 和逐任务 reset 均为 unknown。容器以 root 运行不可信仓库和模型生成的 shell 内容，却没有披露 privilege reduction、secret isolation、malware scan、supply-chain policy 或 artifact quarantine。基于该执行面，curator inference 是：只能在 disposable、non-privileged、network-restricted 基础设施中复用。

最后，Apache-2.0 明确覆盖官方仓库代码，但发布没有为修改后的 README 与上游仓库提供逐条 license/attribution manifest。论文声明已取得许可并完成 anonymization、desensitization 与 cleaning，却没有公开 item-level procedure。以上问题与缺失 rollout 数据共同阻断 training reuse；benchmark score 不能被视为 data quality 的证据。
