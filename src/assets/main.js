const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtxD0x6AuNNqdXO9Wp5GHew&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3fe29af790msh4d366a072ab2b82p19f2ffjsn191f4e9c6c7f',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const content=null || document.getElementById('content');

async function fetchData(urlApi){
    const response= await fetch(urlApi, options);
    const data= await response.json();
    return data;
}

(async () =>{
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video =>`
            <div class="group relative">
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    
                </div>
                <div class="mt-4 flex justify-between">
                    
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </a>
            </div>
            
        `).slice(0,4).join('')}
            
        `;

        content.innerHTML= view;

    }catch(error){
        console.log(error)

    }
})();

