import type { CSSProperties, SVGProps } from "react";

import hermesMarkUrl from "../../assets/agents/hermes.webp";
import { ARTIFACT_MARK_COLORS } from "../../lib/tabMark";

type AgentIconProps = Omit<SVGProps<SVGSVGElement>, "height" | "width"> & {
  size?: number;
};

type AgentKindIconProps = {
  kind?: string | null;
  size?: number;
  chip?: boolean;
};

const iconProps = (size: number): SVGProps<SVGSVGElement> => ({
  "aria-hidden": true,
  focusable: "false",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
});

function PublicAgentBadge({ label, size = 12, ...props }: AgentIconProps & { label: string }) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect x="1" y="1" width="22" height="22" rx="5" fill="currentColor" opacity="0.12" />
      <text x="12" y="16" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill={props.fill ?? "currentColor"}>{label}</text>
    </svg>
  );
}

export function ClaudeAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="C" {...props} />; }
export function CodexAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="X" {...props} />; }
export function GrokAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="G" {...props} />; }
export function AntigravityAgentIcon({ size = 14 }: { size?: number }) { return <PublicAgentBadge label="A" size={size} />; }
export function GeminiAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="Ge" {...props} />; }
export function NotebookLmAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="N" {...props} />; }

export function BrowserAgentIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
}

// The official Hermes mark is an illustration, not a glyph: NousResearch ships
// it as raster art only (website/static/img/logo.png, the drawing its favicon.ico
// downscales), so the row carries a bundled 128px copy instead of a traced path.
// Provenance is recorded in src/assets/agents/SOURCES.md.
export function HermesAgentIcon({ size = 12 }: Pick<AgentIconProps, "size">) {
  return (
    <img
      src={hermesMarkUrl}
      alt=""
      aria-hidden="true"
      draggable={false}
      width={size}
      height={size}
      // The art is a white plate with its own black frame, so it keeps its
      // contrast in both themes; the corner radius only softens it into the chip.
      style={{ display: "block", borderRadius: Math.max(2, Math.round(size * 0.16)), flexShrink: 0 }}
    />
  );
}

export function OmpAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="O" {...props} />; }
export function HybridAgentIcon({ size = 12 }: Pick<AgentIconProps, "size">) { return <PublicAgentBadge label="CX" size={size} />; }

// Document glyphs use a solid plate and at least one pixel of ink at 12px.
export function HtmlArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.html.fg} />
      <path d="M10 4H6L2 12l4 8h4l-4-8ZM14 4h4l4 8-4 8h-4l4-8Z" fill="#fff" />
    </svg>
  );
}

export function MarkdownArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.markdown.fg} />
      <path d="M3 18V6l5 6 5-6v12M19 6v12m-3-3 3 3 3-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TextArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.text.fg} />
      <path d="M6 6h12M6 10h12M6 14h12M6 18h7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PdfArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.pdf.fg} />
      <path d="M6 3h8l4 4v14H6ZM14 3v5h4M10 13h4M10 17h4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WordArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.word.fg} />
      <path d="M2 4h4l2 10 2-8h4l2 8 2-10h4l-4 16h-4l-2-8-2 8H6Z" fill="#fff" />
    </svg>
  );
}

export function ExcelArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.excel.fg} />
      <path d="M4 4h5l3 5 3-5h5l-5 8 5 8h-5l-3-5-3 5H4l5-8Z" fill="#fff" />
    </svg>
  );
}

