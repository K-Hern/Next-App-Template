import { TableHead, TableRow, TableCell } from "@mui/material";

export default function PokemonTableHead(props: {headers: String[]}) {

    return (
        <TableHead>
            <TableRow>
                {
                    props.headers.map((header, index)=> 
                        <TableCell key={index}>{header}</TableCell>
                    )
                }
            </TableRow>
          </TableHead>
    );
}