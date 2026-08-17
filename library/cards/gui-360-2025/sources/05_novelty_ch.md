既有 GUI-agent dataset 与 benchmark 已包含 screenshot、action、accessibility state、grounding label 或 environment task；Atlas 中相关参照包括 OS-Genesis、OpenCUA 与 AndroidControl。GUI-360° 并未单独提出 GUI control、accessibility metadata、LLM-as-judge validation、MCP 或 supervised fine-tuning。

第一项具体变化，是在 Windows Office 规模上发布 episode object：通过 execution/task/template identifier，把时间对齐的 screenshot、UI Automation state、observation、thought、GUI 或 app-API action、status 与 episode-level evaluation record 连接起来。由此公开的不只是最终 benchmark score，还包括 behavior 与附着其上的 judgment。

第二项变化是 failure visibility 与 multi-view transformation。17,189 条成功 trajectory 之外，还有 62,170 条独立发布的失败 trajectory；同一批成功日志又被转换成 grounding、screen parsing、action prediction 和 action prediction+A11y 四类 SFT-ready view。因此，公开 artifact 并未简单丢弃失败数据；但 release 没有提供完整 failure taxonomy、attempt manifest 或 reward conversion。

第三项变化是端到端 construction recipe：public query sourcing、手工 template instantiation、LLM matching 与 feasibility filtering、分阶段 GPT-4o/GPT-4.1 execution、GPT-4.1 whole-trajectory judgment、sanitization、split 与 packaging。它对 reasoning-data 研究的方向价值，是在同一管线中同时呈现 state、action、feedback、failure retention 与 derived supervision。这是工程和发布层的集成贡献，不是每条 sample 高质量或 corpus 可 replay 的证明。

把该 recipe 作为可复用方案前，构建者还必须对齐 query count，恢复逐记录 source/template/attempt lineage，发布 collection/validation stack，固定 Windows/Office/MCP 与 VM/reset configuration，公开 immutable split manifest，并解决第三方内容 rights 与 privacy control。完成这些检查前，已核验的新意是 static release 与可审计的数据转换，而不是开放 environment 或 RLVR system。
