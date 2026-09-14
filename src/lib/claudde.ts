/**
 * Opens the Claudde chat widget if it has mounted.
 *
 * The widget script creates a host element on the page and renders its UI
 * (including a launcher button) inside that host's shadow DOM. We locate the
 * host, pierce its shadowRoot, and click the widget's own launcher button.
 * If the widget hasn't finished mounting yet, we retry briefly.
 */

const MAX_ATTEMPTS = 10;
const RETRY_DELAY_MS = 300;

function findClauddeHost(): HTMLElement | null {
  // Look for any element that has a shadowRoot and appears to belong to the
  // Claudde widget (id/class containing "claudde"), falling back to a generic
  // shadow-host scan.
  const all = Array.from(document.querySelectorAll<HTMLElement>("*"));
  const withShadow = all.filter((el) => el.shadowRoot);
  return (
    withShadow.find((el) => /claudde/i.test(el.id) || /claudde/i.test(el.className)) ??
    withShadow.find((el) =>
      el.shadowRoot!.querySelector("button, [role='button']")
    ) ??
    null
  );
}

function tryOpen(attempt: number): void {
  const host = findClauddeHost();
  if (host?.shadowRoot) {
    const launcher = host.shadowRoot.querySelector<HTMLElement>(
      "button, [role='button'], a"
    );
    if (launcher) {
      launcher.click();
      return;
    }
  }
  if (attempt < MAX_ATTEMPTS) {
    window.setTimeout(() => tryOpen(attempt + 1), RETRY_DELAY_MS);
  }
}

export function openClauddeChat(): void {
  tryOpen(0);
}
