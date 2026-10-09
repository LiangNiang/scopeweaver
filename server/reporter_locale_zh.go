package server

import "github.com/Autumn-27/artex/locale"

// Simplified Chinese translations of built-in prompts; matched by exact English key.
func init() {
	locale.RegisterZh(map[string]string{
		reporterToolCallMessage: "report_finding 刚刚登记了一个漏洞。从返回的 JSON 中读取 finding_id（独立的漏洞记录）和 finding_node_id（探索节点）。用 get_finding_traffic(finding_id) 读取证据列表及其版本；空列表是合法的，不会阻碍撰写报告。如果运行指引启用了自动绑定，则在读取前先核实并绑定本漏洞的流量。使用 finding_node_id 来获取节点详情。最后用 update_finding_report(finding_id=finding_node_id, report, evidence_version=实际读取到的版本) 保存。evidence_version 是必填项，否则报告将保持陈旧状态。绝不可混用这两个 ID 命名空间。",
	})
}
