论文 Table 1 给出 dataset-scale evidence：38,431 total questions、37,644 different tables、23,259 titled tables、平均每表 12.9 cells，solutions 平均 49.5 words。split counts 明确为 23,059 train、7,686 development 和 7,686 test examples。

评测证据说明该任务不是普通 text-only QA 可以解决的。fine-tuned UnifiedQA-large 平均 accuracy 为 57.35，fine-tuned TAPEX-large 为 58.52，zero-shot GPT-3 为 56.96，two-shot CoT GPT-3 为 62.92。使用 policy gradient 选择两个 CoT examples 的 PromptPG 达到 68.23，比论文中最佳 baseline 提高 5.31 points。

blind study 支持 table grounding 主张。移除 table context 或 question text 后，zero-shot GPT-3 表现大幅下降：table-only 和 question-only variants 平均 accuracy 分别为 6.10 与 7.00，而 1,000-example development study 中 full input 达到 59.50。human performance 报告为 90.22，明显高于论文最佳 baseline。
