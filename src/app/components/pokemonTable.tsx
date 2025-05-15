import { TableContainer, Table, Paper } from "@mui/material";
import PokemonTableHead from "./pokemonTableHead";
import PokemonTableBody from "./pokemonTableBody";
import { Pokemon } from "@/types/pokemon";

export default function PokemonTable(props: {headers: String[], pokemon: Pokemon[]}) {
    return (
        <TableContainer component={Paper}>
        <Table>
          <PokemonTableHead headers={props.headers} />
          <PokemonTableBody pokemon={props.pokemon}/>
        </Table>
      </TableContainer>
    );
}