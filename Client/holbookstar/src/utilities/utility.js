function imageToUrl(images){
    if (images?.data)
    {
        let route = String.fromCharCode(...images.data);
        return 'http://localhost:8900' + route;
    }

}
export{
    imageToUrl
}