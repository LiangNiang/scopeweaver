// Complete paragraphs keep word order and emphasis natural in both languages.
export const en = {
  captureDisabled:
    "When disabled (the default), no traffic is recorded. Agents receive <b>neither proxy settings nor traffic tools</b>, and their prompts contain <b>no proxy instructions</b>. Switching rebuilds Agents immediately to apply the change.",
  binding:
    "Off by default. When enabled, the report Agent triggered on vulnerability creation reviews existing HTTP requests and responses, links the relevant traffic, then writes the report. <b>Inspecting packets and making extra tool calls increases token usage.</b>",
  proxy:
    "All Agents’ <b>target traffic</b> uses this outbound proxy to hide the source IP or use a jump host. Supports <b>HTTP, HTTPS, and SOCKS5</b>, optionally with <code>user:pass</code> authentication. Leave blank for a direct connection.",
  proxyCapture:
    "With <b>traffic capture enabled</b>, this is the recording proxy’s <b>upstream</b>: traffic is recorded before forwarding. With capture disabled, the proxy is injected directly into Agent Bash/WebFetch. It is independent of web search and LLM proxies.",
  proxySocks:
    "<b>SOCKS5 note:</b> With capture disabled, each command-line tool must support <code>ALL_PROXY</code>. curl does; some tools may ignore it. For SOCKS5, enabling capture is recommended: the MITM proxy establishes the connection directly, without requiring tool support.",
  constraints:
    "When enabled, each task’s <b>operational constraints</b>—the allow/deny entries in Task overview—are included in the Agent’s system prompt to define exploration boundaries, such as testing only the current port or prohibiting brute force.",
  constraintTargets:
    "Control injection separately for the <b>planner</b> and <b>worker</b>; both are enabled by default. Changes apply on the next read without rebuilding Agents. When injection is disabled, that Agent no longer sees the constraints.",
  compression:
    "<b>noa context compression</b> uses the model to compress long conversation histories (norma v0.4.0). When enabled, <b>planner, worker, main-Agent, and chat</b> contexts use noa instead of built-in compression. Original content is archived in the task working directory for review. Changes affect subsequent runs without rebuilding Agents; disabling immediately restores built-in compression.",
  webSearch:
    "This is the web search <b>master switch and source configuration</b>. Enable it first, then enable <b>web_search in each Agent’s settings</b>. Search returns titles, links, and snippets; WebFetch retrieves full content. Web search <b>does not use the recording proxy</b> and is independent of traffic capture.",
  searchSources:
    "Available sources are <b>DuckDuckGo (ddgs)</b> without an API key, <b>Brave’s free tier</b> with a Brave API key, <b>Tavily</b> with a Tavily API key, or <b>DeepSeek</b> using the current LLM profile. The master switch must be on before Agents can enable web search.",
  deepseekRequirements:
    "This source reuses the <b>currently active LLM profile</b>. It supports <b>only official DeepSeek models</b>, and the profile <b>must use the Anthropic protocol</b>. DeepSeek’s OpenAI endpoint does not support server-side search. Switching LLM profiles may make this source unavailable.",
  deepseekBehavior:
    "Unlike other sources, search runs <b>on DeepSeek’s servers</b>. Each search adds a model call and token cost. Search requests <b>bypass the outbound proxy above</b> and <b>are not recorded as traffic</b>. Results contain <b>only titles and links</b>, without snippets; use WebFetch for full content.",
  python:
    "Custom <b>script</b> tools use this Python interpreter. It is detected at startup, preferring python3. Enter an absolute path to a virtual environment or specific version, or leave blank for automatic runtime detection.",
  workers:
    "Number of Worker Agents running concurrently per task (default: 3). More Workers increase parallel exploration and cost. Changes <b>apply to tasks started afterward</b>; running tasks are unaffected.",
  sendPreference:
    "This preference is stored <b>only in this browser</b> and does not sync with your account. Set it again after changing browsers or clearing site data.",
  updateLauncher:
    "One-click updates rely on the supervisor script to restart the application. Start with <code>start.sh</code> (Windows: <code>start.bat</code>). Running the binary directly does not restart it automatically after exit.",
  pagination: "{from}–{to} / {total} records",
};
export const ko: Record<keyof typeof en, string> = {
  captureDisabled:
    "끄면(기본값) 트래픽을 기록하지 않습니다. 에이전트에 <b>프록시 설정과 트래픽 도구를 제공하지 않으며</b>, 프롬프트에도 <b>프록시 안내를 포함하지 않습니다</b>. 전환하면 에이전트를 즉시 재구성하여 적용합니다.",
  binding:
    "기본적으로 꺼져 있습니다. 켜면 취약점 등록 시 보고서 에이전트가 기존 HTTP 요청과 응답을 검토하고 관련 트래픽을 연결한 후 보고서를 작성합니다. <b>패킷 확인과 추가 도구 호출로 토큰 사용량이 늘어납니다.</b>",
  proxy:
    "모든 에이전트의 <b>대상 트래픽</b>을 이 프록시로 보내 원본 IP를 숨기거나 중계 호스트를 사용할 수 있습니다. <b>HTTP, HTTPS, SOCKS5</b>와 선택적 <code>user:pass</code> 인증을 지원합니다. 비우면 직접 연결합니다.",
  proxyCapture:
    "<b>트래픽 캡처를 켜면</b> 기록 프록시의 <b>상위 프록시</b>로 사용하여 트래픽을 기록한 후 전달합니다. 캡처를 끄면 에이전트의 Bash/WebFetch에 프록시 설정을 직접 제공합니다. 웹 검색 및 LLM 프록시와는 독립적입니다.",
  proxySocks:
    "<b>SOCKS5 참고:</b> 캡처를 끄면 각 명령줄 도구가 <code>ALL_PROXY</code>를 지원해야 합니다. curl은 지원하지만 일부 도구는 무시할 수 있습니다. SOCKS5에는 캡처 활성화를 권장합니다. MITM 프록시가 직접 연결하므로 도구의 지원 여부와 관계없이 적용됩니다.",
  constraints:
    "켜면 각 작업의 <b>작업 제약 조건</b>을 에이전트 시스템 프롬프트에 포함합니다. 작업 개요에서 관리하는 allow/deny 항목으로, 현재 포트만 테스트하거나 무차별 대입을 금지하는 등 탐색 경계를 정합니다.",
  constraintTargets:
    "<b>플래너</b>와 <b>워커</b>에 제공할지 각각 설정할 수 있으며 기본적으로 둘 다 켜져 있습니다. 에이전트를 재구성하지 않고 다음 읽기부터 적용합니다. 끄면 해당 에이전트는 제약 조건을 볼 수 없습니다.",
  compression:
    "<b>noa 문맥 압축</b>은 모델이 긴 대화 기록을 직접 압축하는 기능입니다(norma v0.4.0). 켜면 <b>플래너, 워커, 메인 에이전트, 대화</b>에서 기본 압축 대신 noa를 사용합니다. 압축 전 원문은 검토할 수 있도록 작업 디렉터리에 보관합니다. 에이전트를 재구성하지 않고 이후 실행에 적용하며, 끄면 즉시 기본 압축으로 돌아갑니다.",
  webSearch:
    "웹 검색의 <b>전체 전환 및 소스 설정</b>입니다. 먼저 이 기능을 켠 후 <b>각 에이전트 설정에서 web_search를 활성화</b>하세요. 검색은 제목, 링크, 요약을 반환하며 본문은 WebFetch가 가져옵니다. 웹 검색은 <b>기록 프록시를 사용하지 않으며</b> 트래픽 캡처와 독립적으로 동작합니다.",
  searchSources:
    "검색 소스는 API 키가 필요 없는 <b>DuckDuckGo(ddgs)</b>, Brave API 키가 필요한 <b>Brave 무료 요금제</b>, Tavily API 키가 필요한 <b>Tavily</b>, 현재 LLM 프로필을 사용하는 <b>DeepSeek</b> 중에서 선택합니다. 전체 전환을 켜야 에이전트별 웹 검색을 활성화할 수 있습니다.",
  deepseekRequirements:
    "이 소스는 <b>현재 활성 LLM 프로필</b>을 재사용합니다. <b>공식 DeepSeek 모델만 지원</b>하며 프로필은 <b>Anthropic 프로토콜을 사용해야 합니다</b>. DeepSeek의 OpenAI 엔드포인트는 서버 측 검색을 지원하지 않습니다. LLM 프로필을 바꾸면 이 소스를 사용할 수 없게 될 수 있습니다.",
  deepseekBehavior:
    "다른 소스와 달리 검색을 <b>DeepSeek 서버에서 실행</b>합니다. 검색마다 모델 호출과 토큰 비용이 추가됩니다. 검색 요청은 <b>위의 외부 연결 프록시를 거치지 않으며</b> <b>트래픽 기록에도 포함되지 않습니다</b>. 결과에는 요약 없이 <b>제목과 링크만 포함</b>되므로 본문이 필요하면 WebFetch를 사용하세요.",
  python:
    "사용자 지정 <b>script</b> 도구에서 사용할 Python 인터프리터입니다. 시작 시 python3를 우선하여 자동으로 찾습니다. 가상 환경 또는 특정 버전의 절대 경로를 입력하거나, 실행 시 자동으로 찾으려면 비워 두세요.",
  workers:
    "작업마다 동시에 실행할 워커 에이전트 수입니다(기본값: 3). 늘리면 병렬 탐색과 비용이 증가합니다. 변경 사항은 <b>이후 시작하는 작업에 적용</b>하며 실행 중인 작업에는 영향을 주지 않습니다.",
  sendPreference:
    "이 환경설정은 <b>현재 브라우저에만 저장</b>되며 계정과 동기화되지 않습니다. 브라우저를 바꾸거나 사이트 데이터를 지우면 다시 설정해야 합니다.",
  updateLauncher:
    "원클릭 업데이트는 관리 스크립트로 애플리케이션을 재시작합니다. <code>start.sh</code>(Windows: <code>start.bat</code>)로 시작하세요. 실행 파일을 직접 실행하면 종료 후 자동으로 다시 시작되지 않습니다.",
  pagination: "{from}–{to} / 총 {total}건",
};

