提示来源按数据集分别处理。表 5 报告 ReClor 的 train/validation/test 数量为 4,638/500/1,000,ARC 为 3,370/869/1,172,CommonsenseQA 为 8,520/1,221/1,221。由于论文不直接使用 CommonsenseQA 官方 test,实验把其 development split 作为 test,并从 train 中划出等量 validation 子集。仓库发布了这些准备后的文件、few-shot 示例和模板,但没有发布生成后的 CREST 输出。

对每个训练条目,Meta-Llama-3-8B、Gemma-7B,或附录 A 中的 Phi-2,以温度 0.8、top-p 0.95 和 512 词元输出预算采样 16 条 rationale。公开生成器默认用所选数据集 few-shot 文件中的前 20 条记录构造提示;论文没有单独报告这个数量。第二个贪心解码阶段以每条 rationale 为条件预测原题选项,数据集标签把候选分成 `z=1` 与 `z=0`。公开代码随后把每个 `z=1` 候选展开为每个答案选项一个输入,贪心预测该选项是否正确,解析生成文本,并把匹配数量求和为 `z_tilde`。

论文中的候选数量直接来自每个 train 条目 16 次采样:对每个 base model,ReClor 为 74,208 条,ARC 为 53,920 条,CommonsenseQA 为 136,320 条。追问数量更少且依赖具体运行,因为只有 `z=1` 候选会被展开,而且 `F` 会变化。表 6 公布了按 `z` 与 `z_tilde` 聚合的计数,但论文和仓库都没有发布相应记录、选项级预测向量或拒绝决策。

SFT 把 rationale 与标签答案写成 completion,并只在该输出区间计算 loss。LoRA 使用 rank 16、alpha 16,以及 gate/down/up/q/k/v/o projection。论文报告六个 SFT epoch,公开 stage-2 脚本则默认四个;脚本以 `F-t` 表示阈值,ReClor 示例取 threshold 1,对四选项题等价于 `t=3`。实验在不使用 early stopping 的情况下按 validation 结果选择最佳 checkpoint。

偏好构造先枚举题内 `P_z` 与严格的 `P_z_tilde` 偏好,再把每条记录格式化为一个输入以及 chosen/rejected 的 rationale-answer completion。TRL DPO 从 SFT adapter 开始,使用 `beta=0.1`,训练四个 epoch,并按 `(1-lambda)` 与 `lambda` 的批次预算分别从 `P_z` 和 `P_z_tilde` 采样。论文搜索 3,000 或 5,000 个最大步数,最佳 Llama/ReClor 运行报告为 5,000;公开 stage-3 脚本默认 3,000。代码以 42 作为偏好对 shuffle seed,但 rationale 生成 seed 和实际抽中的偏好对清单为 unknown。

反馈环境完全离线。真实选项标签提供参照,同一个 base checkpoint 负责产生原题预测和选项级预测。GPT-4o 不生成训练标签;它只在独立分析中用 FLASK 评价 100 条 ReClor validation 回答。对单张 RTX A6000 上的 Llama-3-8B/ReClor,论文报告 rationale 生成、评价、SFT 与偏好学习分别耗时 12、3.2、7.4 和 19.2 GPU 小时。
