import React from "react";

function BasicBlogExample(){

    const title = 'blog post'
    const body = 'this is my blog post'
    const comments = [
        {id:1, text: 'Comment one'},
        {id:2, text: 'Comment two'},
        {id:3, text: 'Comment three'},
    ]

    const loading = false;
    const showComments = true;

    if(loading) return <h1>Loading...</h1>

    const commentBlock = (                <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment,index) => (
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>
    )

    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
           
            {showComments && commentBlock}

            {/* this is a ternary operation, where if showComments == true then do the one thing, and that's it, no else statement. basically, we're replacing the ? : in the ternary with a double ampersand */}

 
        </div>
    )
}

export default BasicBlogExample;