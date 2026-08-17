1. **一句话定位：** VeriContest 将 946 道竞赛题配成 Rust/Verus 规格、实现、证明与正负测试，评测端到端 vericoding。

2. **方法抓手：** 专家种子、agent 扩展、在线 judge、Verus 内核和 Post2Exe 反例检查共同决定数据质量。

3. **数据抓手：** 690 LeetCode + 256 Codeforces，约 50 GB；每题有规格、代码、proof、judge 信息和大量测试。

4. **证据锚点：** GPT-5.5 的 code 为 92.18%、proof 为 13.95%、end-to-end 仅 5.29%，证明阶段最难。

5. **复用决定：** 适合形式代码评测与分层 RLVR；最大风险是题目暴露和弱规格，必须联合 judge、proof 与反例测试。
