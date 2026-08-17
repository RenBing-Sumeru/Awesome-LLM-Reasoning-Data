**输入与生成。** QA 池包含 10,000 个非 Easy 的 HotPotQA 训练问题；每题生成 5 条 Gemma 2 rollout，共得到 50,000 条搜索轨迹。数学池包含 7,500 个 GSM8K 训练问题与 37,500 条计算器轨迹。generator 是随后接受 finetune 的同一个 Gemma 2 policy；主设置为 Gemma 2 27B，另有 2B 与 9B 消融。精确模型版本、temperature、top-p、seed 与重试规则均为 unknown。（论文 §2.1，pp.3–4；Appendix B）

**交互环境。** 每一步 policy 输出推理以及带标签的工具调用，或输出最终答案。QA 搜索 query 由 Gecko-1B 编码为 768 维英文向量，再针对相关 split 的文章做 nearest-neighbor 查询；带标签的数学表达式由 SymPy 执行，结果追加到上下文。生成在出现带标签的最终答案标记时结束，HotPotQA 上限 5 步、GSM8K 上限 10 步；错误标签和工具异常的处理方式未披露。（论文 §2.1，pp.3–4；§2.3，p.5；Appendix A；Appendix E）

**筛选。** 论文比较四种轨迹池：无筛选、仅过程、仅结果、过程与结果的交集。过程筛选让 Gemini 1.5 Pro Thinking 对每个动作输出 GOOD/BAD，只有全部动作为 GOOD 才保留完整轨迹。结果筛选使用搜索任务或计算器任务专用 prompt，把最终答案与 golden answer 比较，并要求输出 YES。精确保留量、judge 重试、并列处理和失败日志均为 unknown。（论文 §2.1，p.4；Figure 1；Appendix A，pp.21–22）

**动作前缀转换与奖励。** 对每条保留的 `tau=(s1,a1,...,sK,aK)`，SWiRL 产生 K 条相互重叠、分别结束于 `a1` 到 `aK` 的子轨迹。优化时采样前缀 state `s`，生成当前动作 `a`，最大化 `J(theta)=E[R(a|s)]`，并按步骤累加 reward。Gemini 1.5 Pro 在没有 golden answer 的条件下提供该生成式动作奖励。论文称离线 finetuning 使用与 Gemma 2 人类反馈奖励优化相同的 policy-gradient 算法，但没有给出算法名称、optimizer、learning rate、batch size、epoch、KL/reference policy、序列长度、硬件、计算量、seed 或 checkpoint 选择。（论文 §2.2，pp.4–5；Figure 2）

**输出与用途。** 主输出是从固定动作前缀记录学习得到的 Gemma 2 工具使用 policy。Appendix C 使用同一组合成轨迹池进行 SFT 对比；这支持把 SFT 记作已研究用途，但它不是 SWiRL 的主目标。论文也展示了 agent/工具训练与评测用途，但没有发布 benchmark。（论文 §4；Appendix C）

**划分与回放边界。** HotPotQA-train 与 GSM8K-train 用于生成训练数据，同时 HotPotQA 与 GSM8K 也作为评测任务；CofCA、MuSiQue、BeerQA 用于迁移评测。Appendix F 公布了 300 条 HotPotQA、CofCA 与 MuSiQue 的评测 ID，但没有 GSM8K/BeerQA ID 或训练 manifest。复现需要固定数据源版本与问题 ID、Gemma/Gemini snapshot、prompt、检索语料与索引、Gecko-1B、SymPy/Python、工具输出、筛选器、动作前缀加权、reward 映射、optimizer 及评测 judge；其中大多数没有公开固定。
