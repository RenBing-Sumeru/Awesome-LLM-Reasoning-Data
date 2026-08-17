没有核验到 official BibTeX artifact，因此使用依据 arXiv 与 NeurIPS 官方记录整理的 provisional citation：

Zehua Zhang, Ati Priya Bajaj, Divij Handa, Siyu Liu, Arvind S Raj, Hongkai Chen, Hulin Wang, Yibo Liu, Zion Leonahenahe Basque, Souradip Nath, Vishal Juneja, Nikhil Chapre, Yan Shoshitaishvili, Adam Doupé, Chitta Baral, and Ruoyu Wang. “BuildBench: Benchmarking LLM Agents on Compiling Real-World Open-Source Software.” arXiv:2509.25248v1, 2025. Poster at the NeurIPS 2025 Deep Learning for Code in the Agentic Era (DL4C) Workshop.

official paper record：https://arxiv.org/abs/2509.25248v1  
NeurIPS poster 官方页面：https://neurips.cc/virtual/2025/131679  
OpenReview 官方记录：https://openreview.net/forum?id=ZqFdnJLXHP  
arXiv 签发 DOI：https://doi.org/10.48550/arXiv.2509.25248

official test release：https://huggingface.co/datasets/STEVENZHANG904/Build_Bench_Test_Data  
固定 test revision：https://huggingface.co/datasets/STEVENZHANG904/Build_Bench_Test_Data/tree/3c3fcb66ddd525219857a40c91d94a8b32c59e14  
official validation release：https://huggingface.co/datasets/STEVENZHANG904/Build_Bench_Validation_Data  
固定 validation revision：https://huggingface.co/datasets/STEVENZHANG904/Build_Bench_Validation_Data/tree/971b6834230b5cbc4695d42bddc5ff51cf1267c8

为便于复现 artifact reference，curator 从 immutable official download 计算了以下 SHA-256：arXiv v1 PDF `1a081658d7a1a38c53dd9234ea38ab5c480b40c7fdc9eb97b64b89dd5ceb02db`；arXiv v1 source `102f389a32a57ac8871ffc4fc782c8cdca215dbf3539bbe20d4f5763e22fe61d`；test metadata CSV `4cc7b5a6c22893cb8a783dcf5cb64cc91ff421dd76037a38daa293ac28b39e0e`；test labels CSV `0ac58b9f702e026938147ee1d0d281823e9ac7dedeb3901a87102fa5e428b9ef`；test retrieval JSON `e5b8bdcbeb996ac18c6e2d1e3c41066671d8a97e220e19defd0c7e600bc9fa29`；validation CSV `ef945c92b8e5d23196e3581e2c0124092d42627303c18092e49af2b156d22059`。这些 checksum 由 curator 计算，不是作者发布。

没有核验到公开且与论文关联的 code repository、evaluator implementation、project page 或 official model release，因此 `artifacts.code` 保持 `null`。引用时必须注明 arXiv version 与准确 Hugging Face revision，因为 paper-time test schema 早于当前 commit-hash、failure-metadata 与 retrieval-label 更新。
