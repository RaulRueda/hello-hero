import React from "react";

//Style
import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <h1 className="display-4">Hello Pokemon</h1>
      <div className="cite-text">
        <blockquote className="blockquote">
          <p className="mb-0">
            Pokémon (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/), also known as Pocket
            Monsters in Japan, is a media franchise managed by The Pokémon
            Company, a Japanese consortium between Nintendo, Game Freak, and
            Creatures. The franchise copyright is shared by all three companies,
            but Nintendo is the sole owner of the trademark. The franchise was
            created by Satoshi Tajiri in 1995, and is centered on fictional
            creatures called "Pokémon", which humans, known as Pokémon Trainers,
            catch and train to battle each other for sport. The English slogan
            for the franchise is "Gotta Catch 'Em All". Works within the
            franchise are set in the Pokémon universe.
          </p>
          <footer className="blockquote-footer">
            Pokemon in <cite title="Source Title">Wikipedia</cite>
          </footer>
        </blockquote>
      </div>
    </React.Fragment>
  );
};

export default Home;
