import axios from 'axios';

const APIKEY = import.meta.env.VITE_VOTTUN_APIKEY;
const APPID = import.meta.env.VITE_VOTTUN_APPID;

const CallApi = async (method, contractAddress, contractSpecsId, params = []) => {
  const data = JSON.stringify({
    contractAddress,
    blockchainNetwork: 421614,
    method,
    contractSpecsId,
    params,
  });

  const config = {
    method: 'post',
    url: 'https://api.vottun.tech/core/v1/evm/transact/view',
    headers: { 
      'Authorization': `Bearer ${APIKEY.trim()}`,
      'x-application-vkn': `${APPID.trim()}`,
      'Content-Type': 'application/json'
    },
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export default CallApi;
