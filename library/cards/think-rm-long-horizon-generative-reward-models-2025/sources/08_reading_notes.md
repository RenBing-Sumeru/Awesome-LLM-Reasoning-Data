1. **One-sentence positioning:** Shallow generative reward models struggle with complex preferences, and pairwise judgments do not fit conventional pointwise rlhf; it uses generating long comparative reasoning and filtering it by the original preference label and output format.
2. **Method handle:** The pipeline covers source preparation, record generation, verification, filtering, and release.
3. **Data handle:** hs2-naive-reasoning-binary-max contains about 6.01K long-CoT preference-review examples and centers on paired responses, long review traces, and final A/B decisions.
4. **Evidence anchor:** Think-rm improves by about 8% over bradley–terry and shallow generative reward-model baselines, with conclusions limited to the reported setup.
5. **Reuse decision:** It is most suitable for reward-model evaluation and pairwise RLHF; teacher bias, the small dataset size, and uncertain faithfulness of long rationales must be checked before reuse.
