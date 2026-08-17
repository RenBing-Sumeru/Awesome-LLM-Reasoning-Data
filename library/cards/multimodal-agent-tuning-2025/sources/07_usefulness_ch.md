对于 **Data Construction and Open Release Recipes** track，本工作适合作为构造 pattern、发布审计案例和受控 ablation 来源。当前复用等级是**直接训练复用需等待核验**；不能把公开记录视为已经完成权利清理或独立正确性核验的样本。

- **重建 episode schema。** 在 `{F_opt,Q,T,C,O,A}` 之外，保留 source ID 与 license、file hash、tool/environment revision、executable status、两个 judge 的 prompt 与 response、拒绝原因和 train/checkpoint membership。不要把对象压缩成只有公开 conversation。
- **拆分反馈通道。** 把 runtime success、可用时的 deterministic validator、query-file sufficiency、trajectory-quality judgment 和 final-answer correctness 记录成独立字段。将同模型 dual judge 与独立模型、人类审计和领域 checker 做对照。
- **审计漏斗。** 分别发布 seed、生成 candidate、可执行 candidate、每级 rejection、保留 unique task、JSON row、引用 attachment 和物理 archive file 的数量。签名 manifest 应对齐 23.5K、约 20K、21,168、约 15K 和 19,307。
- **把失败保留为数据。** 发布 filtered trajectory，以及可能的 false accept 与 false reject。它们可用于 judge calibration、rejection-policy 比较、模态切片，以及分析同模型 filter 是否偏好更容易或风格更熟悉的任务。
- **测试模态稳健性。** 把只面向图像的 verifier prompt 改写为 image、document、spreadsheet、presentation、audio、video 与 mixed-file 任务的 typed contract。按模态和 attachment 数量分别报告 verifier 行为与 schema 有效性。
- **让执行可复现且更安全。** 固定 container digest、package/tool/model version、filesystem 与 network policy、credential handling、timeout、resource、state reset、恶意文件扫描，以及 stdout/stderr/exit 记录。把生成代码与文档都视作不可信输入。
- **复用前执行权利与污染门槛。** 解决 dataset license，保留上游 item ID 与条款，提供 attribution 与 takedown 路径，并审计与 GTA、GAIA、训练 mixture、上游 caption/image 和 base-model pretraining 的 exact 与 semantic overlap。

公开 checkpoint 可在其单独声明的 model license 下研究，代码可按 MIT 研究，但这些授权没有解决数据集或上游 asset 权利。MM-Traj 不适合作为 evaluation set，因为其与 GTA/GAIA 及其他 mixture 的重叠未经审计。它也不能直接支持 preference learning、PRM training、reward modeling 或 RLVR replay，因为缺少 rejected pair、process label、scalar reward 和可独立执行的 correctness verifier。
