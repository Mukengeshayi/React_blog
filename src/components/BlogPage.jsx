import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

const BlogPage = () => {
    const [blogs,setBlogs]= useState([])
    useEffect( ()=>{
        async function fetchBlogs() {
            let url=`http://127.0.0.1:8000/api/v1/blogs`;
            const response = await fetch(url);
            const data = await response.json();
            const blogs=data.blogs
            setBlogs(blogs);            
        }
        fetchBlogs()

    } ,[])
    console.log(blogs)
  return (
    <div>
        {/* categorySection */}
        <div className="">Page category</div>

        {/* blogs card section */}
        <div className="">
            <BlogCards blogs={blogs}/>
        </div>

        {/* pagination section */}
        <div className="">Pagination</div>
    </div>
  )
}

export default BlogPage
