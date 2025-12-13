import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Table {
  number: number;
  status: "available" | "occupied";
}

interface TablesProps {
  tables: Table[];
  onSelectTable: (tableNumber: number) => void;
  onAddTable: () => void;
}

export function Tables({ tables, onSelectTable, onAddTable }: TablesProps) {

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center justify-between mb-4">
        <h2>Table Management</h2>
        <Button onClick={onAddTable} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Table
        </Button>
      </div>
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
