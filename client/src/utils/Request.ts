import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';

const ApiConnect = (url: string, method: 'get' | 'post' | 'put' | 'delete' , initialData: object | null) => {

    let provider: Axios = axios.create({
        baseURL: 'http://localhost:3000/'
    });

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const fetchData = async() => {
        setLoading(true);
        try {
            let response: any
            switch (method.toUpperCase()) {
                case 'GET':
                    response = await provider.get(url);
                    break;
                case 'POST':
                    response = await provider.post(url, initialData);
                    break;
                case 'PUT':
                    response = await provider.put(url, initialData);
                    break;
                case 'DELETE':
                    response = await provider.delete(url);
                    break;
                default:
                    throw new Error('Unsupported HTTP method');
            }
            setData(response.data)
            setError(null)
            toast.success(response.data.message)        
        } 
        catch (e: any) {
            setError(e.response.data.message);
            setData(null)
            toast.error(e.response.data.message)  
        } 
        finally {
            setLoading(false);
        }
    }

    // useEffect(() => {
        
    // }, []);

    return { data, loading, error, fetchData };

};

export default ApiConnect;
