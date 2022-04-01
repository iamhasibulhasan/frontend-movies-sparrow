import React from 'react';
import './AddMovies.css';
import { useForm } from "react-hook-form";

const AddMovies = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='add-movie-sec'>



            <form className='add-movies-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <h5 className='title'>Add Movies</h5>
                    </div>
                    <div className="col-lg-3">
                        <input className='custom-button' type="submit" value='Post' />
                    </div>
                </div>
                <div className="row gap-4 justify-content-between">

                    <div className="col-lg-8 add-movies-left-widget">
                        <div className="row">
                            <div className="col-lg-12">
                                <input className='form-control' type='text' placeholder='Movie Name' {...register("movieName", { required: true })} />
                                <textarea className='form-control' type='text' placeholder='Short Description' {...register("description", { required: true })} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <input className='form-control' type='text' placeholder='Language ex-Hindi,English' {...register("language", { required: true })} />
                                <input className='form-control' type='text' placeholder='Category ex-Horror, Commedy' {...register("category", { required: true })} />
                            </div>
                            <div className="col-lg-6">
                                <input className='form-control' type='date' placeholder='On Showing' {...register("showing", { required: true })} />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input className='form-control' type='text' placeholder='Duration - 02hrs 30mins' {...register("duration", { required: true })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input className='form-control' type='text' placeholder='Dimension -2D, 3D' {...register("dimension", { required: true })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="cast-img">Cast Images (100 X 100 px) Min.4</label>
                                <textarea placeholder='Minimum 4 images url..' id='cast-img' className='form-control mt-2' type="text" {...register("cast-img", { required: true })} />

                                {/* <input id='cast-img' className='form-control mt-2' type="file" {...register("cast-img", { required: true })} multiple /> */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="crew-img">Crew Images (100 X 100 px) Min.4</label>
                                <textarea placeholder='Minimum 4 images url..' id='movie-slider' className='form-control mt-2' type="text" {...register("crew-img", { required: true })} />
                                {/* <input id='crew-img' className='form-control mt-2' type="file" {...register("crew-img", { required: true })} multiple /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="movie-slider">Slider Images (263 X 140 px) Min. 3</label>

                                <textarea placeholder='Minimum 3 images url..' id='movie-slider' className='form-control mt-2' type="text" {...register("movie-slider", { required: true })} />

                                {/* <input id='movie-slider' className='form-control mt-2' type="file" {...register("movie-slider", { required: true })} multiple /> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 add-movies-right-widget">
                        <div className="card movie-poster">
                            <div className="card-body">
                                <label htmlFor="movie-poster">
                                    Movie Poster (275 X 396 px)
                                    <input type='text' {...register("movie-poster", { required: true })} placeholder='http://url.png' />
                                    {/* <input id='movie-poster' type='file' {...register("movie-poster")} /> */}
                                    <img src="https://i.ibb.co/qJZV8gG/img-icon.png" alt="" />
                                </label>
                            </div>
                        </div>

                        <div className="card movie-poster">
                            <div className="card-body">
                                Movie Banner(1920 X 500 px)
                                <input type='text' {...register("movie-banner", { required: true })} placeholder='http://url.png' />
                                {/* <input id='movie-banner' type='file' {...register("movie-banner", { required: true })} /> */}
                                <label htmlFor="movie-banner">
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

export default AddMovies;