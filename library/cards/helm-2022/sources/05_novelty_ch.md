已有基线是一组分散 benchmark 和 leaderboard，每个都有自己的任务表述与评分口径。HELM 把评测对象从孤立 task score 改成标准化、多指标的 run matrix。

方向信号是可审计性：scenario adapter、model adapter、metric 和 run metadata 都是一等对象。不是新的部分包括底层任务和部分单项 metric；HELM 经常包装已有数据集和已有 scorer。复用前要查精确 HELM release、scenario provenance、model access terms、metric definition，以及在线 latest 页面是否与引用论文一致。