export const zh: Record<keyof typeof en, string> = {
  captureDisabled:
    "停用时（默认），不记录任何流量。各 Agent <b>既不会收到代理设置，也不会收到流量工具</b>，其提示中<b>也不含代理说明</b>。切换会立即重建 Agent 以应用更改。",
  binding:
    "默认关闭。启用后，创建漏洞时触发的报告 Agent 会审查现有的 HTTP 请求与响应，关联相关流量，然后撰写报告。<b>检查数据包并发起额外的工具调用会增加 token 用量。</b>",
  proxy:
    "所有 Agent 的<b>目标流量</b>都通过此出站代理，以隐藏源 IP 或使用跳板主机。支持 <b>HTTP、HTTPS 和 SOCKS5</b>，可选用 <code>user:pass</code> 认证。留空则直连。",
  proxyCapture:
    "在<b>启用流量捕获</b>时，这是记录代理的<b>上游代理</b>：流量会先记录再转发。停用捕获时，代理会直接注入到 Agent 的 Bash/WebFetch 中。它与网页搜索和 LLM 代理相互独立。",
  proxySocks:
    "<b>SOCKS5 说明：</b>停用捕获时，每个命令行工具都必须支持 <code>ALL_PROXY</code>。curl 支持，但部分工具可能忽略它。对于 SOCKS5，建议启用捕获：MITM 代理会直接建立连接，无需工具支持。",
  constraints:
    "启用后，每个任务的<b>操作约束</b>——即任务概览中的允许/拒绝条目——会被加入 Agent 的系统提示，用于界定探索边界，例如仅测试当前端口或禁止暴力破解。",
  constraintTargets:
    "可分别控制对<b>规划者</b>和<b>执行者</b>的注入，二者默认均已启用。更改会在下次读取时生效，无需重建 Agent。关闭注入后，该 Agent 将不再看到这些约束。",
  compression:
    "<b>noa 上下文压缩</b>使用模型来压缩较长的对话历史（norma v0.4.0）。启用后，<b>规划者、执行者、主 Agent 和对话</b>的上下文会改用 noa 而非内置压缩。压缩前的原文会归档在任务工作目录中以供查阅。更改会影响后续运行，无需重建 Agent；停用后会立即恢复为内置压缩。",
  webSearch:
    "这是网页搜索的<b>总开关与来源配置</b>。请先启用它，再在<b>各 Agent 设置中启用 web_search</b>。搜索会返回标题、链接和摘要；正文由 WebFetch 获取。网页搜索<b>不使用记录代理</b>，并与流量捕获相互独立。",
  searchSources:
    "可用来源包括：无需 API 密钥的 <b>DuckDuckGo（ddgs）</b>、需要 Brave API 密钥的 <b>Brave 免费套餐</b>、需要 Tavily API 密钥的 <b>Tavily</b>，或使用当前 LLM 配置的 <b>DeepSeek</b>。必须先打开总开关，各 Agent 才能启用网页搜索。",
  deepseekRequirements:
    "此来源会复用<b>当前激活的 LLM 配置</b>。它<b>仅支持官方 DeepSeek 模型</b>，且该配置<b>必须使用 Anthropic 协议</b>。DeepSeek 的 OpenAI 端点不支持服务端搜索。切换 LLM 配置可能导致此来源不可用。",
  deepseekBehavior:
    "与其他来源不同，搜索会<b>在 DeepSeek 的服务器上</b>运行。每次搜索都会增加一次模型调用和 token 成本。搜索请求<b>会绕过上面的出站代理</b>，且<b>不会记录为流量</b>。结果<b>仅包含标题和链接</b>，不含摘要；如需正文请使用 WebFetch。",
  python:
    "自定义 <b>script</b> 工具使用此 Python 解释器。启动时会自动检测，优先使用 python3。可输入虚拟环境或特定版本的绝对路径，或留空以在运行时自动检测。",
  workers:
    "每个任务并发运行的执行者（Worker）Agent 数量（默认：3）。增加数量会提升并行探索能力和成本。更改<b>适用于之后启动的任务</b>；正在运行的任务不受影响。",
  sendPreference: "此偏好设置<b>仅保存在当前浏览器</b>，不会与你的账户同步。更换浏览器或清除站点数据后需要重新设置。",
  updateLauncher:
    "一键更新依赖管理脚本来重启应用。请使用 <code>start.sh</code>（Windows：<code>start.bat</code>）启动。直接运行可执行文件时，退出后不会自动重启。",
  pagination: "{from}–{to} / 共 {total} 条",
};
