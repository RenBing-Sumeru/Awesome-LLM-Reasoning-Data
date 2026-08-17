The official paper and project describe MMMU as 11.5K multimodal questions across 30 subjects and 183 subfields. The paper reports a large gap between leading multimodal models and human experts, with frontier systems around the mid-50% range while expert human performance is reported near 88.6%.

The artifact evidence is the official GitHub evaluator, project page, CVF paper, and Hugging Face dataset. Row-level decisive evidence is the model's final normalized answer compared with the official target for that item, after the image and text prompt are fixed.

Evidence boundary: aggregate accuracy depends on image availability, preprocessing, prompt wording, answer extraction, split visibility, and whether the test answers are hidden or released. The benchmark score does not certify that the model used the visual evidence rather than dataset priors or textual shortcuts.
