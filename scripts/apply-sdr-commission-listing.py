#!/usr/bin/env python3
"""
Rewrite the SDR listing to match the corrected Indeed/ZipRecruiter posting
(commission-only 1099) — legal review 2026-07-14 (opportunities-page audit).

⚠️ RUN ONLY AFTER PR #1 IS MERGED AND DEPLOYED. Old site code renders a
max-only salary as "Hourly"; the new code renders "Up to $120K".

What this changes on the live row (slug sales-development-representative):
  - engagement_type employee → contractor (badge: "1099 Contract")
  - $15–20/hr → salary_min NULL / salary_max 120000 / annual → "Up to $120K"
  - description → first-line 1099/commission-only disclosure + 7.5%/5%
    formula with worked example (matches the job boards)
  - requirements → volume bullet replaced with fluent-English capability
    line (screener fix, legal review 2026-07-10)
  - benefits_summary → NULL (no employee-benefits promises on a 1099 role)
  - status → active (visible again, shows "Role Currently Filled" badge;
    applications stay blocked by role-filled gate)

Title stays "Sales Development Representative" to match the live boards.
Rename to "Opportunities Development Representative" only when Justin
renames it everywhere (see scripts/apply-odr-listing-updates.py).

Usage:
  SERVICE_KEY=... python3 scripts/apply-sdr-commission-listing.py
  (key: SUPABASE_SERVICE_ROLE_KEY in .env.local)
"""
import json
import os
import sys
import urllib.request

SUPA = os.environ.get("SUPABASE_URL", "https://dhavmrdnnfcjckzlkhnn.supabase.co")
KEY = os.environ.get("SERVICE_KEY")
if not KEY:
    sys.exit("Set SERVICE_KEY (service role key)")

DESCRIPTION = """## About the Role

**This is a 1099 independent contractor engagement. Compensation is 100% commission — there is no base pay, hourly wage, or salary, and no earnings are guaranteed.**

Aeopic builds custom software platforms and AI systems for growing businesses. As a Sales Development Representative, you're the first conversation a future client has with Aeopic — researching small and mid-market businesses, making outbound calls, and booking qualified discovery meetings with business decision-makers that convert into closed projects.

## How You're Paid

- 7.5% of total project value on deals booked in your first 30 days; 5% thereafter
- Example: a $40,000 collected project at 5% generates $2,000 in total commission, paid per the written commission agreement — a portion when the client pays its startup fee, the remainder monthly over six months after the client goes live
- Typical Aeopic projects run $15,000–$100,000+
- Earnings vary based on closed and collected business. Aeopic projects potential annual earnings of up to $120,000 for consistently productive representatives, but no earnings are guaranteed

## What You'll Do

- Research and identify small and mid-market businesses that fit Aeopic's services
- Conduct professional outbound sales calls with US-based business clients
- Book and confirm qualified discovery meetings with the founding team
- Track opportunities and outcomes so your commissions are attributable and paid

Initial 90-day engagement, renewable by mutual agreement."""

PAYLOAD = {
    "engagement_type": "contractor",
    "salary_min": None,
    "salary_max": 120000,
    "salary_type": "annual",
    "compensation_notes": (
        "100% commission (1099) — 7.5% of total project value on deals booked "
        "in your first 30 days, 5% thereafter. No base pay; earnings not guaranteed."
    ),
    "description": DESCRIPTION,
    "requirements": [
        "Able to conduct professional sales calls with US-based business clients in fluent English",
        "Clear, confident phone presence and strong written follow-up",
        "Resilient and coachable — you take feedback and run with it",
        "Reliable high-speed internet and a quiet remote work setup",
        "Authorized to work in the United States",
    ],
    "benefits_summary": None,
    "status": "active",
}

url = f"{SUPA}/rest/v1/opportunity_listings?slug=eq.sales-development-representative"
req = urllib.request.Request(
    url,
    data=json.dumps(PAYLOAD).encode(),
    method="PATCH",
    headers={
        "apikey": KEY,
        "Authorization": f"Bearer {KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    },
)
out = json.load(urllib.request.urlopen(req))
r = out[0]
print("Title:", r["title"])
print("Engagement:", r["engagement_type"], "| Salary:", r["salary_min"], "-", r["salary_max"], r["salary_type"])
print("Status:", r["status"])
print("Done. POST /api/opportunities/revalidate (x-revalidate-token) to refresh ISR.")
