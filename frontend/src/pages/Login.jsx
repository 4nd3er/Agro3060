import {useForm}  from 'react-hook-form'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContex';

const Login = () => {

   const {
    register,
     handleSubmit,
     formState: {errors},
    } = useForm();  
    const {signin} = useAuth();
   
   const onSubmit = handleSubmit((data) => {
    signin(data);
   })
   

        
    return (
        <>
            <div className="flex  justify-center items-center min-h-[80vh]">
                <div className="w-1/4 h-full flex flex-col justify-center">

                    <h1 className="text-green-800 font-black text-6xl capitalize ">AGRO
                        <span className="text-green-500 text-8xl">360°</span>
                        <p className='text-green-800 text-sm flex justify-center '>Evaluación de desempeño</p>
                    </h1>
                </div>



                <div className="w-3/5 h-full ">
                    <div className=" flex flex-col justify-center place-items-center min-h-[80vh] ">
                        <strong className=' text-green-600  text-6xl capitalize font-sans'>Bienvenido</strong>

                       
                        <form 
                        className='my-10 bg-white shadow rounded-lg px-10 py-5 w-1/2'
                        onSubmit={onSubmit}>
                            <div className='my-5'>
                                <label className=' text-gray-600 block text-sm font-bold'
                                    htmlFor='email'
                                >Correo Electronico</label>
                                <input
                                    id='email'
                                    {... register('email', { required: true })}
                                    type="email"
                                    placeholder='Digite el Correo Electronico'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                />
                            </div>
                            
                            <div className='my-5'>
                                <label className=' text-gray-600 block text-sm font-bold'
                                    htmlFor='password'
                                >Contraseña</label>

                                <input
                                    id='password'
                                    {... register('password', { required: true })}
                                    type="password"
                                    placeholder='Digite la contraseña'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                />
                                <Link
                                    className='block my-5 text-slate-500 uppercase text-xs'
                                    to='forget-password'
                                >¿Olvidaste tu contraseña?</Link>
                            </div>
                            <input
                                type="submit"
                                value="Iniciar Sesion"
                                className='bg-green-600 w-full py-1 text-white uppercase font-bold rounded-xl
                                hover: cursor-pointer hover:bg-green-700 transition-color'
                            />
                            <Link
                                className='block my-5 text-slate-500 uppercase text-xs'
                                to='register'
                            >¿No tiene una cuenta? Registrarse</Link>
                        </form>

                        <nav className='lg:flex lg: justify-between'>


                        </nav>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login