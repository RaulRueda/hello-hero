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
    activePage: 1
  });
  const [getCharacters, setCharacters] = useState([]);
  const [getCharacter, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        pokeUrl +
          "pokemon?limit=100" +
          "&" +
          "offset=" +
          100 * (getState.activePage - 1)
      );

      console.log(response);

      setState({
        rowSize: response.data.count,
        paginationSize: Math.ceil(response.data.count / 100),
        activePage: getState.activePage
      });
      setCharacters(response.data.results);
    };

    fetchData();
  }, [getState.rowSize, getState.paginationSize, getState.activePage]);

  const handleCharacterClick = async id => {
    const response = await axios.get(pokeUrl + "pokemon/" + id);

    setModal(true);

    setCharacter(response.data);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handlePageClick = page => {
    setState({
      rowSize: getState.rowSize,
      paginationSize: getState.paginationSize,
      activePage: page
    });
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
      <Paginator
        size={getState.paginationSize}
        clicked={handlePageClick}
        activePage={getState.activePage}
      />
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
