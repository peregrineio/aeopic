"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, AlertCircle } from "lucide-react";
import {
  contractorProposalSchema,
  type ContractorProposalInput,
} from "@/lib/validations/opportunities";
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

interface Props {
  listingId: string;
  listingTitle: string;
}

const AVAILABILITY_OPTIONS = [
  { value: "immediate", label: "Immediate" },
  { value: "within-2-weeks", label: "Within 2 weeks" },
  { value: "within-1-month", label: "Within 1 month" },
  { value: "flexible", label: "Flexible" },
] as const;

export function ContractorProposalForm({ listingId, listingTitle }: Props) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContractorProposalInput>({
    resolver: zodResolver(contractorProposalSchema),
    defaultValues: {
      listing_id: listingId,
      engagement_type: "contractor",
      first_name: "",
      last_name: "",
      email: "",
      portfolio_url: "",
      rate_range: "",
      availability: "flexible",
      project_interest: "",
      ic_acknowledged: false,
      data_consent: false,
    },
  });

  const availability = watch("availability");
  const ic = watch("ic_acknowledged");
  const consent = watch("data_consent");

  async function onSubmit(data: ContractorProposalInput) {
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
        setGlobalError("Too many submissions. Please try again in an hour.");
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
          Proposal received!
        </h3>
        <p className="mt-3 text-sm text-emerald-700/80 dark:text-emerald-300/80">
          We&apos;ll review your submission and reach out if there&apos;s a fit.
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
      <h2 className="text-2xl font-semibold tracking-tight">Submit a Proposal</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Engagement: <span className="font-medium text-foreground">{listingTitle}</span>
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-first`} label="First Name" error={errors.first_name?.message} required>
          <Input id={`${formId}-first`} {...register("first_name")} autoComplete="given-name" />
        </Field>
        <Field id={`${formId}-last`} label="Last Name" error={errors.last_name?.message} required>
          <Input id={`${formId}-last`} {...register("last_name")} autoComplete="family-name" />
        </Field>
      </div>

      <Field
        id={`${formId}-email`}
        label="Email Address"
        error={errors.email?.message}
        required
        className="mt-5"
      >
        <Input id={`${formId}-email`} type="email" {...register("email")} autoComplete="email" />
      </Field>

      <Field
        id={`${formId}-portfolio`}
        label="Portfolio or GitHub URL (optional)"
        error={errors.portfolio_url?.message}
        className="mt-5"
      >
        <Input
          id={`${formId}-portfolio`}
          type="url"
          placeholder="https://"
          {...register("portfolio_url")}
        />
      </Field>

      <Field
        id={`${formId}-rate`}
        label="Your Rate or Pricing Structure (optional)"
        error={errors.rate_range?.message}
        className="mt-5"
      >
        <Input
          id={`${formId}-rate`}
          placeholder="e.g. $80–120/hr or project-based $5K–8K"
          {...register("rate_range")}
        />
      </Field>

      <Field
        id={`${formId}-avail`}
        label="When are you available to start?"
        error={errors.availability?.message}
        required
        className="mt-5"
      >
        <Select
          value={availability}
          onValueChange={(v) =>
            v &&
            setValue("availability", v as ContractorProposalInput["availability"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger id={`${formId}-avail`} aria-invalid={errors.availability ? "true" : undefined}>
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            {AVAILABILITY_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field
        id={`${formId}-interest`}
        label="Why are you interested in this engagement?"
        error={errors.project_interest?.message}
        required
        className="mt-5"
      >
        <Textarea
          id={`${formId}-interest`}
          rows={6}
          placeholder="Share what draws you to this project — relevant experience, ideas for the approach, anything that helps us evaluate the fit."
          {...register("project_interest")}
        />
      </Field>

      <div className="mt-6 space-y-3 border-t pt-6">
        <CheckboxField
          id={`${formId}-ic`}
          label={
            <>
              I understand this is an independent contractor opportunity, not an
              employment position.{" "}
              <span aria-hidden="true" className="text-red-500">
                *
              </span>
            </>
          }
          checked={!!ic}
          onChange={(v) =>
            setValue("ic_acknowledged", v as true, { shouldValidate: true })
          }
          error={errors.ic_acknowledged?.message}
        />
        <CheckboxField
          id={`${formId}-consent`}
          label={
            <>
              I consent to Aeopic LLC collecting and processing my information
              for evaluation purposes.{" "}
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
          "Submit Proposal"
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
