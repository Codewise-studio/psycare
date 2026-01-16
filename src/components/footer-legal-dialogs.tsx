import type { ReactNode } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

function FooterLegalDialog({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-all duration-200 ease-in-out"
        >
          {label}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background shadow-xl outline-none sm:w-[min(720px,calc(100vw-3rem))]">
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <Dialog.Title className="truncate text-base font-semibold text-foreground">
                {title}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-muted-foreground">
                Content placeholder — add the final text here.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:px-6">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function PrivacyPolicyDialog() {
  return (
    <FooterLegalDialog label="Privacy Policy" title="Privacy Policy">
      <div className="space-y-4 text-sm text-foreground">
        <p className="font-semibold">Privacy Policy</p>
        <p className="text-muted-foreground">Replace this content with your Privacy Policy.</p>
      </div>
    </FooterLegalDialog>
  )
}

export function TermsOfServiceDialog() {
  return (
    <FooterLegalDialog label="Terms of Service" title="Terms of Service">
      <div className="space-y-4 text-sm text-foreground">
        <p className="font-semibold">Terms of Service</p>
        <p className="text-muted-foreground">Replace this content with your Terms of Service.</p>
      </div>
    </FooterLegalDialog>
  )
}

export function CookiePolicyDialog() {
  return (
    <FooterLegalDialog label="Cookie Policy" title="Cookie Policy">
      <div className="space-y-4 text-sm text-foreground">
        <p className="font-semibold">Cookie Policy</p>
        <p className="text-muted-foreground">Replace this content with your Cookie Policy.</p>
      </div>
    </FooterLegalDialog>
  )
}

export function DataProcessingAgreementDialog() {
  return (
    <FooterLegalDialog label="Data processing agreement" title="Data processing agreement">
      <div className="space-y-4 text-sm text-foreground">
        <p className="font-semibold">Data processing agreement</p>
        <p className="text-muted-foreground">Replace this content with your Data Processing Agreement.</p>
      </div>
    </FooterLegalDialog>
  )
}
