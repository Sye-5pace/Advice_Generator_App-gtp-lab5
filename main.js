
const adviceContent = document.getElementById('advice-content')
const adviceId = document.getElementById('advice-id')
const adviceFetch = document.getElementById ('advice-fetch')

const adviceDataFetch = async () => {
    try {
        const response =  await fetch('https://api.adviceslip.com/advice')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();    
        adviceId.textContent = `#${data.slip.id}`;
        adviceContent.textContent= `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

adviceDataFetch()
adviceFetch.addEventListener('click', adviceDataFetch )
