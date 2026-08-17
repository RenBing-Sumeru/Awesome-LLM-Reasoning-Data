输入包括长自然语言业务 instruction、输入 `.xlsx` workbook、任务类别 metadata 和 scaffolded agent environment。输出包括提交的 workbook、modified-cell 记录、task-level accuracy，以及 visualization checklist judgment。

benchmark 共 321 题：Financial Modeling 100、Debugging 100、Template 97、Visualization 24。作者基于公开业务和金融材料构建 gold-standard spreadsheets，包括 reports、corporate filings，以及 NYU Stern Damodaran dataset、Screener.in、Bloomberg、Bseindia 等来源；再把完整 workbook 转成任务输入，例如移除目标区域、注入受控错误或指定可视化目标。任务要求答案唯一、instruction 自包含，并只依赖标准金融/业务领域惯例。每题由两名未参与构造的专家独立求解，分歧会触发修订；论文报告专家标注工作量超过 1,500 小时。

评测使用基于 SWE-agent 的 observe-reason-act scaffold。agent 可用 `bash`、只读 `view_xlsx` 和 `submit`，运行在 Python 3.11 / Debian Bullseye Docker、无网络、最多 50 turns。workbook 任务中，Modification 衡量目标 cell computed value 匹配率，Accuracy 要求所有应修改 cell 正确且不应修改 cell 不被破坏。Visualization 需要在 Windows 上通过 Excel/WPS COM 导出 chart image，再由 GLM-4.6V checklist judge 评分。复现必须固定数据 release、代码 revision、spreadsheet 引擎、VLM judge/API 版本、scaffold、turn budget 和不可再分发 raw source 的边界。
