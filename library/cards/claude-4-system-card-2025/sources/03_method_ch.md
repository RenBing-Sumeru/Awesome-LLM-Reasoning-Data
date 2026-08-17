公开网页部分由通用 crawler 收集：遵守 `robots.txt`，不访问密码保护、需要登录或 CAPTCHA 的页面，并允许网站运营者识别爬虫。Anthropic 报告了数据尽调、去重与分类，随后进行广泛预训练，并用人工反馈、Constitutional AI 和 selected character traits 对齐。报告未披露记录数、混合权重、版本、逐来源许可证、标注提示、合成生成器设置、偏好格式、奖励计算、优化器、rollout 预算或检查点。

报告评测了多类快照：helpful-honest-harmless 快照、移除 safeguards/harmlessness training 的 helpful-only 快照，以及最终候选；在可行时同时测试 standard 和 extended thinking。RSP 评估结合自动评测、标准化基准、uplift trial、内部/外部红队和专家审查。这些评测与发布治理流程是已记录证据，但报告没有证明相关记录被用于训练发布模型。
