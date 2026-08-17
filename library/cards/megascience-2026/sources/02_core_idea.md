MegaScience combines verified textbook references with source-specific selection and solution annotation to release a 1.25M seven-discipline reasoning mixture. Relative to unfiltered public science QA aggregation, it makes question, generated answer, subject, reference answer, and source the reusable target and uses reference-answer checks, difficulty filtering, minhash deduplication, and benchmark decontamination as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: MegaScience
Official URL: https://huggingface.co/datasets/MegaScience/MegaScience
Scale: 1.25M science reasoning instances, including a 650K TextbookReasoning component from about 12.8K textbook questions
Record form: question, generated answer, subject, reference answer, and source
File / storage format: Parquet question-answer records
Domains / languages: English physics, chemistry, biology, materials, astronomy, earth science, and general science
Construction and filtering: language models annotate step-by-step solutions against extracted reference answers; reference-answer checks, difficulty filtering, minhash deduplication, and benchmark decontamination
License / access constraints: CC-BY-NC-SA-4.0
Intended use: science reasoning SFT
