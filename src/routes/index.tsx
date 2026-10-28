import { createFileRoute } from "@tanstack/react-router";
import { HaloLens } from "@/components/halo-lens";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <HaloLens />;
}
