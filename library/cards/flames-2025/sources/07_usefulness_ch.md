对于 `data_construction_open_release_recipes`，FLAMES 最适合作为受控实验模板与 audit reference。

构建者可以复现其 factor table，并一次只改变一个维度：seed source、agent、problem generator、solution teacher、quality-control rule、mixture、student 或 checkpoint-selection criterion。六种质量控制可直接作为 baseline，将保留题目数与独立测得的 problem validity、solution correctness、difficulty、diversity、SFT accuracy 和总生成成本画成权衡曲线。MATH500 solvability test 应保留为强制 false-rejection audit。

参考 FLAMES 的正式发布应为每条记录保存：稳定 record/seed ID、精确 dataset/model revision、agent 和 prompt version、全部 intermediate object、所有 candidate problem/solution、抽取并规范化的 answer、deduplication 与 overlap match、solvability/self-consistency/reward-model output、接纳或拒绝理由、mixture component、SFT subset 与 checkpoint/run ID。还应发布 rejected records 以度量 selection bias，并对每个报告 benchmark 做 semantic contamination check。

该 mixture 也给出具体训练 baseline：比较单 agent scaling 与 50/20/20/10 blend；在 GSMPlus 风格扰动之外测试 Distraction Insertion；在 held-out taxonomy 与更强独立 verifier 下检查 taxonomy-derived gain 是否保持。这些是建议的复用实验，不是开放 artifact 已经证明的事实。

复用等级：**reading/audit reference 与 recipe-reimplementation 起点**。由于没有核验到官方 FLAMES dataset、license、immutable manifest 或 construction code，direct training reuse 被阻断。它也不适合直接用作 evaluation data：FLAMES 是训练数据配方，而且其 selection procedure 已使用 GSM8K/MATH 表现。
