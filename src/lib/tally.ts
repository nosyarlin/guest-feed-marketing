import { trackEvent } from "./analytics";

const tallyFormId = import.meta.env.VITE_TALLY_FORM_ID;

interface TallyPopupOptions {
  key?: string;
  layout?: "default" | "modal";
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation:
      | "none"
      | "wave"
      | "tada"
      | "heart-beat"
      | "spin"
      | "flash"
      | "bounce"
      | "rubber-band"
      | "head-shake";
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any;
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
}

interface TallyWidgetApi {
  openPopup: (formId: string, options?: TallyPopupOptions) => void;
  closePopup: (formId: string) => void;
}

declare global {
  interface Window {
    Tally?: TallyWidgetApi;
  }

  const Tally: TallyWidgetApi | undefined;
}

export const initTally = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://tally.so/widgets/embed.js";
  document.head.appendChild(script);
};

export const openWaitlistForm = () => {
  if (!tallyFormId) {
    return;
  }
  window.Tally?.openPopup(tallyFormId, {
    layout: "modal",
    autoClose: 2000,
    doNotShowAfterSubmit: false,
    onOpen: () => {
      trackEvent("tally_form_open");
    },
    onClose: () => {
      trackEvent("tally_form_close");
    },
    onSubmit: (payload: any) => {
      trackEvent("tally_form_submit", { payload });
    },
  });
};
