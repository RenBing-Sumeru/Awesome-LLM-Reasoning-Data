1. **One-sentence position:** Personalized RewardBench supplies an explicit user-specific rubric for each example and constructs two generally high-quality responses that respectively follow or violate it, making the preference distinction depend primarily on the individual requirement.

2. **Method takeaway:** Generate two generally high-quality candidates, one strictly following the rubric and the other violating only the target personalization condition without obvious factual errors. Have humans verify that personal preference is the discriminating factor and remove pairs with general-quality differences or ambiguous isolation.

3. **Data takeaway:** The official release contains roughly 2.83K personalized-preference instances.

4. **Evidence anchor:** Human evaluation confirms that both candidates retain high correctness, relevance, and helpfulness and are distinguished mainly by the personal rubric.

5. **Reuse decision:** Evaluate whether rubric-conditioned RMs can perform user-specific ranking among otherwise strong responses. The main risk is that rubrics are explicit text rather than long-term implicit user histories and do not fully represent preference drift or real personalization.
