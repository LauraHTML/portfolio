import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export function SkillCard({ category, items, icon }: SkillCardProps) {
  const Icon = icon;

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="font-display text-lg text-card-foreground">{category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground hover:bg-secondary"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
