"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RSVP() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [guests, setGuests] = useState<{ firstName: string; lastName: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleNext() {
    if (!firstName.trim() || !lastName.trim()) return;
    setGuests([{ firstName: firstName.trim(), lastName: lastName.trim() }]);
    setGuestCount(1);
    setStep(2);
  }

  function handleGuestCountChange(count: number) {
    setGuestCount(count);
    const newGuests: { firstName: string; lastName: string }[] = [];
    for (let i = 0; i < count; i++) {
      newGuests.push({
        firstName: guests[i]?.firstName ?? (i === 0 ? firstName.trim() : ""),
        lastName: guests[i]?.lastName ?? lastName.trim(),
      });
    }
    setGuests(newGuests);
  }

  function updateGuest(index: number, field: "firstName" | "lastName", value: string) {
    setGuests((prev) => prev.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  }

  async function handleSubmit() {
    setSubmitting(true);
    const { data, error } = await supabase
      .from("rsvps")
      .insert({ contact_first_name: firstName.trim(), contact_last_name: lastName.trim() })
      .select("id")
      .single();

    if (error || !data) {
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    const guestRows = guests.map((g) => ({
      rsvp_id: data.id,
      first_name: g.firstName.trim(),
      last_name: g.lastName.trim(),
    }));

    const { error: guestError } = await supabase.from("guests").insert(guestRows);

    if (guestError) {
      alert("Something went wrong saving guests. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <p
          style={{ fontFamily: '"Wedding Script", serif', fontWeight: 400 }}
          className="text-center text-4xl"
        >
          Thank you for your RSVP!
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1
          style={{ fontFamily: '"Wedding Script", serif', fontWeight: 400 }}
          className="mb-8 text-center text-4xl"
        >
          RSVP
        </h1>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
              />
            </div>
            <button
              onClick={handleNext}
              disabled={!firstName.trim() || !lastName.trim()}
              className="w-full rounded bg-black py-2 text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                How many guests are you RSVPing for?
              </label>
              <select
                value={guestCount}
                onChange={(e) => handleGuestCountChange(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {guests.map((guest, i) => (
              <div key={i} className="rounded border border-gray-200 p-3">
                <p className="mb-2 text-sm font-medium text-gray-500">Guest {i + 1}</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={guest.firstName}
                    onChange={(e) => updateGuest(i, "firstName", e.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={guest.lastName}
                    onChange={(e) => updateGuest(i, "lastName", e.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
            ))}

            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded border border-black py-2"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || guests.some((g) => !g.firstName.trim() || !g.lastName.trim())}
                className="flex-1 rounded bg-black py-2 text-white disabled:opacity-40"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
