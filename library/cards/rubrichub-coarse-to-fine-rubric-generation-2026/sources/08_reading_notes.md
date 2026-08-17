1. **One-sentence positioning:** Coarse rubrics cannot distinguish open-ended responses with similar surface quality; it uses combining principle-guided coarse criteria, multi-model refinement, and difficulty evolution.
2. **Method handle:** The pipeline covers source preparation, record generation, verification, filtering, and release.
3. **Data handle:** RubricHub_v1 contains about 110K cross-domain rubric and scoring records and centers on prompts, criteria, weights, candidate responses, criterion scores, and review details.
4. **Evidence anchor:** The ruft plus rurl model reaches 69.3 on healthbench, with conclusions limited to the reported setup.
5. **Reuse decision:** It is most suitable for open-ended reward modeling and post-training; shared model bias, missing expert standards, and confounding between data and training recipe must be checked before reuse.
