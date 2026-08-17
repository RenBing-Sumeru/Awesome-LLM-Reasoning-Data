1. **Positioning:** FaithCoT-Bench asks whether a specific CoT reflects the model's decision process, not whether it is plausible or correct.
2. **Method handle:** It samples four domains, obtains expert instance labels, and annotates causes and step evidence for unfaithful cases.
3. **Data handle:** FINE-CoT has over 1,000 trajectories and over 300 unfaithful instances from four representative models.
4. **Evidence anchor:** None of 11 detectors generalizes consistently, especially on knowledge-intensive tasks and stronger models.
5. **Reuse decision:** It fits detector evaluation; separate process faithfulness, textual correctness, and access cost; testing should also hold out generator models to determine whether the detector merely memorizes a CoT style; Before reuse, distinguish CoT factual correctness, step importance, and process faithfulness and use unseen generators as the primary test; otherwise high scores may reflect domain or writing-style recognition.
