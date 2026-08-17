对 dataset builder，论文给出一个具体设计假设：web task 的难度应来自结构，而不只是词面。可以把 dense cyclic graph、random-walk subgraph、orbit-balanced question focus、ambiguity、distractor 和 cut-edge constraint 实现为独立字段并做 ablation。负责任的实现还应发布 source URL、crawl time、prompt、generator revision、record ID、split、duplicate、rejected candidate 和数据专用权利条款。

对 agent-training 研究者，有证据支持的用途是 full-episode SFT 和 on-policy agent training。论文不支持 preference learning、process reward model 训练，也不支持复用一个公开 V2 corpus 来训练。baseline 应在固定 base model 和预算下比较 V1/V2 topology，比较 simulator-only、live-only 和 staged training，比较保留全部 negative 与选择性排除，并把 32k/128k context 与最大 action budget 分开控制。

对 verifier 研究者，缺失的 `R_i` 定义本身就是审计目标。复现实验应比较 exact match、校准后的 semantic equivalence、多 judge 共识、citation-grounded verification 和人工 adjudication；发布 disagreement 与 alternative-valid-answer case；并把 format、answer、evidence 和 tool-failure 信号分开。

对 release auditor，至少要分别记录六个数量：生成 QA pair、SFT rollout 尝试、接受的 SFT trajectory、RL prompt、全部 RL rollout 和公开 record；还要记录每个错误、overlength、timeout、retry、API failure 和 exclusion。当前安全复用等级是**仅作阅读与审计参考**；V2 数据、轨迹、verifier、代码、lineage、replay stack 和数据专用许可证缺失，阻断训练复用。
