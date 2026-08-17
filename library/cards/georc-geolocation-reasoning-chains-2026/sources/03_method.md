1. **Select scenes:** Five hundred query images with diverse geographic cues are sampled from GeoGuessr/Google Street View scenes spanning more than 100 countries.
2. **Annotate with experts:** Experts independently inspect high-resolution images and record visible cues, the regions each cue supports or rules out, and the sequence leading to the location conclusion.
3. **Structure chains:** Free-form explanations are normalized into observation–inference–conclusion structures while preserving the fact that experts may use different valid evidence paths.
4. **Generate candidates:** Proprietary and open VLMs produce locations and reasoning chains for the same images, alongside a no-image hallucination baseline that is given the oracle location.
5. **Calibrate evaluation:** Human ratings compare candidates with expert chains, after which LLM-as-a-judge and VLM-as-a-judge correlations and step-matching metrics are evaluated.

