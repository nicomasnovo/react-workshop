import React, { Component } from "react";
import PostsService from "../../services/Posts";
import './style.css';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            paginator: []
        }

        this.posts = [];
        this.filterList = this.filterList.bind(this);
    }

    componentWillMount(){
        PostsService.getPosts().then(posts => {
            this.posts = posts;

            this.posts.unshift({postId: 1, id: 1100, name: "test", email: "test@nico.com", body: "test"});

            this.setState({
                posts
            })
        });
    }


    filterList(){
        let filteredPosts = this.posts;

        filteredPosts = filteredPosts.filter((post) => {
            return post.email.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });

        this.setState({
            posts: filteredPosts
        });
    }

    render(){
        if(!this.state.posts) return '';
        
        return(
            <div className="post-wrapper">
                <h1>Todos los posts</h1>
                <input type="text" placeholder="Filtar por email" onChange={this.filterList}/>
                {(this.state.posts.length === 0) && <div className="empty-posts">No hay posts</div>}
                {this.state.posts.map(post =>
                    <div className="post-item" key={post.id}>
                        <div className="post-email">{post.email}</div>
                        <div className="post-name">{post.name}</div>
                        <div className="post-body">{post.body}</div>
                    </div>
                )}                
            </div>
        )
    }
}

export default Posts;
