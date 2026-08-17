Inputs are real iOS application screens selected from Apple App Store categories, captured at a fixed iPhone 11 resolution, plus a predefined 36-class UI element taxonomy. The paper reports 38 applications, 1,000 screens, 8 high-level app categories, 6 UI/UX annotators, and 27,367 annotated element instances.

Pipeline:
1. Select applications through App Store metadata and the iTunes Search API, then manually explore them to capture representative states such as onboarding, home screens, navigation menus, browsing, search, and forms.
2. Upload screenshots into a custom web annotation tool.
3. Draw tight bounding boxes around visible elements, assign taxonomy labels, and handle nested components as separate records when appropriate.
4. Validate annotations for missing elements, inaccurate boxes, ambiguous labels, redundancy, and taxonomy consistency.
5. Export structured JSON records for downstream evaluation.
6. Evaluate multimodal models by giving each full screenshot a fixed prompt and requiring schema-constrained JSON predictions.

Outputs are screenshot-level annotation files and benchmark predictions with element type and bounding-box fields. The verifier is a deterministic matching protocol: predicted boxes are matched one-to-one to ground truth, IoU >= 0.5 is required, and the predicted class must equal the expert class. The reported scoring surface is precision, recall, and F1 over the complete 1,000-screen dataset.

Reproducibility requires pinning the dataset revision, annotation schema, prompt template, API model IDs, API dates, deterministic generation settings, n8n/Docker workflow, image resolution, and evaluation script. Because closed-source APIs can change, scores are not stable evidence unless the serving version and date are preserved.
