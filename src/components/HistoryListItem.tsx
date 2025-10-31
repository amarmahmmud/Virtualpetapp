import { Card } from "./ui/card";

interface HistoryListItemProps {
  timestamp: string;
  description: string;
  role?: string;
}

export function HistoryListItem({
  timestamp,
  description,
  role,
}: HistoryListItemProps) {
  return (
    <Card className="p-3 mb-2">
      <div className="flex items-start gap-3">
        <span className="text-gray-500 whitespace-nowrap">{timestamp}</span>
        <div className="flex-1">
          {role && (
            <span className="text-blue-600 mr-2">[{role}]</span>
          )}
          <span className="text-gray-800">{description}</span>
        </div>
      </div>
    </Card>
  );
}
