发布证据首先说明哪些对象确实存在。当前Hugging Face API报告Easy与Hard两种配置和四个文件,即两种配置各自的train/validation Parquet文件。数据统计显示Easy train有27个`data_source`值与15,837行,Hard train有35个值与32,840行。验证集大小分别为270与350,与每项纳入任务10条记录一致。公开schema包含`data_source`、`prompt`、`ability`、`reward_model`和`extra_info`;抽样记录确认`reward_model`字段可能为空,而`game_data_str`承载任务状态。在固定revision `bb4297b82b9c28ef39249f48386cefd5e856618a`上,官方Dataset Server返回的前100条Hard train记录均为Campsite,其中48条在提示内容和序列化verifier状态中都出现明显中文乱码。这直接证明该切片存在编码缺陷,但不能据此估计整个发布的受影响比例。

对仅逻辑RL,表2报告SynLogic-7B在SynLogic-Easy验证集、KOR-Bench、BBH和BBEH上分别为44.4、48.1、66.5和8.0。SynLogic-32B在SynLogic-Hard验证集、KOR-Bench、BBH和BBEH上分别为52.9、62.2、85.8和25.5。32B的BBEH分数高于表中R1-Distill-Qwen-32B的19.2,但在KOR-Bench和BBH上低于后者。这些是训练后模型的benchmark结果,不是数据集正确性或verifier误差的直接测量。

同一表格还报告相对base模型的跨领域数学变化。SynLogic-7B在AIME 2024上从0.3升至10.0,在MATH 500上从64.6升至71.8,在AMC 2023上从30.0升至55.0。SynLogic-32B在对应benchmark上从4.5升至19.6、68.6升至82.0、45.0升至57.5。与instruction-tuned和distilled模型的比较有升有降,因此证据支持研究设置中的RL迁移,而不是普遍优越性。

混合数据证据把SynLogic贡献与math-plus-code控制分开。表3报告Zero-Mix-3在BBEH、KOR-Bench、LiveCodeBench、AIME 2024和GPQA-Diamond上分别为28.6、65.0、40.7、35.8和57.5;Zero-Mix-2分别为18.5、58.6、39.5、34.5和55.2。两种配置运行相同步数,但其混合数据不同。结果支持研究逻辑提示在跨领域RL中的作用,却没有隔离所有数据量、采样或optimizer混杂因素。

Artifact历史提供另一类审计证据。GitHub commit `d2e6cf93042a2713fdd833f5e5e071ac3d8ab901`修复Boolean Expressions重复bug。Hugging Face commits移除Easy重复提示与ARC-AGI重复提示,随后又修复Boolean Expressions。一个仍开放的GitHub issue指出Cipher题目生成器缺失。这些记录说明可执行数据集在发布后发生变化,精确revision身份很重要。

以上结果都没有校准全部35个verifier,没有证明不存在语义污染,没有验证上游许可证兼容,也不能认证未发布rollout。Benchmark表现能说明该训练配方影响了研究中的模型,但不能证明每条公开记录都正确,也不能证明公开对象完整记录了训练数据。
