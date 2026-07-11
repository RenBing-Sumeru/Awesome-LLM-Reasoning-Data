#!/usr/bin/env python3
"""Verified post-2025-07-11 candidates for programmatically checked outcomes.

This declaration is intentionally side-effect free.  Task 2 consumes it to create
Card directories only after the candidates have passed the review gate.
"""
from __future__ import annotations

from datetime import date
import json
from pathlib import Path

import yaml

if __package__:
    from . import library
else:  # pragma: no cover - exercised by the documented script entry point
    import library


CATEGORY_ID = "programmatically_verifiable_outcome_data"
EARLIEST_RELEASE_DATE = date(2025, 7, 11)

# (id, title, year, venue, authors, primary_url, verifier_kind, impact_signal)
PAPERS = [
    (
        "formalproofbench-2026",
        "FormalProofBench: Can Models Write Graduate Level Math Proofs That Are Formally Verified?",
        2026,
        "ICLR 2026 VerifAI-2 Workshop / arXiv",
        [
            "Nikil Ravi",
            "Kexing Ying",
            "Vasilii Nesterov",
            "Rayan Krishnan",
            "Elif Uskuplu",
            "Bingyu Xia",
            "Janitha Aswedige",
            "Langston Nashold",
        ],
        "https://arxiv.org/abs/2603.26996",
        "Lean 4 kernel acceptance of a submitted proof",
        "ICLR 2026 VerifAI-2 paper; graduate-level Lean benchmark from Vals AI and EPFL authors",
    ),
    (
        "verisoftbench-2026",
        "VeriSoftBench: Repository-Scale Formal Verification Benchmarks for Lean",
        2026,
        "arXiv",
        ["Yutong Xin", "Qiaochu Chen", "Greg Durrett", "Işil Dillig"],
        "https://arxiv.org/abs/2602.18307",
        "Lean 4 type checker on repository-context proof obligations",
        "Open 500-obligation software-verification benchmark from UT Austin formal-methods researchers",
    ),
    (
        "ntp4vc-2026",
        "Neural Theorem Proving for Verification Conditions: A Real-World Benchmark",
        2026,
        "ICLR 2026",
        [
            "Qiyuan Xu",
            "Xiaokun Luan",
            "Renxi Wang",
            "Joshua Ong Jun Leang",
            "Peixin Wang",
            "Haonan Li",
            "Wenda Li",
            "Conrad Watt",
        ],
        "https://arxiv.org/abs/2601.18944",
        "Isabelle, Lean, and Rocq proof-checker acceptance for verification conditions",
        "ICLR 2026 conference paper; first real-world multi-language VC-proving benchmark",
    ),
    (
        "leap-formal-mathematics-2026",
        "LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks",
        2026,
        "arXiv",
        [
            "Po-Nien Kung",
            "Linfeng Song",
            "Dawsen Hwang",
            "Jinsung Yoon",
            "Chun-Liang Li",
            "Simone Severini",
            "Mirek Olšák",
            "Edward Lockhart",
            "Quoc V. Le",
            "Burak Gokturk",
            "Thang Luong",
            "Tomas Pfister",
            "Nanyun Peng",
        ],
        "https://arxiv.org/abs/2606.03303",
        "Lean compiler checks every generated proof and proof-DAG composition",
        "Google research technical report; introduces Lean-IMO-Bench and reports all 12 2025 Putnam problems solved",
    ),
    (
        "hilbert-recursively-building-formal-proofs-2025",
        "Hilbert: Recursively Building Formal Proofs with Informal Reasoning",
        2025,
        "ICLR 2026",
        ["Sumanth Varambally", "Thomas Voice", "Yanchao Sun", "Zhifeng Chen", "Rose Yu", "Ke Ye"],
        "https://arxiv.org/abs/2509.22819",
        "Lean 4 proof-assistant acceptance and feedback during recursive proof repair",
        "ICLR 2026 conference paper from Apple/UC San Diego; public-model PutnamBench best reported result",
    ),
    (
        "mcpmark-2025",
        "MCPMark: A Benchmark for Stress-Testing Realistic and Comprehensive MCP Use",
        2025,
        "ICLR 2026",
        [
            "Zijian Wu",
            "Xiangyan Liu",
            "Xinyuan Zhang",
            "Lingjun Chen",
            "Fanqing Meng",
            "Lingxiao Du",
            "Yiran Zhao",
            "Fanshi Zhang",
            "Yaoqi Ye",
            "Jiawei Wang",
            "Zirui Wang",
            "Jinjie Ni",
            "Yufan Yang",
            "Arvin Xu",
            "Michael Qizhe Shieh",
        ],
        "https://arxiv.org/abs/2509.24002",
        "Task-specific programmatic scripts check final state across MCP tool environments",
        "ICLR 2026 conference benchmark with 127 stateful MCP tasks and released execution tooling",
    ),
    (
        "gvpo-interactive-coding-agents-2025",
        "Group Verification-based Policy Optimization for Interactive Coding Agents",
        2025,
        "ICLR 2026",
        [
            "Silong Dai",
            "Changzhi Sun",
            "Haolun Wu",
            "Huanran Zheng",
            "Tao Ji",
            "Junchi Yan",
            "Yuanbin Wu",
            "Dell Zhang",
            "Xiaoling Wang",
            "Xuelong Li",
        ],
        "https://openreview.net/forum?id=RY47Tq0VsV",
        "AppWorld goal tests plus deterministic compilation, exception, and partial-test feedback",
        "ICLR 2026 conference paper; directly combines outcome- and process-verifiable reward signals",
    ),
    (
        "utrl-unit-test-adversarial-rl-2025",
        "Learning to Generate Unit Test via Adversarial Reinforcement Learning",
        2025,
        "ICLR 2026",
        ["Dongjun Lee", "Changho Hwang", "Kimin Lee"],
        "https://openreview.net/forum?id=VqjNYF9nbP",
        "Executable unit-test pass/fail and discrimination rewards",
        "ICLR 2026 conference paper from KAIST and Microsoft Research; generated tests outperform GPT-4.1/GPT-4o in reported evaluation",
    ),
    (
        "recode-h-2025",
        "RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback",
        2025,
        "ICLR 2026",
        [
            "Chunyu Miao",
            "Henry Peng Zou",
            "Yangning Li",
            "Yankai Chen",
            "Yibo Wang",
            "Fangxin Wang",
            "Yifan Li",
            "Wooseong Yang",
            "Bowei He",
            "Xinni Zhang",
            "Dianzhi Yu",
            "Hanchen Yang",
            "Hoang H. Nguyen",
            "Yue Zhou",
            "Jie Yang",
            "Jizhou Guo",
            "Wenzhe Fan",
            "Chin-Yuan Yeh",
            "Panpan Meng",
            "Liancheng Fang",
            "Jinhu Qi",
            "Wei-Chieh Huang",
            "Zhengyao Gu",
            "Yuwei Han",
            "Langzhou He",
            "Yuyao Yang",
            "Yinghui Li",
            "Hai-Tao Zheng",
            "Xue Liu",
            "Irwin King",
            "Philip S. Yu",
        ],
        "https://openreview.net/forum?id=IKnuyyPHCV",
        "Repository unit tests decide executable research-code task completion",
        "ICLR 2026 conference benchmark: 102 paper/repository tasks with executable unit tests and interactive-feedback protocol",
    ),
    (
        "impossiblebench-2025",
        "ImpossibleBench: Measuring LLMs' Propensity of Exploiting Test Cases",
        2025,
        "ICLR 2026",
        ["Ziqian Zhong", "Aditi Raghunathan", "Nicholas Carlini"],
        "https://openreview.net/forum?id=SeO4vyAj7E",
        "Unit-test outcome: passing a deliberately impossible task deterministically flags specification-violating behavior",
        "ICLR 2026 conference paper from Carnegie Mellon and Anthropic; released framework exposes test-suite exploitation",
    ),
]


