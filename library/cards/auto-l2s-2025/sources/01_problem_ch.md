蒸馏长推理 trace 可以增强较小或非推理模型，但也可能让 student 对无需长思考的输入持续生成冗长 chain。简单截断输出或统一加入长度惩罚，则可能删除困难问题所需的中间推理。AutoL2S 研究如何构造同时包含简短与扩展解答的监督，并让模型按实例选择二者。

论文的数据对象是 paired long-short reasoning record。以 Bespoke-Stratos-17k 的问题和 reference answer 为起点，强 teacher 生成正确 long chain，short teacher 生成多个 short-chain candidate，再按答案正确性过滤并保留最短正确候选。记录还包含表示短路径存在的 routing annotation、区分长短模式的 trigger token 与 final answer。没有通过验证的短路径时，只保留 long trace。

该对象先用于 supervised distillation，再用于诱导 long/short online rollout，并进入 GRPO-style refinement。官方代码仓库提供 curation 与训练脚本，官方 Hugging Face repository 发布基于 Qwen2.5-7B、Apache-2.0 的模型。尚未确认发布完整版本化 paired raw-trace dataset、被拒候选、正确性证据、teacher generation 与 split manifest，因此 model checkpoint 不能替代 data lineage。
