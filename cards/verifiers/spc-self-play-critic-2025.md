<!-- entry_id: spc-self-play-critic-2025 -->
<!-- card_type: verifiers -->
# Paper Card: SPC: Evolving Self-Play Critic via Adversarial Games for LLM Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spc-self-play-critic-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spc-self-play-critic-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=spc-self-play-critic-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** SPC refreshes process-critic training through adversarial self-play, but its supervision is only trustworthy when generated errors are valid and generator-critic co-adaptation does not replace mathematical judgment with artifact detection.
> **Reading priority:** Essential
> **Paper type:** Adversarial self-play process-critic and verifier-data recipe
> **Knowledge categories:** Preference and Reward Feedback Data; Process and Trace Supervision Data; Data Construction and Open Release Recipes; Rollout, Search, and Test-Time Trace Data
> **Best for:** Researchers training process critics, synthesizing adversarial step errors, or auditing verifier-guided search
> **Confidence:** Medium
> **Year / Venue:** 2025; NeurIPS 2025
> **Authors:** Jiaqi Chen, Bang Zhang, Ruotian Ma, Peisong Wang, Xiaodan Liang, Zhaopeng Tu, Xiaolong Li, Kwan-Yee K. Wong
> **Institutions:** The University of Hong Kong; Tencent; Tsinghua University; MBZUAI
> **Links:** [Paper](https://papers.nips.cc/paper_files/paper/2025/hash/cb7baa005c239c1c7c4098c2a9e00450-Abstract-Conference.html); [OpenReview](https://openreview.net/forum?id=JddJvNSiHk); [arXiv](https://arxiv.org/abs/2504.19162); [Code](https://github.com/chen-judge/SPC/); [Project](https://chen-judge.github.io/SPC/); [Round-2 Critic](https://huggingface.co/judge/SPC-Critic-2)

---

## 1. Problem: What question does this work address?

Step-level critics can improve reasoning selection and search, but high-quality process labels are expensive and become stale as generators learn new failure patterns. SPC asks whether a critic can continually acquire harder training examples from an adversary rather than from manual step annotation. The central difficulty is that self-play has no external mathematical referee for every generated corruption: the training game assumes that the sneaky generator really changed a correct step into an incorrect one and that the resulting example remains coherent.

## 2. Core idea: What is the main contribution?

SPC creates two trainable roles from a base model. A sneaky generator receives a correct reasoning prefix and next step, chooses a predefined error type, and rewrites the step to fool a critic. The critic receives the candidate step and attempts to detect the error. Successful detection rewards the critic and penalizes the generator; successful deception reverses those rewards. Repeating this game produces on-policy adversarial verifier data while co-evolving the error distribution and the critic.

The feedback-bearing record is a partial solution, original correct step, chosen error type, generated candidate, candidate identity, critic judgment, binary rewards for both players, and self-play round. The released critic is therefore a generative step judge trained from constructed binary game outcomes, not a process reward model grounded in independent human labels for every step.

## 3. Method: How does it work?

The pipeline begins from correct mathematical reasoning solutions. It randomly selects a correct step together with the partial solution preceding that step. The sneaky generator then selects from a predefined error taxonomy and converts the correct step into a deliberately misleading incorrect alternative.

The critic analyzes the presented reasoning step. If it detects the generated error, the critic receives `+1` and the generator receives `-1`. If the generator deceives the critic, the rewards are reversed. These win/loss outcomes supply scalar reinforcement signals, and the two roles are updated iteratively so that stronger errors train a stronger critic and a stronger critic pressures the generator to create harder errors.

The visible release describes a round-0 supervised critic bootstrap and two subsequent RL self-play rounds. `data_round0_sft_critic.json` contains the SFT records, while `data_round2_rl_critic.json` contains examples generated in rounds 1 and 2. The repository provides critic RL and evaluation scripts, and Hugging Face hosts round-0 and round-2 critic checkpoints. Released checkpoints use a Qwen2-family architecture; the exact paper base checkpoint, complete error taxonomy, corruption-validity filters, sampling temperature, rollout budget, and source-mixture counts remain to be pinned from the accepted paper, configs, and data files.

At inference, the critic can score reasoning steps and guide test-time search. This use changes the relevant calibration surface: a critic trained to win against its paired sneaky generator must generalize to mistakes from independent reasoning models and to the candidate distribution induced by the search algorithm.

## 4. Evidence: Why should we believe it?

The paper evaluates step-error detection on ProcessBench, PRM800K, and DeltaBench. It reports progressive ProcessBench accuracy improvement from 70.8% to 77.7% across evolution and comparisons against strong critic baselines, including a distilled R1 model. It also uses SPC to guide test-time search on MATH500 and AIME2024 and reports improvements over search guided by other process reward models.

The official project, GitHub implementation, generated-data link, evaluation files, and round-0/round-2 checkpoints provide evidence that the broad training pipeline and final critic artifacts exist. The results support the claim that adversarially refreshed data can improve the evaluated critic. They do not by themselves establish that every synthetic corruption is mathematically invalid, that the critic is calibrated, or that gains transfer independently of candidate generator and search budget.

## 5. Novelty: What is new relative to prior work?

SPC treats verifier-data construction as a competitive curriculum. Instead of sampling a fixed set of ordinary incorrect solutions or distilling a static judge, it trains an adversary specifically to manufacture errors that the current critic misses. This makes the negative-data distribution responsive to the verifier's current weaknesses and turns critic refresh into an iterative game rather than a one-shot annotation pipeline.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- **Synthetic-error validity:** A rewritten step may be malformed, ambiguous, irrelevant, or accidentally still correct. Without an independent checker, the game label can be wrong before critic training begins.
- **Co-adaptation:** Generator and critic can develop a private error dialect. The critic may improve against its paired generator while failing on human mistakes or outputs from unrelated models.
- **Artifact exploitation:** Predefined corruption types and generator style can leave lexical or formatting cues that allow detection without mathematical verification.
- **False positives and false negatives:** A critic can reject valid alternative steps or accept plausible but globally inconsistent reasoning. Binary game accuracy does not characterize these errors separately.
- **Reward resolution:** The `+1/-1` outcome records only who won. It does not encode error severity, first-error location, explanatory quality, or whether later reasoning could recover.
- **Calibration and versioning:** The released critic's thresholding, calibration, refresh policy, and compatibility with different search generators are not fully documented in the visible release metadata.
- **Data access:** The official generated-data link points to an HKU SharePoint folder that redirected to institutional Microsoft authentication during verification. Public, durable, anonymous download availability remains unresolved.
- **Licensing:** The Hugging Face critic checkpoints declare MIT. No verified license was found for the GitHub code or SharePoint-hosted training/evaluation data.
- **Release metadata:** Exact row counts, source datasets, round proportions, file hashes, decontamination, generation temperature, and immutable revisions are unknown.

## 7. Uses: How can this work be used?

SPC can be used to train or refresh a step critic, generate adversarial negative reasoning examples, compare fixed versus evolving verifier curricula, and guide best-of-N or tree-search selection. Its released round data can support audits of whether critic gains arise from mathematical error detection or synthetic artifacts. For the Data Construction and Open Release Recipes track, it is a useful template for recording generator version, critic version, game reward, error taxonomy, corruption-validity checks, source prefix, round, and artifact revision as first-class lineage fields.

## 8. Reading notes: What should readers remember?

- The critic's native signal is a game outcome over a constructed candidate, not a human step label.
- Harder on-policy negatives are useful only if the negatives remain valid and semantically controlled.
- Co-evolution changes both sides of the benchmark; cross-generator evaluation is essential.
- Search improvements depend on critic calibration, candidate distribution, and inference budget.
- Treat the SharePoint data location, missing data license, and absent immutable hashes as material reuse blockers.
- Preserve round and generator identity when auditing or mixing SPC records.

## 9. Citation

Use the official NeurIPS proceedings citation; the BibTeX below follows the verified paper metadata.

```bibtex
@inproceedings{chen2025spc,
  title = {SPC: Evolving Self-Play Critic via Adversarial Games for LLM Reasoning},
  author = {Chen, Jiaqi and Zhang, Bang and Ma, Ruotian and Wang, Peisong and Liang, Xiaodan and Tu, Zhaopeng and Li, Xiaolong and Wong, Kwan-Yee K.},
  booktitle = {Advances in Neural Information Processing Systems},
  volume = {38},
  year = {2025},
  url = {https://papers.nips.cc/paper_files/paper/2025/hash/cb7baa005c239c1c7c4098c2a9e00450-Abstract-Conference.html}
}
```
