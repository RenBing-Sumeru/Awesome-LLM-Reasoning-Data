**Belief extraction 是可失败的 judge。** Same model family 从自身 generated turns 中抽取 beliefs。Long reasoning 与 long contexts 会造成 invalid 或错误 extraction。Rule-based gold matcher 无法修复被错误抽取的 belief，public artifacts 也没有 extractor outputs 或 false-positive/false-negative audit。

**Binary answer labels 不是 process labels。** 一个推动 reasoning 但没有明确说出正确 final answer 的有用 intermediate turn，与完全错误的 turn 一样被标为 negative。这可能偏好过早重述答案，而非 exploratory questions、error localization 或 partial derivations。Correct final belief 也不能验证 turn 中每一个 claim。

**Agreement 可能自信地错误。** Conversations 在 beliefs 匹配时停止，即使 common belief 不正确。Same-model self-play 会放大相关 reasoning 与 social errors。论文测量 persuasion 与 assertion，却不按它们选择 training turns；excessive agreement、politeness 与 verbosity 仍是观察到的限制。

**报告的数据缺失。** 没有 public raw conversation trees、siblings、beliefs、selected SFT targets、DPO chosen/rejected rows、rejected turns、extraction/network failures、prepared splits、training logs、model checkpoints、hashes 或 source-to-checkpoint manifests。379.6K 与 311.3K 是 accepted-turn counts，不是 release counts。

**Task pipeline 不完整。** Public presets 缺 MBPP-CR construction/configuration，尽管它贡献数万条 accepted turns。GPQA 被拼成 `gqpa`。Requirements non-exhaustive，Matrix 使用 SSH dependency，MATH grading 还依赖手工复制的 unpinned external scripts。

**Paper 与 code settings 漂移。** 论文每 turn 最多两个 preference pairs、每 problem 最多 20；public defaults 是一个与十个。论文称 input-plus-output 为 8,192 tokens，公开 70B DPO config 使用 4,096。精确 generation temperature、top-p、retries、acceptance rate、model/task training settings 与 checkpoint selection 均未知。

**Splits 与 contamination 未解决。** Prepared split files 未发布。MMLU-Pro 把 original test pool 重分为新的 10.8K/1.2K train/test split，training 也直接使用 established benchmark questions。论文未报告 exact/semantic overlap ledger 或 base-model pretraining-exposure audit。

**Licensing 不完整。** Coral 与 pinned Matrix code 是 MIT。这不能确定 unreleased synthetic conversations、preference rows、derived MBPP-CR records 或 Coral checkpoints 的条款。Upstream dataset/base-model revisions、licenses 与 redistribution obligations 没有在统一 manifest 中协调。

**Release identity 与 metadata 冲突。** Coral 只有一个 2025-04-17 的 public commit，没有 tag 或 GitHub Release。Final PDF 使用 Daniel Li，proceedings metadata 使用 Shang-Wen Li；Meta page 还省略 Jiemin Zhang 与 Jane Yu。本 Card 遵循 proceedings author list，并记录该差异。
