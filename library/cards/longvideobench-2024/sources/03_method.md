1. Inputs: long web videos or video references, subtitles or language context where available, human-written questions, answer options, gold answers, and referred-context annotations.
2. Pipeline: collect videos, segment or index temporal content, write questions that depend on relevant moments, validate options and answers, release dataset records, and evaluate model choices.
3. Outputs: multiple-choice predictions, accuracy by model and subset, and dataset artifacts on GitHub/Hugging Face.
4. Feedback contract: a model receives credit when its selected option matches the gold answer for that item.
5. Reproducibility notes: pin dataset version, video availability, frame sampling rate, subtitle use, context-window policy, prompt template, option order, model video encoder settings, and whether evidence annotations are used only for analysis or as model input.
