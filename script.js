async function fetchApi() {
    const responce = await fetch("https://api.postalpincode.in/pincode/110063")
    const data = await responce.json()
    console.log(data[0].PostOffice)
}
fetchApi()