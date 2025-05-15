import { TableContainer, Table, Paper } from "@mui/material";
import MuiTableHead from "./muiTableHead";
import MuiTableBody from "./muiTableBody";
import { MyObject } from "@/types/myObject";

export default function PokemonTable(props: {headers: String[]}) {
    return (
        <TableContainer component={Paper}>
        <Table>
          <MuiTableHead headers={props.headers} />
          <MuiTableBody/>
        </Table>
      </TableContainer>
    );
}