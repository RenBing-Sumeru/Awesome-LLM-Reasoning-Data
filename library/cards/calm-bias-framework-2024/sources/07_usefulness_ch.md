可把 CALM 当作采用 LLM-as-a-Judge labels 之前的审计清单，适用于 benchmarks、reward models、rerankers 和 regression tests。应保留 task id、original prompt、perturbed prompt、targeted bias type、perturbation method、judge model/version、raw judge output、parsed score/preference、bias metric 和 semantic-preservation checks。

对 atlas 来说，它是 benchmark-quality audit 卡，也提醒不要把 AI feedback 当作中立真值。它能指导 judge-based datasets 的 recipe metadata：必须记录扰动 provenance 和带版本的 judge 配置。
