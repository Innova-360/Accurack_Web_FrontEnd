// import { useEffect } from "react";

// interface CalendlyWidgetProps {
//   userName: string;
//   userEmail: string;
// }

// const CalendlyWidget = ({ userName, userEmail }: CalendlyWidgetProps) => {
//   const calendlyUrl = `https://calendly.com/abdulahad-era?hide_landing_page_details=1&hide_gdpr_banner=1&name=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}`;

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [userName, userEmail]);

//   return (
//     <div
//       className="calendly-inline-widget"
//       data-url={calendlyUrl}
//       style={{ height: "400px", width: "100%" }}
//     ></div>
//   );
// };

// export default CalendlyWidget;



// components/LandingPageComponents/CalendlyWidget.tsx
import { useEffect } from "react";

interface CalendlyWidgetProps {
  userName: string;
  userEmail: string;
}

const CalendlyWidget = ({ userName, userEmail }: CalendlyWidgetProps) => {
  const calendlyUrl = `https://calendly.com/accurackllc?hide_landing_page_details=1&hide_gdpr_banner=1&name=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [userName, userEmail]);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={calendlyUrl}
      style={{ minHeight: "400px" }}
    ></div>
  );
};

export default CalendlyWidget;
