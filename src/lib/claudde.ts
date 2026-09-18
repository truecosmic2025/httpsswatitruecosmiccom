declare global {
  interface Window {
    Claudde?: {
      open: () => void;
    };
  }
}

const MAX_ATTEMPTS = 10;
const RETRY_DELAY_MS = 300;

/** Opens the hosted Claudde widget, retrying briefly while its deferred script mounts. */
export function openClauddeChat(): void {
  let attempt = 0;

  const open = (): void => {
    if (window.Claudde) {
      window.Claudde?.open();
      return;
    }

    if (attempt < MAX_ATTEMPTS) {
      attempt += 1;
      window.setTimeout(open, RETRY_DELAY_MS);
    }
  };

  open();
}
