import React from 'react';
import './AddBlogs.css';
import { useForm } from "react-hook-form";
import useFunction from './../../../../hooks/useFunction';
import Swal from 'sweetalert2';
import useAuth from './../../../../hooks/useAuth';

const AddBlogs = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { http } = useFunction();
    const postDate = new Date();

    console.log(postDate);

    const addBlog = data => {
        http.post('/addBlog', {
            ...data,
            author: user.displayName || user.email,
            authorImg: user.photoURL || 'https://i.ibb.co/9bD2Qj2/149071.png',
            postDate: postDate



        }).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Blog posted successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Blog posted unsuccessful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    };



    return (
        <div className='add-blog-sec'>

            <form className='add-blogs-form' onSubmit={handleSubmit(addBlog)}>
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <h5 className='title'>Add Blogs</h5>
                    </div>
                    <div className="col-lg-3">
                        <input className='custom-button' type="submit" value='Post' />
                    </div>
                </div>
                <div className="row gap-4 justify-content-between">
                    <div className="col-lg-8 add-blogs-left-widget">
                        <input placeholder='Blog Title' className='form-control' {...register("blogTitle", { required: true })} />


                        <textarea placeholder='Description' className='form-control' {...register("description", { required: true })} />


                    </div>

                    <div className="col-lg-3 add-blogs-right-widget">
                        <div className="card blog-poster">
                            <div className="card-body">
                                <label htmlFor="blogPoster">
                                    Blog Poster (750 X 361 px)
                                    <input type='text' {...register("blogPoster", { required: true })} placeholder='http://url.png' />
                                    {/* <input id='blogPoster' type='file' {...register("blogPoster")} /> */}
                                    <img src="https://i.ibb.co/qJZV8gG/img-icon.png" alt="" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


            </form>

        </div>
    );
};

export default AddBlogs;