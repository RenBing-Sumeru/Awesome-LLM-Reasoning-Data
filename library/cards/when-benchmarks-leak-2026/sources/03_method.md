1. Start from a pretrained model, construct a contaminated fine-tuned model with OpenOrca plus leaked MMLU or TruthfulQA items, and train a matched clean counterpart on OpenOrca only.
2. Choose the same-architecture pretrained checkpoint as the relatively less-contaminated reference, and reserve 400 benchmark samples disjoint from each test set as Daux.
3. Feed an item's embedding to a four-layer decoder-only generator and bound its output as δ=ζ·tanh(Gθ(e(x))).
4. Optimize KL plus cross-entropy so the contaminated model run on e(x)+δ follows the reference distribution and hard labels.
5. Apply one perturbation per unchanged test input; report Residual Contamination and Benign Utility Drop. The reported setup uses ζ=10⁻³, learning rate 10⁻⁵, dropout 0.2, and white-box embeddings/gradients. The construction makes the clean counterpart observable only in controlled experiments; in a real audit it is an ideal target that must be approximated by the chosen reference.
