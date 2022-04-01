import React from 'react';
import './AddBlogs.css';
import { useForm } from "react-hook-form";

const AddBlogs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='add-blog-sec'>

            <form className='add-blogs-form' onSubmit={handleSubmit(onSubmit)}>
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
                        <input placeholder='Blog Title' className='form-control' {...register("blog-title", { required: true })} />


                        <textarea placeholder='Description' className='form-control' {...register("description", { required: true })} />


                    </div>

                    <div className="col-lg-3 add-blogs-right-widget">
                        <div className="card blog-poster">
                            <div className="card-body">
                                <label htmlFor="blog-poster">
                                    Blog Poster (750 X 361 px)
                                    <input type='text' {...register("blog-poster", { required: true })} placeholder='http://url.png' />
                                    {/* <input id='blog-poster' type='file' {...register("blog-poster")} /> */}
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