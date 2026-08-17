一句话贡献是：UserBench 把结构化隐含偏好任务库与 Gymnasium 旅行环境结合起来，通过 GPT-4o 判断和规则/状态检查组成的混合反馈，评测澄清、搜索与推荐行为，而不只检查最终自由文本答案。

机制连接三层对象。第一，task construction 跨多个旅行方面组合人工整理的 preference concept 与间接表达，再由 GPT-4o 在人工监督下生成理想安排以及 correct、wrong 和 noise option。第二，runtime interface 要求每个 turn 调用一次 `interact_with_env`，字段包含 agent 输出的 `thought`、`action`/`search`/`answer` 三选一的 choice 与文本 content。第三，环境维护已获取偏好、search state、剩余 option label、累计 reward 与 episode status，并返回模拟用户回复或预生成 search option。

反馈契约是 `mixed`。GPT-4o 判断自由文本搜索是否包含所需 ground-truth argument、澄清语句是否指向一个可用偏好，并生成隐式用户回复；代码负责解析 option ID、检查 correct/best 集合、更新状态、发放 reward，以及决定 termination/truncation。默认 reward 是：新有效搜索 0.2、新获取偏好 0.2、指定 best option 1.0、其他 correct option 0.8、wrong option 0.0。因此 Parquet 中的 `reward_model.style: rule` 不能概括整个 evaluator。

该接口可以观察 prompt judge 的分类、option ID 的精确集合归属、environment counter、tool history 与 final state；它不能证明 GPT-4o 的语义分类无偏，不能证明单一 `best_id` 确实唯一更优，不能证明 agent 输出的 `thought` 是忠实推理，也不能证明合成旅行交互可迁移到真实用户与在线服务。termination 也不是成功判据：one-choice 模式下，wrong submission 仍可能消耗一个 aspect 并推动 episode 结束。

最接近的比较类别是只评估任务完成、但不把用户偏好发现设为一等状态变量的常规 agent benchmark。UserBench 的具体变化是同时通过主动澄清与被动触发暴露隐含偏好，并在同一环境中评分 search 与 answer 行为。该工作没有发布由此产生的模型轨迹，因此它对 reasoning data 的方向价值在于可检查的 environment-feedback contract 与任务 release，而不是已经证明可用的训练语料。
