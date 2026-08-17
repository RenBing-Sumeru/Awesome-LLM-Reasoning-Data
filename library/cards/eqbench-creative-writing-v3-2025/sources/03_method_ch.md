输入是 creative-writing prompts 和模型 completions。公开页面核实了 Creative Writing v3 leaderboard、score column、repetition column 和 slop column。

流程是：收集模型对写作 prompts 的输出，用 benchmark judge 评分，从常见 words/bigrams/trigrams 计算 repetition，用 overused phrases 列表计算 slop，再发布 leaderboard。输出是 model scores 和 style diagnostics。

复现前需要 prompt set、model output text、judge model、judging prompt、generation settings、repetition/slop implementations 和 leaderboard date。
