**输入与构造。** 标注者针对每项任务浏览公开视频和开放获取arXiv论文至少10分钟、至多20分钟，选择keyframe或figure/table截图，并撰写Spatial-Temporal Extrapolation问题与acceptable short answer。LLM辅助生成搜索关键词；人类负责筛选来源、difficulty、subtask和SoM box。作者称在可行时遮蔽人脸和车牌，并排除未成年人或私人空间。至少两个闭源MLLM测试候选题能否无需搜索作答；可直接回答的条目被移除，或通过mask/obfuscation增加难度。最终集合含311项任务，其中94项easy、217项hard；239项MMSearch-Plus-lite移除了所有被任一测试模型无需搜索解决的条目。

**公开输出。** Hugging Face的单一`train` split存储`question`、answer variant、`num_images`、`arxiv_id`、`video_url`、`category`、`difficulty`、`subtask`及`img_1`至`img_5`。文本字段`question`、`answer`、`video_url`和`arxiv_id`通过公开canary helper进行XOR解密；当前图像未加密。发布保留来源引用，但不含source snapshot、annotation/edit log、SoM box或rights manifest。

**评测rollout。** 冻结MLLM接收问题与图像，再在text search、image search、indexed zoom/crop和final answer之间交替。SerpAPI提供排序后的text/image result与thumbnail；Gemini生成webpage和related-image summary；threaded state保留call、crop、summary、URL/title与hypothesis。论文把combined search round/tool call上限设为20，Qwen full rollout则为10；每轮text search可发出三至五个query。search response、cache snapshot、prompt、seed、locale、browser state和完整action-observation log均未公开。

**反馈与用途。** GPT-4o判断final answer与acceptable variant是否一致；可选rule matching被提及但未发布。终止事件是产生final answer或耗尽预算，而benchmark success只表示答案正确，不代表citation完整、provenance忠实或step transition经过验证。论文没有使用optimizer或post-training scaffold，只评测o3、GPT-5、Gemini-2.5-Pro和Qwen-2.5-VL-72B-Instruct。

**复现边界。** 忠实replay需要固定HF记录与source capture，并获得SoM box、rollout/evaluation code、SerpAPI response、Gemini summary、cache、模型/API版本、prompt、seed、查询日期/locale、browser/runtime lock、预算、judge log及成败轨迹。已审计GitHub revision只有README和decryption helper；Hugging Face的`state.json`仍引用两个过期shard名称，而当前发布实际含五个Arrow shard。复用时应固定已核实data revision，不能把`state.json`视为完整manifest。
