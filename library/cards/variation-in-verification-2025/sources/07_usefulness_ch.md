对 Track 5 而言，这一发布适合审计测试时 rollout 与 selection contracts，而不是只看最终 benchmark scores。复用流水线可以保留 generator identity、benchmark 与 item ID、response index、sampling settings、candidate CoT、ground-truth provenance、verifier identity、verifier CoT 和 verdict，再在受控配对下比较 TPR、TNR、balanced accuracy 与 retained-pool gain。

它可用于 verifier diagnostics、generator-verifier allocation studies、filtering simulations 和 error-taxonomy work。任何衍生训练用途都应先解决来源权利、去污染、标签校准、计数差异，以及接受/拒绝候选是否按预期呈现。不能仅因论文报告 TTS gains，就把这些开放轨迹提升为“训练质量已证实”的数据集。
