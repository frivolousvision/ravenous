const apiKey = 'hidden';


export const Yelp = {

search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        } 
    }).then(response => {
        return response.json()})
        .then(jsonResponse => {
            if(jsonResponse){
            console.log(jsonResponse);
            }
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
                        return {id: business.id,
                                name: business.name,
                                address: business.location.address1,
                                imageSrc: business.image_url,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count
                        }
                })
            }
        })
}
}