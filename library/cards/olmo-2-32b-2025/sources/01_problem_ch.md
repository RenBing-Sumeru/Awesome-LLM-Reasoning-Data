开放权重模型可以链接权重、代码和多个数据查看器，却仍无法重建完整后训练路径。审计一个 32B 发布需要区分：已发布 artifact 的存在，与特定 checkpoint 背后的来源分配、合成 trace 作者、偏好构造、reward 实现、许可证、切分和污染证据。

Ai2 的 OLMo 2 32B 发布具有很强的公开发布表面：它链接了 base 和 instruct checkpoint、OLMo-core、预训练和中训练混合、SFT mix、on-policy preference mix 与 RLVR mix。同一批材料也留下重要边界，尤其是逐条来源谱系、GRPO reward/parser 合约与统一来源权利。

