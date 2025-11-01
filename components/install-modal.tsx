"use client";

import { useState } from "react";
import { Check, Copy, Download, Search, Terminal, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstallModal({ isOpen, onClose }: InstallModalProps) {
  const [activeTab, setActiveTab] = useState<string>("cursor");
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const installOptions = [
    {
      id: "cursor",
      name: "Cursor",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "cursor:extension/iganbold.yoyo-ai-versioning",
    },
    {
      id: "windsurf",
      name: "Windsurf",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "windsurf:extension/iganbold.yoyo-ai-versioning",
    },
    {
      id: "vscode",
      name: "VS Code",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "vscode:extension/iganbold.yoyo-ai-versioning",
    },
    {
      id: "claude-code",
      name: "Claude Code",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "",
      isTerminalBased: true,
    },
    {
      id: "codex-cli",
      name: "Codex CLI",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "",
      isTerminalBased: true,
    },
    {
      id: "other",
      name: "Other",
      command: "ext install iganbold.yoyo-ai-versioning",
      deeplink: "",
    },
  ];

  const activeOption =
    installOptions.find((option) => option.id === activeTab) || installOptions[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black border-white/10 text-white p-0 gap-0 !translate-x-[-50%] !translate-y-[-50%] flex flex-col">
        <DialogHeader className="sticky top-0 z-10 bg-black border-b border-white/10 p-4 md:p-6 rounded-t-[16px] !text-left !space-y-0 flex-row items-center justify-between">
          <DialogTitle
            className="text-xl font-semibold md:text-2xl"
            style={{
              fontFamily: "var(--font-geist-sans)",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
            }}
          >
            Get Started with Arcline
          </DialogTitle>
          <button
            onClick={onClose}
            className="hidden md:flex rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </DialogHeader>

        <div className="p-4 md:p-6">
          {/* Tabs - scrollable on mobile */}
          <div className="hide-scrollbar mb-4 flex overflow-x-auto border-b border-white/10 pb-2">
            <div className="flex min-w-max gap-2">
              {installOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 font-mono text-sm transition-colors ${
                    activeTab === option.id
                      ? "bg-white text-black"
                      : "bg-transparent text-white/80 hover:bg-white/10"
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Claude Code Special Section */}
            {activeTab === "claude-code" && (
              <div className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                    Claude Code + Arcline Setup
                  </h3>
                  <p className="mb-3 text-sm text-white/80">
                    Run Claude Code in your terminal inside editors like Cursor, Windsurf, or VS
                    Code. Pair it with Arcline in the sidebar for the ideal vibe coding workflow.
                  </p>

                  {/* Demo Video */}
                  <div className="mb-4 overflow-hidden rounded-lg bg-black">
                    <video
                      className="h-auto w-full"
                      controls
                      preload="metadata"
                      style={{ maxHeight: "300px" }}
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cllaude%20code%20YOYO%20setup-cepgrSbpCLJNjzr2AR2oSoPaWH73CH.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-white/70">
                      <strong>Step 1:</strong> Install Arcline extension in your editor (Cursor,
                      Windsurf, or VS Code)
                    </div>
                    <div className="text-sm text-white/70">
                      <strong>Step 2:</strong> Run Claude Code from the built-in terminal inside
                      your editor
                    </div>
                    <div className="text-sm text-white/70">
                      <strong>Step 3:</strong> Use Arcline sidebar to save/restore versions
                      instantly
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Codex CLI Special Section */}
            {activeTab === "codex-cli" && (
              <div className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                    Codex CLI + Arcline Setup
                  </h3>
                  <p className="mb-3 text-sm text-white/80">
                    Run OpenAI Codex CLI in your terminal inside editors like Cursor, Windsurf, or
                    VS Code. Pair it with Arcline in the sidebar for seamless AI-assisted
                    development with version control.
                  </p>

                  {/* Demo Video */}
                  <div className="mb-4 overflow-hidden rounded-lg bg-black">
                    <video
                      className="h-auto w-full"
                      controls
                      preload="metadata"
                      style={{ maxHeight: "300px" }}
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codex-yoyo-kqbKQsIS0uDFYJHrGUhQxEb15MDfHX.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-white/70">
                      <strong>Step 1:</strong> Install Arcline extension in your editor (Cursor,
                      Windsurf, or VS Code)
                    </div>
                    <div className="text-sm text-white/70">
                      <strong>Step 2:</strong> Run OpenAI Codex CLI from the built-in terminal
                      inside your editor
                    </div>
                    <div className="text-sm text-white/70">
                      <strong>Step 3:</strong> Use Arcline sidebar to save/restore versions
                      instantly
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Regular install sections for other options */}
            {activeTab !== "claude-code" && activeTab !== "codex-cli" && (
              <>
                {/* Direct Install Button - only show for options with deeplinks */}
                {activeOption.deeplink && (
                  <div className="space-y-2">
                    <a
                      href={activeOption.deeplink}
                      className="block w-full rounded-lg bg-white px-4 py-3 text-center font-mono text-sm font-semibold tracking-wider text-black transition-colors hover:bg-gray-100"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        letterSpacing: "0.56px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
                      INSTALL IN {activeOption.name.toUpperCase()}
                    </a>
                    <p className="text-center text-xs text-white/50">
                      Click the button above to open {activeOption.name} and install Arcline
                      directly
                    </p>
                  </div>
                )}

                {/* Search in Extensions Option */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-sm text-white/70">
                    <Search size={16} />
                    {activeTab === "other"
                      ? "Search in Extensions:"
                      : `Search in ${activeOption.name} Extensions:`}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-sm text-white">
                    {activeTab === "other" ? (
                      <>
                        1. Open your IDE
                        <br />
                        2. Go to Extensions view (usually Ctrl+Shift+X / Cmd+Shift+X)
                        <br />
                        3. Search for{" "}
                        <span className="rounded bg-white/10 px-2 py-0.5">Arcline</span>
                        <br />
                        4. Click Install
                      </>
                    ) : (
                      <>
                        1. Open {activeOption.name}
                        <br />
                        2. Go to Extensions view (Ctrl+Shift+X / Cmd+Shift+X)
                        <br />
                        3. Search for{" "}
                        <span className="rounded bg-white/10 px-2 py-0.5">Arcline</span>
                        <br />
                        4. Click Install
                      </>
                    )}
                  </div>
                </div>

                {/* Command Palette Option */}
                {activeOption.command && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-sm text-white/70">
                      <Terminal size={16} />
                      {activeTab === "other"
                        ? "Run in command palette:"
                        : `Run in ${activeOption.name} command palette:`}
                    </div>
                    <div className="relative">
                      <div className="overflow-x-auto rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-sm text-white">
                        {activeOption.command}
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(activeOption.command, `${activeOption.id}-command`)
                        }
                        className="absolute right-2 top-2 rounded-md bg-white/10 p-1.5 transition-colors hover:bg-white/20"
                        aria-label="Copy command"
                      >
                        {copied === `${activeOption.id}-command` ? (
                          <Check size={16} />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    {activeTab === "other" && (
                      <p className="text-xs text-white/50">
                        Open the command palette with Ctrl+Shift+P / Cmd+Shift+P, then paste and run
                        the command above
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "other" && (
                  <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="mb-2 text-sm text-white/70">
                      Arcline works with most VS Code-compatible editors and IDEs, including:
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-white/60">
                      <li>VS Codium</li>
                      <li>GitPod</li>
                      <li>Code-OSS</li>
                      <li>GitHub Codespaces</li>
                      <li>And other VS Code forks</li>
                    </ul>
                  </div>
                )}
              </>
            )}

            <div className="mt-6 border-t border-white/10 pt-4">
              <p
                className="text-sm text-white/50"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {activeTab === "claude-code"
                  ? "After installing Arcline in your editor, you can use Claude Code in the terminal while Arcline handles version control in the sidebar."
                  : activeTab === "codex-cli"
                    ? "After installing Arcline in your editor, you can use OpenAI Codex CLI in the terminal while Arcline handles version control in the sidebar."
                    : "After installation, open your project and click the Arcline icon in the sidebar to start versioning your AI-assisted code."}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile close button at bottom */}
        <div className="border-t border-white/10 p-4 md:hidden">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-white/10 px-4 py-3 font-mono text-sm text-white transition-colors hover:bg-white/20"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
