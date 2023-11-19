import { useParams } from "react-router-dom";
import useRoles from "../hooks/useRoles.jsx"
import CardTopic from "../components/CardTopic.jsx";
import ModalTopic from "../components/ModalTopic.jsx";
import { useEffect, useState } from "react";

const Topics = () => {
    const params = useParams() // Obtain id of rol
    const { handleModalTopic, obtainTopic } = useRoles()
    const [topics, setTopics] = useState([]) // para guardar lastematicas de cada rol e iterar


    // Obtain topics 
    useEffect(() => {
        const iterateTopics = async () => {
            const themes = await obtainTopic(params.id);
            setTopics(themes);
        }
        iterateTopics();
    }, [obtainTopic, params.id])

    return (
        <>
            <section className='min-h-[80vh]'>
                <header className="flex justify-between mt-16">
                    <p>
                        <span
                            className="text-4xl font-bold uppercase">Temáticas</span>
                        <br />
                        <span className="text-lg text-gray-500 uppercase">Aprendiz</span>
                    </p>
                    <button
                        onClick={handleModalTopic}
                        className='bg-[#00324D] text-white font-bold py-2 px-3 rounded-lg uppercase mr-10 shadow-shadow-button'>
                        Añadir Temática
                    </button>
                </header>
                <ModalTopic/> 
                <main className="grid grid-cols-3 gap-8 mr-10 mt-24">
                {topics.length ?
                        topics.map(topic => (
                            <CardTopic
                                key={topic._id}
                                topic={topic}
                            />
                        ))
                        : <h3 className="text-2xl text-gray-600">Aún no hay temáticas para este rol</h3>}
                </main>
            </section>        
        </>
    )
}

export default Topics;

