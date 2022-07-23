import React from 'react'
import moment from 'moment'
import Link from 'next/link'


const PostCard = ({ post }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-10 mb-6'>
                <img
                    src={post.coverImage.url}
                    alt={post.slug}                    
                />
            </div>
            <h1 className='transition duration-100 text-center mb-8 cursor-pointer
                hover:text-pink-600 text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    <a>{post.author.title}</a>
                </Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <img
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className='align-middle rounded-full'
                    src={post.author.picture.url}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
                </div>
                <div className='font-medium text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 inline mr-2'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2"></path>
                    </svg>
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
            <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
                {post.excerpt}
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                    Seguir leyendo
                </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard