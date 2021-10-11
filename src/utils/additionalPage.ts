export  const calculatePages = (total:number, pageSize:number) =>{
	const mod = total % pageSize
	let additionalPage = 0
	if (mod !== 0){
		additionalPage += 1
	}
	const pages = ((total-mod)/pageSize) + additionalPage
	return pages
}
