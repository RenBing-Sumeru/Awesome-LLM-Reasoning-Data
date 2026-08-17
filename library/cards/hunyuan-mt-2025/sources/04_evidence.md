On the paper's automatic XCOMET aggregates, Hunyuan-MT-7B reports 0.8758, 0.8528, 0.9112, 0.9018, and 0.7829 across five FLORES direction groups, 0.8585 on WMT24pp, and 0.6082 on Mandarin-minority translation. Chimera reports 0.8974, 0.8719, 0.9306, 0.9132, 0.8268, 0.8787, and 0.6089 respectively. These are author-reported learned-metric scores without released paper-run outputs.

The paper interprets Chimera as improving average FLORES XCOMET by 2.3%, including 2.5% for Chinese-to-other and 5.6% for other-to-other. The documented evaluation selects 1,056 FLORES language pairs said to span 33 languages, but the promised appendix pair list is absent from arXiv v2.

Automatic ranking and human evaluation are different evidence. Tencent reports first place in 30 of 31 WMT25 categories, while official WMT findings show frequent automatic rank 1.0 alongside direction-dependent human ranks, including second on English-to-Russian and lower ranks elsewhere. The claim therefore cannot be restated as uniform human first place.

The paper's own expert evaluation uses 0-4 scores for accuracy, fluency, and idiomaticity around preannotated error-prone points. On the custom Challenge Testset, Hunyuan-MT-7B reports human scores of 3.258 Chinese-to-English, 3.155 English-to-Chinese, and 3.189 average. Annotator counts, agreement, blinding, raw judgments, significance tests, and test rows are not released.

Table 6 reports the post-CPT base above Qwen3-8B-Base on FLORES, WMT24pp, and Mandarin-minority sets. That ablation is conditioned on undisclosed mixtures and checkpoints, and its discussion credits 1.3T low-resource tokens to MT-oriented pretraining even though Section 2.1 locates them in general pretraining.
