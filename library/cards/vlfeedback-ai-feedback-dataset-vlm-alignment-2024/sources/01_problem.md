Vision-language alignment needs feedback on whether a response is useful, grounded in the image, and safe. Human multimodal annotation is costly, while prior datasets were smaller or focused on one dimension. A generic quality label cannot show whether an answer is fluent but visually hallucinated.

VLFeedback separates helpfulness, visual faithfulness, and ethical considerations. Each image instruction has several LVLM answers scored by GPT-4V with rationales, from which preference pairs are derived. It is public AI-feedback data, not human-ground-truth preference data.
