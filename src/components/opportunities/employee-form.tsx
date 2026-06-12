"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload, FileCheck2, AlertCircle } from "lucide-react";
import {
  employeeApplicationSchema,
  type EmployeeApplicationInput,
} from "@/lib/validations/opportunities";
import { US_STATES } from "@/lib/constants/states";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

interface Props {
  listingId: string;
  listingTitle: string;
}

type UploadState =
  | { status: "idle" }
  | { status: "uploading"; pct: number }
  | { status: "done"; filename: string; draftId: string }
  | { status: "error"; message: string };

export function EmployeeApplicationForm({ listingId, listingTitle }: Props) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [usePaste, setUsePaste] = useState(false);
  const [upload, setUpload] = useState<UploadState>({ status: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EmployeeApplicationInput>({
    resolver: zodResolver(employeeApplicationSchema),
    defaultValues: {
      listing_id: listingId,
      engagement_type: "employee",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      applicant_state: "",
      cover_letter: "",
      resume_text: "",
      at_will_acknowledged: false,
      data_consent: false,
    },
  });

  const stateValue = watch("applicant_state");
  const atWill = watch("at_will_acknowledged");
  const consent = watch("data_consent");

  useEffect(() => {
    // Keep RHF in sync with the upload draftId
    if (upload.status === "done") {
      setValue("resume_draft_id", upload.draftId);
    } else {
      setValue("resume_draft_id", undefined);
    }
  }, [upload, setValue]);

  async function handleFile(file: File) {
    if (!ALLOWED_MIME.has(file.type)) {
      setUpload({ status: "error", message: "Only PDF or Word files are accepted" });
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUpload({ status: "error", message: "File must be 10 MB or smaller" });
      return;
    }
    setUpload({ status: "uploading", pct: 0 });
    try {
      const presignRes = await fetch("/api/opportunities/upload-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          size: file.size,
        }),
      });
      if (!presignRes.ok) {
        const err = await presignRes.json().catch(() => ({}));
        setUpload({
          status: "error",
          message: err.error ?? "Could not get upload URL",
        });
        return;
      }
      const { upload_url, draft_id } = (await presignRes.json()) as {
        upload_url: string;
        draft_id: string;
      };

      // PUT direct to signed URL
      const putRes = await fetch(upload_url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) {
        setUpload({
          status: "error",
          message: "Upload failed. Please try again.",
        });
        return;
      }
      setUpload({ status: "done", filename: file.name, draftId: draft_id });
    } catch {
      setUpload({
        status: "error",
        message: "Network error during upload. Please try again.",
      });
    }
  }

  async function onSubmit(data: EmployeeApplicationInput) {
    setGlobalError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/opportunities/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        return;
      }
      if (res.status === 429) {
        setGlobalError(
          "Too many submissions. Please try again in an hour."
        );
        return;
      }
      if (res.status === 400) {
        setGlobalError("Please review the highlighted fields below.");
        return;
      }
      setGlobalError(
        "Something went wrong. Please try again or email admin@aeopic.com."
      );
    } catch {
      setGlobalError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border-2 border-emerald-500/40 bg-emerald-50 p-8 text-center dark:bg-emerald-950/30"
      >
        <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
          Application received!
        </h3>
        <p className="mt-3 text-sm text-emerald-700/80 dark:text-emerald-300/80">
          We&apos;ll review your submission and be in touch within 5 business
          days. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg border bg-card p-6 sm:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        Employee Application
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Applying for: <span className="font-medium text-foreground">{listingTitle}</span>
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-first`} label="First Name" error={errors.first_name?.message} required>
          <Input id={`${formId}-first`} {...register("first_name")} autoComplete="given-name" />
        </Field>
        <Field id={`${formId}-last`} label="Last Name" error={errors.last_name?.message} required>
          <Input id={`${formId}-last`} {...register("last_name")} autoComplete="family-name" />
        </Field>

        <Field id={`${formId}-email`} label="Email Address" error={errors.email?.message} required>
          <Input id={`${formId}-email`} type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field id={`${formId}-phone`} label="Phone (optional)" error={errors.phone?.message}>
          <Input id={`${formId}-phone`} type="tel" {...register("phone")} autoComplete="tel" />
        </Field>
      </div>

      <Field
        id={`${formId}-state`}
        label="State of Residence"
        error={errors.applicant_state?.message}
        required
        className="mt-5"
      >
        <Select
          value={stateValue || ""}
          onValueChange={(v) => setValue("applicant_state", v ?? "", { shouldValidate: true })}
        >
          <SelectTrigger id={`${formId}-state`} aria-invalid={errors.applicant_state ? "true" : undefined}>
            <SelectValue placeholder="Select your state" />
          </SelectTrigger>
          <SelectContent>
            {US_STATES.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      {/* Resume */}
      <div className="mt-5">
        <Label className="mb-2 block">
          Resume <span aria-hidden="true" className="text-red-500">*</span>
        </Label>

        {!usePaste ? (
          <>
            <label
              htmlFor={`${formId}-resume`}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-sm transition ${
                upload.status === "done"
                  ? "border-emerald-500/50 bg-emerald-50/40 dark:bg-emerald-950/20"
                  : upload.status === "error"
                    ? "border-red-500/50 bg-red-50/40 dark:bg-red-950/20"
                    : "border-muted-foreground/30 hover:border-[#726AFF]/60 hover:bg-[#726AFF]/5"
              }`}
            >
              <input
                ref={fileInputRef}
                id={`${formId}-resume`}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
              {upload.status === "done" ? (
                <span className="flex items-center gap-2 font-medium text-emerald-700 dark:text-emerald-300">
                  <FileCheck2 className="size-5" />
                  {upload.filename}
                  <span className="text-xs">· Uploaded</span>
                </span>
              ) : upload.status === "uploading" ? (
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="size-5 animate-spin" />
                  Uploading…
                </span>
              ) : (
                <>
                  <Upload className="size-5 text-muted-foreground" />
                  <span className="mt-2 font-medium">Upload PDF or Word (max 10MB)</span>
                  <span className="text-xs text-muted-foreground">Click to choose a file</span>
                </>
              )}
            </label>

            {upload.status === "error" && (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
                <AlertCircle className="size-4" />
                {upload.message}
              </p>
            )}

            <button
              type="button"
              className="mt-3 text-sm text-[#726AFF] underline-offset-4 hover:underline"
              onClick={() => {
                setUsePaste(true);
                setUpload({ status: "idle" });
              }}
            >
              Don&apos;t have a file? Paste your resume text below
            </button>
          </>
        ) : (
          <>
            <Textarea
              id={`${formId}-resume-text`}
              rows={8}
              placeholder="Paste your resume text here…"
              {...register("resume_text")}
            />
            {errors.resume_text?.message && (
              <p className="mt-2 text-sm text-red-600">{errors.resume_text.message}</p>
            )}
            <button
              type="button"
              className="mt-3 text-sm text-[#726AFF] underline-offset-4 hover:underline"
              onClick={() => setUsePaste(false)}
            >
              Switch back to file upload
            </button>
          </>
        )}
      </div>

      <Field
        id={`${formId}-cover`}
        label="Cover Letter / Message (optional)"
        error={errors.cover_letter?.message}
        className="mt-5"
      >
        <Textarea
          id={`${formId}-cover`}
          rows={5}
          placeholder="Tell us what excites you about this role…"
          {...register("cover_letter")}
        />
      </Field>

      {/* Acknowledgments */}
      <div className="mt-6 space-y-3 border-t pt-6">
        <CheckboxField
          id={`${formId}-atwill`}
          label={
            <>
              I acknowledge that employment with Aeopic LLC is at-will.{" "}
              <span aria-hidden="true" className="text-red-500">
                *
              </span>
            </>
          }
          checked={!!atWill}
          onChange={(v) =>
            setValue("at_will_acknowledged", v as true, { shouldValidate: true })
          }
          error={errors.at_will_acknowledged?.message}
        />
        <CheckboxField
          id={`${formId}-consent`}
          label={
            <>
              I consent to Aeopic LLC collecting and processing my information
              for hiring purposes.{" "}
              <span aria-hidden="true" className="text-red-500">
                *
              </span>
            </>
          }
          checked={!!consent}
          onChange={(v) =>
            setValue("data_consent", v as true, { shouldValidate: true })
          }
          error={errors.data_consent?.message}
        />
      </div>

      {globalError && (
        <div
          role="alert"
          className="mt-5 flex items-center gap-2 rounded-md border border-red-500/40 bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300"
        >
          <AlertCircle className="size-4 shrink-0" />
          <span>{globalError}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-6 w-full bg-[#726AFF] hover:bg-[#5B54D6] sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, required, className, children }: FieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 block">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-red-500">
            *
          </span>
        )}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

interface CheckboxFieldProps {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}

function CheckboxField({ id, label, checked, onChange, error }: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-input accent-[#726AFF]"
        />
        <span className="leading-snug">{label}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="ml-7 mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
