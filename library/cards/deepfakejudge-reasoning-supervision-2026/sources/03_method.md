1. **Collect images:** Real images, fully synthetic images from recent generators, and locally edited images are combined to create an out-of-distribution forgery benchmark.
2. **Annotate visual cues:** A reasoning subset receives authenticity labels, key artifacts, localized regions, and verifiable explanations, forming visually grounded seed supervision.
3. **Generate candidate rationales:** Multiple detectors and generators produce reasoning of varying quality for each image, with rewriting and controlled degradation expanding quality levels.
4. **Bootstrap the judge:** A generator–evaluator process trains or calibrates an MLLM judge from human seeds, producing 1–5 pointwise scores, pairwise winners, and evaluation rationales.
5. **Human meta-evaluation:** Independent human pointwise and pairwise judgments are collected on a held-out subset to test judge–human alignment rather than validating model-generated labels with the same model.

