import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardForm from '../components/CardForm'
import useRoles from '../hooks/useRoles'

const TopicsForm = () => {
    const params = useParams();
    const { idtopic } = params; // Obtain idtopic of url
    const { obtainForm, obtainTopic } = useRoles(); // hook useRoles
    const [forms, setForms] = useState([]); // 
    const [topic, setTopic] = useState(); 
    // Extract forms
    useEffect(() => {
        const iterateForms = async () => { // get forms function
            const forms = await obtainForm(idtopic); // idtopic filter
            setForms(forms); // update status
        }
        iterateForms(); // call the function
    }, [obtainForm, idtopic])
    // Obtain name topic
    useEffect(() => {
        const Topic = async () => {
            const topic = await obtainTopic(idtopic)
            setTopic(topic.name)
        }
        Topic();
    }, [])
    return (
        <section className='min-h-[80vh]'>
            <header className="flex justify-between mt-16">
                <p>
                    <span
                        className="text-4xl font-bold uppercase">Encuestas</span>
                    <br />
                    <span className="text-lg text-gray-700 uppercase">tematica:{' '} {topic}</span>
                </p>
                <div className="relative">
                    <input type="search" className="w-80 h-12 pl-10 pr-4 border rounded-full focus:outline-none focus:ring focus:border-blue-300 shadow-lg" placeholder="Buscar..." />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
            </header>
            <h3 className='text-bold text-xl text-gray-600 text-center uppercase mt-10 mb-2'>recientes</h3>
            <hr />
            <main className="grid grid-cols-3 gap-4 mr-5 mt-10">
                {/* iterate forms  */}
                {forms.length ?
                    forms.map(form => (
                        <CardForm
                            key={form._id}
                            form={form}
                        />
                    ))
                    : <h3 className="text-2xl text-gray-600">No hay Encuestas para esta temática</h3>}
            </main>
        </section>
    )
}
export default TopicsForm