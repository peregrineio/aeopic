export type EngagementType = "employee" | "contractor";
export type LocationType = "remote" | "hybrid" | "onsite";
export type ListingStatus = "draft" | "active" | "paused" | "closed";
export type ApplicationStatus =
  | "new"
  | "reviewed"
  | "interviewing"
  | "offered"
  | "hired"
  | "rejected"
  | "withdrawn";
export type SalaryType = "annual" | "hourly" | "project";

export interface OpportunityListing {
  id: string;
  title: string;
  slug: string;
  engagement_type: EngagementType;
  department: string;
  location_type: LocationType;
  location_detail: string | null;
  eligible_states: string[] | null;
  salary_min: number | null;
  salary_max: number | null;
  salary_type: SalaryType | null;
  compensation_notes: string | null;
  description: string;
  requirements: string[];
  nice_to_haves: string[] | null;
  benefits_summary: string | null;
  estimated_duration: string | null;
  deliverables: string | null;
  status: ListingStatus;
  featured: boolean | null;
  posted_at: string | null;
  closes_at: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface OpportunityApplication {
  id: string;
  listing_id: string | null;
  engagement_type: EngagementType;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  resume_path: string | null;
  cover_letter: string | null;
  portfolio_url: string | null;
  rate_range: string | null;
  availability: string | null;
  project_interest: string | null;
  at_will_acknowledged: boolean | null;
  ic_acknowledged: boolean | null;
  data_consent: boolean;
  applicant_state: string | null;
  source: string | null;
  status: ApplicationStatus;
  notes: string | null;
  submitted_at: string;
  reviewed_at: string | null;
  retention_expires_at: string;
}
