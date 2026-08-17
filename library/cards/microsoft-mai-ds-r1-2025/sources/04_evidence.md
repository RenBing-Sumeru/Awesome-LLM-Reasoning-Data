The official Microsoft release directly states the construction sequence and the two aggregate counts: about 350K internally developed multilingual examples and 110K Tulu3 safety/non-compliance examples. The Microsoft model card corroborates those counts and identifies DeepSeek-R1 (671B) as the base. The linked data summary states April 2025 release timing, March 2025 first data use, use of synthetic AI-generated data, and use of publicly available data.

The model card describes public benchmarks, a 3.3K-prompt/11-language blocking test set, and a 320-query HarmBench split. It reports responsiveness through Satisfaction and percent-response metrics, and harm mitigation through attack-success-rate/micro-average metrics. Implementations, labelers, and calibration are not fully disclosed, so those evaluations cannot establish the training reward.

The card also warns that MAI-DS-R1 may retain biases from training data and DeepSeek-R1, hallucinate, be vulnerable to adversarial prompts, or generate unsafe, biased, or harmful outputs in some conditions.

