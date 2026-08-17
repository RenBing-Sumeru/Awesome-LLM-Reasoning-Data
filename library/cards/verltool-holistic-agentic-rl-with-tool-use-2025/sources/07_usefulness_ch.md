对`environment_agent_trajectory_data`而言，VerlTool可作为构造与日志记录recipe。实现时可以保留task与source revision、trajectory ID、policy action token、tool observation token、environment state/version、call validity、termination reason、scalar reward、verifier output、turn index、stop reason及observation/action mask。虽然论文没有发布统一canonical serialization corpus，这一schema仍能支持replay审计。

对RLVR与agent training，六类recipe为在线rollout和programmatic/environmental outcome的配对提供具体baseline。研究者可以在显式保留outcome contract的前提下，比较同步与异步调度、observation masking、领域特定tool interface及GRPO/DAPO设置。用于evaluation时，同一日志边界还可区分task success、tool validity和environment termination，避免把`done`误读为正确性。

在构造研究中，可执行的ablation包括exact-match与execution/test-based reward、带或不带tool-call shaping、cached与live search，以及action-only优化与错误地不mask observation的优化。复现清单还应固定论文commit、`verl` submodule、model与checkpoint revision、task与split manifest、index/database/container、API行为、credential与cache、seed，以及成功和失败episode的保留规则。

复用等级为recipe and audit reference。直接trajectory-data训练复用保持blocked，因为已核验HF asset是task prompt/reference object及支撑cache/database，而不是action-observation episode；同时也没有统一trajectory license、split/provenance manifest、replay export或论文版本environment bundle。支持的`training_use`严格保持为`rlvr`、`agent_training`和`evaluation`。
