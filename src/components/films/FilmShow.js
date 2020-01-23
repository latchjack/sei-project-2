import React from 'react'
import axios from 'axios'

class FilmShow extends React.Component {
  state = {
    film: []
  }

  async componentDidMount() {
    const filmId = this.props.match.params.id
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=3afeb04a1fe8f1b2dc3b55f9ed835c6d`)
      this.setState({ film: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // handleClick = () => {

  // }

  render() {
    const { title, poster_path, overview, tagline } = this.state.film
    return (
      <section className="section">
        <div className="container">
          
          
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt={title} />
              </figure>
            </div>
            <div className="column is-half">
              <h2 className="title">{title}</h2>
              <p>{tagline}</p>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FilmShow