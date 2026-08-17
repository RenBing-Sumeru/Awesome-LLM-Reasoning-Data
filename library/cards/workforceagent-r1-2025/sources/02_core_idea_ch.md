核心贡献是把动态、多步的浏览器 episode 转换为一组单步 reasoning 问题，使系统无需在 WorkArena 中执行每个候选动作也能评分。

数据对象有两层。上游是一条由 BrowserGym/Playwright 针对某个 WorkArena 配置生成的成功 oracle-like 轨迹 `(a0,o0,…,aT,oT)`；下游训练对象是一条 state/action 记录，包含任务目标、当前网页内容、动作历史、动作定义和 oracle 下一动作。标准 SFT 使用 o3-mini 标注的轨迹；SFT-L 消融使用 `DeepSeek-R1-Distill-Llama-70B`；GRPO 则从当前策略采样一组 reasoning/action 候选。

反馈契约是 programmatic 的。它能检查输出是否遵循 `&lt;think&gt;`/`&lt;action&gt;` 结构、动作是否属于合法操作、函数名是否等于 oracle 函数、参数是否匹配，以及结束标签后是否还有多余 token。论文规定：格式正确得 0.1，动作及参数完全正确得 1，仅动作类型正确得 0.1，`&lt;/action&gt;` 后继续生成则罚 −0.9。它无法判断 reasoning 是否忠实、另一种动作是否同样有效，也无法判断候选是否最终完成任务。WorkArena terminal success 只用于评测。

最接近的基础设施是 WorkArena 和 BrowserGym：前者定义企业任务及环境成功检查，后者提供标准观测/动作接口和启发式 `cheat()` 程序；优化脚手架来自 GRPO、veRL 与 TinyZero。相对常规 SFT 轨迹管线，WorkForceAgent-R1 真正改变的是优化单元，并加入显式下一动作奖励；它没有新建环境、Playwright oracle 机制或 GRPO，也没有发布新语料。

这代表的研究方向是昂贵交互条件下的 rule-verified agent training：先利用环境程序生成参考动作，再从局部状态决策中学习。核心审计问题是，这个廉价 proxy 是否保留了实时交互才能揭示的可替代动作与长程后果。
