图像奖励模型可能正确判断单帧内容，却忽略视频中的动作顺序、状态变化和跨时间因果；文本 judge 还可能偏爱流畅描述，无法发现回答把先后关系、动作主体或持续时间说反。

VideoRewardBench 为视频问题构造 chosen/rejected 回答，并按感知、知识、时间推理和安全核验偏好，评测视频 reward model 与 judge。
