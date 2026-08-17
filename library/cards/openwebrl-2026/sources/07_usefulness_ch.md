对`environment_agent_trajectory_data`而言，OpenWebRL提供了区分四层对象的具体schema：task specification、selected SFT episode、runtime online rollout与judge example。可复用episode record应保留task/source/filter hash、site/session状态、screenshot与text-history policy、tool call与environment feedback、terminal reason、format/judge/combined reward、timeout/infrastructure status、loss mask、group membership、optimizer step、checkpoint及全部model/judge/config revision。

用于SFT时，公开3,085个turn row在重新按412条trajectory分组后，可训练browser reasoning/tool-call format。其success-only构造适合imitation，但没有额外negative episode时不适合研究failed recovery。使用者应保留`rollout_idx`、turn index、last-turn flag、screenshot、message、total step与reward metadata，不能把每个row视为独立trajectory。

用于distillation与reward modeling时，Judge-13K和发布的judge weight可作为复现trajectory-success classifier并与GPT-4.1比较的起点。复用前需核验实际train count、500-example test split、class balance、schema、privacy、model card与license。与GPT-4.1的一致性应和human correctness、reward-hacking robustness分别报告。

用于RLVR与agent training时，发布task、browser harness、hybrid reward、MM-GRPO launcher、sandbox isolation与policy weight构成可执行recipe。复现必须明确选择2,198-task release还是2,102-task默认snapshot，固定judge与environment state，保留被loss-mask的infrastructure failure，并记录每条生成rollout。论文约54K条trajectory在带lineage实际发布前不能作为数据复用。

用于evaluation时，WebVoyager、Online-Mind2Web与DeepShop结果在live site上只能近似复现。应分别报告official success与排除aborted non-agent failure的success，并记录site/date/region/cookie/CAPTCHA状态、browser service、judge与step budget。当前支持用途严格为**SFT、distillation、reward modeling、RLVR、agent training与evaluation**；没有证据支持preference learning、process supervision、offline RL或safety-alignment data。