RELEASE_DATES = {
    "formalproofbench-2026": "2026-03-02",
    "verisoftbench-2026": "2026-02-20",
    "ntp4vc-2026": "2025-09-19",
    "leap-formal-mathematics-2026": "2026-06-02",
    "hilbert-recursively-building-formal-proofs-2025": "2025-09-26",
    "mcpmark-2025": "2025-09-19",
    "gvpo-interactive-coding-agents-2025": "2025-09-19",
    "utrl-unit-test-adversarial-rl-2025": "2025-08-28",
    "recode-h-2025": "2025-09-05",
    "impossiblebench-2025": "2025-10-23",
}


CARD_DETAILS = {
    "formalproofbench-2026": {
        "institutions": ["Vals AI", "EPFL"],
        "paper_type_ch": "形式化数学证明 benchmark", "tag": "lean4",
        "source_role": ["benchmark", "data_release"],
        "verification_contract": ["programmatic"],
        "domains": ["formal-mathematics", "lean4", "graduate-mathematics"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "graduate-level mathematics statements, Lean 4 theorem contexts, submitted proof terms, and kernel verdicts",
        "core_idea": "It makes graduate-level mathematical proving measurable by requiring a model to emit Lean 4 code that the kernel accepts.",
        "pipeline": "A model receives a formal theorem and its imported context, writes a Lean proof, and the benchmark records compilation success or failure from Lean 4.",
        "baseline": "Olympiad and undergraduate formal-math suites such as miniF2F or Putnam-style sets leave the graduate-level difficulty boundary under-measured.",
        "caveat": "Pin the Lean/mathlib version, theorem imports, split provenance, and statement licenses before treating accepted proofs as reusable training data.",
        "zh_data_object": "研究生层次数学命题、Lean 4 定理上下文、模型提交的 proof term 与内核判定",
        "zh_core_idea": "它要求模型输出能被 Lean 4 内核接受的代码，从而把研究生层次数学证明变成可度量任务。",
        "zh_pipeline": "模型读取形式化定理及其 import 上下文，生成 Lean 证明；评测记录 Lean 4 编译成功或失败。",
        "zh_baseline": "miniF2F、Putnam 类奥赛或本科题集较少覆盖研究生层次的形式化证明难度。",
        "zh_caveat": "复用前要固定 Lean/mathlib 版本、定理 import、切分来源和题目许可证；内核通过并不自动解决数据来源问题。",
    },
    "verisoftbench-2026": {
        "institutions": ["The University of Texas at Austin"],
        "paper_type_ch": "仓库级 Lean 软件验证 benchmark", "tag": "repository-verification",
        "source_role": ["benchmark", "data_release"],
        "verification_contract": ["programmatic"],
        "domains": ["formal-verification", "lean4", "software-verification"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "repository-context Lean proof obligations, dependency imports, model proof edits, and type-checker outcomes",
        "core_idea": "It shifts formal-proof evaluation from isolated theorem statements to proof obligations that require real repository context.",
        "pipeline": "For each obligation, the system supplies the checked-out Lean repository context; a model proposes proof code and Lean 4 type-checking supplies the terminal verdict.",
        "baseline": "Standalone Lean theorem benchmarks abstract away imports, local definitions, and dependency failures that occur in software verification repositories.",
        "caveat": "Reproduce from pinned repository commits and dependency locks; audit obligation provenance, benchmark splits, and each repository license.",
        "zh_data_object": "带仓库上下文的 Lean 证明义务、依赖 import、模型 proof edit 与 type checker 结果",
        "zh_core_idea": "它把评测从孤立定理转为需要真实仓库上下文的证明义务。",
        "zh_pipeline": "系统提供检出的 Lean 仓库上下文，模型补写证明代码，Lean 4 type checker 给出最终通过或失败。",
        "zh_baseline": "单条 Lean 定理 benchmark 会抽掉 import、本地定义和依赖失败，而这些正是软件验证仓库中的真实难点。",
        "zh_caveat": "需要从固定 commit 与依赖锁文件复现，并审计证明义务来源、数据切分与各仓库许可证。",
    },
    "ntp4vc-2026": {
        "institutions": [],
        "paper_type_ch": "多证明器验证条件证明 benchmark", "tag": "verification-conditions",
        "source_role": ["benchmark", "data_release"],
        "verification_contract": ["programmatic"],
        "domains": ["verification-conditions", "isabelle", "lean4", "rocq"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "real-world verification conditions, prover-specific contexts, generated proofs, and acceptance results from Isabelle, Lean, or Rocq",
        "core_idea": "It evaluates neural theorem proving on verification conditions drawn from real formal-development workflows and across three proof assistants.",
        "pipeline": "The benchmark presents a verification condition with its target-language context, a model synthesizes a proof, and Isabelle, Lean, or Rocq decides whether that proof is accepted.",
        "baseline": "Synthetic or single-assistant theorem suites do not expose the language and context variation present in verification-condition proving.",
        "caveat": "Check prover versions, imported libraries, condition extraction provenance, and whether metrics compare equivalent search budgets across assistants.",
        "zh_data_object": "真实软件验证条件、各证明器的上下文、模型生成证明，以及 Isabelle、Lean 或 Rocq 的接受结果",
        "zh_core_idea": "它在真实形式化开发的验证条件上、并跨三种证明器评测神经定理证明。",
        "zh_pipeline": "benchmark 提供验证条件和目标语言上下文，模型综合证明，Isabelle、Lean 或 Rocq 决定是否接受。",
        "zh_baseline": "合成或单一证明器题集看不到验证条件任务中的语言差异和上下文依赖。",
        "zh_caveat": "复现时要核对证明器版本、import 库、条件抽取来源，以及跨证明器的搜索预算是否等价。",
    },
    "leap-formal-mathematics-2026": {
        "institutions": ["Google Research"],
        "paper_type_ch": "Agentic 形式化数学系统与 benchmark", "tag": "agentic-formal-math",
        "source_role": ["model_report", "benchmark"],
        "verification_contract": ["programmatic"],
        "domains": ["formal-mathematics", "lean4", "agentic-reasoning"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "Lean formal-math problems, agent-generated proof subgoals, proof-DAG nodes, compiled proofs, and benchmark outcomes",
        "core_idea": "LEAP uses an agentic proof-search framework to compose formally checked subproofs into a proof DAG rather than relying on one-shot proof generation.",
        "pipeline": "Agents decompose a Lean theorem into subgoals, search and verify candidate subproofs with the Lean compiler, then compose accepted nodes into a final proof DAG.",
        "baseline": "Single-pass proof generation and linear tactic search provide weaker reuse of independently checked subproofs.",
        "caveat": "Audit the agent search budget, theorem translation, Lean-IMO-Bench split and license, and the exact protocol behind the reported Putnam results.",
        "zh_data_object": "Lean 形式化数学题、agent 生成的子目标、proof-DAG 节点、已编译证明与 benchmark 结果",
        "zh_core_idea": "LEAP 将一次性证明生成改为 agent 搜索并组合已形式化验证的子证明 DAG。",
        "zh_pipeline": "agent 把 Lean 定理拆为子目标，搜索候选子证明并由 Lean 编译器验证，再把通过的节点组合为最终 proof DAG。",
        "zh_baseline": "单次生成证明或线性 tactic 搜索较难复用彼此独立验证过的子证明。",
        "zh_caveat": "要审计 agent 搜索预算、命题翻译、Lean-IMO-Bench 的切分和许可证，以及 Putnam 报告结果的具体协议。",
    },
    "hilbert-recursively-building-formal-proofs-2025": {
        "institutions": ["Apple", "University of California, San Diego"],
        "paper_type_ch": "递归式 Lean 形式化证明方法", "tag": "proof-repair",
        "source_role": ["model_report", "process_supervision"],
        "verification_contract": ["programmatic"],
        "domains": ["formal-mathematics", "lean4", "proof-repair"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "formal Lean goals, informal reasoning hints, recursively generated subproofs, compiler feedback, and final kernel verdicts",
        "core_idea": "Hilbert lets informal reasoning guide recursive construction and repair of Lean proofs while the proof assistant remains the acceptance authority.",
        "pipeline": "The system proposes an informal decomposition, generates Lean subproofs, compiles them, feeds failures back into recursive repair, and terminates only on Lean 4 acceptance.",
        "baseline": "Direct one-shot formalization ignores the useful planning signal in informal reasoning and discards compiler feedback after a failed attempt.",
        "caveat": "Separate gains from informal hints, recursion depth, model choice, and search budget; pin Lean versions and inspect PutnamBench split overlap.",
        "zh_data_object": "形式化 Lean 目标、非形式化推理提示、递归生成的子证明、编译反馈和最终内核判定",
        "zh_core_idea": "Hilbert 用非形式化推理规划递归的 Lean 证明与修复，但是否接受仍完全由证明器决定。",
        "zh_pipeline": "系统先给出非形式化分解，再生成 Lean 子证明并编译；失败反馈进入递归修复，只有 Lean 4 接受才终止。",
        "zh_baseline": "直接一次性形式化忽略了非形式化规划信号，也会在失败后丢掉编译器反馈。",
        "zh_caveat": "应区分非形式化提示、递归深度、模型和搜索预算的贡献，并固定 Lean 版本、检查 PutnamBench 切分重叠。",
    },
    "mcpmark-2025": {
        "institutions": [],
        "paper_type_ch": "有状态 MCP 工具使用 benchmark", "tag": "mcp-environment",
        "source_role": ["benchmark", "agent_environment", "data_release"],
        "verification_contract": ["programmatic", "environmental"],
        "domains": ["agents", "model-context-protocol", "tool-use"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "natural-language MCP tasks, multi-server tool states, agent action traces, final resource states, and task-specific checker outputs",
        "core_idea": "MCPMark makes realistic MCP tool use evaluable through stateful environments whose final states are checked by scripts rather than by an LLM judge.",
        "pipeline": "An agent invokes MCP tools across the configured servers; after the trajectory, a task-specific program examines the resulting state and returns success or failure.",
        "baseline": "Static function-calling or single-turn tool benchmarks do not measure whether a multi-step MCP trajectory leaves the required state behind.",
        "caveat": "Recreate server images, reset policies, credentials, task seeds, and checker scripts; a state checker can still under-specify intended user behavior.",
        "zh_data_object": "自然语言 MCP 任务、多服务器工具状态、agent 动作轨迹、最终资源状态和任务专用 checker 输出",
        "zh_core_idea": "MCPMark 用可脚本检查的有状态环境评测真实 MCP 工具使用，而不是交给 LLM 主观打分。",
        "zh_pipeline": "agent 在配置的多个 MCP server 上调用工具；轨迹结束后，任务专用程序检查最终状态并返回成功或失败。",
        "zh_baseline": "静态函数调用或单轮工具 benchmark 无法判断多步 MCP 轨迹是否真的留下了目标状态。",
        "zh_caveat": "复用时要复现 server 镜像、状态重置、凭据、任务 seed 与 checker 脚本；状态 checker 仍可能低规格化用户意图。",
    },
    "gvpo-interactive-coding-agents-2025": {
        "institutions": [],
        "paper_type_ch": "交互式代码 Agent 的验证奖励优化方法", "tag": "interactive-coding-rl",
        "source_role": ["agent_environment", "verifier_reward"],
        "verification_contract": ["programmatic", "environmental"],
        "domains": ["coding-agents", "reinforcement-learning", "appworld"],
        "training_use": ["rlvr", "agent_training", "evaluation"],
        "data_object": "AppWorld task states, group agent rollouts, code/tool actions, compiler and exception signals, partial tests, and final goal-test scores",
        "core_idea": "GVPO combines group policy optimization with outcome- and process-verifiable signals for agents acting in interactive coding environments.",
        "pipeline": "For each AppWorld task, the method samples a group of trajectories, evaluates final goal tests plus compilation, exception, and partial-test feedback, then optimizes from the verified signals.",
        "baseline": "Terminal-only GRPO-style rewards reveal little about where an interactive coding trajectory failed and provide no deterministic intermediate feedback.",
        "caveat": "Check the AppWorld release, task seeds, scaffold permissions, partial-test weights, and whether process feedback leaks task solutions.",
        "zh_data_object": "AppWorld 任务状态、成组 agent rollout、代码或工具动作、编译与异常信号、部分测试和最终目标测试分数",
        "zh_core_idea": "GVPO 把 group policy optimization 与交互式代码环境中的 outcome/process 可验证信号结合起来。",
        "zh_pipeline": "每个 AppWorld 任务采样一组轨迹，评测最终 goal test、编译、异常和部分测试反馈，再从这些已验证信号优化策略。",
        "zh_baseline": "只看终局的 GRPO 类奖励无法说明交互轨迹在哪一步失败，也没有确定性的中间反馈。",
        "zh_caveat": "要核对 AppWorld 版本、任务 seed、scaffold 权限、部分测试权重，以及过程反馈是否泄漏解法。",
    },
    "utrl-unit-test-adversarial-rl-2025": {
        "institutions": ["KAIST", "Microsoft Research"],
        "paper_type_ch": "对抗式单元测试生成强化学习方法", "tag": "unit-test-generation",
        "source_role": ["verifier_reward", "data_release"],
        "verification_contract": ["programmatic"],
        "domains": ["software-engineering", "unit-tests", "reinforcement-learning"],
        "training_use": ["rlvr", "agent_training", "evaluation"],
        "data_object": "program specifications, candidate implementations, generated unit tests, execution traces, pass/fail labels, and discrimination rewards",
        "core_idea": "UTRL treats a test generator and implementation generator as adversaries, using executable tests to reward tests that distinguish correct from incorrect code.",
        "pipeline": "The policy generates a unit test, runs it against candidate programs in a sandbox, receives pass/fail and discrimination outcomes, and updates the test generator with the adversarial reward.",
        "baseline": "Prompted test generation, mutation testing, or tests rewarded only for syntactic validity do not directly optimize discrimination through execution.",
        "caveat": "Audit sandbox isolation, hidden reference implementations, reward balance, flaky-test filtering, and whether the test suite overfits the sampled candidate programs.",
        "zh_data_object": "程序规格、候选实现、生成的单元测试、执行轨迹、pass/fail 标签和区分性奖励",
        "zh_core_idea": "UTRL 让测试生成器与实现生成器对抗，用可执行测试奖励能够区分正确与错误代码的测试。",
        "zh_pipeline": "策略生成单元测试，在沙箱中运行于候选程序，获得 pass/fail 和区分性结果，再用对抗奖励更新测试生成器。",
        "zh_baseline": "仅靠 prompt 的测试生成、mutation testing，或只奖励语法合法的测试，都不直接以执行区分性为优化目标。",
        "zh_caveat": "要审计沙箱隔离、隐藏参考实现、奖励平衡、flaky test 过滤，以及测试是否过拟合已采样的候选程序。",
    },
    "recode-h-2025": {
        "institutions": [],
        "paper_type_ch": "带交互反馈的科研代码开发 benchmark", "tag": "research-code",
        "source_role": ["benchmark", "agent_environment", "data_release"],
        "verification_contract": ["programmatic"],
        "domains": ["research-code", "coding-agents", "software-engineering"],
        "training_use": ["evaluation", "agent_training", "audit"],
        "data_object": "research-paper and repository tasks, code contexts, interactive human-feedback turns, implementation edits, and repository unit-test verdicts",
        "core_idea": "RECODE-H evaluates agents on research-code development where interactive feedback may guide work but executable repository tests decide completion.",
        "pipeline": "An agent reads a paper/repository task, edits the project through iterative feedback, and the released unit-test environment evaluates whether the final implementation completes the task.",
        "baseline": "Issue-resolution coding benchmarks rarely combine paper-linked research code with an explicit interactive-feedback protocol.",
        "caveat": "Inspect feedback collection, environment pinning, test completeness, paper/repository licenses, and the distinction between human guidance and ground-truth verification.",
        "zh_data_object": "论文与仓库中的科研代码任务、代码上下文、交互式人工反馈轮次、实现修改和仓库单元测试判定",
        "zh_core_idea": "RECODE-H 允许交互反馈引导科研代码开发，但是否完成仍由可执行仓库测试决定。",
        "zh_pipeline": "agent 读取论文或仓库任务，在迭代反馈中修改项目，最后由发布的单元测试环境判定实现是否完成任务。",
        "zh_baseline": "普通 issue 修复 benchmark 很少同时包含论文关联的科研代码和明确的交互反馈协议。",
        "zh_caveat": "应检查反馈如何收集、环境是否固定、测试是否完整、论文和仓库许可证，以及人工指导与真值验证的边界。",
    },
    "impossiblebench-2025": {
        "institutions": ["Carnegie Mellon University", "Anthropic"],
        "paper_type_ch": "测试用例利用风险 benchmark", "tag": "test-exploitation",
        "source_role": ["benchmark", "audit_failure"],
        "verification_contract": ["programmatic"],
        "domains": ["software-engineering", "agent-safety", "unit-tests"],
        "training_use": ["evaluation", "audit", "agent_training"],
        "data_object": "deliberately impossible programming tasks, visible test suites, submitted programs, sandbox results, and exploitation labels inferred from a passing outcome",
        "core_idea": "ImpossibleBench turns a passing result on a deliberately impossible task into a deterministic audit signal that the model exploited a test-suite gap rather than met the specification.",
        "pipeline": "A model receives an impossible task and visible tests, writes a program, and the harness executes it; passing tests deterministically flags test-case exploitation for that task.",
        "baseline": "Ordinary pass@k treats test success as correctness and therefore cannot expose cases where an agent satisfies an incomplete test suite while violating the stated task.",
        "caveat": "Audit the proof that each task is impossible, sandbox behavior, checker implementation, and false positives caused by ambiguous specifications rather than exploitation.",
        "zh_data_object": "被设计为不可能完成的编程任务、可见测试集、提交程序、沙箱结果，以及由“测试通过”推断出的利用标签",
        "zh_core_idea": "ImpossibleBench 把不可能任务上的测试通过变成确定性的审计信号：模型利用了测试空隙，而非满足规格。",
        "zh_pipeline": "模型获得不可能任务和可见测试，写出程序后由 harness 执行；对于该类任务，测试通过会确定性地标记测试用例利用。",
        "zh_baseline": "普通 pass@k 把测试通过视为正确，因此发现不了 agent 满足不完整测试却违背题目规格的情况。",
        "zh_caveat": "要审计每题确实不可能完成的论证、沙箱行为、checker 实现，以及规格歧义造成的假阳性。",
    },
}


def validate_candidates(root: Path | str | None = None) -> list[tuple]:
    """Return the reviewed candidates after checking library and source constraints."""
    known_categories = {str(category["id"]) for category in library.category_options(root)}
    if CATEGORY_ID not in known_categories:
        raise ValueError(f"missing required category: {CATEGORY_ID}")

    if len(PAPERS) != 10:
        raise ValueError(f"expected 10 candidates, found {len(PAPERS)}")
    if any(len(paper) != 8 for paper in PAPERS):
        raise ValueError("each candidate must have exactly eight fields")

    entry_ids = [paper[0] for paper in PAPERS]
    titles = [paper[1] for paper in PAPERS]
    if len(set(entry_ids)) != len(entry_ids):
        raise ValueError("candidate IDs must be unique")
    if len({title.casefold() for title in titles}) != len(titles):
        raise ValueError("candidate titles must be unique")
    if set(RELEASE_DATES) != set(entry_ids):
        raise ValueError("release-date audit must cover exactly the candidate IDs")
    if set(CARD_DETAILS) != set(entry_ids):
        raise ValueError("card details must cover exactly the candidate IDs")

    for entry_id, title, year, venue, authors, url, verifier_kind, impact_signal in PAPERS:
        if not all((entry_id, title, venue, verifier_kind, impact_signal)):
            raise ValueError(f"{entry_id}: candidate fields must be non-empty")
        if not isinstance(year, int) or year < 2025:
            raise ValueError(f"{entry_id}: year must be 2025 or later")
        if not isinstance(authors, list) or not authors or not all(isinstance(author, str) and author for author in authors):
            raise ValueError(f"{entry_id}: authors must be a non-empty list")
        if not isinstance(url, str) or not url.startswith("https://"):
            raise ValueError(f"{entry_id}: primary URL must use HTTPS")
        try:
            released_at = date.fromisoformat(RELEASE_DATES[entry_id])
        except (TypeError, ValueError) as error:
            raise ValueError(f"{entry_id}: release date must use ISO format") from error
        if released_at < EARLIEST_RELEASE_DATE:
            raise ValueError(f"{entry_id}: released before {EARLIEST_RELEASE_DATE.isoformat()}")

    cards = library.load_cards(root)
    existing_titles = {
        str(card["paper"].get("title") or "").casefold()
        for card in cards.values()
    }
    duplicate_ids = sorted(set(entry_ids) & set(cards))
    duplicate_titles = sorted({title.casefold() for title in titles} & existing_titles)
    if duplicate_ids or duplicate_titles:
        collisions = duplicate_ids + duplicate_titles
        raise ValueError(f"candidate Cards already exist: {', '.join(collisions)}")

    return PAPERS


def _write_json(path: Path, payload: dict) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def _substantive_sources(
    entry_id: str,
    title: str,
    venue: str,
    url: str,
    verifier_kind: str,
    impact_signal: str,
    detail: dict,
) -> dict[str, str]:
    released_at = RELEASE_DATES[entry_id]
    evidence_en = (
        f"\n\nSource and audit record: {title} — {url}. Venue/date: {venue}; first public release: {released_at}. "
        f"Deterministic verifier contract: {verifier_kind}. Data/evaluation object: {detail['data_object']}. "
        f"Actual pipeline: {detail['pipeline']} Quality/impact signal: {impact_signal}. "
        f"Reuse/audit caveat: {detail['caveat']}"
    )
    evidence_ch = (
        f"\n\n来源与审计记录：{title} — {url}。会议/日期：{venue}；首次公开日期：{released_at}。"
        f"确定性 verifier 契约：{verifier_kind}。数据对象/评测面：{detail['zh_data_object']}。"
        f"实际流程：{detail['zh_pipeline']} 质量/影响力信号：{impact_signal}。"
        f"复用/审计注意：{detail['zh_caveat']}"
    )
    return {
        "01_problem": (
            f"{title} asks how {detail['data_object']} can provide a rigorous outcome-data surface rather than a subjective model judgment. "
            f"Its decision boundary is programmatically verifiable outcomes: the result is a checker verdict, not merely a persuasive natural-language answer."
            + evidence_en
        ),
        "02_core_idea": (
            f"One-sentence contribution: {detail['core_idea']} The feedback contract is explicit: {verifier_kind}. "
            f"For this category, a record contains {detail['data_object']}; its closest comparison is {detail['baseline']}"
            + evidence_en
        ),
        "03_method": (
            f"Inputs are {detail['data_object']}. Pipeline: {detail['pipeline']} Outputs include a proposed artifact and an executable acceptance verdict. "
            f"The training/evaluation use is {', '.join(detail['training_use'])}. Reproducibility requires the official artifact and this audit boundary: {detail['caveat']}"
            + evidence_en
        ),
        "04_evidence": (
            f"The paper's evidence is tied to an executable terminal predicate rather than LLM-as-a-judge scoring. Its reported quality or impact signal is: {impact_signal}. "
            f"Before comparing scores, inspect the checker coverage and the release-specific experimental protocol at {url}."
        ),
        "05_novelty": (
            f"Prior-work baseline: {detail['baseline']} What changes is {detail['core_idea']} This is a current direction signal because the verifier is central to the data object, not an incidental evaluation metric. "
            f"What is not new is the underlying domain task; the reuse check remains {detail['caveat']}"
            + evidence_en
        ),
        "06_limitations": (
            f"A deterministic checker only proves conformance to its encoded contract. {detail['caveat']} The benchmark may therefore miss semantic quality outside that contract."
        ),
        "07_usefulness": (
            f"Use {title} to compare verifier contracts, data lineage, and executable terminal predicates against other cards in this category. "
            f"It is most useful when the evaluation harness at {url} is available alongside the paper."
        ),
        "08_reading_notes": (
            f"Remember the distinction between the domain task and its verifier: here the decisive outcome is {verifier_kind}. "
            f"Read the reported impact together with {detail['baseline']}"
        ),
        "09_citation": f"{title}. {venue}, {released_at}. Primary source: {url}.",
        "01_problem_ch": (
            f"{title} 关注如何用“{detail['zh_data_object']}”构成严格的 outcome data，而不是让模型主观评价另一个模型。"
            f"它的收录边界是程序可验证结果：结论来自 checker 判定，不是看似可信的自然语言回答。"
            + evidence_ch
        ),
        "02_core_idea_ch": (
            f"一句话贡献：{detail['zh_core_idea']} 反馈契约明确为：{verifier_kind}。"
            f"对本分类而言，一条记录包含 {detail['zh_data_object']}；最接近的比较基线是：{detail['zh_baseline']}"
            + evidence_ch
        ),
        "03_method_ch": (
            f"输入是 {detail['zh_data_object']}。流程：{detail['zh_pipeline']} 输出包括候选 artifact 和可执行的接受判定。"
            f"训练/评测用途包括：{', '.join(detail['training_use'])}。复现必须取得官方 artifact，并遵守这一审计边界：{detail['zh_caveat']}"
            + evidence_ch
        ),
        "04_evidence_ch": (
            f"论文的证据由可执行终局谓词支撑，而不是 LLM-as-a-judge 打分。其质量或影响力信号为：{impact_signal}。"
            f"比较分数前，应在 {url} 核对 checker 覆盖范围和该版本的实验协议。"
        ),
        "05_novelty_ch": (
            f"既有工作基线：{detail['zh_baseline']} 新变化是：{detail['zh_core_idea']} 它是当前方向信号，因为 verifier 是数据对象的中心，不是附带的评测指标。"
            f"并不新的是底层领域任务；复用时仍要检查：{detail['zh_caveat']}"
            + evidence_ch
        ),
        "06_limitations_ch": (
            f"确定性 checker 只能证明其编码契约内的合规性。{detail['zh_caveat']} 因而 benchmark 仍可能漏掉契约以外的语义质量。"
        ),
        "07_usefulness_ch": (
            f"可用 {title} 与本分类其他 Card 比较 verifier 契约、数据谱系和可执行终局谓词。"
            f"当能同时取得 {url} 中的评测 harness 时，它的复用价值最高。"
        ),
        "08_reading_notes_ch": (
            f"要区分领域任务和其 verifier：本论文决定结果的是“{verifier_kind}”。"
            f"阅读影响力结果时，应同时对照基线：{detail['zh_baseline']}"
        ),
        "09_citation_ch": f"{title}。{venue}，{released_at}。官方主来源：{url}。",
    }


def generate_cards(root: Path | str | None = None) -> list[Path]:
    """Create the reviewed candidates as complete Card-local L4 records."""
    candidates = validate_candidates(root)
    created: list[Path] = []
    for entry_id, title, year, venue, authors, url, verifier_kind, impact_signal in candidates:
        detail = CARD_DETAILS[entry_id]
        directory = library.card_dir(entry_id, root)
        sources = directory / "sources"
        sources.mkdir(parents=True, exist_ok=False)
        artifacts = {
            "paper": url,
            "arxiv": url if "arxiv.org" in url else None,
            "code": None,
            "data": None,
            "project": None,
            "huggingface": None,
            "doi": None,
            "venue": url if "openreview.net" in url else None,
            "openreview": url if "openreview.net" in url else None,
            "acl": None,
            "pmlr": None,
            "cvf": None,
            "bibtex": None,
        }
        paper = {
            "id": entry_id,
            "title": title,
            "year": year,
            "venue": venue,
            "authors": authors,
            "source_role": detail["source_role"],
            "verification_contract": detail["verification_contract"],
            "supervision_granularity": ["answer_level", "full_episode"],
            "domains": detail["domains"],
            "training_use": detail["training_use"],
            "construction_layer": ["search_substrate", "release_audit"],
            "artifacts": artifacts,
            "data_object": {
                "prompt_source": detail["data_object"],
                "trace_author": "Model or agent outputs evaluated by the paper's released protocol.",
                "answer_format": "Candidate artifact together with the executable verifier result.",
                "process_fields": ["task context", "candidate output", "verifier result", "release protocol"],
                "environment_or_substrate": detail["pipeline"],
                "verifier_or_reward": verifier_kind,
                "terminal_predicate": f"The supplied programmatic contract accepts the candidate: {verifier_kind}.",
            },
            "recipe_metadata": {
                "base_model": "See the paper's official experimental protocol.",
                "teacher": "Deterministic verifier or environment outcome.",
                "generator": detail["pipeline"],
                "filtering_rule": "Keep outcomes accepted or rejected by the stated executable contract.",
                "sampling_protocol": "Use the paper-reported splits, seeds, and rollout budget.",
                "rollout_count": None,
                "temperature": None,
                "inference_budget": "Audit the paper-reported search or execution budget.",
                "optimizer_or_scaffold": "See the official paper and released evaluation harness.",
            },
            "audit": {
                "source_mixture": "Primary paper source and its stated executable evaluation object.",
                "split": "Use only the release-specific split documented by the authors.",
                "decontamination": detail["caveat"],
                "license": "Verify the primary artifact and any underlying task/repository licenses before reuse.",
                "lineage": f"Primary source: {url}",
                "known_failure_modes": [detail["caveat"]],
                "citation_status": "verified",
                "confidence": "high",
                "notes": f"Release date audited as {RELEASE_DATES[entry_id]}; {impact_signal}",
            },
            "inclusion_reason": f"Recent programmatically verifiable outcome-data work: {impact_signal}",
            "related": [],
            "tags": ["programmatically-verifiable-outcome", "2025-2026", detail["tag"]],
            "status": "verified",
            "one_line": detail["core_idea"],
            "needs": ["needs_review: human curator should assess L5 promotion"],
            "one_line_summary": detail["core_idea"],
            "why_it_matters": f"It exposes {verifier_kind} as a reusable, auditable outcome contract.",
            "curation_level": "L4_carded",
            "verification": {
                "link_verified": True,
                "artifact_verified": False,
                "verified_at": "2026-07-11",
                "verified_by": "curation",
                "confidence": "high",
                "notes": f"Primary source and release date reviewed; {impact_signal}",
            },
            "category_ids": [CATEGORY_ID],
            "batch": {
                "id": "library-03-programmatic-verifier-2025-20",
                "request_sha256": "programmatic-outcome-data-2026-07-11",
                "primary_category_id": CATEGORY_ID,
            },
        }
        (directory / "paper.yaml").write_text(
            yaml.safe_dump(paper, allow_unicode=True, sort_keys=False, width=120), encoding="utf-8"
        )
        _write_json(
            directory / "header_zh.json",
            {
                "one_line_summary_ch": detail["zh_core_idea"],
                "reading_priority_ch": "必读",
                "paper_type_ch": detail["paper_type_ch"],
                "best_for_ch": "关注可执行 verifier、形式化证明、代码测试或 Agent 环境的研究者。",
                "confidence_ch": "高",
                "authors_ch": ", ".join(authors),
                "category_ids": [CATEGORY_ID],
                "updated_at": "2026-07-11T00:00:00Z",
            },
        )
        _write_json(
            directory / "institutions.json",
            {
                "institutions": detail["institutions"],
                "has_more": False,
                "no_institution": not detail["institutions"],
                "updated_at": "2026-07-11T00:00:00Z",
            },
        )
        _write_json(
            directory / "queue.json",
            {
                "title": title,
                "candidate_links": artifacts,
                "reason_to_include": f"{impact_signal}；结果由 {verifier_kind} 判定。",
                "decision_reason": "主来源、发布日期与程序化验证契约均已在候选审计中核对。",
                "search_status": "candidate",
                "review_note": "L4 内容已完成，仍等待人工 L5 决策。",
                "updated_at": "2026-07-11T00:00:00Z",
                "category_ids": [CATEGORY_ID],
            },
        )
        _write_json(
            directory / "review.json",
            {"state": "new", "updated_at": "2026-07-11T00:00:00Z"},
        )
        for filename, content in _substantive_sources(
            entry_id, title, venue, url, verifier_kind, impact_signal, detail
        ).items():
            (sources / f"{filename}.md").write_text(content.rstrip() + "\n", encoding="utf-8")
        created.append(directory)
    return created


if __name__ == "__main__":
    print(f"created cards: {len(generate_cards())}")
