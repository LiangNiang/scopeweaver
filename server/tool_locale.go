package server

import (
	"encoding/json"
	"github.com/Autumn-27/artex/agent"
	"github.com/Autumn-27/artex/db"
	"github.com/Autumn-27/artex/locale"
	"github.com/Autumn-27/artex/traffic"
	actool "github.com/Autumn-27/norma/tool"
)

// knownToolLanguages constructs metadata-only tool shells. No handlers, database
// operations, provider calls, or filesystem actions are executed by constructors.
func (s *Server) knownToolLanguages() map[string]agent.ToolLanguageSet {
	pairs := map[string]agent.ToolLanguageSet{}
	for index, lang := range agent.ToolLanguages {
		tools := agent.NewToolSet(nil, "", lang).AllDomainTools()
		tools = append(tools, (&traffic.Traffic{}).Tools(lang)...)
		tools = append(tools, s.orchestrationTools(lang)...)
		tools = append(tools, s.platformTools(lang)...)
		tools = append(tools, s.findingRetestTools(lang)...)
		for _, tool := range tools {
			pair := pairs[tool.Name()]
			pair[index] = tool
			pairs[tool.Name()] = pair
		}
	}
	return pairs
}

func translatedToolMetadata(tool actool.CoreTool, pair agent.ToolLanguageSet, lang locale.Lang) actool.CoreTool {
	return agent.TranslateToolLanguages(tool, pair, lang)
}

// translatedStoredTool returns a display/save copy of a system tool. Exact stock
// descriptions can change language; custom fields and all executable data remain.
func translatedStoredTool(row *db.Tool, pairs map[string]agent.ToolLanguageSet, lang locale.Lang) *db.Tool {
	copy := *row
	pair, known := pairs[row.Key]
	if !row.System || !known || pair[0] == nil {
		return &copy
	}
	var schema map[string]any
	if json.Unmarshal(row.Schema, &schema) != nil {
		return &copy
	}
	current := agent.DecorateTool(pair[0], row.Description, schema)
	rendered := translatedToolMetadata(current, pair, lang)
	copy.Description = rendered.Description()
	if raw, err := json.Marshal(rendered.InputSchema()); err == nil {
		copy.Schema = raw
	}
	return &copy
}
