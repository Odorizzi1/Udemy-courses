import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Stack, Box } from "@chakra-ui/react";

const Filter = ({ listItems, setFilteredListItems }) => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    let filteredItems = listItems.filter((item) => {
      // Verifica se o item é um curso pago
      if (newFilters.includes("pago") && item.price > 0) {
        return false;
      }

      // Verifica se o item é um curso abaixo de 50 reais
      if (newFilters.includes("abaixo50") && item.price > 50) {
        return false;
      }

      // Verifica se o item é um curso abaixo de 100 reais
      if (newFilters.includes("abaixo100") && item.price > 100) {
        return false;
      }

      // Retorna true se o item passou em todos os filtros
      return true;
    });

    setFilteredListItems(filteredItems);
  };

  return (
    <Box>
      <CheckboxGroup colorScheme="blue" value={filters} onChange={handleFilterChange}>
        <Stack direction="column" spacing={4}>
          <Checkbox value="pago">Cursos pagos</Checkbox>
          <Checkbox value="abaixo50">Cursos abaixo de 50 reais</Checkbox>
          <Checkbox value="abaixo100">Cursos abaixo de 100 reais</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default Filter;