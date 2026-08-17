"""Bilingual display labels that are not part of the controlled vocabulary.

The five classification facets live in `library/vocabulary.yaml`; everything here
is presentation: track names, reading sections, nested-object keys, artifacts,
and gap kinds.

Card sub-objects (`data_object`, `recipe_metadata`, `audit`) use an open-ended key
space: the four integrated tracks already contain over a hundred distinct keys and
later tracks will add more. Every map here therefore defines an ordered *core* of
known keys; anything unknown keeps its position after the core and falls back to a
humanized version of the raw key, so a new key never disappears from the UI.
"""
from __future__ import annotations

GROUPS = [
    {"id": "background_foundations", "title": "Background / Foundations", "title_zh": "基础与入门", "cls": "g-found"},
    {"id": "core_reasoning_data_types", "title": "Core Reasoning Data Types", "title_zh": "核心推理数据类型", "cls": "g-types"},
    {"id": "data_lifecycle", "title": "Data Lifecycle", "title_zh": "数据生命周期", "cls": "g-life"},
]

TRACK_ZH = {
    "foundations_and_primers": "基础入门与综述",
    "instruction_demonstration_rationale_data": "指令、示范与思维链数据",
    "preference_reward_feedback_data": "偏好与奖励反馈数据",
    "programmatically_verifiable_outcome_data": "可程序验证的结果数据",
    "process_trace_supervision_data": "过程与步骤监督数据",
    "rollout_search_test_time_trace_data": "采样、搜索与推理时轨迹数据",
    "environment_agent_trajectory_data": "环境与智能体轨迹数据",
    "judgment_rubric_domain_expert_data": "评审、评分标准与领域专家数据",
    "data_construction_open_release_recipes": "数据构造与开源发布",
    "training_usage_optimization_objectives": "训练用途与优化目标",
    "scaling_rlvr_test_time_compute": "规模化、RLVR 与推理时计算",
    "benchmarks_evaluation_surfaces": "基准与评测",
    "frontier_reports_data_disclosure_ledger": "前沿模型报告与数据披露",
    "audit_failure_contamination_verifier_attacks": "审计、污染与失效模式",
}

TRACK_SHORT = {
    "foundations_and_primers": "Foundations & Primers",
    "instruction_demonstration_rationale_data": "Instruction / Demo / Rationale",
    "preference_reward_feedback_data": "Preference & Reward Feedback",
    "programmatically_verifiable_outcome_data": "Programmatic Verification",
    "process_trace_supervision_data": "Process / Trace Supervision",
    "rollout_search_test_time_trace_data": "Rollout / Search / TTC Trace",
    "environment_agent_trajectory_data": "Environment & Agent Trajectories",
    "judgment_rubric_domain_expert_data": "Judgment / Rubric / Domain Expert",
    "data_construction_open_release_recipes": "Construction & Open Releases",
    "training_usage_optimization_objectives": "Training Usage & Objectives",
    "scaling_rlvr_test_time_compute": "Scaling / RLVR / TTC",
    "benchmarks_evaluation_surfaces": "Benchmarks & Evaluation",
    "frontier_reports_data_disclosure_ledger": "Frontier Disclosure Ledger",
    "audit_failure_contamination_verifier_attacks": "Audit & Failure Modes",
}

# ---------------------------------------------------------------- facet values

STATUS = {
    "verified": ("Verified", "已验证"),
    "partial": ("Partial", "部分验证"),
    "needs_url": ("Needs link", "待补链接"),
}

CURATION = {
    "L2_metadata_complete": ("L2 · metadata complete", "L2 · 元数据完整"),
    "L2_artifact_verified": ("L2 · artifact verified", "L2 · 产物已核"),
    "L3_summary_ready": ("L3 · summary ready", "L3 · 摘要就绪"),
    "L3_curated": ("L3 · curated", "L3 · 已策展"),
    "L3_evidence": ("L3 · evidence ready", "L3 · 证据就绪"),
    "L4_carded": ("L4 · carded", "L4 · 已成卡"),
    "L4_chinese_review_ready": ("L4 · bilingual review ready", "L4 · 中文复核就绪"),
    "L5_audit_ready": ("L5 · audit ready", "L5 · 审计就绪"),
}

PRIORITY_ZH = {"必读": ("Must read", "必读"), "可读": ("Optional", "可读"), "暂缓": ("Deferred", "暂缓")}

CONFIDENCE = {
    "high": ("High", "高"),
    "medium": ("Medium", "中"),
    "low": ("Low", "低"),
}

# ---------------------------------------------------------------- reading sections

SECTIONS = [
    ("01_problem", "Problem", "问题"),
    ("02_core_idea", "Core idea", "核心思路"),
    ("03_method", "Method", "方法"),
    ("04_evidence", "Evidence", "证据"),
    ("05_novelty", "Novelty", "新意"),
    ("06_limitations", "Limitations", "局限"),
    ("07_usefulness", "Usefulness", "用途"),
    ("08_reading_notes", "Reading notes", "阅读笔记"),
    ("09_citation", "Citation", "引用"),
]

