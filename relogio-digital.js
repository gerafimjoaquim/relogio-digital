const btnGoToRepository = query('.btn-go-to-repository')

function generateDate () {
	const date = new Date()
	generateTime(date)
}

function generateTime (date) {
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	const posHours = hours < 10 ? `0${hours}` : `${hours}`
	const posMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
	const posSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
	
	const timeTemplate = `${posHours} : ${posMinutes} : ${posSeconds}`

	insertTimeIntoDOM(timeTemplate)
}

function insertTimeIntoDOM (timeTemplate) {
	const digitalWatchContainer = query('.digital-watch-container')
	digitalWatchContainer.innerHTML = `<div><span>${timeTemplate}</span></div>`
}

setInterval(generateDate, 1000)

function goToRepository () {
	const repositoryName = 'https://github.com/gerafimjoaquim/relogio-digital'

	setAttribute(btnGoToRepository, 'target', '_blank')
	setAttribute(btnGoToRepository, 'href', repositoryName)

}

btnGoToRepository.addEventListener('click', goToRepository)