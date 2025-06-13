import { useEffect } from "react";

interface CalendlyWidgetProps {
  userName: string;
  userEmail: string;
  onEventScheduled?: (event: any) => void;
}

const CalendlyWidget = ({ userName, userEmail, onEventScheduled }: CalendlyWidgetProps) => {
  const calendlyUrl = `https://calendly.com/accurackllc?hide_landing_page_details=1&hide_gdpr_banner=1&name=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Calendly event listener
    function handleEvent(e: any) {
      if (e.data.event && e.data.event.indexOf('calendly.event_scheduled') !== -1) {
        if (onEventScheduled) onEventScheduled(e.data);
      }
    }
    window.addEventListener("message", handleEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleEvent);
    };
  }, [userName, userEmail, onEventScheduled]);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={calendlyUrl}
      style={{ minHeight: "800px", height: "800px" }}
    ></div>
  );
};

export default CalendlyWidget;
