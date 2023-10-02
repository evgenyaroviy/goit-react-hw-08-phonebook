import axios from 'axios';

const instanceForContacts = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})


export const setAuthHeader = token => {
    instanceForContacts.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
};

export const setTokenLocal = token => {
  localStorage.setItem('token', token);
};

export const clearAuthHeader = () => {
delete instanceForContacts.defaults.headers.common['Authorization']
};



export const userSignUp = async (body) => {
    const {data} = await instanceForContacts.post('/users/signup', body);
    setAuthHeader(data.token);
    setTokenLocal(data.token);
    return data;
}

export const userLogin = async (body) => {
  console.log(body)
  const { data } = await instanceForContacts.post('users/login', body);
  console.log(data)
    setAuthHeader(data.token);
    setTokenLocal(data.token);
    return data;
}

export const userLogout = async () => {
    const { data } = await instanceForContacts.post('users/logout');
    clearAuthHeader();
    
    setTokenLocal(null);
    return data;
    
}

export const userRefresh = async ({ rejectWithValue }) => {
  const persistedToken = localStorage.getItem('token');
  if (persistedToken === null || persistedToken === 'null') {
    return rejectWithValue();
  }
  setAuthHeader(persistedToken);
  const { data } = await instanceForContacts.get('users/current');
  return data;
}

export const requestContacts = async () => {
    const {data} = await instanceForContacts.get('/contacts');
    
    return data;
}

export const postContact = async (contact) => {
    const {data} = await instanceForContacts.post('/contacts', contact);
    return data;
}

export const delContact = async (id) => {
    const {data} = await instanceForContacts.delete(`contacts/${id}`);

    return data;
}