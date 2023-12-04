import { useState, createContext, useContext } from "react";
import { RolesRequest, getRoleRequest, getRoleTopicsRequest } from "../api/roles";
import { TopicsRequest, createTopicRequest, getTopicFormsRequest, getTopicRequest } from "../api/topics";
import { ContextErrors, ContextSuccess } from "./Alerts";

// Create the role context
export const RolesContext = createContext()

export const useRoles = () => {
    const context = useContext(RolesContext)
    if (!context) throw new Error("debe usarse dentro de un AuthoProvider")
    return context;
}

export const RolesProvider = ({ children }) => {
    const [modalTopicForm, setModalTopicForm] = useState(false)
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState('')

    // Roles
    const getRoles = async () => {
        try {
            const res = await RolesRequest();
            setLoading(false)
            return res.data
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    }

    // Get Role
    const getRole = async id => {
        try {
            const res = await getRoleRequest(id);
            return res.data
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    };

    // Get Role Topics
    const getRoleTopics = async id => {
        try {
            const res = await getRoleTopicsRequest(id);
            return res.data;  // Return the thematic obtained
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    };

    // Topics
    const getTopics = async () => {
        try {
            const res = await TopicsRequest();
            setLoading(false)
            return res.data
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    }

    // Get Topic
    const getTopic = async idtopic => {
        try {
            const res = await getTopicRequest(idtopic);
            return res.data
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    }

    // Get Topic Forms
    const getTopicForms = async idtopic => {
        try {
            const res = await getTopicFormsRequest(idtopic);
            return res.data; // Return the forms obtained
        } catch (error) {
            ContextErrors(error, setErrors)
        }
    }

    // Create topic
    const createTopic = async topic => {
        try {
            const res = await createTopicRequest(topic);
            ContextSuccess(res, setSuccess, setErrors)
            return res.data
        } catch (error) {
            ContextErrors(error, setErrors, setSuccess)
        }
    };

    // Open and close the Topic Modal
    const handleModalTopic = () => {
        setModalTopicForm(!modalTopicForm)
    };

    return (
        <RolesContext.Provider
            value={{
                errors,
                success,
                loading,
                modalTopicForm,
                getRoles,
                getRole,
                getRoleTopics,
                getTopics,
                getTopic,
                getTopicForms,
                createTopic,
                handleModalTopic
            }}
        >
            {children}
        </RolesContext.Provider>
    );
};

export default RolesContext;