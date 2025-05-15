'use client';

import { useEffect, useState } from "react";
import MuiTable from "./components/muiTable";
import { FilterSelect } from "./components/filterSelect";

export default function Home() {

  return (
    <div>

      <FilterSelect />

      <MuiTable headers={["ID", "Name", "IMG", "Height", "Weight", "Abilities", "Types"]} />

    </div>
  );
}
