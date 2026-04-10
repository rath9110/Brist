"use client";

import { useState } from "react";
import type { ScoredNutrient } from "@/lib/types";
import { PROTOCOLS, getDose } from "@/lib/protocols";
import { buildExplanation, NUTRIENT_NAMES_SV } from "@/lib/factors";

export default function ResultCard({ nutrient }: { nutrient: ScoredNutrient }) {
  const [expanded, setExpanded] = useState(false);
  const protocol = PROTOCOLS[nutrient.key];
  const explanation = buildExplanation(
    nutrient.key,
    nutrient.topFactors,
    nutrient.confidence
  );

  const isTier1 = nutrient.tier === 1;
  const dose = getDose(protocol, nutrient.score);

  return (
    <div className="bg-surface rounded-card p-6">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-serif text-[20px] text-text">
          {NUTRIENT_NAMES_SV[nutrient.key]}
        </h3>
        <span className="font-sans text-[14px] text-primary whitespace-nowrap">
          {nutrient.confidence}
        </span>
      </div>

      <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
        {explanation}
      </p>

      {isTier1 && (
        <>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="font-sans text-[14px] text-primary font-medium"
          >
            {expanded ? "Dölj detaljer" : "Visa protokoll"}
          </button>

          {expanded && (
            <div className="mt-4 space-y-2 font-sans text-[14px] text-text-muted">
              <div>
                <span className="font-medium text-text">Form:</span>{" "}
                {protocol.form}
              </div>
              <div>
                <span className="font-medium text-text">Dos:</span> {dose}
              </div>
              {protocol.timing && (
                <div>
                  <span className="font-medium text-text">När:</span>{" "}
                  {protocol.timing}
                </div>
              )}
              <div>
                <span className="font-medium text-text">Längd:</span>{" "}
                {protocol.duration}
              </div>
              <p className="text-[13px] mt-2 italic">{protocol.note}</p>
              <p className="text-[13px] mt-3 text-text-muted">
                Rekommenderad produkt kommer snart
              </p>
            </div>
          )}
        </>
      )}

      {!isTier1 && nutrient.key !== "thyroid" && (
        <div className="space-y-2 font-sans text-[14px] text-text-muted">
          <p className="font-medium text-text">{protocol.testRationale}</p>
          {protocol.biomarker && (
            <p>
              Be om:{" "}
              <span className="font-medium text-text">{protocol.biomarker}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
