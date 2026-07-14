#!/usr/bin/env python3
"""
Prompt 32 content updates for the live SDR listing (run manually — touches
production data):
  1. Retitle "Sales Development Representative" → "Opportunities Development
     Representative" (+ description phrase update).
  2. ⚖️ Legal screener fix (legal review 2026-07-10): the daily-volume
     requirement bullet is replaced with the fluent-English capability line;
     no "50–100 calls/day" style copy anywhere.

Usage:
  SUPABASE_URL=https://dhavmrdnnfcjckzlkhnn.supabase.co \
  SERVICE_KEY=... python3 scripts/apply-odr-listing-updates.py

Note: the Role Filled state itself is CODE-driven (src/lib/role-filled.ts,
default ON for this slug) — deploying the site flips it on; no data change
needed for that part.
"""
import json
import os
import sys
import urllib.request

SUPA = os.environ.get("SUPABASE_URL", "https://dhavmrdnnfcjckzlkhnn.supabase.co")
KEY = os.environ.get("SERVICE_KEY")
if not KEY:
    sys.exit("Set SERVICE_KEY (service role key)")

url = f"{SUPA}/rest/v1/opportunity_listings?slug=eq.sales-development-representative"
headers = {"apikey": KEY, "Authorization": f"Bearer {KEY}"}

req = urllib.request.Request(url + "&select=description,requirements,title", headers=headers)
rows = json.load(urllib.request.urlopen(req))
if not rows:
    sys.exit("Listing not found")
row = rows[0]
print("Current title:", row["title"])

desc = row["description"].replace(
    "As an SDR / Appointment Setter",
    "As an Opportunities Development Representative (ODR)",
)
reqs = [
    (
        "Able to conduct professional sales calls with US-based business clients in fluent English"
        if r.startswith("Comfortable making a high volume")
        else r
    )
    for r in row["requirements"]
]

payload = json.dumps(
    {
        "title": "Opportunities Development Representative",
        "description": desc,
        "requirements": reqs,
    }
).encode()
req2 = urllib.request.Request(
    url,
    data=payload,
    method="PATCH",
    headers={**headers, "Content-Type": "application/json", "Prefer": "return=representation"},
)
out = json.load(urllib.request.urlopen(req2))
print("Updated title:", out[0]["title"])
print("First requirement:", out[0]["requirements"][0])
print("Done. Redeploy or hit /api/opportunities/revalidate to refresh ISR.")
