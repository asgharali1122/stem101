import axios, { Axios } from "axios";
const devUrl = 'http://localhost:5000/';
const prodUrl = 'https://boardswitch.herokuapp.com/';
const baseurl = prodUrl
const token = localStorage.getItem("token");
const headers = {
  'Authorization': 'Bearer ' + token,
};

const login = async (data1) => {
  try {
    console.log("data1", data1)

    return await axios.post(baseurl + 'login_user/', data1);
  } catch (error) {
    return error;
  }
}

const glogin = async (data1) => {
  try {
    console.log("data1", data1)

    return await axios.post(baseurl + 'google_auth/', data1);
  } catch (error) {
    return error;
  }
}

const mlogin = async (data1) => {
  try {
    console.log("data1", data1)

    return await axios.post(baseurl + 'microsoft_auth/', data1);
  } catch (error) {
    return error;
  }
}

const register = async (data) => {
  try {
    return await axios.post(baseurl + 'create_user/', data);

  } catch (error) {
    return error;
  }
}
const profile = async (data) => {
  try {
    console.log("data++", data)
    return await axios.post(baseurl + 'profile/', data, { headers });
  } catch (error) {
    return error;
  }
}
const logout = async (data) => {
  try {
    console.log("logout functions", data)
  } catch (error) {
    return error;
  }
}
const forgetmail = async (data) => {
  try {
    return await axios.post(baseurl + 'request-reset-email/', data);
  } catch (error) {
    return error;
  }
}
const passwordreset = async (data) => {
  try {
    console.log("passwordreset functions", data)
    return await axios.post(baseurl + 'password-reset-complete', data);
  } catch (error) {
    return error;
  }
}
const visits = async (data) => {
  try {
    console.log("visits",)
    return await axios.get(baseurl + 'visit/', {
      params: {
        page_number: data
      }
    });
  } catch (error) {
    return error;
  }
}
const search = async (data) => {
  try {
    return await axios.post(baseurl + 'visitsuggest/', data);
  } catch (error) {
    return error;
  }
}
const getsearch = async () => {
  try {
    return await axios.get(baseurl + 'visitsearch/');
  } catch (error) {
    return error;
  }
}
const sform = async (data) => {
  try {

    return await axios.post(baseurl + 'visitsearch/', data);
  } catch (error) {
    return error;
  }
}
const showNotification = async (data) => {
  try {
    console.log("showNotification")

  } catch (error) {
    return error;
  }
}
const toExport = {
  login,
  glogin,
  mlogin,
  logout,
  register,
  profile,
  forgetmail,
  passwordreset,
  visits,
  search,
  sform,
  getsearch,
  showNotification,
};

export default toExport;

