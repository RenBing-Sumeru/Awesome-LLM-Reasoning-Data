已有基线是 generic chatbot preference evaluation 或对 creative writing 的临时人工评审。Creative Writing v3 的变化是把 writing quality 做成专门 leaderboard，并加入 style diagnostics。

质量信号是页面不只依赖一个 score；它还暴露 repetition 和 slop proxies。不新的是 LLM-as-judge evaluation 本身。

复用前要检查 style proxies 是否适合目标写作领域，judge 是否奖励 originality 而不只是熟悉的 prose markers，以及 prompts 是否泄漏。
