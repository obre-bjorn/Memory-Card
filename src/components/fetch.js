export async function fetchImages(link){
    
    try {

        const response = await fetch(link)

        if(!response.ok){
            console.log()
        }


        
    } catch (error) {
        console.log('Error: ', error)
    }
}