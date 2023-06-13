document.querySelector('.btn').addEventListener('click', generateRandomAdvice);

generateRandomAdvice();

function generateRandomAdvice()
{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => showAdvice(data));
}

function showAdvice(data)
{
    const id = data.slip.id;
    const advice = data.slip.advice;

    document.querySelector('.advice-id').textContent = `Advice #${id}`;
    document.querySelector('.advice-content').textContent = `"${advice}"`;
}