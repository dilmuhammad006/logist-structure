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

export const Route = createFileRoute("/finance/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Table className="border">
      <TableHeader>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Age</TableHead>
        <TableHead>Job</TableHead>
        <TableHead>Salary</TableHead>
      </TableHeader>
      <TableBody>
        {users.map((el) => (
          <TableRow key={el.id}>
            <TableCell>{el.id}</TableCell>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.age}</TableCell>
            <TableCell>{el.job}</TableCell>
            <TableCell>{el.salary}$</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Users salaary for a month in 2025</TableCaption>
    </Table>
  );
}
