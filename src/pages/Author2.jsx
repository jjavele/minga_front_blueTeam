/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Author = () => {
  const [profile, setProfile] = useState(null);
  const [mangas, setMangas] = useState(null);
  const [showNewMangas, setShowNewMangas] = useState(true); // Estado para controlar si se muestran los mangas nuevos o todos

  useEffect(() => {
    fetchAuthorProfile();
    fetchAuthorMangas();
  }, []);

  let token = localStorage.getItem('token')
      let headers = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

  const fetchAuthorProfile = async () => {
    try {
      // Realizar la petición para obtener los datos del autor
      const response = await fetch('http://localhost:8080/api/authors/me', headers);
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching author profile:', error);
    }
  };

  const fetchAuthorMangas = async () => {
    try {
      // Realizar la petición para obtener los mangas del autor
      const response = await fetch('http://localhost:8080/api/mangas/news', headers);
      const data = await response.json();
      setMangas(data);
    } catch (error) {
      console.error('Error fetching author mangas:', error);
    }
  };

  const toggleShowNewMangas = () => {
    setShowNewMangas(!showNewMangas);
  };

  return (
    
    <div>
      {profile && (
      <div>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </div>
      )}

      {mangas && (
        <div>
          {mangas.logo && <img src={mangas.logo} alt="Author's logo" />}

          {mangas.all && (
            <div>
              <button onClick={toggleShowNewMangas}>
                {showNewMangas ? 'Show All Mangas' : 'Show New Mangas'}
              </button>
              <div>
                {mangas.all.map((manga) => (
                  <div key={manga._id}>
                    <Link to={`/mangas/${manga._id}`}>
                      <img src={manga.image} alt={manga.title} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mangas.new && (
            <div>
              <button onClick={toggleShowNewMangas}>
                {showNewMangas ? 'Show All Mangas' : 'Show New Mangas'}
              </button>
              <div>
                {showNewMangas
                  ? mangas.new.map((manga) => (
                      <div key={manga._id}>
                        <Link to={`/mangas/${manga._id}`}>
                          <img src={manga.image} alt={manga.title} />
                        </Link>
                      </div>
                    ))
                  : mangas.all.map((manga) => (
                      <div key={manga._id}>
                        <Link to={`/mangas/${manga._id}`}>
                          <img src={manga.image} alt={manga.title} />
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Author;
*/