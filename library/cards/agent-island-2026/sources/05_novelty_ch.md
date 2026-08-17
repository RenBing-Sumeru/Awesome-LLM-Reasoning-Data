prior-work baseline 是 static capability benchmark：有限的 prompt 或 task 会被反复使用，答案可能进入训练数据，领先模型也可能逐渐接近 benchmark ceiling。Agent Island 把 evaluation object 从固定题目的 response 改为 multiplayer episode；其他被测模型会共同生成持续变化的 context、opposition、alliance、vote 与 terminal outcome。

具体的数据贡献是一条带 visibility boundary 的结构化七玩家 trace。private sidebar、public pitch、private vote 与 rationale、持续变化的 active/eliminated set、parser outcome 和 final jury winner 被连接在同一 log 中。因此，社交行为与 feedback 可以按 state/action 和 full-episode granularity 审查，而不是被压缩成 scalar score。冻结 manifest、Croissant metadata、直接 log URL、hash 与 replication pipeline 又为该对象增加了发布身份。

feedback interface 的变化同样具体。自适应 agent 同时是 environment participant 与 voter；程序化 parsing 和 tallying 把这些判断转成 terminal winner；Bayesian Plackett-Luce 再把 winner/player-set record 转成带 uncertainty 的 posterior ranking。这不是 objective correctness verifier，也不会给 reasoning step 附加质量标签、区分真实与欺骗性说服，或把 winner 变成训练 reward。

Agent Island 并没有分别发明 multiplayer game、private/public messaging、voting、random tie break 或 Plackett-Luce ranking。它的方向性贡献是把这些组件整合成有版本的 evaluation corpus 与持续更新、没有有限答案库的 benchmark。新意也不只是规模：冻结集有 999 场游戏，而 live source 可以继续增长。关键审计后果是，论文 corpus 与 live leaderboard 成为两个不同的版本化对象，不仅 count 不同，score presentation 也不同。

对指定 track，值得提取的信号是：agent benchmark 应发布 observation visibility、action/parser field、environment transition、terminal predicate、failure retention 与 immutable version binding，而不应只给 score。复用前仍需核验 matchup/schedule effect、tie sensitivity、parser failure、model/API drift、准确 generator version、被排除 attempt、license boundary，以及是否误把 live snapshot 当成论文集。
