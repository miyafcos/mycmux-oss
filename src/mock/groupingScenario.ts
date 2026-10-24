import type { GroupingPlan, GroupingScan } from "../components/layout/tabGrouping";
import type { Pane, PaneTab, Workspace } from "../types";

const labels = {
  tcli: "コマンドライン 設計",
  tparser: "パーサー 試験",
  tui: "デモ画面 設計",
  tstyle: "デモ画面 配色",
  ttools: "ツール整備",
  tcontrol: "全体の確認",
  tlayout: "配置図の確認",
  tdocs: "ガイドの確認",
  tpreview: "プレビューの試験",
  tbenchmark: "速度の測定",
} as const;

type DemoTabId = keyof typeof labels;

const origins: Partial<Record<DemoTabId, PaneTab["origin"]>> = {
  tlayout: { kind: "agent", parentTabId: "tcontrol" },
  tparser: { kind: "agent", parentTabId: "tcli" },
  ttools: { kind: "agent", parentTabId: "tcli" },
  tbenchmark: { kind: "agent", parentTabId: "tpreview" },
  tdocs: { kind: "agent", parentTabId: "tmissing" },
};

function pane(id: string, tabIds: DemoTabId[]): Pane {
  const tabs: PaneTab[] = tabIds.map((tabId) => ({
    id: tabId,
    sessionId: `session-${tabId}`,
    agentId: "terminal",
    agentKind: "codex",
    label: labels[tabId],
    cwd: "C:\\example\\demo",
    ...(origins[tabId] ? { origin: origins[tabId] } : {}),
  }));
  return { id, agentId: "terminal", sessionId: tabs[0].sessionId, tabs, activeTabId: tabs[0].id };
}

export const mockWorkspaces: Workspace[] = [
  { id: "wsA", name: "デモ画面とCLI", gridTemplateId: "2x1", panes: [pane("pane-a1", ["tcli", "tparser", "tui", "tstyle"]), pane("pane-a2", ["ttools"])], splitColumns: [["pane-a1"], ["pane-a2"]], status: "running", createdAt: 1 },
  { id: "wsB", name: "動作確認", gridTemplateId: "2x1", panes: [pane("pane-b1", ["tcontrol", "tlayout"]), pane("pane-b2", ["tdocs"])], splitColumns: [["pane-b1"], ["pane-b2"]], status: "running", createdAt: 2 },
  { id: "wsC", name: "実験用ツール", gridTemplateId: "1x1", panes: [pane("pane-c1", ["tpreview", "tbenchmark"])], splitColumns: [["pane-c1"]], status: "running", createdAt: 3 },
];

function group(groupId: string, title: string, columns: DemoTabId[][]): GroupingPlan["groups"][number] {
  return {
    groupId, title, disposition: "reorganize", destination: { kind: "new_workspace", proposedName: title },
    layout: { columns: columns.map((tabIds, index) => ({ panes: [{ title: index === 0 ? "主担当" : "作業", role: index === 0 ? "mother" : "worker", tabIds }] })) },
    tabIds: columns.flat(), adopted: true,
  };
}

const projectGroups = [group("g1", "デモ画面", [["tui", "tstyle"], ["tpreview"]]), group("g2", "コマンドライン", [["tcli", "tparser"]])];
const roleGroups = [group("g3", "主担当", [["tcontrol", "tlayout", "tcli"]]), group("g4", "個別作業", [["tstyle", "tpreview", "tbenchmark"]])];
const minimalGroups = [group("g5", "パーサー分離", [["tparser"]])];

function remaining(groups: GroupingPlan["groups"]): string[] {
  const used = new Set(groups.flatMap((item) => item.tabIds));
  return Object.keys(labels).filter((id) => !used.has(id));
}

export const mockGroupingPlans: GroupingPlan[] = [
  { planId: "p2", title: "役割別", rationale: "主担当と個別作業で分ける", strategy: "role", groups: roleGroups, unassignedTabIds: remaining(roleGroups), warnings: [] },
  { planId: "p3", title: "移動最小", rationale: "パーサーの試験だけ分ける", strategy: "minimal_move", groups: minimalGroups, unassignedTabIds: remaining(minimalGroups), warnings: [] },
  { planId: "p1", title: "案件別", rationale: "デモ機能別にまとめる", strategy: "project", groups: projectGroups, unassignedTabIds: remaining(projectGroups), warnings: [{ code: "LOW_CONFIDENCE", tabIds: ["tdocs"], message: "所属先を確認してください" }] },
];

export const mockGroupingScan: GroupingScan = {
  scannedAt: 1,
  tabs: mockWorkspaces.flatMap((workspace) => workspace.panes.flatMap((item, column) => item.tabs.map((tab) => ({
    id: tab.id, sessionId: tab.sessionId, label: tab.label ?? "", cwd: tab.cwd ?? "C:\\example\\demo", agentKind: tab.agentKind ?? "codex",
    workspaceId: workspace.id, workspaceName: workspace.name, paneId: item.id, column, lastOutputAt: null, tail: [],
  })))),
  lineageClusters: [],
  baseline: mockWorkspaces.flatMap((workspace) => workspace.panes.flatMap((item) => item.tabs.map((tab) => ({ tabId: tab.id, workspaceId: workspace.id, paneId: item.id, sessionId: tab.sessionId })))),
  workspaceIds: mockWorkspaces.map((workspace) => workspace.id), workspaces: mockWorkspaces,
};

export const mockGroupingAnalysis = {
  scan: mockGroupingScan,
  parsed: { status: "ok" as const, plans: mockGroupingPlans, droppedPlans: [], comparisonInsufficient: false, raw: "synthetic-demo" },
  retried: false, raw: "synthetic-demo",
};
