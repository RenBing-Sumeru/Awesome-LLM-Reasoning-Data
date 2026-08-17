arXiv 摘要报告 501 个高质量多主题 seed question、5,010 个生成 concrete questions，并评估 14 个 SOTA VLM。官方项目/GitHub 进一步说明：227 个 seed 来自已有 visual-math datasets，274 个来自公共资源的新收集或开发；470 个 program 含动态绘图函数，31 个使用固定图像加随机文本元素。

逐样本决定性证据是某个生成 variant 的答案是否正确，ground truth 由 seed program 产生。鲁棒性证据是 per-seed worst-case accuracy：只有同一 seed 的所有采样 variants 都答对才算该 seed 成功。证据边界包括 program 正确性、answer parser、采样的 seeds/variants 和模型 prompt/interface 版本。
