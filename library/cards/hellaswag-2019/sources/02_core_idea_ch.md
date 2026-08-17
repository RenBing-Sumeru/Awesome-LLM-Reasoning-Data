核心贡献是用 Adversarial Filtering 构造一个更大、更难的 grounded commonsense continuation benchmark。流程从视频字幕和步骤文本场景出发，生成候选续写，反复删除强判别器容易识别的负例，保留对模型看起来合理但与 context 不匹配的 distractor。

和 SWAG 相比，HellaSwag 扩展了来源域并更新了 adversarial filtering，使 BERT 时代模型更难靠表面 artifact 解题。但对象仍是 answer-level 多选题，反馈契约仍是 label accuracy；方向标签是公开、易受污染的 adversarial benchmark。
