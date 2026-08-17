报告证据：arXiv 摘要报告 21,000+ interactive Python-based SWE tasks。当前 HF main data 更大，而 leaderboard 网站和 HF leaderboard dataset 是独立精选子集。

逐实例证据：单个任务的决定性证据是提交补丁在安装 recipe 和 Docker image 下满足 FAIL_TO_PASS/PASS_TO_PASS 测试。聚合数字只有和数据快照、split、评测器版本、运行环境一起保留时才适合复用。
