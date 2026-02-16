import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getAllServices } from "@/data/services";

// Metadata is handled by fr/layout.tsx which applies to all /fr routes
// This file defines the French homepage using shared components

const services = getAllServices();
const locations = ["Bienne", "Berne", "Jura"];

export default function FrenchHome() {
  return <HomePage services={services} locations={locations} />;
}
