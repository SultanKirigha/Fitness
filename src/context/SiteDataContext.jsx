import { createContext, useContext, useState } from "react";
import { initialSiteData } from "../data/initialSiteData.js";

const SiteDataContext = createContext();

export function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState(initialSiteData);

  const updateSection = (sectionKey, updates) => {
    setSiteData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        ...updates,
      },
    }));
  };

  const updateHomeHero = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      home: {
        ...prev.home,
        ...updates,
      },
    }));
  };

  const updateProgram = (programId, updates) => {
    setSiteData((prev) => ({
      ...prev,
      programs: prev.programs.map((program) =>
        program.id === programId ? { ...program, ...updates } : program
      ),
    }));
  };

  const updatePricingPlan = (planId, updates) => {
    setSiteData((prev) => ({
      ...prev,
      pricing: prev.pricing.map((plan) =>
        plan.id === planId ? { ...plan, ...updates } : plan
      ),
    }));
  };

  const updateTrainer = (trainerId, updates) => {
    setSiteData((prev) => ({
      ...prev,
      trainers: prev.trainers.map((trainer) =>
        trainer.id === trainerId ? { ...trainer, ...updates } : trainer
      ),
    }));
  };

  const value = {
    siteData,
    setSiteData,
    updateSection,
    updateHomeHero,
    updateProgram,
    updatePricingPlan,
    updateTrainer,
  };

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
