export const sharedHost = "http://localhost:8080/"

export const postLogin = (data) => {
  return new Promise((resolve, reject) => {
    fetch(sharedHost + "login", {
      method: "POST",
      body: data
    })
      .then(res => {
        if (!res.ok) {
          reject(res.status)
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
