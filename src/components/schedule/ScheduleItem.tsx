
import { cn } from "@/lib/utils";

interface ScheduleItemProps {
  time: string;
  title: string;
  description?: string;
  highlight?: boolean;
  className?: string;
}

const ScheduleItem = ({
  time,
  title,
  description,
  highlight = false,
  className,
}: ScheduleItemProps) => {
  return (
    <div className={cn(
      "relative pl-8 pb-10 border-l border-wedding-gray/10 last:border-0 last:pb-0",
      highlight && "border-wedding-blush/30",
      className
    )}>
      <div className={cn(
        "absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-wedding-gray/20",
        highlight && "bg-wedding-blush w-[12px] h-[12px] left-[-6px]"
      )} />
      
      <div className="space-y-2">
        <p className={cn(
          "text-sm font-light text-wedding-gray",
          highlight && "text-wedding-blush"
        )}>
          {time}
        </p>
        <h4 className="text-xl font-light text-wedding-darkgray">
          {title}
        </h4>
        {description && (
          <p className="text-wedding-gray text-sm max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;
