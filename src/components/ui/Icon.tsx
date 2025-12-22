import {
  Grid3x3,
  RotateCcw,
  Weight,
  Check,
  BarChart3,
  Palette,
  Download,
  FileText,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  viewGrid: Grid3x3,
  refresh: RotateCcw,
  scale: Weight,
  check: Check,
  chartBar: BarChart3,
  palette: Palette,
  download: Download,
  document: FileText,
  arrowRight: ArrowRight,
};

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} />;
}
