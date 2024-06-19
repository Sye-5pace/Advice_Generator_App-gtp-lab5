let advice = '';
const adviceContent = document.getElementById('advice-content')
const adviceId = document.getElementById('advice-id')


const adviceDataFetch = async() => {
    const adviceEntry = 'https://api.adviceslip.com/advice'
   
    try {
        const response = await fetch(adviceEntry);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        advice = data;
        console.log(advice.slip.advice)
        console.log(advice.slip.id)
        adviceCreator(advice)
        return advice
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

const adviceCreator = (advice) => {
    adviceId.textContent = `ADVICE #${advice?.slip.id}`;
    adviceContent.textContent= `"${advice?.slip.advice}"`;
}

adviceCreator()

adviceDataFetch()