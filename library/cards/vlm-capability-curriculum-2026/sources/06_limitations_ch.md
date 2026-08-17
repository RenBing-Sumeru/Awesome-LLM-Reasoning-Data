发布边界是主要审计限制。523,776 个已存 prediction 中，每一个都是抽取后的字符串或选项字母，不是原始 completion。发布数据没有推理轨迹、token logprob、随机种子、逐尝试 token 数或延迟、rollout reward、advantage，也没有稳定的逐 rollout 标识。错误最终答案可见，但产生它们的失败推理不可见，因此无法检查 reward hacking、缺乏依据的推理或答案抽取错误。

`pass_rate` 是 Qwen3-VL-8B-Instruct 在 temperature 1.0 下的测量值，并以 1/16 为步长离散化。它会随 policy、prompt、抽取规则、种子或未披露的采样控制而改变，不能视为题目的内在难度属性。按较高 pass rate 优先排序也只是特定的 easy-to-hard 选择，不能证明该顺序对所有 backbone 都最优。

验证器的大部分分数来自最终答案等价性，较小部分来自输出格式。它不检查中间推理、图像 grounding，也不判断答案是否确由引用的视觉证据推出。三个已发布 Qwen3 stage launcher 都使用同一 MathRuler-based reward，包括感知任务；格式合规或偶然答对的响应也可能获得奖励。

Lineage 在多个方面不完整。论文在 Stage 3 列出 DocVQA，但托管的 16,195 条数据只列 Math PUMA、GeoQA170K、CLEVR-Math 和 ArxivQA。Stage-1 记录不含生成过程中使用的 DOCCI caption。托管制品只有 `train` split；Stage-1 工具中的确定性 85/5/10 formatter 是本地构造选项，不能作为已发布 validation/test manifest 的证据。去污染流程未披露。

许可必须在顶层标签以下继续审计。论文为 CC BY 4.0，代码仓库为 Apache-2.0，dataset card 也声明 Apache-2.0。但 Stage 1 派生自 DOCCI 并注明其 caption license，Stage 2 重新分发 ORZ-Math-13k，Stage 3 则说明各图像源保留上游许可。Collection-level license 不能替代这些源特定义务。

其他解释风险包括：Stage 1 用 Qwen2.5-72B 生成题目、再用两个 Qwen2.5-VL 模型筛选，可能保留同家族相关错误；主文关于 vision encoder 的宽泛表述也与附录和脚本中的 open-frozen-open 计划不完全一致。Benchmark 提升只展示所报告设置中的结果，不能证明数据发布完整或质量可靠。