export function PowerPointArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.powerpoint.fg} />
      <path d="M7 20V5h7a5 5 0 0 1 0 10H7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function OfficeArtifactIcon({ size = 12, ...props }: AgentIconProps) {
  return (
    <svg {...iconProps(size)} {...props}>
      <rect width="24" height="24" rx="4" fill={ARTIFACT_MARK_COLORS.office.fg} />
      <path d="M4 4h5v5H4ZM15 4h5v5h-5ZM4 15h5v5H4ZM15 15h5v5h-5Z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const chipStyles: Record<string, CSSProperties> = {
  html: { background: ARTIFACT_MARK_COLORS.html.bg, borderColor: ARTIFACT_MARK_COLORS.html.fg },
  markdown: { background: ARTIFACT_MARK_COLORS.markdown.bg, borderColor: ARTIFACT_MARK_COLORS.markdown.fg },
  text: { background: ARTIFACT_MARK_COLORS.text.bg, borderColor: ARTIFACT_MARK_COLORS.text.fg },
  pdf: { background: ARTIFACT_MARK_COLORS.pdf.bg, borderColor: ARTIFACT_MARK_COLORS.pdf.fg },
  word: { background: ARTIFACT_MARK_COLORS.word.bg, borderColor: ARTIFACT_MARK_COLORS.word.fg },
  excel: { background: ARTIFACT_MARK_COLORS.excel.bg, borderColor: ARTIFACT_MARK_COLORS.excel.fg },
  powerpoint: { background: ARTIFACT_MARK_COLORS.powerpoint.bg, borderColor: ARTIFACT_MARK_COLORS.powerpoint.fg },
  office: { background: ARTIFACT_MARK_COLORS.office.bg, borderColor: ARTIFACT_MARK_COLORS.office.fg },
  claude: { background: "rgba(217,119,87,.12)", borderColor: "rgba(217,119,87,.30)" },
  codex: { background: "rgba(122,157,255,.10)", borderColor: "rgba(122,157,255,.30)" },
  "claude-codex": { background: "rgba(122,157,255,.10)", borderColor: "rgba(122,157,255,.30)" },
  grok: { background: "rgba(243,139,168,.10)", borderColor: "rgba(243,139,168,.30)" },
  antigravity: { background: "rgba(66,133,244,.10)", borderColor: "rgba(66,133,244,.30)" },
  gemini: { background: "rgba(155,114,203,.12)", borderColor: "rgba(155,114,203,.30)" },
  notebooklm: { background: "rgba(66,133,244,.10)", borderColor: "rgba(66,133,244,.30)" },
  hermes: { background: "rgba(198,152,26,.12)", borderColor: "rgba(198,152,26,.32)" },
  omp: { background: "rgba(145,92,207,.12)", borderColor: "rgba(145,92,207,.32)" },
  cursor: { background: "rgba(184,196,212,.12)", borderColor: "rgba(184,196,212,.32)" },
};

export function CursorAgentIcon(props: AgentIconProps) { return <PublicAgentBadge label="Cu" {...props} />; }

export function AgentKindIcon({ kind, size = 14, chip = true }: AgentKindIconProps) {
  if (kind === "shell") return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="16" height="14" rx="2" />
      <path d="m5 7 3 3-3 3m5 0h5" />
    </svg>
  );
  const Icon = kind === "claude"
    ? ClaudeAgentIcon
    : kind === "codex"
      ? CodexAgentIcon
      : kind === "claude-codex"
        ? HybridAgentIcon
        : kind === "grok"
          ? GrokAgentIcon
        : kind === "antigravity"
          ? AntigravityAgentIcon
        : kind === "gemini"
          ? GeminiAgentIcon
        : kind === "notebooklm"
          ? NotebookLmAgentIcon
        : kind === "browser"
          ? BrowserAgentIcon
        : kind === "hermes"
          ? HermesAgentIcon
        : kind === "cursor"
          ? CursorAgentIcon
        : kind === "omp"
          ? OmpAgentIcon
        : kind === "html"
          ? HtmlArtifactIcon
        : kind === "markdown"
          ? MarkdownArtifactIcon
        : kind === "text"
          ? TextArtifactIcon
        : kind === "pdf"
          ? PdfArtifactIcon
        : kind === "word"
          ? WordArtifactIcon
        : kind === "excel"
          ? ExcelArtifactIcon
        : kind === "powerpoint"
          ? PowerPointArtifactIcon
        : kind === "office"
          ? OfficeArtifactIcon
          : null;

  if (!Icon) return null;
  if (!chip) return <Icon size={size} />;
  const chipStyle = chipStyles[kind ?? ""];

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        boxSizing: "border-box",
        border: "1px solid transparent",
        borderRadius: 5,
        flexShrink: 0,
        lineHeight: 0,
        ...chipStyle,
      }}
    >
      <Icon size={Math.max(1, Math.round(size * 0.82))} />
    </span>
  );
}
