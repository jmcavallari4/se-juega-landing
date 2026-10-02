export const APP_URL = "https://app.sejuega.net";

// Link a la app que conserva los UTM de la visita, para no perder la atribución.
export const getAppUrl = () =>
  typeof window === "undefined" ? APP_URL : APP_URL + window.location.search;

// Mide el clic hacia la app; el registro en sí ocurre en app.sejuega.net.
export const trackAppClick = (origen: string) => {
  window.gtag?.("event", "ir_a_la_app", { origen });
  window.fbq?.("trackCustom", "IrALaApp", { origen });
};
