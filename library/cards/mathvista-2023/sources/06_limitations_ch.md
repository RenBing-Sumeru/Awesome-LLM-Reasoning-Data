正确性是在输出抽取后的答案级正确，不证明模型使用了预期视觉证据。有些题可能被语言先验、OCR 泄漏或数据集伪影答对。

MathVista 聚合了许多来源数据集，因此许可证、图像 provenance、标注惯例和 split 语义并不完全一致。leaderboard 数字会受 prompt、OCR/caption pipeline、答案抽取模型和子集选择影响。

若要把它作为训练 reward，需要额外审计模型输出是否被一致规范化，以及每个样本是否真的要求视觉 grounding。
