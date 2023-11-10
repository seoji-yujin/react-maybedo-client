const useRequest = (axiosRequest) => {
  const requestData = (params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axiosRequest(params);
        const { data } = res;
        if (data.status === 200) {
          if (data.data) {
            resolve(data.data);
          } else {
            resolve(true);
          }
        } else {
          reject();
        }
      } catch (e) {
        reject(e);
      }
    });
  };

  return requestData;
  // 데이터 요청 Promise
};

export default useRequest;
