import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const DetailsDataTable = () => {
  return (
    <Table className="w-full mx-auto ">
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Publisher: </TableCell>
          <TableCell>Brandon & Parthners</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Genre: </TableCell>
          <TableCell>Romantic</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">ISBN: </TableCell>
          <TableCell>2544555561</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Copies Avilable:</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DetailsDataTable;
