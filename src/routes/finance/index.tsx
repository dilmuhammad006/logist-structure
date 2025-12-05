import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createFileRoute } from "@tanstack/react-router";
import { users } from "./db";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useDebounce from "@/hooks/debounce";

export const Route = createFileRoute("/finance/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 700);
  const filtered = users.filter(
    (el) =>
      el.name.toLowerCase().includes(debounced.toLocaleLowerCase()) ||
      el.job.toLowerCase().includes(debounced.toLocaleLowerCase())
  );
  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        className="max-w-60"
        type="search"
        placeholder="Type here to seach..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((el) => (
            <TableRow key={el.id}>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.age}</TableCell>
              <TableCell>{el.job}</TableCell>
              <TableCell>{el.salary} $</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>Employees salary for a month in 2025</TableCaption>
      </Table>
    </div>
  );
}
