import React from 'react'
import { Link } from 'react-router-dom';

const BlogCards = ({blogs}) => {
    const filteredBogs= blogs;
  return (
    <div>
        <div className=" ">
            {
                filteredBogs.map((post)=>
                    <Link key={post.id} className="">
                       <div className="">
                          <img src={post.image}  alt='' className=" w-full" />
                       </div>
                       <h3 className="">{post.title}</h3>
                       <p className="">{post.author}</p>
                   </Link>
               )
            }
        </div>
    </div>
  )
}
export default BlogCards