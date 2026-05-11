"use client";

import Script from "next/script";

export function ChamberBadge() {
  return (
    <>
      <div className="max-w-[140px] bg-white rounded-xl p-2.5">
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
                  "#@id{text-align:center;position:relative;padding:0;margin:0}#@id *{margin:0;padding:0}#@id .mn-widget-member-name{display:none}#@id .mn-widget-member-logo{max-width:100%;display:block}",
              }
            ).create();
          }
        }}
      />
    </>
  );
}
