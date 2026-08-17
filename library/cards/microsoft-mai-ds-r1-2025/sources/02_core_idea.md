MAI-DS-R1 is a Microsoft post-trained model based on DeepSeek-R1 (671B). Microsoft describes its post-training purpose as improving responsiveness on blocked topics and reducing harmful or unsafe outputs while preserving reasoning. The official Microsoft repository provides model weights under an MIT model licence; no official training-data release is identified.

The disclosed data object has two components. About 350K internal examples start from collected and filtered query keywords, expand keywords into multiple questions, translate questions into multiple languages, and bootstrap answers with their respective CoT using DeepSeek R1 and internal models. A separate 110K Safety and Non-Compliance component is taken from Tulu3 SFT: CoCoNot, WildJailbreak, and WildGuardMix.

For Track 12, the core contribution is a construction disclosure with clear limits. The counts and stages are known, but the training feedback contract and item-level provenance are not established by the release.

