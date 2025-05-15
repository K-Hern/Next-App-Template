import { TableRow, TableCell, TableBody } from "@mui/material";
import {MyObject} from '@/types/myObject'
import { useMyProvider } from "../context/MyContext";

export default function MuiTableBody() {

    const { data } = useMyProvider();

    return (
        <TableBody>

            {
                data.map((p, index)=>
                <TableRow key={index}>
                    <TableCell> {p.id} </TableCell>
                    <TableCell> {p.name} </TableCell>
                    <TableCell> <img src={p.imgUrl} height={100} width={100}/> </TableCell>
                    <TableCell> {p.height} </TableCell>
                    <TableCell> {p.weight} </TableCell>
                    <TableCell> {Object.values(p.abilities).join(", ")} </TableCell>
                    <TableCell> {Object.values(p.types).join(", ")} </TableCell>
                </TableRow>
                )
            }

          </TableBody>
    );
}