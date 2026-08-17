1. **Collect multimodal problems:** Select visual QA and reasoning tasks requiring both image evidence and multi-step inference.
2. **Generate candidate trajectories:** Ask multimodal models for complete solutions and retain correct and incorrect responses.
3. **Annotate earliest-error types:** Inspect each step with the image and context, labeling the first perception, knowledge, or reasoning error.
4. **Build unified evaluation:** Package trajectories and labels and evaluate accuracy by error position and type; images and step segmentation must remain fixed.
