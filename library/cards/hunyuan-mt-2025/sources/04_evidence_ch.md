按论文自动 XCOMET aggregate，Hunyuan-MT-7B 在五组 FLORES direction 上分别报告 0.8758、0.8528、0.9112、0.9018、0.7829，在 WMT24pp 上为 0.8585，在普通话—少数民族语言翻译上为 0.6082；Chimera 对应为 0.8974、0.8719、0.9306、0.9132、0.8268、0.8787、0.6089。这些是作者报告的 learned-metric score，未发布 paper-run output。

论文把 Chimera 解读为 FLORES 平均 XCOMET 提升 2.3%，其中 Chinese-to-other 为 2.5%，other-to-other 为 5.6%。评测据称从 33 种语言中选择 1,056 个 FLORES language pair，但 arXiv v2 中缺少论文声称位于 appendix 的 pair list。

自动排名与人评是不同证据。腾讯称 WMT25 31 个 category 中 30 个第一，而官方 WMT findings 显示系统常获 automatic rank 1.0，但 human rank 随 direction 变化，例如 English-to-Russian 为第二，其他方向还有更低排名。因此不能把该主张改写成“所有方向人评第一”。

论文自身 expert evaluation 围绕预标注 error-prone point，从 accuracy、fluency 与 idiomaticity 角度给 0–4 分。在自建 Challenge Testset 上，Hunyuan-MT-7B 报告 Chinese-to-English 3.258、English-to-Chinese 3.155、平均 3.189。Annotator 数量、agreement、blinding、raw judgment、significance test 与测试 row 均未公开。

Table 6 报告 post-CPT base 在 FLORES、WMT24pp 与 Mandarin-minority set 上超过 Qwen3-8B-Base。该 ablation 依赖未披露 mixture 与 checkpoint；且讨论将 1.3T low-resource token 归因于 MT-oriented pretraining，而 Section 2.1 将其置于 general pretraining。
