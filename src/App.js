import React, { Component } from 'react';
import Story from './Story';
import Searchbar from './Searchbar';
import './App.css';

var key = "6010908bac9fc7f96c4bc6f5578a589f"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      articles: [
        {
          id: 1,
          title: 'Auckland Back in Lockdown',
          category: 'Covid-19',
          img: 'https://i.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0'

        },
        {
          id: 2,
          title: 'Bitcoin Plummets 5%',
          category: 'Finance',
          img: 'https://i.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0'
        },
        {
          id: 3,
          title: 'Tesla to unveil new cybervan',
          category: 'Tech',
          img: null
        }
      ]
    }
  }

  handleBlur = (e) => {
    console.log(e.target.value)
  }


  loadArticlesByTop = () => {
    var searchTerm = "technology"
    var url = 'https://gnews.io/api/v3/search?'+'q=' + searchTerm + '&image=optional&token='+key
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>data.articles)
    .then((data)=>{
      console.log(data)
      return data.map((item)=>{
        console.log(item)
        var article = {
          id: item.id,
          title: item.title,
          category: item.source.name,
          img: item.image,
          url: item.url
        }
        return article
      })
    })
    .then((data)=>{
      this.setState({
        articles: data
      })
    })

  }

  componentDidMount(){
    // this.loadArticlesByTop()
  }

  render(){
    return (
      <div className="wrap">
        <nav>
          <h1>good news</h1>
          <i className="fas fa-bars"></i>
        </nav>

        <div className="search-container">
            <p></p>
            <div className="search">
                <input type="text" id="search-bar" name="search-bar" placeholder="Search" onBlur={this.handleBlur}/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
        </div>

        <div className="stories">
          {
            this.state.articles.map((item)=>{
              var storyProps = {}
              if (item.img == null){
                item.img = 'https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg'
              }
              var storyProps = {
                key: item.id,
                loadArticlesByTopic: this.loadArticlesBytopic,
                ...item
              }
              return(
                <Story{...storyProps}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
