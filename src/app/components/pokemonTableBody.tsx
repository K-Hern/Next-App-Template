import { TableRow, TableCell, TableBody } from "@mui/material";
import { Pokemon } from "@/types/pokemon";

export default function PokemonTableBody(props: {pokemon: Pokemon[]}) {
    return (
        <TableBody>

            {
                props.pokemon.map((p, index)=>
                <TableRow key={index}>
                    <TableCell> {p.id} </TableCell>
                    <TableCell> {p.name} </TableCell>
                    {/* <TableCell> {p.imgURL} </TableCell> */}
                    <TableCell> <img src={p.imgURL} height={100} width={100}/> </TableCell>
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