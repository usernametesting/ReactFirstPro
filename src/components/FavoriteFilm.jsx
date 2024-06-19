import React from 'react';

const FavoriteFilm = (props) => {
    const { title, director, year, studio, posterUrl } = props;

    return (
        <div className="container">
            <h1 className="title">Sevdiyiniz Film: {title}</h1>
            <div className="poster">
                <img src={posterUrl} alt={`${title} Poster`} className="poster-image" />
            </div>
            <div className="details">
                <h2 className="details-title">Film Haqqında Məlumat</h2>
                <p><strong>Filmin Adı:</strong> {title}</p>
                <p><strong>Rejissorun Adı:</strong> {director}</p>
                <p><strong>Buraxılış İli:</strong> {year}</p>
                <p><strong>Kinostudiya:</strong> {studio}</p>
            </div>
        </div>
    );
};

export default FavoriteFilm;
