import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface Table {
  number: number;
  status: "available" | "occupied";
}

interface TablesProps {
  onSelectTable: (tableNumber: number) => void;
}

const initialTables: Table[] = [
  { number: 1, status: "available" },
  { number: 2, status: "occupied" },
  { number: 3, status: "available" },
  { number: 4, status: "available" },
  { number: 5, status: "occupied" },
  { number: 6, status: "available" },
  { number: 7, status: "available" },
  { number: 8, status: "occupied" },
  { number: 9, status: "available" },
  { number: 10, status: "available" },
];

export function Tables({ onSelectTable }: TablesProps) {
  const [tables] = useState<Table[]>(initialTables);

  return (
    <div className="p-4 pb-20">
      <h2 className="mb-4">Table Management</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tables.map((table) => (
          <Card
            key={table.number}
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              table.status === "available" ? "hover:bg-green-50" : "opacity-75"
            }`}
            onClick={() => table.status === "available" && onSelectTable(table.number)}
          >
            <div className="text-center">
              <p className="mb-2">Table {table.number}</p>
              <Badge
                className={`${
                  table.status === "available"
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
                } border-0`}
              >
                {table.status === "available" ? "Available" : "Occupied"}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
