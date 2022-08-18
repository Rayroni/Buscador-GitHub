import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`); // função que atravez do metodo get faz a busca e a chamada a api
    const profileJson = await profile.json();
    

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">            
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Procure o nome aqui..."   // placeholder com nome da pesquisa
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}                                         //definindo ação após p click
          >                                                   
            <i className="github icon"></i>       
            Pesquisar
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;