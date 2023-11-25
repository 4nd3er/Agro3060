import { useEffect, useState } from 'react'
import CardRol from '../components/CardRol'
import { useRoles } from '../context/Context.js'
import { Spinner } from '../components/Components'
import '../App.css'

const Home = () => {
    const { roles, loading } = useRoles();


    return (
        <div className='min-h-[80vh]'>
            <div className="w-[950px] mx-auto">
                <header className='mt-10 mb-20'>
                    <p className="text-center">
                        <span className="font-bold text-black text-5xl font-work-sans">
                            BIENVENIDOS
                            <br />
                        </span>
                        <span className="font-bold text-[#39a900] text-4xl">
                            FELIX MAGE
                        </span>
                    </p>
                </header>
                <main className="grid grid-cols-3 gap-4">
                    {/* Iterate roles */}
                    {loading ? <Spinner /> :
                        roles.length ?
                            roles.map(rol => (
                                <CardRol
                                    key={rol._id}
                                    rol={rol}
                                />
                            ))
                            : <h3 className="text-2xl text-gray-600">Aún no hay roles</h3>}
                </main>
            </div>
        </div>
    )
}

export default Home
