"use client";

import Script from "next/script";

export function ChamberBadge() {
  return (
    <>
      <div className="max-w-[200px] bg-white rounded-lg p-3">
        <div id="mni-membership-639137012306691347" />
      </div>

      <Script
        src="https://bcschamber.chambermaster.com/Content/Script/Member.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as any).MNI !== "undefined") {
            new (window as any).MNI.Widgets.Member(
              "mni-membership-639137012306691347",
              {
                member: 11092,
                styleTemplate:
                  "#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}",
              }
            ).create();
          }
        }}
      />
    </>
  );
}
