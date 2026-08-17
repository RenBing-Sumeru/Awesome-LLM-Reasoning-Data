The official report presents Qwen2.5-Omni as an end-to-end system for text, image, audio, and video input with streaming text and speech output. Its Thinker produces text, while its Talker consumes Thinker hidden representations to produce audio tokens. This architecture matters here only because the report links it to a staged multimodal data and feedback narrative.

For pre-training, the report names image-text, video-text, video-audio, audio-text, and text corpora. It gives Phase-2 totals of 800B image/video, 300B audio, and 100B video-with-audio tokens. For post-training, Thinker uses ChatML instruction-finetuning data across four modality groupings. Talker has context-continuation, DPO, and multi-speaker instruction-finetuning stages; its disclosed DPO tuple is input text, good and bad generated speech, and reference speech, with ranking based on scores associated with WER and punctuation-pause error.

No underlying training, instruction, reference-speech, preference, or rejected-output records are released in these sources.

