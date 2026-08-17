GAOKAO-Bench evaluates LLMs on Chinese Gaokao objective and subjective exam questions with converted exam scores. The primary sources are arXiv 2305.12474 and the the OpenLMLab GAOKAO-Bench repository.

The concrete problem is how LLMs perform under a Chinese national-exam scoring surface rather than generic NLP tasks. The decision boundary is exam-sourced evaluation, not a reasoning-trace dataset or a universally reusable training set.

The data object or evaluation surface is 2,811 Gaokao questions from 2010-2022 across 9 subjects, including 1,781 objective and 1,030 subjective questions, with answer keys or scoring rubrics. This is useful for the atlas because it makes the feedback contract explicit: objective exact or rule matching, plus subjective human scoring or GPT-4-turbo judge scoring with marking criteria.
