import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    
    state= {
        auth: true,
    }
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                            }} >New Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* {<Route exact path="/" render={() => <h1>Home</h1>} />
                <Route exact path="/new-posts" render={() => <h1>Home 2</h1>} />} */}

                <Switch>
                    {this.state.auth? <Route path="/new-post" component={NewPost}/> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={ () => <h2>Not found</h2>} />
                    {/* for 404 error pages */}
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;