# ---------------------------------------------------------------- nested object keys

DATA_OBJECT = [
    ("object_type", "Object type", "对象类型"),
    ("record_type", "Record type", "记录类型"),
    ("unit_of_record", "Unit of record", "记录单位"),
    ("task_record", "Task record", "任务记录"),
    ("prompt_source", "Prompt source", "题目来源"),
    ("context_or_state", "Context / state", "上下文与状态"),
    ("context_state", "Context state", "上下文状态"),
    ("observation", "Observation", "观测"),
    ("action_space", "Action space", "动作空间"),
    ("answer_format", "Answer format", "答案格式"),
    ("answer_or_artifact", "Answer / artifact", "答案与产物"),
    ("trace_author", "Trace author", "轨迹作者"),
    ("trace_or_actions", "Trace / actions", "轨迹与动作"),
    ("process_fields", "Process fields", "过程字段"),
    ("process_labels", "Process labels", "过程标注"),
    ("episode_fields", "Episode fields", "轨迹字段"),
    ("environment_or_substrate", "Environment / substrate", "环境与基座"),
    ("verifier_or_reward", "Verifier / reward", "验证器与奖励"),
    ("verifier_output", "Verifier output", "验证器输出"),
    ("reward", "Reward", "奖励"),
    ("terminal_predicate", "Terminal predicate", "终止判定"),
    ("release_shape", "Release shape", "发布形态"),
    ("release_surface", "Release surface", "发布界面"),
    ("release_boundary", "Release boundary", "发布边界"),
    ("failed_records", "Failed records", "失败记录"),
    ("provenance", "Provenance", "数据来源溯源"),
]

RECIPE_METADATA = [
    ("base_model", "Base model", "基座模型"),
    ("teacher", "Teacher", "教师模型"),
    ("generator", "Generator", "生成器"),
    ("prompt_task_source", "Prompt / task source", "题目来源"),
    ("prompt_or_task_source", "Prompt / task source", "题目来源"),
    ("source_corpus", "Source corpus", "源语料"),
    ("sampling_protocol", "Sampling protocol", "采样协议"),
    ("rollout_count", "Rollout count", "采样次数"),
    ("temperature", "Temperature", "温度"),
    ("top_p", "Top-p", "Top-p"),
    ("search_or_scaffold", "Search / scaffold", "搜索与脚手架"),
    ("selection_threshold", "Selection threshold", "筛选阈值"),
    ("selection_rule", "Selection rule", "筛选规则"),
    ("filtering_rule", "Filtering rule", "过滤规则"),
    ("reward_schedule", "Reward schedule", "奖励安排"),
    ("verifier_training", "Verifier training", "验证器训练"),
    ("user_simulator", "User simulator", "用户模拟器"),
    ("reset_protocol", "Reset protocol", "重置协议"),
    ("buffer_policy", "Buffer policy", "缓冲策略"),
    ("seed_protocol", "Seed protocol", "随机种子协议"),
    ("inference_budget", "Inference budget", "推理预算"),
    ("optimizer_or_scaffold", "Optimizer / scaffold", "优化器与脚手架"),
    ("optimizer_or_training_scaffold", "Optimizer / training scaffold", "优化与训练脚手架"),
    ("cold_start", "Cold start", "冷启动"),
    ("release_scale", "Release scale", "发布规模"),
    ("final_release_scale", "Final release scale", "最终发布规模"),
    ("undisclosed_training_fields", "Undisclosed training fields", "未披露的训练字段"),
]

AUDIT = [
    ("source_mixture", "Source mixture", "来源与混配"),
    ("split", "Split", "数据划分"),
    ("benchmark_overlap", "Benchmark overlap", "与基准的重叠"),
    ("decontamination", "Decontamination", "去污染"),
    ("successful_and_failed_sample_retention", "Successful / failed retention", "成功与失败样本保留"),
    ("successful_failed_retention", "Successful / failed retention", "成功与失败样本保留"),
    ("replay", "Replay", "可回放性"),
    ("replayability", "Replayability", "可回放性"),
    ("environment_versioning", "Environment versioning", "环境版本"),
    ("verifier_or_judge_failure_modes", "Verifier / judge failure modes", "验证器与评审失效模式"),
    ("known_failure_modes", "Known failure modes", "已知失效模式"),
    ("privacy_or_consent", "Privacy / consent", "隐私与授权"),
    ("security", "Security", "安全"),
    ("license", "License", "许可"),
    ("lineage", "Lineage", "数据谱系"),
    ("release_version", "Release version", "发布版本"),
    ("version_drift", "Version drift", "版本漂移"),
    ("artifact_release_state", "Artifact release state", "产物发布状态"),
    ("metadata_status", "Metadata status", "元数据状态"),
    ("remaining_unknowns", "Remaining unknowns", "尚未确定的问题"),
    ("experimental_evidence", "Experimental evidence", "实验证据"),
    ("citation_status", "Citation status", "引用核验"),
    ("confidence", "Confidence", "置信度"),
    ("notes", "Notes", "核验备注"),
]

