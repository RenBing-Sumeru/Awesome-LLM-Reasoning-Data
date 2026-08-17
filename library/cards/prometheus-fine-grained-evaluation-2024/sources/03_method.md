1. **Design rubrics:** Open-ended instructions receive 1–5 score rubrics with distinguishable quality descriptions for each level.
2. **Generate responses:** One hundred thousand candidate responses spanning score levels are produced for 20,000 instructions.
3. **Generate feedback:** Conditioned on references and rubrics, GPT-4 writes detailed critiques and final scores for each response.
4. **Quality control:** Score distributions, field completeness, and rubric-response consistency are checked to form Feedback Collection.
5. **Train the judge:** A 13B base model is supervised to generate feedback followed by a score and evaluated on unseen rubrics, preference sets, and multiple benchmarks.
