verifier 只接收 outcome supervision。GSM8K rationale 可以包含无效步骤却碰巧以正确数字结束，而语义等价的答案可能被未披露的 extractor 或 formatting rule 拒绝。MBPP test passing 受可用测试覆盖率限制，也可能奖励脆弱或针对测试的 program。code sandbox、timeout、interpreter、dependency、exception 和 resource policy 都没有记录。

Cartesian pairing 会产生相关数据。同一个解可能出现在许多 pair 中，而具有特定 positive/negative 比例的问题可能贡献多得多的 pair。论文没有报告逐轮 class count、pair count、deduplication、balancing、subsampling 或 malformed generation handling，因此无法重建有效训练分布。

学习信号是 candidate sequence likelihood，而不是校准后的正确概率。长度、格式和 generator-specific style 都可能影响该 score。论文没有说明 length normalization、score calibration、tie handling、abstention、cross-generator evaluation、adversarial attack 或 refresh policy。因此，针对 verifier 优化的 generator 仍可能利用 score shortcut，即使主数据采集循环使用 programmatic label。

Best-of-k 提升不是免费的能力：主结果为每道题采样 128 个候选以估计 Best-of-64，scaling analysis 则使用 1,000 次生成。estimator 假设没有 score tie，并且只测量固定 pool 内的 selection。它本身不能证明在新 sampler 或 deployment budget 下的在线可靠性。

范围和发布都很有限。证据仅覆盖可低成本获得 binary outcome 的 grade-school mathematics 与小型 Python function、7B/13B LoRA model 和具名 benchmark。没有测试 open-ended judge task、process supervision、full-parameter training 或稳健 code environment。也未确认官方代码、生成数据、pair manifest、checkpoint、完整 prompt bundle 或完整 hyperparameter configuration。
