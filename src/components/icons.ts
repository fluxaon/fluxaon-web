import {
  AppWindow,
  ChartColumn,
  Factory,
  Gauge,
  MessagesSquare,
  Plug,
  Route,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Íconos por clave, para que el contenido (src/content/site.ts) no dependa de la librería. */
export const icons: Record<string, LucideIcon> = {
  gauge: Gauge,
  app: AppWindow,
  portal: Users,
  workflow: Workflow,
  plug: Plug,
  sparkles: Sparkles,
  chat: MessagesSquare,
  chart: ChartColumn,
  route: Route,
  target: Target,
  factory: Factory,
};
