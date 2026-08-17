从方法上看，该检验是 conditional，而不是直接 identification。它假定 text-only classification 能捕获生成 artifact，combined classifier 的增量优势则隔离 membership；文本 feature 与 likelihood feature 的隐藏相关性可能破坏这种分解。generator memorization、domain mismatch、feature selection、outlier handling 与 classifier capacity 都会改变 false positive 和 false negative。合成集合过于可区分时会掩盖 membership，未校准的 likelihood gap 又会伪造成员信号。

评测没有建立统一安全余量。虽然主表每一行都位于 0.05 阈值的预期一侧，但若干 non-member p-value 只有 0.06–0.09，论文所称“全部高于 0.1”与表 4 冲突。结果依赖已知 Pile split、一个单作者语料、deduplicated Pythia checkpoint 和两个 OLMo subset；对 closed commercial model、未知训练 mixture、对抗性选择的 suspect set、其他 generator 或较弱 memorization 的泛化仍未验证。按观察到的 text-classifier AUC 选择 token length，若未预先固定，也可能带来 analysis flexibility（curator inference）。

目标模型访问边界比论文的广泛法律叙事更窄。当前代码会加载模型权重并计算基于 token likelihood 的 MIA feature，没有证明方法可用于只返回 sampled text 的 closed service。统计拒绝是在假定 checkpoint 与训练 ground truth 下的集合级证据；它不能说明具体用了哪些记录、何时使用、是否授权或是否构成法律侵权。未拒绝也不能证明不存在使用。

release 完整性仍是 partial。代码仓库采用 MIT license，但所链接的 Google Drive 数据没有明确 dataset license 或统一 upstream rights statement。可变 archive 缺少作者 checksum 与 version manifest；checkpoint 未发布，仓库没有 tagged release，README 的数据发布 update 与其过时的 unfinished-items list 相互矛盾。论文运行的 learning rate、decoding parameter、seed、outlier fraction、完整 hardware/compute cost 与精确 revision 也缺失。

sequence-level splitting 有意追求分布匹配，但会让同一来源文档的 snippet 跨越 generator partition，因此不属于 document-independent evaluation。排除若干被描述为版权风险较高的 Pile subset，也不能证明保留材料的 license、privacy 或 consent 状态。发布由可疑文档衍生的 synthetic continuation 本身可能还需要按来源与司法辖区审查权利（curator inference）。
