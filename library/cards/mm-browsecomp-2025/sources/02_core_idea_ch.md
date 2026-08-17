核心贡献是把 BrowseComp 风格的高难 browsing 题扩展到多模态网页证据。机制是构造难以直接搜索的问题，并要求 agent 浏览网页、检查图片或视频、跨来源推理，最后给出短答案。

最近对比对象是 BrowseComp、GAIA 式 browsing task 和文本网页 QA benchmark。反馈契约是参考答案比对加 checklist-guided LLM judge；决定性信号是在固定 judge model 下的答案/判分一致性，而不只是浏览环境的终止谓词。
