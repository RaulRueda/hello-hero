//Libraries
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ForEach } from "somereactcomponents";

//Components
import Paginator from "../Paginator/Paginator";

const List = () => {
  const [getState, setState] = useState({
    rowSize: 0,
    paginationSize: 0
  });
  const [getCharacters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );

      console.log(response);

      setState({
        rowSize: response.data.count,
        paginationSize: Math.ceil(response.data.count / 100)
      });
      setCharacters(response.data.results);
    };

    fetchData();
  }, []);

  const handleCharacterClick = id => {
    console.log("clicked ", id);
  };

  return (
    <React.Fragment>
      <h2>Pokemons</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <ForEach data={getCharacters} expandProps>
            <CharacterRow clicked={handleCharacterClick} />
          </ForEach>
        </tbody>
      </Table>
      <Paginator size={getState.paginationSize} />
    </React.Fragment>
  );
};

const CharacterRow = props => {
  return (
    <tr onClick={() => props.clicked(props.index)}>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
    </tr>
  );
};

export default List;
