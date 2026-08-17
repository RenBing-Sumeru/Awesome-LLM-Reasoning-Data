Multilingual LLM judges are often proprietary or require large multilingual training sets, making them costly and opaque. Fixed prompts can also miss task-specific criteria, while reducing pairwise comparison to two independent scores loses direct comparative reasoning.

CE-Judge offers a training-free alternative. It engineers dynamic checklists from the instruction and response, then uses an open 7B model to judge with those criteria in pointwise and pairwise multilingual settings. The aim is structured, interpretable evaluation without collecting a new judge-training corpus.

The required reliability check is whether the visible criteria remain meaningful after translation and across high- and low-resource languages.
