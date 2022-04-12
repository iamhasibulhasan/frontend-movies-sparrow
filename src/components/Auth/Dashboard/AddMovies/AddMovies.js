import React from 'react';
import './AddMovies.css';
import { useForm } from "react-hook-form";
import useFunction from './../../../../hooks/useFunction';
import Swal from 'sweetalert2'

const AddMovies = () => {
    const { http } = useFunction();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        http.post('/addMovie', {
            ...data
        }).then(res => {

            if (res.data.insertedId) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Movie posted successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Movie posted unsuccessful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    };

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
                                <label htmlFor="">Movie Title</label>
                                <input className='form-control' type='text' placeholder='Movie Title' {...register("movieName", { required: true })} />

                                <label htmlFor="">Summery</label>
                                <textarea className='form-control' type='text' placeholder='Summery' {...register("description", { required: true })} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor="">Language</label>
                                        <input className='form-control' type='text' placeholder='Language ex-Hindi,English' {...register("language", { required: true })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Ticket Price</label>
                                        <input className='form-control' type='text' placeholder='Ticket price' {...register("ticketPrice", { required: true })} />
                                    </div>
                                </div>
                                <label htmlFor="">Category</label>
                                <input className='form-control' type='text' placeholder='Category ex-Horror, Commedy' {...register("category", { required: true })} />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="">Showing</label>
                                <input className='form-control' type='date' placeholder='On Showing' {...register("showing", { required: true })} />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor="">Duration</label>
                                        <input className='form-control' type='text' placeholder='Duration - 02hrs 30mins' {...register("duration", { required: true })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Dimension</label>
                                        <input className='form-control' type='text' placeholder='Dimension -2D, 3D' {...register("dimension", { required: true })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="cast-img">Cast Images (100 X 100 px) Min.4</label>
                                <textarea placeholder='Minimum 4 images url..' id='cast-img' className='form-control mt-2' type="text" {...register("castImg", { required: true })} />

                                {/* <input id='cast-img' className='form-control mt-2' type="file" {...register("castImg", { required: true })} multiple /> */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="crew-img">Crew Images (100 X 100 px) Min.4</label>
                                <textarea placeholder='Minimum 4 images url..' id='crew-img' className='form-control mt-2' type="text" {...register("crewImg", { required: true })} />
                                {/* <input id='crew-img' className='form-control mt-2' type="file" {...register("crewImg", { required: true })} multiple /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="movie-slider">Slider Images (263 X 140 px) Min. 3</label>

                                <textarea placeholder='Minimum 3 images url..' id='movie-slider' className='form-control mt-2' type="text" {...register("movieSlider", { required: true })} />

                                {/* <input id='movie-slider' className='form-control mt-2' type="file" {...register("movieSlider", { required: true })} multiple /> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 add-movies-right-widget">
                        <div className="card movie-poster">
                            <div className="card-body">
                                <label htmlFor="movie-poster">
                                    Movie Poster (275 X 396 px)
                                    <input type='text' {...register("moviePoster", { required: true })} placeholder='http://url.png' />
                                    {/* <input id='movie-poster' type='file' {...register("moviePoster")} /> */}
                                    <img src="https://i.ibb.co/qJZV8gG/img-icon.png" alt="" />
                                </label>
                            </div>
                        </div>

                        <div className="card movie-poster">
                            <div className="card-body">
                                Movie Banner(1920 X 500 px)
                                <input type='text' {...register("movieBanner", { required: true })} placeholder='http://url.png' />
                                {/* <input id='movie-banner' type='file' {...register("movieBanner", { required: true })} /> */}
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