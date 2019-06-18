//Libraries
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ForEach } from "somereactcomponents";

//Components
import Paginator from "../Paginator/Paginator";
import Character from "../Character/Character";

//Configuration
import { pokeUrl } from "../../config.json";

const List = () => {
  const [getModal, setModal] = useState(false);
  const [getState, setState] = useState({
    rowSize: 0,
    paginationSize: 0,
    showModal: false
  });
  const [getCharacters, setCharacters] = useState([]);
  const [getCharacter, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokeUrl + "pokemon?limit=20");

      console.log(response);

      setState({
        rowSize: response.data.count,
        paginationSize: Math.ceil(response.data.count / 100)
      });
      setCharacters(response.data.results);
    };

    fetchData();
  }, []);

  const handleCharacterClick = async id => {
    const response = await axios.get(pokeUrl + "pokemon/" + id);

    setModal(true);

    setCharacter(response.data);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <h2>Pokemons</h2>
      <Character
        showModal={getModal}
        closeModal={handleCloseModal}
        data={getCharacter}
      />
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
    <tr onClick={() => props.clicked(props.index + 1)}>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
    </tr>
  );
};

export default List;
