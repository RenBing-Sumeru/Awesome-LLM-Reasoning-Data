每个 prompt 被分解为原子 checklist 项。对每个响应—条目对，共享验证器重复采样 yes/no 判断；经验 Yes-rate 被阈值化为条目标签并平均成部分奖励。高置信正负样本进入 replay，固定 gold 样本锚定验证器，额外 anti-inflation penalty 抑制对不完整响应的正向投票。

