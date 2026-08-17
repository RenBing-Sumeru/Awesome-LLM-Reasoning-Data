# Reading notes

- **Positioning:** CogCoM replaces answer-only visual supervision with released manipulation chains whose intermediate visual results can be inspected.
- **Method handle:** GPT-4 plans, GroundingDINO/PaddleOCR execute, DFS selects golden-answer paths, experts write math chains, and an adapter converts them to multi-turn VQA.
- **Data/artifact handle:** the CC-BY-SA-4.0 release exposes 80,827 automatic, 4,518 test, and 6,998 math records with `com_founds` and `final_com` fields plus images.
- **Evidence anchor:** adding 70K CoM records under the paper's matched ablation changes TextVQA 64.5 to 71.1, MM-Vet 45.9 to 46.1, and MathVista 34.8 to 35.7.
- **Reuse decision:** use for evidence-bearing visual SFT only after replaying steps, preserving failures/denominators, reconciling component rights, and checking train-test overlap.
