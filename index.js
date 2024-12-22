const url = 'https://api.movie.com.uy/api/shows/content/weekly/list?showType=cinema';

 const mufasaMovieListener = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();

        const containsMufasa = data.some(item => item.name.toLowerCase().includes('mufasa'));

        if (containsMufasa) {
            console.log('Pelicula ya esta disponible!');
        } else {
            console.log('Segui mirando TLK 1 en Disney +');
        }
    }catch(err){
        console.log('Error al obtener los datos' , err);
    }
}

setInterval(mufasaMovieListener , 3000); 