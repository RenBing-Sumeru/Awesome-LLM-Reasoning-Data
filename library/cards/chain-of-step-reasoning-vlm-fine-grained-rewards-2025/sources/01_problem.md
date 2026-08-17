Vision-language models usually generate a final answer directly from an image and question, so supervision cannot identify whether an error comes from object recognition, spatial relations, knowledge use, or reasoning composition. Final-only supervision encourages visual shortcuts and wastes partially correct intermediate work.

The paper introduces Chain of Step (CoS), representing visual reasoning as a sequence of checkable steps, and builds roughly 300K CoS-Dataset examples with fine-grained rewards for step reward modeling, reranking, and reinforcement learning.