VERIFICATION = [
    ("link_verified", "Link verified", "链接已核"),
    ("artifact_verified", "Artifact verified", "产物已核"),
    ("verified_at", "Verified at", "核验时间"),
    ("verified_by", "Verified by", "核验人"),
    ("confidence", "Confidence", "置信度"),
    ("notes", "Notes", "备注"),
]

# Artifact keys promoted to the card grid footer, in display order.
PRIMARY_ARTIFACTS = ["paper", "arxiv", "venue", "openreview", "acl", "pmlr", "cvf", "doi"]
GRID_ARTIFACTS = ["code", "data", "huggingface", "project"]

ARTIFACTS = {
    "paper": ("Paper", "论文"),
    "paper_pdf": ("PDF", "PDF"),
    "arxiv": ("arXiv", "arXiv"),
    "doi": ("DOI", "DOI"),
    "venue": ("Venue", "发表处"),
    "openreview": ("OpenReview", "OpenReview"),
    "acl": ("ACL", "ACL"),
    "pmlr": ("PMLR", "PMLR"),
    "cvf": ("CVF", "CVF"),
    "code": ("Code", "代码"),
    "code_snapshot": ("Code snapshot", "代码快照"),
    "data": ("Data", "数据"),
    "data_snapshot": ("Data snapshot", "数据快照"),
    "dataset_card": ("Dataset card", "数据集卡片"),
    "huggingface": ("Hugging Face", "Hugging Face"),
    "project": ("Project", "项目主页"),
    "model": ("Model", "模型"),
    "models": ("Models", "模型"),
    "release": ("Release", "发布页"),
    "leaderboard": ("Leaderboard", "榜单"),
    "trajectories": ("Trajectories", "轨迹"),
    "logs": ("Logs", "日志"),
    "license": ("License", "许可"),
    "supplementary": ("Supplementary", "附录"),
    "bibtex": ("BibTeX", "BibTeX"),
}

# Over 400 distinct `needs_*` kinds appear across the integrated tracks, so this map
# only covers the high-volume ones; the rest fall back to a humanized key.
NEEDS = {
    "unknown": ("Unknown", "未知"),
    "needs_audit": ("Audit", "审计"),
    "needs_metadata": ("Metadata", "元数据"),
    "needs_license": ("License", "许可"),
    "needs_data": ("Data", "数据"),
    "needs_verifier": ("Verifier", "验证器"),
    "needs_decontamination": ("Decontamination", "去污染"),
    "needs_replay": ("Replay", "可回放"),
    "needs_code": ("Code", "代码"),
    "needs_lineage": ("Lineage", "谱系"),
    "needs_release": ("Release", "发布"),
    "needs_snapshot": ("Snapshot", "快照"),
    "needs_reproducibility": ("Reproducibility", "可复现"),
    "needs_reproduction": ("Reproduction", "复现"),
    "needs_verifier_audit": ("Verifier audit", "验证器审计"),
    "needs_license_audit": ("License audit", "许可审计"),
    "needs_provenance": ("Provenance", "来源溯源"),
    "needs_split": ("Split", "数据划分"),
    "needs_trajectory_release": ("Trajectory release", "轨迹发布"),
    "needs_release_manifest": ("Release manifest", "发布清单"),
    "needs_judge_audit": ("Judge audit", "评审审计"),
    "needs_contamination_audit": ("Contamination audit", "污染审计"),
    "needs_trace_release": ("Trace release", "轨迹发布"),
    "needs_manifest": ("Manifest", "清单"),
    "needs_rights": ("Rights", "权利"),
    "needs_split_audit": ("Split audit", "划分审计"),
    "needs_version_pin": ("Version pin", "版本固定"),
    "needs_privacy": ("Privacy", "隐私"),
    "needs_data_release": ("Data release", "数据发布"),
    "needs_environment": ("Environment", "环境"),
    "needs_reward": ("Reward", "奖励"),
    "needs_security": ("Security", "安全"),
    "needs_url": ("Link", "链接"),
    "needs_link": ("Link", "链接"),
}


def humanize(key: str) -> str:
    text = str(key or "").replace("_", " ").strip()
    return text[:1].upper() + text[1:] if text else ""


def ordered_pairs(spec, obj):
    """Return [(key, label_en, label_zh, value)] with core keys first, tail preserved."""
    if not isinstance(obj, dict):
        return []
    known = {key: (en, zh) for key, en, zh in spec}
    out = []
    for key, en, zh in spec:
        if key in obj and obj[key] not in (None, "", [], {}):
            out.append((key, en, zh, obj[key]))
    for key, value in obj.items():
        if key in known or value in (None, "", [], {}):
            continue
        out.append((key, humanize(key), humanize(key), value))
    return out
