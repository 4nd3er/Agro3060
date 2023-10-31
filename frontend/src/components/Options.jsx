import React from 'react'

const Options = ({ option, index, questionIndex, question, handleOptionChange, deleteOption }) => {
    return (
        <>
            {question[1] === 'radio' && (
                <div className='flex items-center'>
                    <input disabled type="radio" name="default-radio" className="w-5 h-5 text-blue-600 focus:ring-blue-500 ring-offset-gray-800 bg-gray-700 border-gray-600" />
                    <input
                        id={index + 1}
                        key={index}
                        type="text"
                        htmlFor={index + 1}
                        placeholder={`Opción ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(questionIndex, index, e.target.value, null)}
                        className="ml-2 text-lg font-medium text-gray-900 focus:border-b-2 p-2 border-gray-400"
                    />
                    <button
                        className='font-bold hover:bg-gray-100 p-2 text-xs rounded-md transition-all'
                        onClick={() => deleteOption(index, questionIndex)}
                    >
                        Eliminar opcion
                    </button>
                </div>
            )}
            {question[1] === 'checkbox' && (
                <div className='flex items-center'>
                    <div className=''>
                        <input disabled type="checkbox" className=" rounded w-5 h-5 text-blue-600 focus:ring-blue-500 ring-offset-gray-800 bg-gray-700 border-gray-600" />
                        <input
                            id={index + 1}
                            key={index}
                            type="text"
                            htmlFor={option + index}
                            placeholder={`Opción ${index + 1}`}
                            value={option}
                            onChange={(e) => handleOptionChange(questionIndex, index, e.target.value, null)}
                            className="ml-2 text-lg font-medium text-gray-900 focus:border-b-2 p-2 border-gray-400"
                        />
                    </div>
                    <button
                        className='font-bold hover:bg-gray-100 p-2 text-xs rounded-md transition-all'
                        onClick={() => deleteOption(index, questionIndex)}
                    >
                        Eliminar opcion
                    </button>
                </div>
            )}
            {question[1] === 'scaleRikert' && (
                <div className='py-4'>
                    <div className='flex justify-around'>
                        {option.map((content, indexContent) => (
                            <input
                                type="text"
                                value={content}
                                placeholder={`parametro ${indexContent + 1}`}
                                className="mb-6 text-lg font-medium text-gray-900 rounded"
                                onChange={(e) => handleOptionChange(questionIndex, index, e.target.value, indexContent)}
                            />
                        ))}
                    </div>
                    <ul className="flex justify-center gap-10 mb-4">
                        <li>
                            <input disabled type="radio" id="opcion1" name="escala" value="1" className="hidden peer" />
                            <label
                                htmlFor="opcion1"
                                className="px-5 py-4 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-3xl select-none"
                            >
                                1
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion2" name="escala" value="2" className="hidden peer" />
                            <label
                                htmlFor="opcion2"
                                className="px-5 py-4 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-3xl select-none"
                            >
                                2
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion3" name="escala" value="3" className="hidden peer" />
                            <label
                                htmlFor="opcion3"
                                className="px-5 py-4 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-3xl select-none"
                            >
                                3
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion4" name="escala" value="4" className="hidden peer" />
                            <label
                                htmlFor="opcion4"
                                className="px-5 py-4 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-3xl select-none"
                            >
                                4
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion5" name="escala" value="5" className="hidden peer" />
                            <label
                                htmlFor="opcion5"
                                className="px-5 py-4 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-3xl select-none"
                            >
                                5
                            </label>
                        </li>
                    </ul>
                </div>
            )}
            {question[1] === 'scaleRating' && (
                <div className='py-4'>
                    <div className='flex justify-between'>
                        {option.map((content, indexContent) => (
                            <input
                                type="text"
                                value={content}
                                placeholder={`parametro ${indexContent + 1}`}
                                className="mb-6 text-lg font-medium text-gray-900 rounded"
                                onChange={(e) => handleOptionChange(questionIndex, index, e.target.value, indexContent)}
                            />
                        ))}
                    </div>
                    <ul className="flex justify-center gap-10 mb-4">
                        <li>
                            <input disabled type="radio" id="opcion1" name="escala" value="1" className="hidden peer" />
                            <label
                                htmlFor="opcion1"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                1
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion2" name="escala" value="2" className="hidden peer" />
                            <label
                                htmlFor="opcion2"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                2
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion3" name="escala" value="3" className="hidden peer" />
                            <label
                                htmlFor="opcion3"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                3
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion4" name="escala" value="4" className="hidden peer" />
                            <label
                                htmlFor="opcion4"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                4
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion5" name="escala" value="5" className="hidden peer" />
                            <label
                                htmlFor="opcion5"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                5
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion6" name="escala" value="6" className="hidden peer" />
                            <label
                                htmlFor="opcion6"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                6
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion7" name="escala" value="7" className="hidden peer" />
                            <label
                                htmlFor="opcion7"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                7
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion8" name="escala" value="8" className="hidden peer" />
                            <label
                                htmlFor="opcion8"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                8
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion9" name="escala" value="9" className="hidden peer" />
                            <label
                                htmlFor="opcion9"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                9
                            </label>
                        </li>
                        <li>
                            <input disabled type="radio" id="opcion10" name="escala" value="10" className="hidden peer" />
                            <label
                                htmlFor="opcion10"
                                className="px-4 py-3 text-gray-800 bg-white border-2 border-gray-500 rounded-lg cursor-pointer peer-checked:bg-gray-300 hover:text-gray-600 hover:bg-gray-100 text-2xl select-none"
                            >
                                10
                            </label>
                        </li>
                    </ul>
                </div>
            )}
            {question[1] === 'scaleSemantic' && (
                <div className='flex items-center'>
                    <ul className='flex justify-center gap-10 mb-4'>
                        <li
                            key={index}
                        >
                            <input disabled type="radio" id={option + index} name="escala" value={index + 1} className="hidden peer" />
                            <input
                                value={option}
                                htmlFor={option + index}
                                className="text-center p-2 text-gray-800 rounded-lg cursor-pointer bg-gray-200 peer-checked:border-[#39A900] peer-checked:text-[#39A900] peer-checked:bg-white select-none me-4"
                                onChange={(e) => handleOptionChange(questionIndex, index, e.target.value, null)}
                            />
                        </li>
                    </ul>
                    <button
                        className='font-bold hover:bg-gray-100 p-2 text-xs rounded-md transition-all'
                        onClick={() => deleteOption(index, questionIndex)}
                    >
                        Eliminar opcion
                    </button>
                </div>
            )}
        </>
    )
}

export default Options