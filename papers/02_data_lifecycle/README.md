# 🛠️ Data Lifecycle

> Best for builders who need to construct, train with, scale, evaluate, disclose, and audit reasoning data.

Follow the lifecycle from construction recipes through training objectives, scaling claims, benchmarks, frontier disclosures, and failure audits.

## Tracks

| Track | Main question | Entries | Jump |
|---|---|---:|---|
| 🏗️ Construction & Open Releases | building, filtering, releasing, and reproducing reasoning datasets | 0 | [08_data_construction_open_release_recipes.md](08_data_construction_open_release_recipes.md) |
| 🎯 Training Usage & Objectives | how data enters SFT, DPO, RM, PRM, RLVR, agents, evaluation, and audit | 0 | [09_training_usage_optimization_objectives.md](09_training_usage_optimization_objectives.md) |
| 📈 Scaling / RLVR / TTC | data scale, RLVR, verifier scaling, pass@k, and inference budget claims | 30 | [10_scaling_rlvr_test_time_compute.md](10_scaling_rlvr_test_time_compute.md) |
| 🧰 Benchmarks & Evaluation | evaluation surfaces and reusable feedback contracts | 0 | [11_benchmarks_evaluation_surfaces.md](11_benchmarks_evaluation_surfaces.md) |
| 🚀 Frontier Disclosure Ledger | reading frontier reports as partial data-recipe disclosures | 0 | [12_frontier_reports_data_disclosure_ledger.md](12_frontier_reports_data_disclosure_ledger.md) |
| 🧯 Audit & Failure Modes | leakage, contamination, verifier gaming, judge attacks, and reproducibility failures | 0 | [13_audit_failure_contamination_verifier_attacks.md](13_audit_failure_contamination_verifier_attacks.md) |

## Lifecycle Checklist

| Stage | Question to answer before release |
|---|---|
| Task / source mining | Where do prompts, tasks, repos, tools, cases, or benchmarks come from? |
| Schema / data-object design | What is serialized: answer, trace, step label, reward, trajectory, rubric, or benchmark item? |
| Teacher / generator production | Who writes the answer or trace, and with which sampling policy? |
| Rollout / search expansion | Are rejected candidates, trees, budgets, and selector scores preserved? |
| Verifier / reward / judge design | What actually decides success, correctness, preference, or safety? |
| Filtering / difficulty control | Which examples are removed, deduplicated, decontaminated, or banded by pass rate? |
| Packaging for training | Does the record feed SFT, DPO, RM, PRM, RLVR, agent training, evaluation, or audit? |
| Scaling / refresh | How do data size, verifier coverage, reuse, and inference budget change over time? |
| Release / audit docs | Are license, lineage, splits, source mixture, hidden teacher effects, and known failures disclosed? |

## Back to Paper Atlas

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
