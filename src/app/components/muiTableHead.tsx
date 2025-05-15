import { TableHead, TableRow, TableCell } from "@mui/material";

export default function MuiTableHead(props: {headers: String[]}) {

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