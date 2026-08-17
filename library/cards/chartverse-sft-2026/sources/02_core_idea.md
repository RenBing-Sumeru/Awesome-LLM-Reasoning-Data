ChartVerse generates charts from executable programs and releases questions with both code solutions and long reasoning traces tied to known ground truth. Relative to web-mined chart QA and template-only synthetic chart sets, it makes id, image list, chart-generating code, question, answer, executable solution, and CoT solution the reusable target and uses program execution, answer checking, rendering validation, and difficulty/failure-rate selection as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 9（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=ChartVerse%3A+Scaling+Chart+Reasoning+via+Reliable+Programmatic+Synthesis+from+Scratch&author=Zheng+Liu&hl=en）

Open dataset: yes
Dataset name: ChartVerse-SFT-1.8M
Official URL: https://huggingface.co/datasets/opendatalab/ChartVerse-SFT-1.8M
Scale: 1.8M verified chart QA pairs over about 800K unique charts
Record form: id, image list, chart-generating code, question, answer, executable solution, and CoT solution
File / storage format: Parquet records plus referenced chart images
Domains / languages: English chart perception, numerical reasoning, and program synthesis
Construction and filtering: language and vision teachers write questions and long solutions against program ground truth; program execution, answer checking, rendering validation, and difficulty/failure-rate selection
License / access constraints: Apache-2.0
Intended use: chart-reasoning SFT with a separate 40K RL subset
